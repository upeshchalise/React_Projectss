/* eslint-disable react/prop-types */
import SingleMenu from "./SingleMenu";

export default function MenuList({ menuItems }) {
  return (
    <div className="flex flex-wrap justify-evenly my-4">
      {menuItems.map((singleMenu) => {
        return <SingleMenu key={singleMenu.id} {...singleMenu} />;
      })}
    </div>
  );
}
