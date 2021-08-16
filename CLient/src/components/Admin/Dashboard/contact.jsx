import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [contact, setcontact] = useState([]);

  useEffect(() => {
    loadcontact();
  }, []);

  const loadcontact = async () => {
    const result = await axios.get("http://localhost:5000/contact");
    setcontact(result.data.reverse());
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>E-Mail</StyledTableCell>
            <StyledTableCell>Message</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contact.map((contact) => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">{contact.fname}</StyledTableCell>
              <StyledTableCell>{contact.lname}</StyledTableCell>
              <StyledTableCell>{contact.phone}</StyledTableCell>
              <StyledTableCell>{contact.email}</StyledTableCell>
              <StyledTableCell>{contact.msg}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
