const express = require('express');
const app = express();
var port = process.env.PORT || 8000;

function getMilSec(time) {
  var mills = time.getTime();

  if(mills){
    return mills;
  }else{
    return null;
  }
}
function getNormTime(time) {
  var year = time.getFullYear(),
      month = time.getMonth(),
      day = time.getDate(),
      monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"],
      longMonth = monthNames[month];

  if(day && longMonth && year){
    return `"${day} ${longMonth} ${year}"`;
  }else{
    return null;
  }
}
app.get('*', ((req, res) => {
    var request = new Date(req.originalUrl.replace(/^\//, ''));
    res.send(`{ "unix": ${getMilSec(request)}, "natural": ${getNormTime(request)} }`);
}));

app.listen(port);
console.log('server is running...');
