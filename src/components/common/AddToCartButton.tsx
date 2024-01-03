import React, { useState, type FC, useEffect } from "react";
import type { Course } from "../../models/course";

import { useStore } from "@nanostores/react";
import { cartStore, isCourseIsInCart, saveCart } from "../../store/cartStore";
import AddToCartDialog from "../dialog/AddToCartDialog";
import Button from "./Button";
import classes from "./AddToCartButton.module.css";
interface AddToCartButtonProps {
  course: Course;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ course }) => {
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const $cartStore = useStore(cartStore);

  const showAddToCartButton = !isCourseIsInCart($cartStore, course);

  function addToCartHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    cartStore.set([...$cartStore, course]);
    saveCart();
    setIsDialogOpened((opened) => !opened);
  }

  function closeDialog(
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) {
    event.preventDefault();
    setIsDialogOpened(false);
  }

  return (
    <>
      {showAddToCartButton && (
        <Button onClick={addToCartHandler}>Ajouter au panier</Button>
      )}
      {!showAddToCartButton && (
        <p className={classes.alreadyInCart}>Ce cours est dans votre panier</p>
      )}
      {isDialogOpened && (
        <AddToCartDialog course={course} onClose={closeDialog} />
      )}
    </>
  );
};

export default AddToCartButton;
