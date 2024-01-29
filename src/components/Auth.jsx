import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, TextField, Typography, CircularProgress } from "@mui/material";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import "./auth.css";
import { AuthContext } from '../context/authcontext/AuthContext';
import { loginCall } from '../apiCalls';

const Auth = () => {

    const [isSignup, setIsSignUp] = useState(false);

    const [inputs, setInput] = useState({
        name : "",
        email : "",
        password: ""
    });
  
    const {user, isFetching, dispatch } = useContext(AuthContext);


    const handleInputChange = (event) => {
        
        setInput((prevState) => ( {
            ...prevState, 
            [event.target.name] : event.target.value,
        }
     ));
    }

      const handleSubmit = async (event) => {
        event.preventDefault();

        const {name, email, password} = inputs;
        const data = { email, password };


        loginCall( data, dispatch )
          
        } 
               
    
    const resetState = () => {
        setIsSignUp(!isSignup);
        setInput({name: "", email: "", password: ""});
    }

  return (
    <div className='login'>
        <form onSubmit={handleSubmit}>
            <Box display= 
            "flex" flexDirection={"column"} 
            maxWidth={400} 
            alignItems={"center"} 
            justifyContent={'center'} 
            margin={"auto"}
            marginTop={5}
            padding={5}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{":hover" : {
                boxShadow : "10px 10px 20px #ccc"
            }
            
            }}>
            

                <Typography variant='h2' padding={3} textAlign={'center'}> {isSignup ? "SignUp" : "Login"} </Typography>
                 { isSignup && <TextField 
                 onChange={handleInputChange}
                 name='name'
                 value={inputs.name}
                 margin='normal' type='text' 
                variant='outlined' 
                placeholder='Username'/> }

                <TextField margin='normal'
                onChange={handleInputChange}
                name='email' 
                value={inputs.email}
                type='email' 
                variant='outlined' 
                placeholder='Email'/>

                <TextField margin='normal'
                onChange={handleInputChange} 
                name='password'
                value={inputs.password}
                type='password' 
                variant='outlined' 
                placeholder='Password'/>

                <Button type="submit" variant='contained' endIcon = {<LoginOutlinedIcon/>}
                color='warning' 
                 sx={ { marginTop : 3 , borderRadius : 4 }}> {isSignup ? "Signup" : "Login"} </Button>

                <Button  onClick={resetState } 
                sx={ { marginTop : 3 , borderRadius : 4 }}>
                Change to { isSignup ? "Login" : "Register" } </Button> 

            </Box>
        </form>
    </div>
  )
}

export default Auth;