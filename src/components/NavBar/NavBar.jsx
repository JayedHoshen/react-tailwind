import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = navLinks.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between items-center mx-10 mt-4">
      <span className="flex" onClick={() => setOpen(!open)}>
        <span className="md:hidden">{open ? <X></X> : <Menu></Menu>}</span>
        <ul
          className={`mt-8 text-black md:hidden absolute duration-500 ${open ? "left-11 " : "-left-25"} bg-gray-200`}
        >
          {links}
        </ul>
        <h3 className="ml-4">My Navbar</h3>
      </span>
      {/* 3. component navbar */}
      <ul className="hidden md:flex">{links}</ul>

      {/* 2. dynamic navbar */}
      {/* <ul className="flex">
        {navLinks.map((route) => (
          <li key={route.id} className="mr-10">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}

      {/* 1. static navbar */}
      {/* <ul className="flex">
        <li className="mr-10">
          <a href="/">Home</a>
        </li>
        <li className="mr-10">
          <a href="/about">About</a>
        </li>
        <li className="mr-10">
          <a href="/blog">Blog</a>
        </li>
      </ul> */}

      <button className="btn btn-outline rounded-md">Sign In</button>
    </nav>
  );
};

export default NavBar;
