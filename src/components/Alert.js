import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

export default function Alert({ open, message }) {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={5000} message={message} />
    </div>
  );
}
