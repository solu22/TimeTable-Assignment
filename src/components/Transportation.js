import React from "react";
import TableCell from "@mui/material/TableCell";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TramIcon from "@mui/icons-material/Tram";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import SubwayIcon from "@mui/icons-material/Subway";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));



const Transportation = ({ item }) => {
  return (
    <>
      <StyledTableCell component="th" scope="row">
         {/* {item.mode === "WALK" && (
          <DirectionsWalkIcon sx={{ fontSize: 40, color: "#890F0D" }} />
        )}  */}

        {item.mode === "BUS" && (
          <DirectionsBusIcon sx={{ fontSize: 40, color: "gold" }} />
        )}
        {item.mode === "TRAM" && (
          <TramIcon sx={{ fontSize: 40, color: "#B6EB7A" }} />
        )}
        {item.mode === "FERRY" && (
          <DirectionsBoatIcon sx={{ fontSize: 40, color: "#FFD32D" }} />
        )}
        {item.mode === "SUBWAY" && (
          <SubwayIcon sx={{ fontSize: 40, color: "gold" }} />
        )}
      </StyledTableCell>

      <StyledTableCell align="left" style={{ color: "whitesmoke" }}>
        {new Date(item.startTime).toLocaleString()}
      </StyledTableCell>

      <StyledTableCell align="left" style={{ color: "whitesmoke" }}>
        {" "}
        {item.from.name === "Origin" && <span>current location</span>}
        {item.from.name !== "Origin" && <span>{item.from.name}</span>}
      </StyledTableCell>

      <StyledTableCell align="left" style={{ color: "whitesmoke" }}>
        {item.to.name}
      </StyledTableCell>
      <StyledTableCell align="left" style={{ color: "whitesmoke" }}>
        {new Date(item.endTime).toLocaleString()}
      </StyledTableCell>
      <StyledTableCell align="right" style={{ color: "whitesmoke" }}>
        {Math.ceil(item.duration / 60) + " min"}
      </StyledTableCell>
    </>
  );
};

export default Transportation;
