import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="bg-green-950 flex items-center justify-center h-[80vh] px-4">
      <div className="text-white bg-white max-w-sm p-8">
        <h2 className="text-green-800 font-bold text-center text-2xl mb-6">
          LogIn
        </h2>
        <form className="space-y-4 bg-slate-500">
          <input
            type="email"
            name=""
            placeholder="Email"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-500"
            id=""
          />
          <input
            type="password"
            name=""
            placeholder="Password"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-500"
            id=""
          />
          <button
            type="submit"
            className="w-full bg-green-700 py-2 rounded hover:bg-green-900 cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="flex flex-col space-y-3 mt-3">
          <button className="bg-yellow-600 py-2 rounded hover:bg-yellow-900 cursor-pointer">
            Login with Google
          </button>
          <button className="bg-gray-600 py-2 rounded hover:bg-gray-900 cursor-pointer">
            Login with GitHub
          </button>
        </div>

        <div className="text-black">
          <p>Don't have an account ?</p>
          <p>
            <Link to={"/register"} className="hover:bg-green-700">
              Register Here now...
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
