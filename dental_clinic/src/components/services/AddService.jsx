import { observer } from 'mobx-react';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { addServiceToServer } from '../../store/server';
const AddService = (observer(({handleAdd}) => {
  const [service, setService] = useState({
  name: '',
  price: '',
});
const handleFormSubmit = (e) => {
  e.preventDefault();
  addServiceToServer(service).then(() => {
    handleAdd() 
  });
  setService({
    name: '',
    price: '',
  });
};
  const handleInputChange = (e) => {
    setService({ ...service,[e.target.name]: e.target.value,});
  }
    return ( <>
              <h2>Add Service</h2>
            <form onSubmit={handleFormSubmit}>
            <TextField required name="name" type='text' label="serviceName" variant="outlined" value={service.name} onChange={handleInputChange} margin="dense" />
            <br/>
            <TextField required name="price" label="servicePrice" variant="outlined" value={service.price} onChange={handleInputChange} margin="dense"/>
            <br/>
            <Button variant="outlined" type="submit">Add</Button>
            </form>
                

        </>
    )
}))

export default AddService
