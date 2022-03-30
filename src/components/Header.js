import { Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div data-testid = "header-1">
      <img
        src="https://upload.wikimedia.org/wikipedia/fi/thumb/c/cc/HSL_logo.svg/1200px-HSL_logo.svg.png"
        alt="logo"
        style={{ width: "150px", cursor: "pointer", marginTop: "5%" }}
        
      />
      <Typography
        textAlign="center"
        variant="h4"
        color="#400082"
        fontFamily="sans-serif"
        fontWeight="bolder"
      >
        TerveTuloa
      </Typography>
    </div>
  );
};

export default Header;
