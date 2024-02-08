import { observer } from 'mobx-react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import EditBusinessData from './EditBusinessData'
import store from '../../store/store'
import { getBusinessData } from '../../store/server';
import '../../css/businessDataCss.css'
const BusinessData = (observer(() => {
  const business = store.businessData;
  useEffect(() => {
    getBusinessData()
  }, [])
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <><div className="header-container">
      <div className="logo-details-container">
        <div className="logo-container">
          <img src="../src/images/logo1.png" alt="logo" className="logo" />
        </div> <div className="details-container">
          {business ? (
            <> <h2>{business.name}</h2>
              <h4>{business.owner}</h4>
              <p>{business.address}</p>
              <p>{business.phone}</p>
              <p>{business.email}</p>
            </>) : null}</div>
      </div>{store.isLogin && (
        <div className="fab-container">
          <Fab aria-label="edit"><EditIcon onClick={handleOpenModal} /></Fab></div>)}
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>Edit Business Details</DialogTitle>
        <DialogContent>
          <EditBusinessData business={business} handleEdit={() => setOpen(false)} />
        </DialogContent><DialogActions>
          <Button variant="outlined" onClick={handleCloseModal}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div> </>);
}));
export default BusinessData