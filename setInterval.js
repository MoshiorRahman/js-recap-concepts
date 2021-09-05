console.log('first');
console.log('second');
console.log('third');
console.log('fourth')
// setInterval(() => {
//     console.log('tik')
// }, 1000);
let seconds = 0;
const timeId = setInterval(() => {
    // seconds++;
    // console.log(seconds++);
    console.log(++seconds);
    if (seconds > 13) {
        clearInterval(timeId);
    }
}, 500)
console.log('fifth');