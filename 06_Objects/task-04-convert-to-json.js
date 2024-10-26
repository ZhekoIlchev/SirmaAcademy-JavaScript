function convertToJSON(firstName, lastName, eyeColor) {
  let person = {
    firstName,
    lastName,
    eyeColor,
  };

  let toJSON = JSON.stringify(person);
  console.log(typeof toJSON);
  console.log(toJSON);
  console.log(typeof person);
  console.log(person);
}

convertToJSON("Ivan", "Ivanov", "blue");
convertToJSON("Maria", "Petrova", "brown");