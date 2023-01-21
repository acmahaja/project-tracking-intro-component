import { navbar, logo, hamburger, links } from "@/styles/Navbar.module.css";
import Image from "next/image";
import { useState } from "react";
import Menu from "./Menu";


export default function Navbar() {
    const [showMenu, setShowMenu] = useState(true)
    
    function toggleMenu() {
        console.log(showMenu);
        setShowMenu(!showMenu)
        console.log(showMenu);
    }

    return (
    <div className={navbar }>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={24}
        height={24}
        priority
        className={logo}
      />

      <Image
        src="/icon-hamburger.svg"
        alt="Hamburger button"
        width={24}
        height={24}
        className={hamburger}
        onClick={toggleMenu}

      />
      <Menu display={showMenu}/> 

      
      <div className={links}>asd</div>
    </div>
  );
}
