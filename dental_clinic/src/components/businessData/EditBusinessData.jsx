import { observer } from 'mobx-react';
import { Button, TextField } from '@mui/material';
import  { useState } from 'react';
import { updateBusinessData } from "../../store/server";
const EditBusinessData = (observer(({ business, handleEdit}) => {
  const [editBusiness, setEditBusiness] = useState(business);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateBusinessData(editBusiness).then(x=>{
      handleEdit();
    })
  };
  const handleInputChange = (e) => {
    setEditBusiness({
      ...editBusiness,[e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
      <TextField name="name" type='text' label="name" variant="outlined" value={editBusiness.name} onChange={handleInputChange} margin="dense" />
      <TextField name="address" type='text' label="address" variant="outlined" value={editBusiness.address} onChange={handleInputChange} margin="dense" />
      <TextField name="phone" type='text' label="phone" variant="outlined" value={editBusiness.phone} onChange={handleInputChange} margin="dense" />
      <TextField name="email" type='email' label="email" variant="outlined" value={editBusiness.email} onChange={handleInputChange} margin="dense" />
      <TextField name="owner" type='text' label="owner" variant="outlined" value={editBusiness.owner} onChange={handleInputChange} margin="dense" />
      <TextField name="logo" type='img' label="logo" variant="outlined" value={editBusiness.logo} onChange={handleInputChange} margin="dense" />
      <TextField name="description" type='text' label="description" variant="outlined" value={editBusiness.description} onChange={handleInputChange} margin="dense" />
      <br/>
      <Button  variant="outlined"type="submit">Update</Button>
      </form>
    </div> );
    }))

export default EditBusinessData