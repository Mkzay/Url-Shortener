/* eslint-disable react/prop-types */
export default function Menu({ isMenuOpen }) {
  return (
    <div
      className={`${
        isMenuOpen
          ? "fixed opacity-100 transition-opacity duration-700 ease-in"
          : "opacity-0 transition-opacity duration-700 ease-out md:opacity-100"
      } bg-DarkViolet w-10/12 absolute right-9 top-20 py-10 rounded-xl flex items-center justify-center flex-col gap-5 z-50 md:bg-white md:justify-between md:flex-row md:gap-16 md:top-8 md:py-2 md:px-0 md:w-[70%] lg:gap-72 lg:w-[81%]`}
    >
      <ul className="flex items-center justify-center flex-col gap-5 text-white font-bold border-b border-GrayishViolet pb-7 w-10/12 cursor-pointer md:text-GrayishViolet md:w-full md:border-0 md:flex-row">
        <li>
          <a className="hover:text-black">Features</a>
        </li>
        <li>
          <a className="hover:text-black">Pricing</a>
        </li>
        <li>
          <a className="hover:text-black">Resources</a>
        </li>
      </ul>
      <ul className="flex items-center justify-center flex-col gap-5 text-white font-bold w-full cursor-pointer md:-mt-[26px] md:text-GrayishViolet md:flex-row lg:-mt-5">
        <li>
          <a className="hover:text-black">Login</a>
        </li>
        <li>
          <a className="bg-Cyan rounded-3xl py-3 px-20 md:text-white md:px-8 hover:transition-color hover:duration-500 hover:ease-in hover:brightness-200">
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
}
