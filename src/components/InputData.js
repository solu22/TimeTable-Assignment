/* Material-UI Import */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

/*React Import */
import React from "react";
import PropTypes from "prop-types";

const InputData = ({
  handleSubmit,
  setEntryPoint,
  searchDataFrom,
  searchDataTo,
  setCoordinatesFromLong,
  setCoordinatesFromLat,
  setCoordinatesToLat,
  setCoordinatesToLong,
  setDestinationPoint,
  // entryPoint,
  // destinationPoint,
}) => {
  const sourceOption = searchDataFrom.map((info) => {
    return {
      label: info.properties.region ,
      coordinates: info.geometry.coordinates,
    };
  });

  const destinationOption = searchDataTo.map((info) => {
    return {
      label: info.properties.label,
      coordinates: info.geometry.coordinates,
    };
  });

  console.log("soprion", sourceOption);


  return (
    <>
      <Box
        sx={{ textAlign: "center" }}
        component="form"
        onSubmit={handleSubmit}
        style={{ marginBottom: "20px" }}
        data-testid="form"
      >
        <MyLocationIcon sx={{ color: "red", mr: 1, my: 0.5 }} />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={sourceOption.filter(p=>p.region === "Uusima")}
          isOptionEqualToValue={(option, value) =>
            option.label === value.label
          }
          sx={{ width: 300 }}
          onChange={(event, newValue) => {
            setCoordinatesFromLat(newValue.coordinates[0]);
            setCoordinatesFromLong(newValue.coordinates[1]);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={(e) => setEntryPoint(e.target.value)}
              label="From"
            />
          )}
        />
        <LocationOnIcon sx={{ color: "green", mr: 1, my: 0.5 }} />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={destinationOption}
          isOptionEqualToValue={(option, value) =>
            option.coordinates === value.coordinates
          }
          sx={{ width: 300 }}
          onChange={(event, newValue) => {
            setCoordinatesToLat(newValue.coordinates[0]);
            setCoordinatesToLong(newValue.coordinates[1]);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={(e) => setDestinationPoint(e.target.value)}
              label="To"
            />
          )}
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
    </>
  );
};

InputData.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setEntryPoint: PropTypes.func.isRequired,
  setDestinationPoint: PropTypes.func.isRequired,
  entryPoint: PropTypes.string,
  destinationPoint: PropTypes.string,
  searchDataFrom: PropTypes.array,
  searchDataTo: PropTypes.array,
  setCoordinatesFromLat: PropTypes.func.isRequired,
  setCoordinatesFromLong: PropTypes.func.isRequired,
  setCoordinatesToLat: PropTypes.func.isRequired,
  setCoordinatesToLong: PropTypes.func.isRequired
};

export default InputData;
