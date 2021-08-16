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

export default function CrudCollege() {
  const classes = useStyles();
  const [colleges, setCollege] = useState([]);

  useEffect(() => {
    loadColleges();
  }, []);

  const loadColleges = async () => {
    const result = await axios.get("http://localhost:5000/colleges");
    setCollege(result.data);
  };
  const deleteCollege = async id => {
    await axios.delete(`http://localhost:5000/colleges/${id}`);
    loadColleges();
  }; 

  return (
    <TableContainer component={Paper}>
      <Link to={'/college/add'}>
            <Button className="m-2" variant="contained" color="primary">
                Add College
            </Button>
        </Link>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Degree</StyledTableCell>
            <StyledTableCell>Fee per Year</StyledTableCell>
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell>Website/Address</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {colleges.map((college, index) => (
            <StyledTableRow>
              <StyledTableCell>{index + 1 }</StyledTableCell>
              <StyledTableCell component="th" scope="row">{college.name}</StyledTableCell>
              <StyledTableCell>{college.degree}</StyledTableCell>
              <StyledTableCell>{college.fee}</StyledTableCell>
              <StyledTableCell>{college.rank}</StyledTableCell>
              <StyledTableCell>{college.website}</StyledTableCell>
              <StyledTableCell>
                  <Link to={`/college/edit/${college.id}`}>
                      <Button color="primary">
                            Update
                       </Button>
                  </Link>
                <Button onClick={() => deleteCollege(college.id)} variant="contained" color="secondary">
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
