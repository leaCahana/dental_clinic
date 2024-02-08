import { makeObservable, observable, action } from "mobx";
import { addServiceToServer } from './server';


class DataStore {
    isLogin = false;
    isMeeting=true;
    services = [];
    meetings = [];
    businessData=null;

    
    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
            services: observable,
            setServices: action,
            addService: action,
            meetings: observable,
            setMeetings: action,
            addMeeting: action,
            businessData:observable,
            setBusinessData:action,
            editBusinessData:action,
            isMeeting:observable,
            setIsMeeting:action,
           
        })
    }

    setIsLogin(status) {
        this.isLogin = status;
    }
    setServices = (service) => {

        if (Object.keys(service).length === 0){
            defaultServices.map(s => addServiceToServer(s))
        }
        else{
            this.services=service;
        }
}

    addService = (addService) => {
        
        this.services = [...this.services,addService ];
    }
   
    setMeetings = (meeting) => {
        this.meetings = meeting;
          
    }
    addMeeting=(meeting)=>{
        this.meetings=[...this.meetings, meeting]
    }
   
    setIsMeeting = (status) => {
        this.isMeeting = status;
    }
   
    setBusinessData = (data) => {
      
        if (data!==undefined&&data.name!==undefined) {
            this.businessData = data;
        }
        else {
            this.businessData = defaultBusinessData;
        }
        
    }

    editBusinessData(formData) {
        this.businessData = formData;
    }
};
export default new DataStore();

const defaultBusinessData = {
          name:"Dental Clinic",
          address: "רבי עקיבא 65 בני ברק",
          phone: "03-5771111",
          email: "dental-clinic@gmail.com",
          owner:"דוקטור גבריאל זמיר",
          logo: '../logo2.png',
 }
const defaultServices=[{
    name: "טיפול שיניים",
    price:'50-450 ש"ח',
 },
 {
    name: "בדיקה",
    price:'70 ש"ח', 
 },
 {
    name: "פגישת יעוץ",
    price:'150 ש"ח',
 },
]
       