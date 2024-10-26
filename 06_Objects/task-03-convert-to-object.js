function convertJSONToObject(JSONInput) {
  console.log("First iteration...");

  let person = JSON.parse(JSONInput);

  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}

function convertJSONToObject2(JSONInput) {
  console.log("Second iteration...");

  let person = JSON.parse(JSONInput);

  for (let key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`);
  }
}

convertJSONToObject('{"name": "Ivan", "age": 40, "town": "Sofia"}');
convertJSONToObject2('{"firstName": "Ivan", "latName": "Ivanov"}');