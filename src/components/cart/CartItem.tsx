import type { FC } from "react";
import type { Course } from "../../models/course";
import { formatPrice } from "../../utils/price.utils";

import classes from "./CartItem.module.css";

interface CartItemProps {
  course: Course;
}

const CartItem: FC<CartItemProps> = ({ course: { title, image, price } }) => {
  return (
    <div className={classes.cartItem}>
      <img src={image.src} alt={image.alt} />
      <div className={classes.cartItemInfo}>
        <h3>{title}</h3>
        <p>{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default CartItem;
