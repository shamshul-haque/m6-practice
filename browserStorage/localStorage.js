const setAge = () => {
  localStorage.setItem("age", 26);
};

const greet = localStorage.getItem("age");
console.log(greet);
