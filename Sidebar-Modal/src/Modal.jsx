import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    // <div className={`fixed top-40 right-40`}>
    <div
      className={`${
        isModalOpen
          ? "w-[50vw] h-[30vh] bg-white text-center fixed top-40 left-40"
          : "hidden"
      }`}
    >
      <div className=" relative  ">
        <h3>modal content</h3>
        <button
          className="absolute right-2 top-2 text-red-500 text-4xl"
          onClick={closeModal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
