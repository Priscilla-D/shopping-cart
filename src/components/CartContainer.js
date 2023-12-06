import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import CartItems from "./CartItems";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <p className="empty-cart">is currently empty</p>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItems key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
