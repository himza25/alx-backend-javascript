export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location.localeCompare(city) === 0)
    .map(student => {
      const gradeEntry = newGrades.find(grade => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeEntry ? gradeEntry.grade : 'N/A'
      };
    });
}
