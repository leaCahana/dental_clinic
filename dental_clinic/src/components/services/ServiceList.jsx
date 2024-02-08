import { observer } from 'mobx-react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
import Service from './Service.jsx';
import AddService from './AddService.jsx';
import { getServices } from '../../store/server.js';
import store from '../../store/store.js';
const ServiceList = (observer(() => {
    useEffect(() => {
      if (!store.services.length > 0)
          getServices()
    }, [])
    const [open, setOpen] = useState(false);
    const handleOpenModal = () => {
      setOpen(true);
    };
    const handleCloseModal = () => {
      setOpen(false); 
    };
    return (
        <><h3 className='title'>Services</h3>
        <div className='services'>
          {console.log(store.services)}
        {store.services.map((_, index) => (
          <Service key={index} index={index} />
        ))}
        </div>
<br/>
{store.isLogin && (
  <><div className='color-fub'>
    <Fab  aria-label="add">
        <AddIcon onClick={handleOpenModal}/>
      </Fab>
      </div>
      <br/>
<Dialog open={open} onClose={handleCloseModal}>
  <DialogContent>
     <AddService handleAdd={() => setOpen(false)}  />  
  </DialogContent>
  <DialogActions>
    <Button variant="outlined" onClick={handleCloseModal}>Cancel</Button>
  </DialogActions>
</Dialog></>)}
</> )
}))
export default ServiceList