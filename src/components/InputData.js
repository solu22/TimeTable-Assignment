
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box} from "@mui/material";
import PropTypes from "prop-types";

const InputData = ({handleSubmit, setEntryPoint, setDestinationPoint}) => {
  return (
    <Box
      sx={{ textAlign: "center" }}
      component="form"
      onSubmit={handleSubmit}
      style={{ marginBottom: "20px" }}
    >
      <MyLocationIcon sx={{ color: "red", mr: 1, my: 0.5 }} />
      <TextField
        fullWidth
        label="Enter source address"
        variant="standard"
        onChange={(e) => setEntryPoint(e.target.value)}
        required="true"
      />
      <p></p>
      <LocationOnIcon sx={{ color: "green", mr: 1, my: 0.5 }} />
      <TextField
        fullWidth
        label="Enter destination address"
        variant="standard"
        onChange={(e) => setDestinationPoint(e.target.value)}
        required="true"
      />
      <p></p>
      <Button
        variant="contained"
        color="success"
        type="submit"
        style={{ marginTop: "15px" }}
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
};

export default InputData;
