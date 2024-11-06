const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];
  const days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
  ];

  
  let expDate= document.querySelector(".expiry-date");
  let tempMonth = new Date().getMonth();
  let tempDate =new Date().getDate();

  let futureDates = new Date(2024 , tempMonth , tempDate + 4 , 11 , 30, 0 );

  let futureYear = futureDates.getFullYear();
  let futureDate= futureDates.getDate();
  let futureMonth= months[futureDates.getMonth()];
  let futureHour = futureDates.getHours();
  let futureMinute = futureDates.getMinutes();
  let futureDay = days[futureDates.getDay()];
  let timers= document.querySelectorAll(".counter-container h1");
  let deadLine= document.querySelector(".dead-line");

  

  expDate.innerText=`Giveaway end On ${futureDay}, ${futureDate} ${futureMonth} ${futureYear} ${futureHour}:${futureMinute} AM`;

 // 1s = 1000ms
 // 1m = 60*1000ms
 // 1hr = 60 * 60 * 1000ms
 // 1d = 24 * 60 *60 * 1000ms
 const oneMins = 60*1000;
 const oneHours= 60*60*1000;
 const oneDays = 24*60*60*1000;

 function setTime(){
    let currentTime = new Date();

    let t= futureDates.getTime() - currentTime.getTime();

    let day = Math.floor(t/oneDays);
    let hour = Math.floor((t/oneHours)%24);
    let minute = Math.floor((t/oneMins)%60);
    let secs = Math.floor((t/1000)%60);

    let time = [day,hour,minute,secs];




    timers.forEach((item,index)=>{
        item.innerText=`${time[index]}`;

    })
    if(t<0){
        clearInterval(countDown);
        deadLine.innerHTML=`<h4 class="expired" >Sorry , this giveaway has expired</h4>`;
    }

 }

 let countDown = setInterval(setTime,1000);
setTime();
  