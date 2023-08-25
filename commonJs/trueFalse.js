/* 
Truthy:
    1. true
    2. any number +ve or -ve
    3. any string
    4. empty object {}
    5. empty array []
    6. all other values

Falsy:
    1. false
    2. 0
    3 empty string ""
    4. undefined
    5. null
    6. NaN
*/

// normal check
const x = "false";
if (x) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// check truthy
if (!!x) {
  console.log("truthy");
}

// check falsy
if (!x) {
  console.log("falsy");
}
