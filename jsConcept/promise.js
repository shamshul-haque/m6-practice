const getData = new Promise((resolve, reject) => {
  const num = Math.round(Math.random() * 10);
  if (num < 5) {
    resolve("got the number");
  } else {
    reject("No data available");
  }
});
getData
  .then((data) => console.log(data))
  .catch((err) => console.log("ERR:", err));

async function f() {
  let result = "first!";
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  result = await promise;
  console.log(result);
}
f();
