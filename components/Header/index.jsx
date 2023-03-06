"use client";
import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <header>
        <div id="top-gradient"></div>
        <nav id="top-bar" className="top-bar">
          <div id="top-left" className="row">
            <Link href="/">
              <Logo />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;