function solve(input) {
  let phonebook = {};

  for (const element of input) {
    let personInfo = element.split(" ");
    let personName = personInfo.shift();
    let personPhoneNumber = personInfo.join(" ");

    phonebook[personName] = personPhoneNumber;
  }

  for (const key in phonebook) {
    console.log(`${key} -> ${phonebook[key]}`);
  }
}

solve(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"]);
solve(["Maria 123", "Samantha 456", "Nicole 789"]);