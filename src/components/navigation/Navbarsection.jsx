import React from "react";
import Logo from '../../assets/logo.png.webp'
import {Link} from 'react-router-dom'
function Navbarsection() {
  const navitem = [
    {
      title: "home",
      path:'/'

    },
    {
      title: "ABOUT",
      path:'/About'

    },
    {
      title: "MENU",
      path:'/Menu'

    },
    {
      title: "GALLERY",
      path:'/Gallery'
    },
    {
      title: "BLOG",
      path:'/Blog'
    },
    {
      title: "PAGES",
      path:'/Page'
    },
    {
      title: "CONTACT",
      path:'Contact'
    },
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-15   ">
      <nav className="  flex justify-between items-center   w-11/12 mx-auto  ">
        <div className=" ">
          <img src={Logo} alt="logo-img" className="h-15"></img>
        </div>
        <ul className=" hidden lg:flex items-center gap-6 text-white font-poppins  text-sm font-semibold">
          {navitem.map((val, i) => {
            return (
              <li>
                <Link to={val.path} className="hover:text-red-500 uppercase">{val.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbarsection;
