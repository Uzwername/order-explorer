import React from "react";
import { OrderDialog } from "IndexComponents/orderDialog";

export const OrderDialogContainer = () => {
  console.log(OrderDialog);
  [opened, setIsOpened] = React.useState(true);

  const handleClose = () => {
    setIsOpened(false);
  };

  return (
    <OrderDialog
      open = { opened }
      handleClose = { handleClose }
    />
  );
};
