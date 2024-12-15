// pages/login.js
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Simulate login logic
    if (email === "user@example.com" && password === "password123") {
      // Set login status
      localStorage.setItem("isLoggedIn", "true");
      router.push("/attendance");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-sm mx-auto space-y-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 bg-gray-700 rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 bg-gray-700 rounded"
          required
        />
        <button
          type="button"
          onClick={handleLogin}
          className="w-full py-3 bg-red-600 rounded text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}
