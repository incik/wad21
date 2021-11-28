const Header = () => (
  <div
    className={"mb-4 py-5 w-full bg-white shadow px-10 flex dark:bg-gray-800"}
  >
    <div className="flex items-center mx-auto">
      <div className="inline-block relative w-14 h-14 bg-yellow-400">
        <span className="absolute right-0 bottom-0 font-bold text-4xl">JS</span>
      </div>
      <h1
        className={
          "font-bold text-3xl md:text-4xl text-center ml-4 dark:text-warmGray-200"
        }
      >
        We Are Developers{" "}
        <span className={"text-red-600 dark:text-red-200"}>2021</span>
      </h1>
    </div>
  </div>
);

export default Header;
