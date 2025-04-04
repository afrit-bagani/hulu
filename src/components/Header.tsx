import { FaSearch, FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { menus } from "../data/menu";
import HuluLogo from "./HuluLogo";
import { useState } from "react";
import styles from "../css/Header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <>
      <header className="position-absolute w-100">
        <nav
          className={`${styles.navPad} d-flex position-relative justify-content-between align-items-center bg-black bg-opacity-50 w-100`}
        >
          <HuluLogo />
          <ul className="nav d-none d-md-flex">
            {menus.map((item) => (
              <li
                key={item.id}
                className={`${styles.customHover} list-group-item text-light fw-semibold px-4 py-2`}
              >
                {item.menuItem}
              </li>
            ))}
          </ul>
          <button
            onClick={toggleMenu}
            className="btn btn-outline-light d-md-none d-flex align-items-center gap-2"
          >
            {menus[0].menuItem}
            {!menuOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
          <div className="d-flex align-items-center gap-3">
            <FaSearch size={20} className="text-light" />
            <div className="border border-light rounded-circle">
              <FaUser size={25} className="text-light p-1" />
            </div>
          </div>
        </nav>
        {menuOpen && (
          <div
            className={`${styles.mobileMenu} z-1 position-absolute d-md-none bg-transparent text-light d-flex justify-content-center align-items-center w-100`}
          >
            <ul className="list-unstyled bg-black bg-opacity-50">
              {menus.map((item) => (
                <li key={item.id} className="text-light fw-bold">
                  {item.menuItem}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
