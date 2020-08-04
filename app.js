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
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway=document.querySelector(".giveaway");
const deadlineformat=document.querySelectorAll(".deadline-format h4");
const deadline=document.querySelector(".deadline");
console.log(deadlineformat);

//for changinginend date after expired 
 /*const tempdate =new Date();
const tyear=tempdate.getFullYear();
const tmonth=tempdate.getMonth();
const tdate=tempdate.getDate();
const thours=tempdate.getHours();
const tmins=tempdate.getMinutes();

const futuredate= new Date(tyear,tmonth,tdate+10,thours,tmins);


*/


const futuredate=new Date(2021,2,19,0,0);
const year =futuredate.getFullYear();
const hour =futuredate.getHours();
const date=futuredate.getDate();
const mins =futuredate.getMinutes();
const month =months[futuredate.getMonth()];
const day=weekdays[futuredate.getDay()];
const p=hour>12?"pm":"am";


giveaway.innerHTML=`giveaway ends on ${day} ,${date} ${month} ${year} ${hour}:${mins}${p}`;

const futuretime=futuredate.getTime();
function getRemainingTime(){
const today=new Date().getTime();
const dif=futuretime-today;
//console.log(dif);

//1sec=1000ms
//60sec=1min
//60min=1hr
//24hr=1day
const oneday=24*60*60*1000;
const onehour=60*60*1000;
const onemin=60*1000;

const days=Math.floor(dif/oneday);

const hours=Math.floor((dif%oneday)/onehour);
const minutes=Math.floor((dif%onehour)/onemin);
const seconds=Math.floor((dif%onemin)/1000);
/*console.log(days);
console.log(hours);
console.log(minutes);
console.log(seconds);*/



function format(value){
  if(value<10){
    return `0${value}`;
  }
  else {
    return value;
  }
}
 
 
 const countdown=[days,hours,minutes,seconds];
  deadlineformat.forEach(function(e,index){
    e.innerHTML=format(countdown[index]);
  });
  if(dif<0 ){
    clearInterval(countdown);
    deadline.innerHTML`<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  
  }
}

let countdown= setInterval(getRemainingTime,1000);

getRemainingTime();
