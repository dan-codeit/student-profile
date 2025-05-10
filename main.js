import { students } from "./studentData.js";

// Short Bio of each of our students and their performance in the Access Bank Quiz
console.log(
  `\nFederal University of Technology, Akure(FUTA)\nOverview of students and their performance in the Access Bank Quiz\n`
);
const studentMessage = students.map(
  ({ department, firstName, lastName, gender, age, level, score, courses }) => {
    const role = gender === "Female" ? "She" : "He";
    return `${firstName} ${lastName} is a ${age} year old. ${role} is one of the students in ${level} levels in FUTA studying ${department}. \n${role} has a score of ${score} in the recent Access Bank quiz and is currently offering the following courses: ${courses.join(
      ", "
    )}.\n`;
  }
);
console.log(studentMessage.join("\n"));




//
console.log("\n");
//Access Bank Quiz Representative Details and their scores
console.log(`\nFederal University of Technology, Akure`);
console.log("Departmental Representative for Access Bank Quiz");
console.log("----------------------------");
students.forEach(
  ({ department, firstName, lastName, gender, age, level, score, courses }) => {
    console.log(`Full Name: ${firstName} ${lastName}`);
    console.log(`Gender: ${gender}`);
    console.log(`Age: ${age}`);
    console.log(`Level: ${level}`);
    console.log(`Score: ${score}`);
    console.log(`Department: ${department}`);
    console.log(`  Courses: ${courses.join(", ")}`);
    console.log("----------------------------");
  }
);
