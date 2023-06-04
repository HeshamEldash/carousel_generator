import React from "react";
import Button from "@mui/material/Button";

function AppButton({ name, onClick, ...props}) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      {...props}
    >
      {name}
    </Button>
  );
}

export default AppButton;
