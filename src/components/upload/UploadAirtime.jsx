import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./upload.css"
import * as Excel from 'xlsx';
import { Button, Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


function UploadAirtime() {

  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [fileName, setFileName] =useState(null);
  const rows = []


  const columns = [
    { field: "target", headerName: "Target", width: 120 },
    { field: "messageId", headerName: "MessageId", width: 120 },
    { field: "createTime", headerName: "CreateTime", width: 120}
  ]

  // submit state
  const [excelData, setExcelData] = useState(null);

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

      // submit event
  const handleFileSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = Excel.read(excelFile,{type: 'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = Excel.utils.sheet_to_json(worksheet);
      const dataAirtime = data.slice(0,10);
      setExcelData(dataAirtime);


    }
  
  }

  

  return (
    <div className='uploadAirtime'>
        <div className="userTitleContainer">
        <h2 className="userTitle">Upload and View Excel Sheets</h2>
        <Link to="/uploadairtime">
          <button className="userAddButton">Send Airtime</button>
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

            <div>
              { excelData ? 
                  (<div> 
                    <DataGrid
                      rows={  excelData.map((value) => {
                        let rowData = {}

                        Object.keys(value).map((inKey)=> {
            const inObjects = value[inKey];
           
              rowData[inKey] = inObjects
            console.log(`Inside object key is : ${inKey}`)
            console.log(`Inside object is now : ${inObjects}`)
        })

        rows.push(rowData);
        console.log("now I made it happen");
        console.log(rows);
        
        return rows;
                            })  }
                          disableSelectionOnClick
                          columns={ columns }
                          getRowId={ (row) =>  row.ID }
                          initialState={{
                          pagination: {
                          paginationModel: { page: 0, pageSize: 10 },
                                      },
                                  }}
                          pageSizeOptions={[10, 20]}
                          checkboxSelection />
                  </div>) :
                  ( <div> No File is uploaded yet! </div> ) }
            </div>

            </div>
            
        </div>

    </div>
  )
}

export default UploadAirtime;