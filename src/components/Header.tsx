import React from "react";
import Filter from "./Filter/Filter";

const Header: React.FC = () => {
  return (
    <header className="w-full relative h-36">
      <div className="absolute bg-primary top-0 w-full z-[-100] h-full hidden md:block bg-[url('/images/bg-header-desktop.svg')]"></div>
      <div className="absolute bg-primary top-0 w-full z-[-100] h-full md:hidden bg-[url('/images/bg-header-mobile.svg')]"></div>
      <Filter />
    </header>
  );
};

export default Header;
