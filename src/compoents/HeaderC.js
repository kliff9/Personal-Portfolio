import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
function HeaderC() {
  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "#work",
    },
    {
      title: "About Me",
      key: "#about-me",
    },
    {
      title: "Contact",
      key: "#contact",
    },
  ];

  const pathname = window.location.pathname;

  function Ham() {
    const hamburgerContainer = document.querySelector("#header__main-nav");
    const hamburger = document.querySelector(".header__main-nav--hamburger");
    const links = document.querySelectorAll(".header__main-nav--links li");
    
    hamburger.addEventListener("click", () => {
      hamburgerContainer.classList.toggle("clicked"); // toggle = On and Off
      links.forEach((link) => {
        link.classList.toggle("fade");
      });
    });
      }


  return (
    
    <div id="header">
    <nav id="header__main-nav">
      <div class="header__main-nav--hamburger" onClick={Ham}>
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>
    <ul className="header__main-nav--links">
          {menuItems.map((item) => {
            return (
              <li
              >
                <a href={`${item.key}`}>{item.title}</a>
              </li>
            );
          })}
    </ul>
    </nav>
      </div>
  );
}

export default HeaderC;
