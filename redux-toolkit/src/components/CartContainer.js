import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/carts/cartReducer";

const CartContainer = () => {
  const { amount, total, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="w-[500px]">
        <div className=" mt-5 flex flex-col gap-10 items-center">
          <h2 className="text-xl">Your Bag</h2>
          <h4>is curretly empty</h4>
        </div>
      </section>
    );
  }

  return (
    <section className=" text-center w-[500px]">
      <header className="text-xl">Your Bag</header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr className="w-full border border-slate-300" />
        <div>
          <h4 className="flex gap-20 justify-around">
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="bg-blue-600 rounded p-2 mt-5"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
