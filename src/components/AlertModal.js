import React, { useEffect, useState } from "react";
import GenericDialog from "./GenericDialog";

const AlertModal = () => {
  const sawUpdate = localStorage.getItem("nightmare-update-alert");
  console.log({ sawUpdate });
  const [open, setOpen] = useState(!sawUpdate);

  const timeOutAlert = () => {
    return setTimeout(() => {
      setOpen(false);
      localStorage.setItem("nightmare-update-alert", true);
    }, 3000);
  };

  useEffect(() => {
    if (!sawUpdate && localStorage) timeOutAlert();
  }, []);

  const style = {
    color: "white",
    fontSize: "1.2rem",
    margin: "20px auto",
  };
  return (
    <GenericDialog
      open={open}
      handleClose={() => setOpen(false)}
      title="UPDATE"
    >
      <p style={style}>Now with 3 new ghosts and campsite map</p>
    </GenericDialog>
  );
};

export default AlertModal;
