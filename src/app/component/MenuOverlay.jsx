import React from "react";
import { NavLink } from "./NavLink";

const MenuOverlay = ({ links ,sidebar } ) => {
  console.log('links: ', typeof links);
  console.log('links.path: ', links.path);
  return (
    <div className={`top-10 right-0 z-20 bg-slate-400 h-full w-[35vw] p-1 text-white
      fixed ease-in-out 
      duration-700 
      ${sidebar ? "translate-x-0 " : "translate-x-full"}`}>
      <ul>
        {
          links.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default MenuOverlay;
