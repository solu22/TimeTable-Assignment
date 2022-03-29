import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Transportation from "./Transportation";
import PropTypes from "prop-types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TimeTable = ({ data }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>MODE</StyledTableCell>
              <StyledTableCell align="left" style={{ marginRight: "75%" }}>
                DEPARTURE
              </StyledTableCell>
              <StyledTableCell align="left">FROM</StyledTableCell>
              <StyledTableCell align="left">TO</StyledTableCell>
              <StyledTableCell align="left">ARRIVAL</StyledTableCell>
              <StyledTableCell>DURATION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.plan.itineraries.map((info) =>
              info.legs.map((item, i) => {
                if (item.mode !== "WALK") {
                  return (
                    <>
                      <StyledTableRow
                        key={i}
                        style={{ backgroundColor: "#1597E5" }}
                      >
                        <Transportation item={item} />
                      </StyledTableRow>
                    </>
                  );
                }
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

TimeTable.propTypes = {
  data: PropTypes.object,
};

export default TimeTable;
