import React, { useState, type FC } from "react";
import type { Course } from "../../models/course";

import AddToCartDialog from "../dialog/AddToCartDialog";
import Button from "./Button";

interface AddToCartButtonProps {
  course: Course;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ course }) => {
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  function addToCartHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
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
      <Button onClick={addToCartHandler}>Ajouter au panier</Button>
      {isDialogOpened && (
        <AddToCartDialog course={course} onClose={closeDialog} />
      )}
    </>
  );
};

export default AddToCartButton;
