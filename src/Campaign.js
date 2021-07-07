import React, { useState } from 'react'
import "./styles/App.css";
import { Container, Paper, Box, Grid, FormControl, InputLabel, Input, Select, MenuItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import db from './Firebase';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "vh",
        backgroundColor: theme.palette.grey[300],
        paddingTop: theme.spacing(6),
    },
}));

const Campaign = () => {
    const classes = useStyles();
    const userTemplate = { name: "", platform: "", description: "", startdate: "", enddate: "" };
    const [users, SetUsers] = useState([userTemplate]) //add and remove

    const onChange = ({ target: { name, value } }) => {

        const updatedUsers = Object.assign({}, users);
        updatedUsers[name] = value;
        SetUsers(updatedUsers);
    };
    const handleSubmit = () => {
        if (users.name !== '') { db.collection("info").add(users) }
    }

    return (

        <Container className={classes.root}>
            <h1>Campaign Info</h1>
            <Paper component={Box} p={4}>
                <Grid container spacing={3} className={classes.InputGroup}>
                    <Grid item md={2}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Campaign Name</InputLabel>
                            <Input type="search" id="my-input" aria-describedby="my-helper-text" name="name" onChange={(e) => onChange(e)} />
                        </FormControl>
                    </Grid>
                    <Grid item md={2}>
                        <InputLabel id="demo-simple-select-label">Select Platform</InputLabel>
                        <Select style={{ width: "100%" }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={"instagram"} name="platform"
                            onChange={(e) => onChange(e)}

                        >
                            <MenuItem value={"instagram"}>Instagram</MenuItem>
                            <MenuItem value={"Facebook"}>Facebook</MenuItem>
                            <MenuItem value={"Twitter"}>Twitter</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item md={2}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Description</InputLabel>
                            <Input type="search" id="my-input" aria-describedby="my-helper-text" name="description" onChange={(e) => onChange(e)} />
                        </FormControl>
                    </Grid>
                    <Grid item md={2}>
                        <FormControl>
                            <label htmlFor="my-input">Start Date</label>
                            <Input type="Date" id="my-input" aria-describedby="my-helper-text" name="startdate" onChange={(e) => onChange(e)} />
                        </FormControl>
                    </Grid>
                    <Grid item md={2}>
                        <FormControl>
                            <label htmlFor="my-input">End Date</label>
                            <Input type="Date" id="my-input" aria-describedby="my-helper-text" name="enddate" onChange={(e) => onChange(e)} />
                        </FormControl>
                    </Grid>

                </Grid>
                <Button variant="contained" color="primary" onClick={() => handleSubmit()}  >Submit</Button>
            </Paper>
        </Container >

    )
}
export default Campaign
