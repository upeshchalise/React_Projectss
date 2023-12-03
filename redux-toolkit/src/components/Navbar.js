import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav className="text-white">
      <div className="bg-blue-700 flex justify-between gap-4 w-[500px]">
        <h3 className="text-xl pl-5">Redux toolkit</h3>
        <div className="relative text-sm">
          <CartIcon />
          <div className="absolute right-0 top-0 bg-blue-400 rounded">
            <p>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
