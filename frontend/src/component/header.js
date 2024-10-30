import React, { useState, useRef, useEffect } from "react";
import style from "../style/header.module.css";
import { IoMenuSharp, IoSearch } from "react-icons/io5";
import profile from "../assets/20230326_155328.jpg";
import { FaRegBell, FaRegMessage } from "react-icons/fa6";

function Header({ toggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex">
      <div className={`flex-1 ${style.Header}`}>
        <div className={style.Headerrow}>
          <div className={style.Headerrowcoleft}>
            <IoMenuSharp
              className={style.menu}
              id="menu"
              onClick={toggleSidebar}
            />
            <input
              type="text"
              name="search"
              placeholder="Search"
              className={style.text}
            />
            <IoSearch className={style.search} />
          </div>
          <div className={style.Headerrowcolright}>
            <FaRegBell className={style.bell} />
            <FaRegMessage className={style.msg} />
            <div className={style.empimg} onClick={handleProfileClick}>
              <img src={profile} alt="Employee Profile" className={style.img} />
            </div>

            {/* Dropdown Box */}
            {isDropdownOpen && (
              <div ref={dropdownRef} className={style.dropdown}>
                <div className={style.dropdowncontent}>
                  <p className="font-semibold">Gaurav Shukla</p>
                  <p className="text-sm">Software Developer</p>
                </div>
                <ul className={style.dropdownmenu}>
                  <li>
                    <a href="/profile" className={style.dropdownitem}>
                      Profile
                    </a>
                  </li>
                  <li>
                    <button
                      className={style.dropdownitem}
                      onClick={() =>
                        alert("Setting is not set yet. Try another time...")
                      }
                    >
                      Settings
                    </button>
                  </li>
                  <li>
                    <button
                      className={style.dropdownitem}
                      onClick={() => alert("Logging out...")}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
