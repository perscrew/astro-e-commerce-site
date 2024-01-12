import { createPortal } from "react-dom";

import { useStore } from "@nanostores/react";
import { cartStore } from "../../store/cartStore";
import { drawerStore, toggleDrawer } from "../../store/drawerStore";
import CartItem from "../cart/CartItem";
import classes from "./CartDrawer.module.css";

const CartDrawer = () => {
  const $cartStore = useStore(cartStore);
  const $drawerStore = useStore(drawerStore);

  const total = $cartStore.reduce((total, item) => total + item.price, 0);

  return createPortal(
    <aside
      className={`${classes.drawer} ${
        $drawerStore ? classes.active : undefined
      }`}
    >
      <div className={classes.header}>
        <h3 className={classes.title}>Votre panier</h3>
        <button className={classes.close} onClick={toggleDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <section>
        {$cartStore.map((course) => (
          <CartItem key={course.title} course={course} />
        ))}
      </section>
      <p className={classes.total}>
        Montant TTC <span className={classes.price}>{total}€</span>
      </p>
    </aside>,
    document.body
  );
};

export default CartDrawer;
