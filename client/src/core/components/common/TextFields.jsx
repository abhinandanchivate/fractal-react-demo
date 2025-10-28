import React from "react";

import { TextField } from "@mui/material";

const CommonTextField = ({
  label,
  value,
  onChange,
  type = "text",
  variant = "outlined",
  size = "small",
  fullWidth = true,
  ...rest
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      sx={{
        borderRadius: 2,
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
        },
      }}
      {...rest}
    />
  );
};

export default CommonTextField;
