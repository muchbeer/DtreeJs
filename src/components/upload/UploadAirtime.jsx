import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import "./upload.css"
import * as Excel from 'xlsx';
import { Button, Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AirtimeContext } from '../../context/airtimecontext/AirtimeContext';
import { sendAirtimeApi } from '../../context/airtimecontext/airtimeCalls';


function UploadAirtime() {

  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [fileName, setFileName] =useState(null);
  const {airtime, isFetching, dispatch } = useContext(AirtimeContext);

  const columns = [
    { field: "id", headerName: "ID", width: 20, flex: 1 },
    { field: "number", headerName: "PhoneNumber", width: 120, flex: 1 },
    { field: "amount", headerName: "Amount", width: 120 , flex : 1 },
  ]

  const [excelDisplay, setExcelDisplay] = useState([]);

   

  function addExcelItems(inputItem) {
    setExcelDisplay(prevItems => {
      return [...prevItems, inputItem];
    });
  }

    // onchange event
    const handleFile=(e)=>{
      let fileTypes = ['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','text/csv'];
      let selectedFile = e.target.files[0];
      if(selectedFile){
        if(selectedFile&&fileTypes.includes(selectedFile.type)){
          setFileName(selectedFile.name);
          setTypeError(null);
          let reader = new FileReader();
          reader.readAsArrayBuffer(selectedFile);
          reader.onload=(e)=>{
            setExcelFile(e.target.result);
          }


          
        }
        else{
          setTypeError('Please select only excel file types');
          setExcelFile(null);
        }
      }
      else{
        console.log('Please select your file');
      }
    }

      //call the api now 
    const sendAirtime = async (e) => {
      e.preventDefault();
      
      const airtime_excel =  excelDisplay.map((value) =>  {
        const phoneNum = value.number
        const amount = 'TZS ' + value.amount.toString();
        const airtime_object = {phoneNumber: phoneNum.toString(), amount: amount}
        return airtime_object
     })
      
   
     sendAirtimeApi(airtime_excel, dispatch);
     const retrieveJSON = JSON.stringify(airtime);
     console.log(retrieveJSON);
    }
      // submit event
  const handleFileSubmit=(e)=>{
  
    
    if(excelFile!==null){
      
      const workbook = Excel.read(excelFile,{type: 'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = Excel.utils.sheet_to_json(worksheet);

      data.forEach((value, keyin) => {
    
        const entryz = Object.entries(value)
        const id = keyin+1;
        console.log('The number entries is now : ' + entryz[0][1]);

        addExcelItems({id: id, number: entryz[0][1], amount: entryz[1][1]})

      })

    }

    if(excelDisplay.length > 0 ) {
      const excejson = JSON.stringify(excelDisplay);
      console.log("Now I can view the data" +  excejson);
    }
    
  }

  return (
    <div className='uploadAirtime'>
        <div className="userTitleContainer">
        <h2 className="userTitle">Upload and View Excel Sheets</h2>
        <Link to="/uploadairtime">
          <button className="userAddButton" onClick={ sendAirtime }>Send Airtime</button>
        </Link>
      </div>

      <div className="userShow">
          <div className="userShowTop">
          
          </div>
            <div className="wrapper">

            <Box p={3} border= "1px dashed #ccc" borderRadius={8} textAlign= "center">

              <input  
                type='file'
                accept='.xlsx, .xls'
                required 
                onChange={handleFile}
                style={ { display : 'none' } }
                id='excel-file-input'
              />
              <label htmlFor='excel-file-input'>
                    <Button variant='outlined' component='span'>
                      Select Excel File
                    </Button> </label>

              {  excelFile && ( <div> 
                <Typography variant='subtitle1' mt={2}>
                  Selected File : {fileName}
                </Typography>
                <Button 
                  variant='contained'
                  color='primary'
                  onClick={handleFileSubmit}> Retrieve file</Button>
              </div>  
              )}

              {  typeError && ( <Typography variant='body2' color='secondary' mt={2}>
                {typeError}
              </Typography> )  }
               
            </Box>

            <div className='uploadExcel'>
             
                  {
                    excelDisplay.length > 0 && (
                      <DataGrid
                        rows={ excelDisplay }
                        disableSelectionOnClick
                        columns={columns}
                        initialState={{
                          pagination: {
                          paginationModel: { page: 0, pageSize: 10 },
                        },
                        }}
                        pageSizeOptions={[10, 20]}
                        checkboxSelection />
                      
                      )
                  }
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default UploadAirtime;