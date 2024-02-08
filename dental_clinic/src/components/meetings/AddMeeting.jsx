import { observer } from 'mobx-react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { addMeeting } from '../../store/server.js';
import store from '../../store/store.js'
import '../../css/meetingCss.css'
import {getCurrentDateTime,handleKeyPress} from '../../store/meetingFunc.js'
const AddMeeting = (observer(({handleAddMeeting}) => { 
  const [errorDate,setErrorDate]=useState(false);
  const [formDataMeeting, setFormDataMeeting] = useState({
    serviceName:'', dateTime: '', NameUser: '', Phone: '', Email: '',
  });
  const handleForm =  (e) => { 
    e.preventDefault();
    addMeeting(formDataMeeting).then(x => {
      if(store.isMeeting===false)
      {setErrorDate(true)
      }
      else{if(store.isMeeting===true)
        setErrorDate(false),
        handleAddMeeting();
        setFormDataMeeting({
          serviceName: '',dateTime: '',NameUser: '',Phone: '',  Email: '', });
      }})
  }  
  const handleChange = (e) => {
    setFormDataMeeting({ ...formDataMeeting,[e.target.name]: e.target.value,});
  };
  const servicesNames = store.services.map((service) => service.name);
    return (<> <form onSubmit={handleForm}>
              <h2>Appointment details</h2>
            <FormControl fullWidth sx={{ mt: 1 }} margin="dense" >
        <InputLabel name="serviceName-label">Service Name</InputLabel>
        <Select labelId="serviceName-label" name="serviceName"value={formDataMeeting.serviceName}
          onChange={handleChange} variant="outlined">
          <MenuItem value=''>Select an option</MenuItem>
          {servicesNames?.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select></FormControl><br/>
            <TextField required fullWidth sx={{ mt:1}} type='datetime-local' name="dateTime"  variant="outlined" value={formDataMeeting.dateTime} onChange={handleChange} margin="dense" 
            error={errorDate}
            helperText={errorDate&&'Busy date, schedule another date'} inputProps={{ min: getCurrentDateTime() }}/> 
            <br/>
            <TextField required fullWidth name="NameUser" label="Name" variant="outlined" value={formDataMeeting.NameUser} onChange={handleChange} margin="dense"/>
            <br/>
            <TextField required  fullWidth name="Phone" label="Phone" variant="outlined" value={formDataMeeting.Phone} onChange={handleChange} onKeyPress={handleKeyPress} margin="dense"/>
            <br/>
            <TextField required fullWidth type='email' name="Email" label="Email" variant="outlined" value={formDataMeeting.Email} onChange={handleChange} margin="dense"/>
            <br/>
            <Button variant="outlined" type="submit">Add</Button>
            </form>      
  </> )}))
export default AddMeeting
