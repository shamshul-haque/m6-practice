// try catch finally through
function checkAge() {
  const ageField = document.getElementById("age");
  const ageText = ageField.value;
  ageField.value = "";
  const errorMessage = document.getElementById("error");
  try {
    const age = parseInt(ageText);
    if (isNaN(age)) {
      throw "please enter your age";
    } else if (age < 18) {
      throw "bacca kacca not alowed";
    } else if (age > 48) {
      throw "murobbira aisen na";
    } else {
      errorMessage.innerHTML = "let's dance";
      errorMessage.style.textAlign = "center";
    }
  } catch (err) {
    errorMessage.innerText = err;
    errorMessage.style.textAlign = "center";
    errorMessage.style.color = "red";
  } finally {
    console.log(
      "Finally block will not care about try or catch block. It will execute its won code."
    );
  }
  console.log("Next executed code after error handling");
}
