import React, { useState } from 'react'
import { Input, TextareaAutosize } from '@material-ui/core';
import { Container, Paper, Box, Grid, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './styles/App.css'



const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "vh",
        backgroundColor: theme.palette.grey[300],
        paddingTop: theme.spacing(2),
    },
}));


const Deliverables = () => {
    const classes = useStyles();
    const [image, setImage] = useState("");
    const userTemplate = { instructions: "", do: "", not: "", };
    const [users, SetUsers] = useState([userTemplate]) //add and remove
    const addUser = () => {
        SetUsers([...users, userTemplate]);
    };
    const onChange = (e, index) => {

        const updatedUsers = users.map((user, i) => index === i
            ? (Object.assign({}, user[e.target.name] = e.target.value))
            : user
        );
        SetUsers(updatedUsers);
    };
    const removeUser = (index) => {
        const filteredUsers = [...users];
        filteredUsers.splice(index, 1);
        SetUsers(filteredUsers);
    };
    const showImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
    }
    const handleSubmit = () => {
        console.log(users)
    }
    return (
        <>
            <Container className={classes.root}>
                <h1>Deliverable Types</h1>
                <Paper component={Box} p={4}>
                    <h2>Story</h2>
                    {

                        users.map((user, index) => (
                            <Grid container spacing={3} className={classes.InputGroup} key={index}>



                                <Grid item md={4}>
                                    <label> <h2>Add Instructions </h2> </label>
                                    <TextareaAutosize onChange={(e, index) => onChange(e, index)} name="instructions" style={{ width: "100%" }} aria-label="minimum height" minRows={3} placeholder="Add Clear Instructionss" />

                                </Grid>
                                <Grid item md={4}>
                                    <label><h2>Add Do's {"👍"}</h2></label>

                                    <TextareaAutosize onChange={(e, index) => onChange(e, index)} name="do" style={{ width: "100%" }} aria-label="minimum height" minRows={3} placeholder="Add Do's" />
                                </Grid>
                                <Grid item md={4}>
                                    <label><h2>Add Dont's {"👎"}</h2></label>

                                    <TextareaAutosize onChange={(e, index) => onChange(e, index)} name="not" style={{ width: "100%" }} aria-label="minimum height" minRows={3} placeholder="Add Do's" />
                                </Grid>

                            </Grid>
                        ))
                    }



                    <Button disabled={users.length <= 2 ? false : true} variant="contained" color="primary" style={{ marginTop: "15px" }} onClick=
                        {addUser}>Add More</Button>



                    <IconButton color="secondary" onClick={() => removeUser()}  >
                        <DeleteOutlineIcon />-
                    </IconButton>
                    <h1>Add Image</h1>
                    <div className="img-container">
                        <div className="img-div">
                            {image &&
                                <img src={image} height="20%" width="20%" />
                            }
                        </div >

                        <Input style={{ width: "30%" }} accept="image/*" type="file" onChange={(e) => showImage(e)} />

                    </div>
                    <Button variant="contained" color="primary" onClick={() => handleSubmit()}  >Submit</Button>

                </Paper>
            </Container >
        </>

    )
}

export default Deliverables
