import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { AiOutlineHeart } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]); //ata likhechi

  return (
    <header className={` backdrop-blur-sm w-full h-[80px] md:h-[100px] flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show} `}>
      <Wrapper className={"flex justify-between items-center"}>
        {/* nike logo */}
        <a href={"/"}>
          <img
            src="/assets/nike-logo.png"
            className="w-[40px] md:w-[60px] "
          />
        </a>
        {/* nike logo */}
        <Menu />
        {mobileMenu && <MenuMobile setMobileMenu={setMobileMenu} />}
        {/* 3 icons */}
        <div className="flex items-center gap-2 text-black ">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative ">
            <AiOutlineHeart className=" text-[20px] md:text-[29px] font-semibold" />
          </div>

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative ">
            <FaCartShopping className=" text-[20px] md:text-[26px] " />
          </div>

          {/* mobile icon */}

          <div className=" md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 ">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[20px] "
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[22px] "
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>

          {/* mobile icon */}
        </div>
        {/* 3 icons */}
      </Wrapper>
    </header>
  );
};

export default Header;
