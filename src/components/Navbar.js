import { navbar, logo, hamburger, links, link, dotBreak, linkMuted} from "@/styles/Navbar.module.css";
import Image from "next/image";
import { useState } from "react";
import Menu from "./Menu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    console.log(showMenu);
    setShowMenu(!showMenu);
    console.log(showMenu);
  }

  return (
    <div className={navbar}>
      <img
        src="/logo.svg"
        alt="Logo"
        priority
        className={logo}
      />


      <img
        src={`${!showMenu ? "/icon-hamburger.svg" : "/icon-close.svg"}`}
        alt="Hamburger button"
        width={24}
        height={24}
        className={hamburger}
        onClick={toggleMenu}
      />
      <Menu display={showMenu} />

      <div className={links}>
          <a className={link} href="#">
            Product
          </a>
          <a className={link} href="#">
            Features
          </a>
          <a className={link} href="#">
            Pricing
          </a>
          <div className={dotBreak} />
          <a className={`${link} ${linkMuted}`} href="#">
            Login
          </a>
      </div>
    </div>
  );
}
