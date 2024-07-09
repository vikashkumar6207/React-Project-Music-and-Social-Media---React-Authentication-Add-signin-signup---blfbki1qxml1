import React from "react";
import Logo from "./Logo";
import Profil from "./Profile";
import Searchbar from "./Searchbar";
import Link from "next/link";
import CSS from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      {/*  <div>
      <Logo />
      <Searchbar />
      <Profil />
    </div> */}

      <nav className={CSS.Navbarlist}>
        <Logo />
        <ul className={CSS.listContainer}>
          <li>
            <Link href="/" className="nav-list">
              <img src="./home_icon.svg" className={CSS.homeLogo} /> HOME
            </Link>
          </li>
          <li>
            <Link href="/social" className="nav-list">
              <img
                src="./podcast.jpeg"
                style={{ height: "15px", width: "15px", borderRadius: "50%" }}
              />
              SOCIAL
            </Link>
          </li>
          <li>
            <Link href="/library" className="nav-list">
              <img
                src="headphone.jpg"
                style={{ height: "15px", width: "15px", borderRadius: "50%" }}
              />{" "}
              LIBRARY
            </Link>
          </li>
        </ul>
        <Searchbar />
        <Profil />
      </nav>
    </>
  );
};

export default Navbar;
