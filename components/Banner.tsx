const Banner = () => {
  return (
    <div className="flex flex-col justify-between px-10 py-5 mb-10 font-bold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="text-7xl">Charles&apos; Daily Blog</h1>
        <h2 className="mt-10 md:mt-0">
          Welcome to My{" "}
          <span className="underline decoration-4 decoration-[#F2780D]">
            CODING WORLD!
          </span>{" "}
        </h2>
      </div>

      <p className="max-w-sm mt-5 text-gray-400 md:mt-2">
        Always enthusiastic about learning new technologies and writing
        readable, maintainable and reusable code.
      </p>
    </div>
  );
};

export default Banner;
