// set time out
const timeoutId = setTimeout(() => {
  clearTimeout(10000);
  console.log("lazy logged");
}, 10000);

// set interval
let num = 10;
const intervalId = setInterval(() => {
  console.log(num--);
  if (num === 1) {
    clearInterval(intervalId);
  }
}, 1000);
