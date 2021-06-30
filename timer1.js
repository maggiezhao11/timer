let userInput = process.argv.slice(2);
let newUserInput = userInput.sort((a,b) => a - b);
let numberOfInput = 0;

const beep = () => {
  process.stdout.write('\x07'); 
}
const scheduleBeep = (delay) => {
setTimeout(beep, delay * 1000);
}
for (const num of userInput) {
  if (!num) {
    return;
  } else if (num < 0) {
    continue;
  }
  scheduleBeep(num);
}

// for (let num of newUserInput) {
//   if (!newUserInput) 
//     return;
//   let beep = setInterval (() => {
//     process.stdout.write('\x07'); 
//     numberOfInput ++;
//     console.log(numberOfInput);
//     if (numberOfInput > userInput.length) {
//       clearInterval (beep);
//     }
//   }, num * 1000)
// }; 

 








//   process.stdout.write('\r' + arraySpinner[++interval % arraySpinner.length]);
  //     if (interval > 5 ) {
  //       clearInterval (space);
  //       process.stdout.write('\n=> d2\n');
  //     }
  //     }, 200);



  // if (num < 0) {

  // }