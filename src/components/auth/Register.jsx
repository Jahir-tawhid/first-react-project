import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const inputClass =
    "w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-500 focus:outline-none transition-all";
  const btnClass =
    "w-full py-2 rounded cursor-pointer font-medium text-white transition-all";

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    //Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("Fill in all the boxes!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("The two passwords don't match!");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    console.log("Registering...", formData);
    alert("Registration successful !");
  };

  return (
    <div className="bg-green-950 flex items-center justify-center min-h-screen py-10 px-4 font-sans">
      <div className="bg-white w-full max-w-sm p-8 rounded-lg shadow-xl">
        <h2 className="text-green-800 font-bold text-center text-2xl mb-6">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {error && (
            <p className="text-red-600 text-sm text-center bg-red-100 py-1 rounded">
              {error}
            </p>
          )}

          <input
            type="text"
            placeholder="Full Name"
            className={inputClass}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Address"
            className={inputClass}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className={inputClass}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className={inputClass}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />

          <button
            type="submit"
            className={`${btnClass} bg-green-700 hover:bg-green-800 mt-2`}
          >
            Register
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="grow h-px bg-gray-300"></div>
          <span className="text-gray-400 text-xs mx-3">OR</span>
          <div className="grow h-px bg-gray-300"></div>
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-bold hover:underline">
            LogIn Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
