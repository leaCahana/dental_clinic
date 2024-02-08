import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link, Outlet } from 'react-router-dom';
import BusinessData from '../businessData/BusinessData';
import '../../css/adminCss.css'

function AdminHome() {
  return (
    <div>
      <div >
        <BusinessData />
      </div>
    <div className="home-container">
    <h3>Admin Home</h3>
        <ButtonGroup size="large" aria-label="large button group">
          <Button variant="outlined">
            <Link to="/admin/services">Services</Link>
          </Button>
          <Button variant="outlined">
            <Link to="/admin/appointment">Appointment</Link>
          </Button>
        </ButtonGroup>
      <br/>
      <Outlet />
    </div>
    </div>
  );
}

export default AdminHome;