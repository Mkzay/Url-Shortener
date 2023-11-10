import Menu from "./menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Head() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div className="flex items-center justify-between flex-col gap-10 p-5 pt-10 lg:px-20 md:pb-16 overflow-hidden">
      <header className="flex items-center justify-between w-full md:px-5">
        <logo>
          <img src="./logo.svg" />
        </logo>
        <div>
          <button onClick={toggleMenu} className="text-xl md:hidden">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <Menu isMenuOpen={isMenuOpen} />
        </div>
      </header>

      <section className="flex flex-col gap-5 md:gap-0 md:flex-row-reverse md:justify-between md:px-5">
        <div>
          <img
            className="w-full h-full relative -right-14 md:-right-20 lg:-right-32"
            src="./illustration-working.svg"
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-5 md:items-start md:w-10/12 lg:w-7/12">
          <h1 className="text-3xl text-center text-VeryDarkViolet font-bold md:text-left md:text-4xl lg:text-6xl">
            More than just shorter links
          </h1>
          <p className="text-lg text-center text-Gray font-medium md:text-left lg:text-xl">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <button className="bg-Cyan rounded-3xl p-3 w-7/12 text-white font-bold hover:transition-color hover:duration-500 hover:ease-in hover:brightness-200">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
