import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/carts/cartReducer";
import { useEffect } from "react";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  return (
    <main className=" flex flex-col text-center items-center">
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
