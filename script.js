 var secondhand = document.querySelector('.sec-hand');

 function setSec(argument) {
   var now = new Date();
   var seconds = now.getSeconds();
   var secDegrees = ((seconds / 60) * 360) + 90;
   secondhand.style.transform = `rotate(${secDegrees}deg)`;
   console.log(seconds);
 }



 var minhand = document.querySelector('.min-hand');

 function setMin(argument) {
   var now = new Date();
   var minutes = now.getMinutes();
   var minDegrees = ((minutes / 60) * 360) + 90;
   minhand.style.transform = `rotate(${minDegrees}deg)`;
   console.log(minutes);
 }



 var hourhand = document.querySelector('.hour-hand');

 function setHour(argument) {
   var now = new Date();
   var Hour = now.getHours();
   var hourDegrees = ((Hour / 12) * 360) + 90;
   hourhand.style.transform = `rotate(${hourDegrees}deg)`;
   console.log(Hour);
 }



 setInterval(setSec, 1000);
 setInterval(setHour, 1000);
 setInterval(setMin, 1000);