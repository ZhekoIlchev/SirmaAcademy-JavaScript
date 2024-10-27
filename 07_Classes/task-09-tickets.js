class Ticket {
  constructor(destinationName, price, status) {
    this.destinationName = destinationName;
    this.price = price;
    this.status = status;
  }
}

function solve(tickets, sortBy) {
  let allTickets = [];

  for (const ticketInfo of tickets) {
    let [destination, price, status] = ticketInfo.split("|");
    let ticket = new Ticket(destination, price, status);
    allTickets.push(ticket);
  }

  switch (sortBy) {
    case "destination":
      allTickets.sort((a, b) =>
        a.destinationName.localeCompare(b.destinationName)
      );
      break;
    case "status":
      allTickets.sort((a, b) => a.status.localeCompare(b.status));
      break;
    case "price":
      allTickets.sort((a, b) => a.price - b.price);
      break;
  }

  console.log(allTickets);
}

solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);

console.log("---");

solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);