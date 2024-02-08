import { observer } from 'mobx-react';
import { Button, Dialog, DialogContent, DialogActions } from '@mui/material';
import React, { useState } from 'react';
import BusinessData from '../businessData/BusinessData'
import ServiceList from '../services/ServiceList'
import AddMeeting from '../meetings/AddMeeting';
import Footer from '../footer/Footer';
import '../../css/userCss.css'

const UserHome = (observer(() => {
  const [open, setOpen] = useState(false);
     const handleOpenModal = () => {
       setOpen(true); };
     const handleCloseModal = () => {
       setOpen(false) };
  
  return (
    <>
          <BusinessData />
          <div className='home-container'>
          <ServiceList />
    <div className="btn">
     <Button  variant="contained" onClick={handleOpenModal}>Make an appointment</Button>
     </div>
     <br/>
          <Dialog open={open} onClose={handleCloseModal} style={{'zIndex':20}}>
            <DialogContent>
             <AddMeeting handleAddMeeting={() => setOpen(false)}  />  
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={handleCloseModal}>Close</Button>
              {/* <Button variant="outlined" onClick={() => setOpen(false)}>Save</Button> */}

            </DialogActions>
          </Dialog>
          </div>
          <Footer/>
  </>  
  )
}))

export default UserHome