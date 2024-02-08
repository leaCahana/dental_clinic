import axios from 'axios';
import Swal from 'sweetalert2';
import store from './store.js';


export async function getServices() {
    try {
        const response = await axios.get('http://localhost:8787/services');
        const services = response.data;
        store.setServices(services);
        return;
    } catch (error) {
        console.error(error);
    }
}
export async function addServiceToServer(service) {
    try {
        const res = await axios.post('http://localhost:8787/service', service)
        if (res.status === 200) {
            console.log("hhhhhh")
            console.log(res.status)
            store.addService(service);
            console.log('addService success');
            return 'success';
        }
    }
    catch (error) {
        if (error.response && error.response.status === 400) {
            console.log('addService failed!');
        } else {
            console.log(error);
        }
    }
}
export async function getMeetings() {
    try {
        const response = await axios.get('http://localhost:8787/appointments');
        const meetings = response.data;
        store.setMeetings(meetings);
        return;
    } catch (error) { console.error(error); }
}

export async function addMeeting(meeting) {
    try {
        const res = await axios.post('http://localhost:8787/appointment', meeting);
        if (res.status === 200) {
            store.addMeeting(meeting);
            store.setIsMeeting(true);
            Swal.fire({
                        position: "top",
                        icon: 'success',
                        title: 'The appointment was successfully set',
                        showConfirmButton: false,
                        timer: 2000,
                        customClass: {
                            icon: 'custom-success-icon',
                          },
                      });
            
        }
      
    }
    catch (e) {
        store.setIsMeeting(false);

        Swal.fire({
            title: 'Oops',
            text: 'הזמן שבחרת תפוס, אנא בחר זמן אחר',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              title: 'red-text',
              content: 'red-text',
            },
          });
        return 'failed';
    }
   }
export async function getBusinessData() {
    try {
        const response = await axios.get('http://localhost:8787/businessData');
        const businessData = response.data;
        store.setBusinessData(businessData);
        return;
    } catch (error) { console.error(error); }
}
export async function updateBusinessData(businessData) {
    const res = await axios.post('http://localhost:8787/businessData', businessData);
    if (res.status === 200) {
        store.editBusinessData(businessData);
        return 'success';
    }
    else {
         return 'failed';
         }
}
