// src/components/ThemeToggleButton.jsx
import React, { useContext } from "react";
import { Switch } from "antd";
import { BulbOutlined, MoonOutlined } from "@ant-design/icons";
import { ColorModeContext } from "../context/ThemeContext";

export const ThemeToggleButton = () => {
  const { toggle, mode } = useContext(ColorModeContext);

  return (
    <Switch
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<BulbOutlined />}
      checked={mode === "dark"}
      onChange={toggle}
    />
  );
};
