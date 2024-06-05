const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    const database = process.argv[2];
    try {
      const students = await readDatabase(database);
      let output = 'This is the list of our students\n';

      Object.keys(students).sort().forEach((field) => {
        output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });

      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const database = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(database);
      if (!students[major]) {
        response.status(200).send('List: ');
        return;
      }
      response.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
