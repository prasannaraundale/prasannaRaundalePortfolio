import { LightningElement } from 'lwc';
import AlarmClockImmage from '@salesforce/resourceUrl/AlarmClockImage'
export default class AlarmClockApp extends LightningElement {
  
   clockImage = AlarmClockImmage
  currentTime=''
  hours=[]
  minutes=[]
  meridiems=['AM','PM']
   

  connectedCallback(){
   this.createdMinuteOptions()
   this.createdHourOptions()
   this.currentTimeHandler()
  }
  currentTimeHandler(){
   setInterval(()=>{
      let dateTime =new Date();
      let hour = dateTime.getHours();//getHours() returns the hour(0 to 23 ) of a date.
      let min = dateTime.getMinutes();
      let sec = dateTime.getSeconds();
      let ampm = "AM"
      if(hour == 0){
         hour  = 12
         ampm= "AM";
      }
      else if(hour === 12){
         ampm="PM";
      }
      else if(hour >=12){
         hour= hour-12;
         ampm ="PM";
      }
      hour = hour<10 ? "0"+hour : hour;
      min = min<10 ? "0"+min : min;
      sec = sec <10 ? "0"+sec: sec;
   
      this.currentTime=`${hour}:${min}:${sec}:${ampm}`;
   
   },1000)
  }
  createdHourOptions(){
   for(let i=1; i<=12; i++)
   {
      let val=i<10 ?"0"+i:i;
      this.hours.push(val);
   }

  }
  createdMinuteOptions(){
   for(let i=0; i<=59; i++)
   {
      let val=i<10 ?"0"+i:i;
      this.minutes.push(val);
   }

  }
}