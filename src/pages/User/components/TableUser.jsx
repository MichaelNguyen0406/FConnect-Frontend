import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { Typography, Card } from "@mui/material";

import userApi from "../../../apis/userApi";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFF",
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

export default function TableUser() {
  return (
    <Card sx={{ p: 3 }}>
      <Typography
        variant="h4"
        color="text.secondary"
        sx={{ fontWeight: "bold" }}
      >
        Users Table
      </Typography>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Checkbox />
            </StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Display Name</StyledTableCell>
            <StyledTableCell align="left">MSSV</StyledTableCell>
            <StyledTableCell align="left">Role</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userApi.map((user) => (
            <StyledTableRow key={user.email}>
              <StyledTableCell component="th" scope="row">
                <Checkbox />
              </StyledTableCell>
              <StyledTableCell align="left">{user.email}</StyledTableCell>
              <StyledTableCell align="left">{user.displayName}</StyledTableCell>
              <StyledTableCell align="left">{user.studentCode}</StyledTableCell>
              <StyledTableCell align="left">{user.role}</StyledTableCell>
              <StyledTableCell align="left">{user.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
