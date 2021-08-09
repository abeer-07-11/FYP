import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import LoginForm from './SigninForm';
import Dshboard from '../Dashboard/Dashboard';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  
  const adminUser = {
    email: "admin@admin.com",
    password: "admin1234"
  }
  const [user, setuser] = useState({email: ""});
  const [error, seterror] = useState("");
  let history = useHistory(); 
  const Login = details => {
    if(details.email == adminUser.email && details.password == adminUser.password)
    {
      setuser({
        email: details.email,
      })
    }
    else{
      seterror("Details do not match!")
    }
  }
  const Logout = () => {
    setuser({ email: ""});
    history.push('/dashboard');
  }

  return (
    <div>
      {
        (user.email != "") ? (
          <div>{Logout}
            <Dshboard />
          </div>
            ) : (
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <LoginForm Login= {Login} error= {error} />
              </div>
              <Box mt={5} />
            </Grid>
          </Grid>
        )
      }
    
    </div>
  );
}