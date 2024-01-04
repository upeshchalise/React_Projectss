import { FaTimes } from "react-icons/fa";
import { links } from "./data";
import { useGlobalContext } from "./context";

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "fixed left-2 top-3 bg-white w-[50vw] h-full" : "hidden"
      }`}
    >
      <div className="relative">
        <button
          className="absolute top-2 right-3 text-red-500 text-4xl"
          onClick={closeSidebar}
        >
          <FaTimes /> 
        </button>
      </div>
      <ul className="flex flex-col gap-4 p-4">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url} className="hover:bg-blue-500 rounded w-full p-2">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
