import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const MenuMobile = ({ setMobileMenu }) => {
  return (
    <ul className=" md:hidden flex flex-col absolute top-[80px] left-0 w-full h-[calc(100vh-50px)] border-t font-bold text-black">
      {data.map((item) => {
        return (
          <li
            key={item.id}
            className=" py-4 px-5 border-b"
          >
            <a
              href={item?.url}
              onClick={() => setMobileMenu(false)}
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
