import { observer } from 'mobx-react';
import React from 'react';
import store from '../../store/store';
import logo2 from '../../images/logo2.png';
import '../../css/serviceCss.css';

const Service = (observer(({ index }) => {  
   
  const thisService = store.services[index];

  return (
   
    <div className="containerS">
      {thisService ? <>
        <div className='sessionS'  >
    <img src={logo2} alt="logo" className="logoS" />

      <h2>{thisService.name}</h2>
      <p>מחיר: {thisService.price}</p>

      </div>
    </>
    : null}
    </div>
   
     
      
  )
}))

export default Service