import { ChevronUp, ChevronDown } from "../icons";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseAmt,
  decreaseAmt,
} from "../features/carts/cartReducer";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="flex justify-evenly">
      <img src={img} alt={title} className="w-16" />
      <div className="flex flex-col ">
        <h4>{title}</h4>
        <p>${price}</p>
        <button
          className="bg-gray-200 border border-gray-400 rounded w-32"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="text-blue-700"
          onClick={() => dispatch(increaseAmt({ id }))}
        >
          <ChevronUp />
        </button>
        <p>{amount}</p>
        <button
          className="text-blue-700"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decreaseAmt({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
