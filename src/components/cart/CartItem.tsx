import type { FC } from "react";
import type { Course } from "../../models/course";
import { formatPrice } from "../../utils/price.utils";

import classes from "./CartItem.module.css";
import CartDeleteButton from "./CartDeleteButton";

interface CartItemProps {
  course: Course;
  onCourseRemoved: (course: Course) => void;
}

const CartItem: FC<CartItemProps> = ({ course, onCourseRemoved }) => {
  const { title, image, price } = course;

  return (
    <div className={classes.cartItem}>
      <img src={image.src} alt={image.alt} />
      <div className={classes.cartItemInfo}>
        <h3>{title}</h3>
        <p>{formatPrice(price)}</p>
      </div>
      <CartDeleteButton onClick={() => onCourseRemoved(course)} />
    </div>
  );
};

export default CartItem;
