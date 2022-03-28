import React from "react";
import TableCell from "@mui/material/TableCell";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TramIcon from "@mui/icons-material/Tram";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import SubwayIcon from "@mui/icons-material/Subway";

const Transportation = ({ item }) => {
  return (
    <>
      <TableCell style={{ color: "whitesmoke" }}>
        {item.mode === "WALK" && <DirectionsWalkIcon />}
        {item.mode === "BUS" && <DirectionsBusIcon />}
        {item.mode === "TRAM" && <TramIcon />}
        {item.mode === "FERRY" && <DirectionsBoatIcon />}
        {item.mode === "SUBWAY" && <SubwayIcon />}
      </TableCell>
      <TableCell style={{ color: "whitesmoke" }}>
        {new Date(item.startTime).toLocaleString()}
      </TableCell>

      <TableCell style={{ color: "whitesmoke" }}>
        {item.from.name === "Origin" && <span>current location</span>}
        {item.from.name !== "Origin" && <span>{item.from.name}</span>}
      </TableCell>
      <TableCell style={{ color: "whitesmoke" }}>{item.to.name}</TableCell>

      <TableCell style={{ color: "whitesmoke" }}>
        {new Date(item.endTime).toLocaleString()}
      </TableCell>
      <TableCell style={{ color: "whitesmoke" }}>
        {Math.ceil(item.duration / 60) + " min"}
      </TableCell>
    </>
  );
};

export default Transportation;
