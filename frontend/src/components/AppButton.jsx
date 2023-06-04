import React from "react";
import Button from "@mui/material/Button";

function AppButton({ name, onClick}) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
    >
      {name}
    </Button>
  );
}

export default AppButton;
