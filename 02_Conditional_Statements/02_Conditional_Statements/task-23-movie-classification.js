function determineMovieCategory(age) {
    if (age < 13) {
        console.log('Only U-rated movies.')
    } else if (13 <= age && age <= 17) {
        console.log('U and PG-13 rated movies.');
    } else {
        console.log('All movies.')
    }
}

determineMovieCategory(10);
determineMovieCategory(16);
determineMovieCategory(21);