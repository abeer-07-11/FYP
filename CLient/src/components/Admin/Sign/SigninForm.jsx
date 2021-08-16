import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
}));

export default function SigninForm({Login, error}){
    const classes = useStyles();
    const [details, setdetails] = useState({email: "", password: ""});
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
      }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
          {(error!= "") ? (<div>{error}</div>): ""}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              onChange={e => setdetails({...details, email: e.target.value})}
              value={details.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={details.password}
              autoComplete="current-password"
              onChange={e => setdetails({...details, password: e.target.value})}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={'/dashboard'}
              >
                Sign In
              </Button>
            <br />
          </form>
    );
}