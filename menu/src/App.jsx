import { useState } from "react";
import menu from "./data.jsx";
import MenuList from "./MenuList";
import Buttons from "./Buttons.jsx";

// get unique value
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [filterBtns, setFilterBtns] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <div className=" flex flex-col items-center ">
        <h2 className="text-4xl">Our Menu</h2>
        <hr className="w-16 h-0 border-2 border-orange-500 rounded" />
      </div>
      <Buttons filterItems={filterItems} filterBtns={filterBtns} />
      <MenuList menuItems={menuItems} />
    </>
  );
}

export default App;
