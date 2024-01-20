import { useState, useContext, createContext } from "react";
import sublinks from "./data";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const openSubMenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSubmenuOpen,
        openSideBar,
        openSubMenu,
        closeSideBar,
        closeSubMenu,
        location,
        page,
      }}
    >
      {children};
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};
