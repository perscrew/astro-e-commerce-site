import type React from "react";
import type { FC } from "react";
import type { Course } from "../../models/course";

import { drawerStore } from "../../store/drawerStore";
import Button from "../common/Button";
import classes from "./AddToCartDialog.module.css";

interface AddToCartDialogProps {
  course: Course;
  onClose: (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => void;
}

const AddToCartDialog: FC<AddToCartDialogProps> = ({ course, onClose }) => {
  function openCartHandler(
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) {
    onClose(event);
    drawerStore.set(true);
  }

  return (
    <>
      <div className={classes.overlay} onClick={onClose} />
      <dialog open className={classes.dialog}>
        <h3>Confirmation</h3>
        <p>Le cours "{course.title}" a été ajouté avec succès au panier !</p>
        <div className={classes.buttons}>
          <Button onClick={onClose} variant="light">
            Continuer mes achats
          </Button>
          <Button onClick={openCartHandler}>Accéder au panier</Button>
        </div>
      </dialog>
    </>
  );
};

export default AddToCartDialog;
