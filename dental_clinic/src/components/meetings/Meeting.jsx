import { observer } from 'mobx-react';
import { Avatar } from '@mui/material';
import store from '../../store/store';
import logo1 from '../../images/logo1.png'
import '../../css/meetingCss.css'

const Meeting = (observer(({ index ,getColor}) => {  
   
  const thisMeeting = store.meetings[index];
  
  return (
    <div className='session'  >
    {thisMeeting ? (
      <>
        <Avatar src={logo1} alt="logo" ></Avatar>
        <div className={getColor(thisMeeting.dateTime)}>
        <p>Date: {new Date(thisMeeting.dateTime).toLocaleDateString()}</p>
        <p>Time: {thisMeeting.dateTime.split('T')[1]}</p>
        </div>
        <h4>serviceName: {thisMeeting.serviceName}</h4>
        <h4>User-Name: {thisMeeting.NameUser}</h4>
        <p>Phone: {thisMeeting.Phone}</p>
        <p>Email: {thisMeeting.Email}</p>
        
        
      </>
    ) : null}
  </div>
  )
}))

export default Meeting