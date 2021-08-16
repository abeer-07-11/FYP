import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link}  from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from '../../Dashboard/ListItems';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  avatar_Color:{
    color: 'blue',
  },
  toolbar: {
    height: 157,
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function AddUniversities() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  let history = useHistory();
  const [university, setUniversity] = useState({
    name: "",
    degree: "",
    fee: "",  
    rank: "",
    department: "",
    website: ""
  });

  const { name, degree, fee, rank, department, website } = university;
  const onInputChange = e => {
    setUniversity({ ...university, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/universities", university);
    history.push('/university');
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <Link to={'/signin'}>
            <Avatar className={classes.avatar_Color} />
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
            <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={10} lg={8}>
                <form >
                    <TextField
                    required
                    id="outlined-basic"
                    label="Enter the University Name"
                    name="name"
                    variant="outlined"
                    value={name}
                    onChange={e => onInputChange(e)}
                    fullWidth= "true" />
                    <br /> <br /> 
                    <TextField
                    id="outlined-basic"
                    label="Enter the Degree"
                    name="degree"
                    variant="outlined"
                    value={degree}
                    onChange={e => onInputChange(e)}
                    fullWidth= "true" />
                    <br /> <br /> 
                    <TextField
                    id="outlined-basic"
                    label="Enter the Fee per Semester"
                    name="fee"
                    variant="outlined"
                    value={fee}
                    onChange={e => onInputChange(e)}
                    fullWidth= "true" />
                    <br /> <br /> 
                    <TextField
                    id="outlined-basic"
                    label="Enter the Rank of the University"
                    name="rank"
                    variant="outlined"
                    value={rank}
                    onChange={e => onInputChange(e)}
                    fullWidth= "true" />
                    <br /> <br />
                    <TextField
                    id="outlined-basic"
                    label="Enter the Department"
                    name="department"
                    variant="outlined"
                    value={department}
                    onChange={e => onInputChange(e)}
                    fullWidth= "true" />
                    <br /> <br /> 
                    <TextField
                    id="outlined-basic"
                    label="Enter the Website/Address"
                    name="website"
                    variant="outlined"
                    value={website}
                    onChange={e => onInputChange(e)}
                    fullWidth= "true" />
                    <br /> <br />
                    <Button onClick={e => onSubmit(e)} variant="contained" color="primary" disableElevation>
                        Add University
                    </Button>
                </form>
            </Grid>
          </Grid>
        </Container>
        </main>
    </div>
    );    
}