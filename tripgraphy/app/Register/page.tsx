"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    photo: null as File | null,
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "photo" && files) {
      setFormData((prev) => ({
        ...prev,
        photo: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submitFormData = new FormData();
      submitFormData.append("name", formData.name);
      submitFormData.append("email", formData.email);
      submitFormData.append("password", formData.password);
      submitFormData.append("phone", formData.phone);
      if (formData.photo) submitFormData.append("photo", formData.photo);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: submitFormData,
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ After registration, automatically sign in with NextAuth
        const signInResult = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (signInResult?.error) {
          toast.error("Registration successful but login failed. Please login manually.");
        } else {
          toast.success("Registration successful! Logging you in...");
          
          // ✅ Save user to localStorage
          localStorage.setItem("user", JSON.stringify(data.user));
          
          // ✅ Reset form
          setFormData({ name: "", email: "", password: "", phone: "", photo: null });
          const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
          if (fileInput) fileInput.value = "";

          // ✅ Redirect after success
          setTimeout(() => router.push("/"), 1500);
        }
      } else {
        toast.error(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Google Sign-Up error:", error);
      toast.error("Google Sign-Up failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
      <ToastContainer position="top-right" autoClose={5000} />

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create Account ✨
          </h1>
          <p className="text-gray-500">Join BuyFlow and start shopping smarter!</p>
        </div>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
          disabled={loading}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
          disabled={loading}
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
          disabled={loading}
          minLength={6}
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          disabled={loading}
        />

        {/* Photo Upload */}
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleInputChange}
          className="w-full mb-6 px-3 py-2 border rounded-lg file:rounded-full file:bg-blue-50 file:text-blue-700"
          disabled={loading}
        />

        {/* Register Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 mb-4 rounded-lg font-semibold ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {loading ? "Registering..." : "Create Account"}
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm font-medium">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Register */}
        <button
          type="button"
          onClick={handleGoogleRegister}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FcGoogle size={20} />
          <span>Continue with Google</span>
        </button>

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}