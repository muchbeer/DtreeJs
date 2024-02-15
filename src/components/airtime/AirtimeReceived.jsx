import React, {  useContext, useEffect } from 'react'
import "./airtime.css"
import { DataGrid } from '@mui/x-data-grid';

import { Link, useLocation } from "react-router-dom";
import { airtimesReceivedApi } from '../../context/receivedairtimecontext/receivedApiCalls';
import { ReceivedAirtimeContext } from '../../context/receivedairtimecontext/ReceivedAirtimeContext';

function AirtimeReceived() {

   const { receivedAirtime, isFetching, dispatch } = useContext(ReceivedAirtimeContext);
  const location = useLocation();
  const data = location.state;


    useEffect(() => {
    airtimesReceivedApi ( data,  dispatch);
  }, [data,  dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "phone_number", headerName: "Phone Number", width: 120, flex: 1 },
    {  field: "amount",  headerName: "Amount",  width: 200, flex: 1 }, 
    {  field: "status",  headerName: "Status",  width: 200, flex: 1 }]


  return (
    <div className='airtime'>
      <DataGrid
    rows={ !isFetching && receivedAirtime }
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

export default AirtimeReceived;