import React, { useState } from "react";
import axios from "axios";
import { UploadCloud, Image as ImageIcon, Trash2 } from "lucide-react";

export default function ChangeImg() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔥 Get userId dynamically (change if needed)
  const userId = localStorage.getItem("userId");

  // 🔥 API config
  const API_KEY = localStorage.getItem("userToken");
  const BASE_URL = `http://localhost:1234`;

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile)); // preview
    }
  };

  const handleRemove = () => {
    setImage(null);
    setFile(null);
  };

  const handleSubmit = async () => {
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("profileImg", file); 

    try {
      setLoading(true);

      const res = await axios.put(`${BASE_URL}/change_profile_img/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-api-key": API_KEY,
          },
        }
      );

      console.log("Success:", res.data);

      // 🔥 update UI with cloud image
      setImage(res.data.profileImg);

      alert("Image updated successfully ✅");
    } catch (error) {
      console.error("Error:", error);
      alert(error?.response?.data?.message || "Upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-lg">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Change Profile Image</h1>
          <p className="text-gray-400 text-sm">
            Upload and update your profile picture
          </p>
        </div>

        {/* Image Preview */}
        <div className="w-full h-60 bg-[#1a1a1a] rounded-xl flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt="preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center text-gray-500">
              <ImageIcon size={40} />
              <span className="text-sm mt-2">No Image Selected</span>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {/* Upload */}
          <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-xl cursor-pointer hover:bg-blue-700 transition">
            <UploadCloud size={18} />
            Upload
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />
          </label>

          {/* Remove */}
          {image && (
            <button
              onClick={handleRemove}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 rounded-xl hover:bg-red-600 transition"
            >
              <Trash2 size={18} />
              Remove
            </button>
          )}
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading || !file}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-xl font-medium transition disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}