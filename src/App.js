import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { getCartItems, calculateTotals } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();

  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <CartContainer />
      {isOpen && <Modal />}
    </>
  );
}
export default App;
