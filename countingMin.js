function CountingMinutesI(str) { 
//   splits by hiyphen
  var time = str.split("-");
    console.log(time);
  
//   splits by hrs and min  of t1 removes am pm
  var time1 = time[0].slice(0,time[0].length-2).split(":");
  console.log(time1);
  
//   determine if am or pm
  var time1AmOrPm = time[0][time[0].length-2];
  console.log(time1AmOrPm + " this is the am/pm of time 1");
  
//   splits by hrs and min  of t2 removes am pm
  var time2 = time[1].slice(0,time[1].length-2).split(":");
  var time2AmOrPm = time[1][time[1].length-2];
  
//   this is just time1 converted to minutes
  var minutes1 = parseInt(time1[0]) * 60 + parseInt(time1[1]);
  console.log(minutes1 + " this is the total minutes of t-1");
  
//   this is just time1 converted to minutes
  var minutes2 = parseInt(time2[0]) * 60 + parseInt(time2[1]);
  
//   if time1 is pm and not 12 process normally
  if (time1AmOrPm === "p" && time1[0] !== "12") {
    minutes1 += 12 * 60;
  }
  //   if time2 is pm and not 12 process normally
  if (time2AmOrPm === "p" && time2[0] !== "12") {
    minutes2 += 12 * 60;
  }
//   if its am and either number is 12 then that number is zero
  if (time1AmOrPm === "a" && time1[0] === "12") {
    minutes1 -= (12 * 60);
  }
  if (time2AmOrPm === "a" && time2[0] === "12") {
    minutes2 -= (12 * 60);
  }

  // if the the first time is greater than it cycles 24 hours
  if (minutes1 > minutes2) {
    return ((24 * 60) - minutes1) + minutes2;
  } else {
    return minutes2 - minutes1;
  }
}

CountingMinutesI("12:00am-1:00pm");