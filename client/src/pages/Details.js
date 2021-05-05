import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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



const GreenCheckbox = withStyles({
    root: {
      color: orange[400],
      '&$checked': {
        color: orange[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

// const handleChange = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
// };

function Details() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs" id="login-form">
            <CssBaseline />
            <div className={classes.paper}>
            <h2>Let us know more about what you're looking for.</h2>
            <p>*Please check all that apply</p>
                <FormGroup row>
                    <h3>I want to connect . . .  </h3>
                    <div>
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="Weekly"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="Biweekly"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="Monthly"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="Quarterly"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="On demand"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="For in-person or virtual check-ins"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="Via text messaging only"
                    />
                    </div>
                    <h3>With someone who can help me . . . </h3>
                    <div>
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="With coding problems"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="Set and achieve goals"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="Network more effectively"
                    />
                    </div>

                    <h3>So I can learn more about . . . </h3>
                    <div>
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="JavaScript"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}
                    label="Node.js"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="SQL"
                      />
                    <FormControlLabel
                    control={<GreenCheckbox name="checkedG" />}
                    label="MongoDB"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox name="checkedG" />}
                    label="Ruby"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="Python"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="Bash/Shell/Powershell"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}
                    label="TypeScript"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="C#"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}
                    label="Java"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}
                    label="UI/UX"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox c  name="checkedG" />}
                    label="HTML/CSS"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}
                    label="React/Angular/Vue"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="SASS/LESS"
                     />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}
                    label="Career Advice"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}

                    label="Salary Negotiations"
                    />      
                </div>
                </FormGroup>
            </div>
        </Container>
);

       

}

export default Details;