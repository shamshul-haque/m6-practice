function greeting(greetingHandler, name) {
  greetingHandler(name);
}
function morningHandler(name) {
  console.log("Good Morning! Mr.", name);
}
function nightHandler(name) {
  console.log("Good Evening! Mr.", name);
}
greeting(morningHandler, "Tom Cruise");
greeting(nightHandler, "Tom Hanks");
