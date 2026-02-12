import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import SignUp from "./components/Auth/Signup.jsx";
import Log from "./components/Auth/Loginpage.jsx";
import Blog from "./components/Blog/Blog.jsx";
import PageNotFound from "./components/PNF.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Otp from "./components/Otpverfication/Otpsection.jsx";
import DashBoard from "./components/Dashboard/Homebashboard.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Macllan from './components/Wiskhy/Macllaan.jsx';
import Brandspage from './components/data/Brandspage.jsx'



export default function App() {
  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen">
      <BrowserRouter>
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<SignUp />} />
          <Route path="/user-login" element={<Log />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/otp/:id" element={<Otp />} />
          <Route path="/dashboard" element={<DashBoard />} />


          <Route path="/the-macallan" element={<Macllan />} />

          <Route path="/brand/:brandSlug" element={<Brandspage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}