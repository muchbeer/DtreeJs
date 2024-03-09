import React, { useContext,  useState } from 'react';
import "./airtime.css"
import { TextField, Box, Button, Typography, InputAdornment }  from '@mui/material';
import { sendSingleAirtimeApi } from '../../context/singleairtimecontext/singleCalls';
import { SingleContext } from '../../context/singleairtimecontext/SingleContext';
import BasicSnackbar from '../common/BasicSnackBar';


export default function OneAirtime() {

    const [inputs, setInput] = useState({ phonenumber : '',  amount : '' });
    const { singleairtime, isFetching,   dispatch, error } = useContext( SingleContext ); 
    const [openStatus, setOpenStatus] = useState(true);
    
  

    const handleInputChange = (event) => {
      event.preventDefault();
        setInput((prevState) => ( {
            ...prevState, 
            [event.target.name] : event.target.value,
        }
     ));
    }

    const handleStatus = (airtime) => {
      if(airtime === null) {
        return
      } else if (airtime.errorMessage === "None") {
        
        return 'success'
      } else {
        
        return 'warning'
      }
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenStatus(false);
      console.log('Closing the bar')
    }

    const handleSendAirtime = async (event) => {
        event.preventDefault();
        
        const { phonenumber, amount} = inputs;
        
        const data = [{ 
          phoneNumber:  '+' + phonenumber, 
          currencyCode:  'TZS', 
          amount: amount}];
        

        sendSingleAirtimeApi(data, dispatch)
        setInput({ phonenumber : '',  amount : '' } );
        setOpenStatus(true);
      } 


  return (
    <div className='airtime'>
     {{error} && <BasicSnackbar
                    open={ error }
                    severity= 'warning'
                    title= 'Error'
                    message= 'There is some issue please refresh the page and try again'
                  />  }

    {   (handleStatus(singleairtime)  === 'success')  &&  <BasicSnackbar
                    open={ openStatus }
                    onClose={ handleClose }
                    severity= 'success'
                    title= 'Sent'
                    message= 'Your airtime is sent please confirm'
                  />  }

{   (handleStatus(singleairtime)  === 'warning')  &&  <BasicSnackbar
                    open={ openStatus }
                    onClose={ handleClose }
                    severity= 'warning'
                    title= 'Failure'
                    message= 'Your airtime was not sent, please check phonenumber, amount and try again'
                  />  }


    <form >
    <Box
  
      display= 
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
            }}
    >
      <Typography variant='h3' padding={4} textAlign={'center'}> Rusha vocha </Typography>
             
      
        <TextField
          onChange={handleInputChange}
          name='phonenumber'
          value={inputs.phonenumber}
          label = 'Phone Number'
          placeholder='255754100100'
          variant='outlined'
          type='text'
          required
          helperText = {!inputs.phonenumber ? 'Phonenumber is required' : ''}
          style={{ width: 230}}
        />
        <TextField
          onChange={handleInputChange}
          name='amount'
          value={inputs.amount}
          label = 'Amount'
          placeholder='500'
          variant='outlined' 
          type='number'
          sx={ { marginTop : 3 }}
          required
          helperText = {!inputs.amount ? 'Amount is required' : '' }
          InputProps = {{ 
            startAdornment: 
            <InputAdornment  position= 'start'> TZS </InputAdornment> }}
        />
    
    
      <Button variant="outlined" type='submit'  
              sx={ { marginTop : 4 , borderRadius : 4 }}
              disabled= {isFetching}
              onClick={ handleSendAirtime }>Send Airtime</Button>
     
    </Box>

    </form>

    </div>
        
  )
}
