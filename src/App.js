import React, { useState } from "react";
import Campaign from "./Campaign";
import Deliverables from "./Deliverables";
import "./styles/App.css";
import { Container, Paper, Box, Grid, TextField, IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
  InputGroup: {
    marginbottom: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  const userTemplate = { name: "", email: "", phone: "", address: "" };
  const [users, SetUsers] = useState([userTemplate]) //add and remove
  const addUser = () => {
    SetUsers([...users, userTemplate]);
  };
  const onChange = (e, index) => {

    const updatedUsers = users.map((user, i) => index === i
      ? Object.assign(user, { [e.target.name]: e.target.value })
      : user
    );
    SetUsers(updatedUsers);
  };
  const removeUser = (index) => {
    const filteredUsers = [...users];
    filteredUsers.splice(index, 1);
    SetUsers(filteredUsers);
  };


  return (
    <>
      < Campaign />
      <Container className={classes.root}>
        <h1>Product/Service</h1>
        <Paper component={Box} p={4}>
          {
            users.map((user, index) => (
              <Grid container spacing={3} key={index} className={classes.InputGroup}>
                <Grid id="index" item md={2}>
                  <TextField
                    label="name"
                    placeholder="T-Shirt"
                    variant="outlined"
                    name="name"
                    onChange={(e) => onChange(e, index)}
                    value={user.name}
                    fullWidth />
                </Grid>
                <Grid item md={2}>
                  <TextField
                    label="Cost"
                    placeholder="$500"
                    variant="outlined"
                    name="email"
                    onChange={(e) => onChange(e, index)}
                    value={user.email}
                    fullWidth />
                </Grid>
                <Grid item md={2}>
                  <TextField
                    label="Phone"
                    placeholder="Phone No"
                    variant="outlined"
                    name="phone"
                    onChange={(e) => onChange(e, index)}
                    value={user.phone}
                    fullWidth />
                </Grid>
                <Grid item md={2}>
                  <TextField
                    label="Product Link"
                    placeholder="Link"
                    variant="outlined"
                    value="address"
                    onChange={(e) => onChange(e, index)}
                    value={user.address}
                    fullWidth />
                </Grid>


                <Grid item md={2}>
                  <IconButton color="secondary" onClick={() => removeUser(index)}  >
                    <DeleteOutlineIcon />-
                  </IconButton>

                </Grid>
              </Grid>
            ))
          }
          {/* <Grid container spacing={3}>
          <Grid item md={3}>
            <TextField
              label="name"
              placeholder="Enter your full name"
              variant="outlined"
              fullWidth />
          </Grid>
          <Grid item md={3}>
            <TextField
              label="name"
              placeholder="Enter your full name"
              variant="outlined"
              fullWidth />
          </Grid>
          <Grid item md={3}>
            <TextField
              label="name"
              placeholder="Enter your full name"
              variant="outlined"
              fullWidth />
          </Grid>
          <Grid item md={3}>
            <TextField
              label="name"
              placeholder="Enter your full name"
              variant="outlined"
              fullWidth />
          </Grid>
          <Grid item md={3}>
            <IconButton>
              <DeleteOutlineIcon color="secondary" />
            </IconButton>
          </Grid>
        </Grid> */}
          <Button disabled={users.length <= 4 ? false : true} variant="contained" color="primary" style={{ marginTop: "15px" }} onClick={addUser}>Add More</Button>
          <Button variant="contained" color="primary" style={{ marginTop: "15px", marginLeft: "10px" }}  >Submit</Button>


        </Paper>

      </Container>
      <Deliverables />


    </>

  );
}

export default App;
