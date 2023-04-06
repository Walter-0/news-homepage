import React from "react";
import IconMenuClose from "../public/icon-menu-close.svg";

interface MobileMenuProps {
  items: string[];
  handleCloseMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, handleCloseMenu }) => {
  return (
    <div className="absolute inset-y-0 right-0 h-full w-64 bg-white p-6">
      <img
        src={IconMenuClose}
        className="absolute right-6 top-6"
        alt="Menu close icon"
        onClick={handleCloseMenu}
      />

      <div className="mt-32">
        {items.map((item, i) => (
          <a href="#" key={i} className="mb-6 block">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
