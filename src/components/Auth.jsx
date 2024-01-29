import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, Button, TextField, Typography, CircularProgress } from "@mui/material";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useNavigate } from 'react-router-dom';
import "./auth.css";
import Cookies from 'js-cookie';


const Auth = () => {
    const navigate = useNavigate();
    const [isSignup, setIsSignUp] = useState(false);

    const [inputs, setInput] = useState({
        name : "",
        email : "",
        password: ""
    });

    const [error, setError] = useState(null);

    const authenticateBool = async() => {
        const {name, email, password} = inputs;
        const data = { email, password };
 
        
  try {
            const response = await axios.post("api/auth/login", data);
       
            if (response.data  && Object.keys(response.data).length) {
                console.log("Successful signed");
                const expirationTime = new Date(new Date().getTime() + 60000);
                
                Cookies.set('auth', JSON.stringify(data), { expires: expirationTime });
                
                return true;
            }  else {
                console.log("No username found")
                alert("No username found please try again");
                return false; 
            }
            
        } catch (error) {
            setError(error);
            return false;
           
        }  
        
        
    
      
    }


    axios.defaults.withCredentials = true;

    useEffect( () => {

        axios.get('api/auth/protected').then(users => {

        if(users.data.user) {
          navigate('/protected');
        } else {
          navigate('/login');
        }
        
        }).catch( error => {
          console.log(`Session error is : ${error}`);
        })
    
      }, [])

    const handleInputChange = (event) => {
        
        setInput((prevState) => ( {
            ...prevState, 
            [event.target.name] : event.target.value,
        }
     ));
    }

      const handleSubmit = async (event) => {
        event.preventDefault();


            const authBool = await authenticateBool();

            if(authBool) {
                console.log("Login successful status 200");
                navigate('/protected');
                window.location.reload(false);
            } else {
                console.log("Login failed");
                navigate('/login');
                setInput({email: "", password: ""});
            }

            
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