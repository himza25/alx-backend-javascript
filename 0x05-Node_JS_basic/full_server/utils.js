const fs = require('fs').promises;

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n');
    const result = {};
    const header = lines[0].split(',');

    lines.slice(1).forEach((line) => {
      if (line.trim() !== '') {
        const student = line.split(',');
        const field = student[3];
        const firstname = student[0];

        if (!result[field]) {
          result[field] = [];
        }
        result[field].push(firstname);
      }
    });

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = readDatabase;
