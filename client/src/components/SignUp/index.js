import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CheckboxLabels from '../Checkbox';
import TimeCommitmentOptions from '../TimeCommitmentOptions'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AUTH from '../../utils/AUTH'

import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import "./SignUp.scss"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const timeCommitmentArray = [];

function SignupForm() {

  const [userObject, setUSerObject] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    mentorStatus: false,
    currentPosition: '',
    yearsExperience: '',
    pronouns: '',
    location: '',
    education: '',
    timeCommitment: []
  })

  const [redirectTo, setRedirectTo] = useState(null)

  // states for time commitment checkboxes
  const [isWeekly, setIsWeekly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false);
  const [isQuarterly, setIsQuarterly] = useState(false);
  const [isOnDemand, setIsOnDemand] = useState(false);

  // update functions for time commitment checkboxes
  const updateWeekly = () => {
    setIsWeekly(!isWeekly);
    timeCommitmentArray.push("Weekly");
  };

  const updateMonthly = () => {
    setIsMonthly(!isMonthly);
    timeCommitmentArray.push("Monthly");
    
  };

  const updateQuarterly = () => {
    setIsQuarterly(!isQuarterly);
    timeCommitmentArray.push("Quarterly");
  };

  const updateOnDemand= () => {
    setIsOnDemand(!isOnDemand);
    timeCommitmentArray.push("On Demand");
  };

  const handleChange = (event) => {
    console.log(event.target.checked)
    setUSerObject({...userObject, [event.target.name]: event.target.value})
  }

  const handleCheckboxChange = (event) => {
    // console.log(event.target.checked);
    // setUSerObject({...userObject, [timeCommitment.push(event.target.value)]:console.log(timeCommitment)
    // })
  }

  const updateUser = (updatedValue) => {
    console.log('UpdatedValue ', updatedValue)
    setUSerObject({...userObject, ...updatedValue})

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userObject)
    console.log(timeCommitmentArray);
  
    AUTH.signup({
      firstName: userObject.firstName,
      lastname: userObject.lastName,
      pronouns: userObject.pronouns,
      username: userObject.username,
      password: userObject.password,
      email: userObject.email,
      currentPosition: userObject.currentPosition,
      yearsExperience: userObject.yearsExperience,
      education: userObject.education,
      mentorStatus: userObject.mentorStatus,
      location: userObject.location,
      description: userObject.description,
      timeCommitment: userObject.timeCommitment,
      commPrefs: userObject.commPrefs,
      learningAbout: userObject.learningAbout,
    }).then(response => {
      console.log(response)
      if(!response.data.errmsg) {
        setRedirectTo('/login')
      } else {
        console.log('duplicate')
      }
      
    })
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" id="signUpForm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar id="signup-avatar" className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
         
          <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="username"
                label="Username"
                type="username"
                id="username"
                autoComplete="username"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
            <CheckboxLabels 
          name='mentorStatus'
          handleUpdateUser={updateUser}
          />
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>

            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>

            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>

             {/* not-required info below  */}
            <Typography component="p" fontStyle="italic" variant="p">
              Let us know a little more about you before you set up your account. You will be able to edit these settings at any time.
            </Typography>
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>

            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>

            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="pronouns"
                label="Preferred pronouns"
                type="pronouns"
                id="pronouns"
                autoComplete="pronouns"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                name="currentPosition"
                label="Current Position"
                type="currentPosition"
                id="currentPosition"
                autoComplete="currentPosition"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                name="yearsExperience"
                label="Years of experience in the tech industry"
                type="yearsExperience"
                id="yearsExperience"
                autoComplete="yearsExperience"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                name="location"
                label="Zip code"
                type="location"
                id="location"
                autoComplete="location"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                name="education"
                label="Bootcamp attended (year of graduation)"
                type="education"
                id="education"
                autoComplete="education"
                onChange={handleChange}
              />
            </Grid>
            <Typography component="p" fontStyle="italic" variant="p">
              How often would you like to meet with your mentor?
            </Typography>
            <FormGroup row>        
        <FormControlLabel
        control={
          <Checkbox
            checked={isWeekly}
            onChange={updateWeekly}
            name="isWeekly"
            color="primary"
          />
        }
        label="Weekly"
      />
        <FormControlLabel
        control={
          <Checkbox
            checked={isMonthly}
            onChange={updateMonthly}
            name="isMonthly"
            color="primary"
          />
        }
        label="Monthly"
      />
        <FormControlLabel
        control={
          <Checkbox
            checked={isQuarterly}
            onChange={updateQuarterly}
            name="isQuarterly"
            color="primary"
          />
        }
        label="Quarterly"
      />
        <FormControlLabel
        control={
          <Checkbox
            checked={isOnDemand}
            onChange={updateOnDemand}
            name="isOnDemand"
            color="primary"
          />
        }
        label="On Demand"
      /> 
    </FormGroup>

          </Grid>

          <Grid container spacing={4}>
            
            <Grid item xs={12}>

            </Grid>
            <Grid item xs={12}>
              
            </Grid>

          </Grid>

        
         
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            id="signup-button"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );

}

export default SignupForm