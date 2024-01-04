import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
        <button onClick={openSidebar}>
          <FaBars className="text-blue-500 text-4xl fixed top-4 left-5" />
        </button>
        <button
          className="bg-slate-500 text-white rounded px-4 py-2"
          onClick={openModal}
        >
          Show modal
        </button>
      </main>
    </>
  );
};

export default Home;
