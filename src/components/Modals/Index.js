import React from 'react';
import { Modal as MuiModal  } from '@mui/material';

const index = ({open, children,...rest}) => {
  return (
    <MuiModal open = {open} {...rest}>
       <div style={{ width: `100%`, height: `100%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {children}
      </div>
    </MuiModal>
  )
}

export default index