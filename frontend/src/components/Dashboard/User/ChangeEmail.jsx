import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:1234";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default function ChangeEmail() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [maskedEmail, setMaskedEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Get userId and token from localStorage
  const userId = localStorage.getItem("userId");
  const userToken = localStorage.getItem("userToken");

  // ── STEP 1: Request OTP ──────────────────────────────────────────
  const handleRequestOTP = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!userId) {
      setError("User not found. Please login again.");
      setLoading(false);
      return;
    }

    try {
      const res = await axiosInstance.put(
        `/updated_email/${userId}`, 
        { new_email: email },
        { headers: { 'x-api-key': userToken } }
      );

      setMaskedEmail(res.data.masked_email || "your current email");
      setStep(2); // move to OTP step

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // ── STEP 2: Verify OTP ───────────────────────────────────────────
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!userId) {
      setError("User not found. Please login again.");
      setLoading(false);
      return;
    }

    try {
      const res = await axiosInstance.post(
  `/verify_email_update/${userId}`,
  { otp },
  { headers: { 'x-api-key': userToken } }
);

      alert(`✅ ${res.data.message}`);
      // Reset form
      setStep(1);
      setEmail("");
      setOtp("");
      setMaskedEmail("");

    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md bg-zinc-900 text-white p-6 rounded-xl shadow-lg">

      {/* Header */}
      <h2 className="text-xl font-semibold mb-1">Change Email</h2>
      <p className="text-zinc-400 text-sm mb-5">
        {step === 1
          ? "Enter your new email address."
          : `OTP sent to ${maskedEmail}. Check your inbox.`}
      </p>

      {/* Step Indicator */}
      <div className="flex items-center gap-2 mb-6">
        {["New Email", "Verify OTP"].map((label, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-1.5">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                  ${step > i + 1 ? "bg-green-500" : step === i + 1 ? "bg-indigo-500" : "bg-zinc-700"}`}
              >
                {step > i + 1 ? "✓" : i + 1}
              </div>
              <span className={`text-sm ${step === i + 1 ? "text-white" : "text-zinc-500"}`}>
                {label}
              </span>
            </div>
            {i === 0 && <div className="flex-1 h-px bg-zinc-700" />}
          </React.Fragment>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-2.5 rounded-lg mb-4">
          {error}
        </div>
      )}

      {/* ── Step 1: Email Input ── */}
      {step === 1 && (
        <form onSubmit={handleRequestOTP} className="space-y-4">
          <input
            type="email"
            placeholder="Enter new email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 transition p-3 rounded-lg font-medium"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
      )}

      {/* ── Step 2: OTP Input ── */}
      {step === 2 && (
        <form onSubmit={handleVerifyOTP} className="space-y-4">
          <input
            type="text"
            placeholder="Enter 4-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))}
            maxLength={6}
            required
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:ring-2 focus:ring-indigo-500 tracking-widest text-center text-lg font-mono"
          />
          <button
            type="submit"
            disabled={loading || otp.length < 4}
            className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 transition p-3 rounded-lg font-medium"
          >
            {loading ? "Verifying..." : "Verify & Update Email"}
          </button>
          <button
            type="button"
            onClick={() => { setStep(1); setOtp(""); setError(""); }}
            className="w-full text-zinc-400 hover:text-white text-sm transition"
          >
            ← Change email address
          </button>
        </form>
      )}

    </div>
  );
}