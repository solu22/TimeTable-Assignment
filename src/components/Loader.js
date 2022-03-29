import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


const Loader = () => {
  const proStyles={
    color:"gold",
    
  };
  return (
    <div>
      <Box style={{ textAlign: "center", marginTop:"5%" }}>
        <CircularProgress sx={proStyles} thickness={1} size={250} style={{ padding: "10px" }} />
      </Box>
    </div>
  );
};

export default Loader;
