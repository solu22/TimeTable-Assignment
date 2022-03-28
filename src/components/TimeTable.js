import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import TransportationStatus from "./TransportationStatus";
import Transportation from "./Transportation";

const TimeTable = ({ data }) => {

  const tableHead = ["mode", "departure", "from", "to", "arrival", "duration"];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} style={{ width: "100%" }}>
          <TableHead style={{ backgroundColor: "black" }}>
            <TableRow>
              {tableHead.map((thead, i) => (
                <TableCell key={i} style={{ color: "white" }}>
                  {thead.toUpperCase()}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.plan.itineraries.map((info) =>
              info.legs.map((item, i) => (
                <>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={i}
                    style={{ backgroundColor: "#1597E5" }}
                  >
                    <Transportation item={item} />
                  </TableRow>

                  <TransportationStatus
                    mode={item.mode}
                    to={item.to.name}
                    duration={item.duration}
                    from={item.from.name}
                  />
                </>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TimeTable;
