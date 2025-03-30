import { FaSearch, FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { menus } from "../menu";
import HuluLogo from "./HuluLogo";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <>
      <header>
        <nav className="d-flex justify-content-between align-items-center bg-dark py-3 px-4">
          <HuluLogo />
          <ul className="nav d-none d-md-flex">
            {menus.map((item) => (
              <li key={item.id} className="list-group-item text-light px-4">
                {item.menuItem}
              </li>
            ))}
          </ul>
          <button
            onClick={toggleMenu}
            className="btn btn-outline-light d-md-none d-flex align-items-center gap-2"
          >
            Home
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
          <div className="bg-transparent text-dark d-md-none d-flex justify-content-center">
            <ul className="list-unstyled">
              {menus.map((item) => (
                <li key={item.id} className=" py-1">
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
