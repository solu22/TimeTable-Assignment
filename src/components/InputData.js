
/* Material-UI Import */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/material";

/*React Import */
import React from "react";
import PropTypes from "prop-types";


const InputData = ({
  handleSubmit,
  setEntryPoint,
  setDestinationPoint,
  entryPoint,
  destinationPoint,
}) => {
  return (
    <Box
      sx={{ textAlign: "center" }}
      component="form"
      onSubmit={handleSubmit}
      style={{ marginBottom: "20px" }}
      data-testid="form"
    >
      <MyLocationIcon sx={{ color: "red", mr: 1, my: 0.5 }} />
      <TextField
        fullWidth
        placeholder="Enter source address"
        variant="standard"
        onChange={(e) => setEntryPoint(e.target.value)}
        required={true}
        name="source"
        data-testid="input-1"
        type="text"
        value={entryPoint}
      />
      <p></p>
      <LocationOnIcon sx={{ color: "green", mr: 1, my: 0.5 }} />
      <TextField
        fullWidth
        placeholder="Enter destination address"
        variant="standard"
        onChange={(e) => setDestinationPoint(e.target.value)}
        required={true}
        type="text"
        value={destinationPoint}
      />
      <p></p>
      <Button
        variant="contained"
        color="success"
        type="submit"
        style={{ marginTop: "15px" }}
        role="button"
      >
        Get TimeTable
      </Button>
    </Box>
  );
};

InputData.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setEntryPoint: PropTypes.func.isRequired,
  setDestinationPoint: PropTypes.func.isRequired,
  entryPoint: PropTypes.string,
  destinationPoint: PropTypes.string,
};

export default InputData;
