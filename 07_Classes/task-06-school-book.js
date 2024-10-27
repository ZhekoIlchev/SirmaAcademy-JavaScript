class Student {
  constructor(name, grade, avgScore) {
    this.name = name;
    this.grade = grade;
    this.avgScore = avgScore;
  }

  set increaseGrade(value) {
    this.grade += value;
  }
}

class SchoolBook {
  data = new Map();

  addStudent(student) {
    if (student.avgScore >= 3) {
      student.increaseGrade = 1;

      if (this.data.has(student.grade)) {
        this.data.get(student.grade).push(student);
      } else {
        this.data.set(student.grade, [student]);
      }
    }
  }
}

function solve(input) {
  let schoolBook = new SchoolBook();

  for (const line of input) {
    let tokens = line.split(", ");

    let studentName;
    let studentGrade;
    let avgScore;

    for (element of tokens) {
      let studentInfo = element.split(": ");

      if (studentInfo[0] === "Student name") {
        studentName = studentInfo[1];
      }

      if (studentInfo[0] === "Grade") {
        studentGrade = Number(studentInfo[1]);
      }

      if (studentInfo[0] === "Graduated with an average score") {
        avgScore = Number(studentInfo[1]);
      }
    }

    let student = new Student(studentName, studentGrade, avgScore);
    schoolBook.addStudent(student);
  }

  for (const [key, value] of schoolBook.data) {
    console.log(`${key} Grade`);
    console.log(`List of students: ${value.map((e) => e.name).join(", ")}`);

    let avgScore =
      value
        .map((e) => e.avgScore)
        .reduce((sum, currentGrade) => {
          return sum + currentGrade;
        }, 0) / value.length;

    //   value.map(e => e.avgScore).reduce(((sum, currentGrade) => sum + currentGrade), 0) / value.length;

    console.log(
      `Average annual score from last year: ${avgScore.toFixed(2)}\n`
    );
    console.log("===\n");
  }
}

solve([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);

console.log("-----------------------");

solve([
  "Student name: George, Grade: 5, Graduated with an average score: 2.75",
  "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
  "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
  "Student name: John, Grade: 9, Graduated with an average score: 2.90",
  "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
  "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
]);