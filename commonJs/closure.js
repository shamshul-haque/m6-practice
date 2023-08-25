// closure gives you access to an outer function's scope from an inner function
function stopWatch() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const watch = stopWatch();
console.log(watch());

function init() {
  var name = "Sujat";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();
