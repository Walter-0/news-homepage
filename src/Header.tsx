import { useState } from "react";
import Logo from "../public/logo.svg";
import IconMenu from "../public/icon-menu.svg";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  isMobile: boolean;
  menuIsOpen: boolean;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
}

const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

const Header: React.FC<HeaderProps> = ({
  isMobile,
  menuIsOpen,
  handleOpenMenu,
  handleCloseMenu,
}) => {
  return (
    <header className="flex items-center justify-between py-4 lg:py-10">
      <img src={Logo} alt="Logo" />
      <nav className="lg:space-x-10">
        {/* Mobile */}
        {isMobile && (
          <img src={IconMenu} alt="Menu icon" onClick={handleOpenMenu} />
        )}

        {menuIsOpen && (
          <MobileMenu items={navItems} handleCloseMenu={handleCloseMenu} />
        )}

        {/* Desktop */}
        {!isMobile &&
          navItems.map((item, i) => (
            <a
              href="#"
              className="text-dark-grayish-blue hover:text-soft-orange"
              key={i}
            >
              {item}
            </a>
          ))}
      </nav>
    </header>
  );
};

export default Header;
