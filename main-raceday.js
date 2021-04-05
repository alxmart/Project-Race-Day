//-------------------------------------------------
// Project Race Day
//---------------------------------------------------

let raceNumber = Math.floor(Math.random() * 1000);

let reg_Early = true;

let age = 18;

// console.log(raceNumber,reg_Early,age);

if (age > 18  && reg_Early) {
  raceNumber += 1000;
}

// console.log(raceNumber);

if (age > 18  && reg_Early === true) {
  console.log(`Runner ${raceNumber} will race at 09:30 am.`);
} 
  else if (age > 18  &&  !reg_Early) {
  console.log(`Runner ${raceNumber} will race at 11:00 am.`);
} 
  else if (age < 18) {
  console.log(`Runner ${raceNumber} will race at 12:30 pm.`);
} 
  else {
  console.log(`Runner ${raceNumber} Please, see the registration desk.`);
}
