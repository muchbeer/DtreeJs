import React, {  useContext, useEffect } from 'react'
import "./airtime.css"
import { DataGrid } from '@mui/x-data-grid';
import { viewAirtimeApi } from '../../context/viewairtimecontext/viewApiCalls';
import { Link } from "react-router-dom";
import { ViewAirtimeContext } from '../../context/viewairtimecontext/ViewAirtimeContext';


function AirtimeMain() {

    const { viewAirtime, isFetching, dispatch } = useContext(ViewAirtimeContext);
  
  
    useEffect(() => {
        viewAirtimeApi (dispatch);
      }, [dispatch]);
    

      console.log('Retrieve main airtime : ' + JSON.stringify(viewAirtime))
      
    const columns = [
        { field: "id", headerName: "ID", width: 90, flex: 1 },
        
        { field: "total_amount", headerName: "Total Amount", width: 120, flex: 1 },

        {  field: "connect_date",  headerName: "Date Sent",  width: 200, flex: 1 },
        
        {
          field: "action",
          headerName: "Action",
          width: 150, flex: 1, 
          renderCell: (params) => {
            return (
              <>
                
                <Link to= {{ pathname: "/viewairtimereceived"}}  state={{ id : params.row.id }}>
                  <button className="userListEdit">Airtime Received</button>
                </Link>

              
              </>
            );
          },
        },
      ];
      
      
  return (
    <div className='airtime'>

    <DataGrid
    rows={ !isFetching && viewAirtime }
    disableSelectionOnClick
    columns={columns}
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 10 },
      },
    }}
    pageSizeOptions={[10, 20]}
    checkboxSelection />
  </div>
  )
}

export default AirtimeMain