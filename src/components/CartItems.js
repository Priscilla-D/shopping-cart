import { ChevronDown, ChevronUp } from "../icons";

const CartItems = ({ title, amount, price, img }) => {
  return (
    <article className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <div className="item-price">${price}</div>
        <button className="remove-btn">remove</button>
      </div>

      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
      <p>{amount}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItems;
