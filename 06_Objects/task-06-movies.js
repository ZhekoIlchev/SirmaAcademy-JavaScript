function solve(input) {
  let movies = [];

  for (const commandLine of input) {
    if (commandLine.includes("addMovie")) {
      let movieName = commandLine.split("addMovie ")[1];
      let movie = { name: movieName };
      movies.push(movie);
    } else if (commandLine.includes("directedBy")) {
      let movieName = commandLine.split(" directedBy ")[0];
      let director = commandLine.split(" directedBy ")[1];

      // let movie = movies.find(function (movie) {
      //   return movie.name === movieName;
      // });

      let movie = findMovie(movies, movieName);

      if (movie) {
        movie.director = director;
      }
    } else if (commandLine.includes("onDate")) {
      let movieName = commandLine.split(" onDate ")[0];
      let date = commandLine.split(" onDate ")[1];

      let movie = findMovie(movies, movieName);

      if (movie) {
        movie.date = date;
      }
    }
  }

  printMovies(movies);
}

function findMovie(movies, movieName) {
  let movie;
  for (let element of movies) {
    if (element.name === movieName) {
      movie = element;
      break;
    }
  }

  return movie;
}

function printMovies(movies) {
  for (let movie of movies) {
    let parsedMovie = JSON.stringify(movie);
    console.log(parsedMovie);
  }
}

solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Spinderman 2 onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

console.log("---");

solve([
  "addMovie The Avengers",
  "addMovie Spiderman",
  "The Avengers directedBy Pesho Peshov",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
  "The Avengers directedBy Anthony Russo",
]);