// class
class Product {
  country = "Bangladesh";
  constructor(name) {
    this.name = name;
  }
}
// object
const lenovo = new Product("lenovo");
console.log(lenovo);

// class
class Teacher {
  constructor(n, s) {
    this.name = n;
    this.subject = s;
  }
  quality(sir) {
    console.log(`${sir} khub e valo poray`);
  }
}
// object
const sir = new Teacher("Sujat", "Software");
sir.quality("sir");
console.log(sir);

// class
class Person {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
  sleep() {
    console.log(`${this.name} is sleeping now`);
  }
  activity() {
    this.sleep();
  }
}
// object
const person = new Person("sujat", 26);
person.sleep();
console.log(person);
