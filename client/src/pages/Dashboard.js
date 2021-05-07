import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Calendar from '../components/Calendar';
import UserProfile from '../components/UserProfile';
import EditProfileButton from '../components/EditProfileButton';
// import ConnectionsCard from '../components/ConnectionsCard';
import { Connections, ConnectionsItem } from "../components/ConnectionsCard";
import PotentialConnections from '../components/PotentialConnections';
import AddtoCalendarButton from '../components/AddtoCalendarButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(15),
    },
    paper: { 
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Users() {
const [users, setUsers] = useState([]);
 const [formObject, setFormObject] = useState({});
 const formEl = useRef(null);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    API.getUsers()
      .then(res => {
        console.log(res.data.users);
        setUsers(res.data.users);
      })
      .catch(err => console.log(err));
  };
}


  
  export default function Dashboard() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          
          <Grid item xs={6}>
            <Paper className={classes.paper}><EditProfileButton /> <UserProfile /></Paper>
          </Grid>
          <Grid item xs={6}>
          <Paper className={classes.paper}>
          {/* {users.length ? (
                <Connections>
                  {users.map(users => (
                    <ConnectionsItem key={users._id}>
                      <Link to={"/users/" + users._id}>
                        <strong>
                          {users.firstName} by {users.lastName}
                        </strong>
                      </Link>
                    </ConnectionsItem>
                  ))}
                </Connections>
              ) : (
                <h3>No Results to Display</h3>
              )} */}
          </Paper>
        </Grid>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}><Calendar /><AddtoCalendarButton /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><PotentialConnections /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
