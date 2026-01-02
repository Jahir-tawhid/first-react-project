// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../../firebase/firebase.config";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// const Register = () => {
//   const [formData, setFormData] = useState({});
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     const { name, email, password, confirmPassword } = formData;

//     if (password !== confirmPassword)
//       return setError("Passwords do not match!");

//     setLoading(true);
//     setError("");

//     try {
//       const { user } = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       await updateProfile(user, { displayName: name });
//       navigate("/login");
//     } catch (err) {
//       setError(err.code);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-slate-100 min-h-screen flex items-center justify-center p-4">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

//         <form onSubmit={handleRegister} className="space-y-4">
//           {error && (
//             <p className="text-red-500 text-sm bg-red-50 p-2 rounded">
//               {error}
//             </p>
//           )}

//           <input
//             type="text"
//             placeholder="Full Name"
//             required
//             className="w-full border p-2 rounded"
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             required
//             className="w-full border p-2 rounded"
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             required
//             className="w-full border p-2 rounded"
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//           />

//           <input
//             type="password"
//             placeholder="Confirm Password"
//             required
//             className="w-full border p-2 rounded"
//             onChange={(e) =>
//               setFormData({ ...formData, confirmPassword: e.target.value })
//             }
//           />

//           <button
//             disabled={loading}
//             className="w-full bg-green-600 text-white py-2 rounded font-semibold"
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm">
//           Have an account?{" "}
//           <Link to="/login" className="text-blue-600 font-bold">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import { useState } from "react";
// import { auth } from "../../firebase/firebase.config";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { Link, useNavigate } from "react-router-dom";

// const Register = () => {
//   const [formData, setFormData] = useState({});
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword)
//       return setError("Passwords don't match");

//     setLoading(true);
//     setError("");

//     try {
//       const { user } = await createUserWithEmailAndPassword(
//         auth,
//         formData.email,
//         formData.password
//       );
//       await updateProfile(user, { displayName: formData.name });
//       navigate("/login");
//     } catch (err) {
//       setError(err.code.split("/")[1].replace(/-/g, " "));
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputStyle =
//     "w-full border p-2 rounded outline-none focus:ring-1 focus:ring-green-500";

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-xl font-bold text-center mb-6">Create Account</h2>

//         <form onSubmit={handleRegister} className="space-y-4">
//           {error && (
//             <p className="text-red-500 text-xs text-center capitalize">
//               {error}
//             </p>
//           )}

//           <input
//             type="text"
//             placeholder="Name"
//             required
//             className={inputStyle}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             required
//             className={inputStyle}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             required
//             className={inputStyle}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//           />

//           <input
//             type="password"
//             placeholder="Confirm Password"
//             required
//             className={inputStyle}
//             onChange={(e) =>
//               setFormData({ ...formData, confirmPassword: e.target.value })
//             }
//           />

//           <button
//             disabled={loading}
//             className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
