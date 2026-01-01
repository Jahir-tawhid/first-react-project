import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");

    // This will contain password reset logic (e.g. Firebase or API call)
    setMessage("A password reset link has been sent to your email.");
  };

  return (
    <div className="bg-green-950 flex items-center justify-center h-[80vh] px-4 font-sans">
      <div className="bg-white w-full max-w-sm p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-green-800 font-bold text-2xl mb-4">
          Reset Password
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Enter your email, we will send you a reset link.
        </p>

        {message ? (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-2 rounded bg-green-700 hover:bg-green-800 text-white font-medium transition-all cursor-pointer"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <div className="mt-6">
          <Link
            to="/login"
            className="text-blue-600 text-sm font-semibold hover:underline"
          >
            Back to LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
