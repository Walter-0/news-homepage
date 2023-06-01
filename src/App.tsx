import { useEffect, useState } from "react";
import "./App.css";
import ArticleList from "./ArticleList";
import Header from "./Header";
import Headline from "./Headline";
import Sidebar from "./Sidebar";

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width < 1440;
};

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMobile = useCheckMobileScreen();

  const handleOpenMenu = () => {
    setMenuIsOpen(() => true);
  };

  const handleCloseMenu = () => {
    setMenuIsOpen(() => false);
  };

  useEffect(() => {
    if (isMobile === false) {
      setMenuIsOpen(() => false);
    }
  }, [isMobile]);

  return (
    <div
      className={`App px-4 lg:m-auto lg:max-w-[1110px] lg:px-0 lg:backdrop-filter-none ${
        menuIsOpen && "backdrop-brightness-50"
      }`}
    >
      <Header
        isMobile={isMobile}
        handleOpenMenu={handleOpenMenu}
        handleCloseMenu={handleCloseMenu}
        menuIsOpen={menuIsOpen}
      />
      <main className="lg:mb-12 lg:flex lg:justify-between">
        <Headline />
        <Sidebar />
      </main>
      <ArticleList />
    </div>
  );
}

export default App;
