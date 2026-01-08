// import { Link } from "react-router-dom";

// const LogIn = () => {
//   return (
//     <div className="bg-green-950 flex items-center justify-center h-[80vh] px-4">
//       <div className="bg-white max-w-sm p-8">
//         <h2 className="text-green-800 font-bold text-center text-2xl mb-6">
//           LogIn
//         </h2>
//         <form className="space-y-3">
//           <input
//             type="email"
//             name=""
//             placeholder="Email"
//             className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
//             id=""
//           />
//           <input
//             type="password"
//             name=""
//             placeholder="Password"
//             className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
//             id=""
//           />
//           <p className="text-right text-red-500 hover:text-red-700 cursor-pointer hover:underline">
//             Forgotten password ?
//           </p>

//           <button
//             type="submit"
//             className="w-full mb-2 bg-green-700 py-2 rounded hover:bg-green-900 cursor-pointer"
//           >
//             LogIn
//           </button>
//         </form>

//         {/* Divider here */}
//         <div className="flex items-center my-6">
//           <div className=" grow h-px bg-gray-500"></div>
//           <span className="text-gray-600 text-sm mx-4">OR</span>
//           <div className="grow h-px bg-gray-500"></div>
//         </div>

//         {/* Alternative LogIn Button */}
//         <div className="flex flex-col space-y-3 mt-6">
//           <button className="bg-yellow-600 py-2 rounded hover:bg-yellow-900 cursor-pointer">
//             LogIn with Google
//           </button>
//           <button className="bg-gray-600 py-2 rounded hover:bg-gray-900 cursor-pointer">
//             LogIn with GitHub
//           </button>
//         </div>

//         {/* For Request Registation */}
//         <div className="text-center mt-5">
//           <p className="text-sm">
//             Don't have an account ?{" "}
//             <Link
//               to={"/register"}
//               className="text-blue-700 font-semibold hover:underline"
//             >
//               Register Here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;

import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="bg-green-950 flex items-center justify-center h-[80vh] px-4">
      <div className="bg-white max-w-sm p-8">
        <h2 className="text-green-800 font-bold text-center text-2xl mb-6">
          LogIn
        </h2>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <p className="text-right text-red-500 hover:text-red-700 cursor-pointer hover:underline">
            Forgotten password ?
          </p>

          <button
            type="submit"
            className="w-full mb-2 bg-green-700 py-2 rounded hover:bg-green-900 cursor-pointer text-white"
          >
            LogIn
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className=" grow h-px bg-gray-500"></div>
          <span className="text-gray-600 text-sm mx-4">OR</span>
          <div className="grow h-px bg-gray-500"></div>
        </div>

        <div className="flex flex-col space-y-3 mt-6">
          <button className="bg-yellow-600 py-2 rounded hover:bg-yellow-900 cursor-pointer text-white">
            LogIn with Google
          </button>
          <button className="bg-gray-600 py-2 rounded hover:bg-gray-900 cursor-pointer text-white">
            LogIn with GitHub
          </button>
        </div>

        <div className="text-center mt-5">
          <p className="text-sm">
            Don't have an account ?{" "}
            <Link
              to={"/register"}
              className="text-blue-700 font-semibold hover:underline"
            >
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
