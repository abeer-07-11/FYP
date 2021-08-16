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
  const [universities, setUniversity] = useState([]);

  useEffect(() => {
    loadUniversities();
  }, []);

  const loadUniversities = async () => {
    const result = await axios.get("http://localhost:5000/universities");
    setUniversity(result.data);
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Degree</StyledTableCell>
            <StyledTableCell>Fee per Semester</StyledTableCell>
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell>Website/Address</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {universities.map((university, index) => (
            <StyledTableRow>
              <StyledTableCell>{index + 1 }</StyledTableCell>
              <StyledTableCell component="th" scope="row">{university.name}</StyledTableCell>
              <StyledTableCell>{university.degree}</StyledTableCell>
              <StyledTableCell>{university.fee}</StyledTableCell>
              <StyledTableCell>{university.rank}</StyledTableCell>
              <StyledTableCell>{university.website}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
