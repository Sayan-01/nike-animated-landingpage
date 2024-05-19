import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "MEN" },
  { id: 2, name: "WOMEN" },
  { id: 3, name: "KIDS" },
  { id: 4, name: "ACCESSORIES" },
  { id: 5, name: "SALES" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menu = () => {
  return (
    <ul className=" hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <li
            key={item.id}
            className=" cursor-pointer text-[30px] font-bold bebas"
          >
            <a href={item?.url}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
