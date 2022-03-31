/* Material-UI Import */
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

/*React Import */
import React from "react";

const Loader = () => {
  const proStyles = {
    color: "gold",
  };
  return (
    <div data-testid="loader">
      <Box style={{ textAlign: "center", marginTop: "5%" }}>
        <CircularProgress
          sx={proStyles}
          thickness={1}
          size={250}
          style={{ padding: "11px" }}
        />
      </Box>
    </div>
  );
};

export default Loader;
