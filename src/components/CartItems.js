import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseItem,
  decreaseItem,
} from "../features/cart/cartSlice";
import { ChevronDown, ChevronUp } from "../icons";

const CartItems = ({ title, amount, price, img, id }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <div className="item-price">${price}</div>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>

      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseItem(id))}
        >
          <ChevronUp />
        </button>
        <p>{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
            }
            dispatch(decreaseItem(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItems;
