function calculateGrade(grade) {
    let gradeAsLetter;

    if (grade <= 59) {
        gradeAsLetter = 'F';
    } else if (grade <= 69) {
        gradeAsLetter = 'D';
    } else if (grade <= 79) {
        gradeAsLetter = 'C';
    } else if (grade <= 89) {
        gradeAsLetter = 'B';
    } else {
        gradeAsLetter = 'A';
    }

    console.log(gradeAsLetter);
}

calculateGrade(95);
calculateGrade(82);
calculateGrade(76);
calculateGrade(65);
calculateGrade(45);