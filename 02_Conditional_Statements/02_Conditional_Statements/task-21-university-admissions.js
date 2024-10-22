function isStudentAdmitted(score, activities) {
    if (score >= 90) {
        console.log('Admitted')
    } else if ((80 <= score && score <= 89) && (activities >= 2)) {
        console.log('Admitted');
    } else {
        console.log('Not admitted')
    }
}

isStudentAdmitted(85, 3);
isStudentAdmitted(88, 1);
isStudentAdmitted(91, 0);
isStudentAdmitted(75, 12);