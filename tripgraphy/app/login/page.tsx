
// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";

// const LoginPage = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // ✅ Use NextAuth signIn for credentials instead of direct API call
//       const result = await signIn("credentials", {
//         email: formData.email,
//         password: formData.password,
//         redirect: false,
//       });

//       if (result?.error) {
//         toast.error("Invalid credentials!");
//         setLoading(false);
//         return;
//       }

//       toast.success("Login successful!");
      
//       // ✅ Save user to localStorage for immediate UI update
//       const userResponse = await fetch("/api/auth/current-user", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });
      
//       if (userResponse.ok) {
//         const userData = await userResponse.json();
//         localStorage.setItem("user", JSON.stringify(userData.user));
//       }

//       setTimeout(() => router.push("/"), 1000);
//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     await signIn("google", { callbackUrl: "/" });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4">
//       <ToastContainer />
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100 text-center"
//       >
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back ✨</h1>
//         <p className="text-gray-500 mb-8">Login to your BuyFlow account</p>

//         {/* Email */}
//         <div className="mb-4 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//             disabled={loading}
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-6 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Enter your password"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//             minLength={6}
//             disabled={loading}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-4 ${
//             loading ? "bg-gray-400 text-gray-200 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-3 text-gray-500 text-sm">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Login */}
//         <button
//           type="button"
//           onClick={handleGoogleLogin}
//           disabled={loading}
//           className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <FcGoogle size={24} />
//           <span className="font-medium text-gray-700">Login with Google</span>
//         </button>

//         <p className="mt-6 text-gray-600">
//           Don't have an account?{" "}
//           <Link href="/Register" className="text-blue-600 font-semibold hover:underline">
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage; Bismillah

"use client";

import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4">
      <ToastContainer />

      <form className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome Back ✨
        </h1>

        <div className="mb-4 text-left">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={loading}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-6 text-left">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            disabled={loading}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-4 border py-2 rounded flex justify-center items-center gap-2"
        >
          <FcGoogle size={20} />
          Login with Google
        </button>

        <p className="mt-4">
          Don't have an account?{" "}
          <Link href="/Register" className="text-blue-600">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
