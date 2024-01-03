import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { cartStore, getCartFromStorage } from "../../store/cartStore";
import classes from "./CartCounter.module.css";

const CartCounter = () => {
  const $cartStore = useStore(cartStore);
  const articleCount = $cartStore.length;

  useEffect(() => {
    const cartFromStorage = getCartFromStorage();
    cartStore.set(cartFromStorage);
  }, []);

  return (
    <button className={classes["cart-icon"]}>
      {articleCount > 0 && (
        <span className={classes.badge}>{articleCount}</span>
      )}
      <svg
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    </button>
  );
};

export default CartCounter;
