import React, { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const BasicSnackbar = ({ open, onClose, severity, title,  message }) => {
    return (
    <>
        <Snackbar
            open={open}
            autoHideDuration={6000}
            anchorOrigin= {{vertical: 'top', horizontal: 'center'}}
            sx={{ width: '100%', marginTop: '50px', paddingTop: "8px", paddingLeft: "8px" }}
        >
            <Alert
                severity={severity}
                onClose = { onClose } >
                <AlertTitle > { title } </AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    </>
  );
};

export default BasicSnackbar;