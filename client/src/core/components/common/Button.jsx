import { Button } from "@mui/material";
import React from "react";

const CommonButton = ({
  label,
  onClick,
  color = "secondary",
  variant = "contained",
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 600,
        px: 3,
        py: 1,
      }}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default CommonButton;
