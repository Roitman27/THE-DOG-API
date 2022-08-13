import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { dogFetch } from '../API/dogFetch'

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function DataTable() {
  const [dogList, setdogList] = useState([]);

  const fetchALLdogs = () => {
    dogFetch(setdogList);
  };
  useEffect(() => {
    fetchALLdogs();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>BREED </StyledTableCell>
            <StyledTableCell align="right">LIFETIME</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dogList.map((item) => (
            <StyledTableRow key={item.name}>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{item.life_span}</StyledTableCell>
             </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}