import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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

export default function Cruduniversity() {
  const classes = useStyles();
  const [universities, setuniversity] = useState([]);

  useEffect(() => {
    loaduniversities();
  }, []);

  const loaduniversities = async () => {
    const result = await axios.get("http://localhost:5000/universities");
    setuniversity(result.data);
  };
  const deleteuniversity = async id => {
    await axios.delete(`http://localhost:5000/universities/${id}`);
    loaduniversities();
  }; 

  return (
    <TableContainer component={Paper}>
      <Link to={'/university/add'}>
            <Button className="m-2" variant="contained" color="primary">
                Add University
            </Button>
        </Link>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Degree</StyledTableCell>
            <StyledTableCell>Fee per Semester</StyledTableCell>
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell>Website/Address</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
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
              <StyledTableCell>
                  <Link to={`/university/edit/${university.id}`}>
                      <Button color="primary">
                            Update
                       </Button>
                  </Link>
                <Button onClick={() => deleteuniversity(university.id)} variant="contained" color="secondary">
                    Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
