const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-[90vh] text-white text-center"
      style={{
        backgroundImage: "url('/src/assets/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl md:text-6xl mb-4 font-bold">
        Welcome to my Webside
      </h2>
      <p className="text-lg md:text-xl mb-4"> Your Journey start here</p>
      <button className="bg-white text-indigo-600 font-medium cursor-pointer hover:bg-gray-400 px-6 py-2 rounded-md">
        Purchase Products
      </button>
    </div>
  );
};

export default HeroSection;
