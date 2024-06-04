const fs = require('fs');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter(line => line.trim() !== '');

      const numberOfStudents = students.length;
      console.log(`Number of students: ${numberOfStudents}`);

      const fields = {};

      students.forEach((student) => {
        const [firstname, lastname, age, field] = student.split(',');

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      for (const field in fields) {
        if (Object.hasOwnProperty.call(fields, field)) {
          const list = fields[field].join(', ');
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
        }
      }

      resolve();
    });
  });
};

module.exports = countStudents;
