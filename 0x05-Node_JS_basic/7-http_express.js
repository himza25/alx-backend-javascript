#!/usr/bin/node
const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 1245;

const countStudents = async (databasePath) => {
  try {
    const csvData = await fs.readFile(databasePath, 'utf8');
    const outputLines = [];
    const lines = csvData.split('\n');
    const rows = lines.filter((item) => item.trim() !== '');
    outputLines.push(`Number of students: ${rows.length - 1}`);
    const data = [];
    const head = [...rows[0].split(',')];
    rows.splice(0, 1);
    for (let i = 0; i < rows.length; i += 1) {
      const student = {};
      let j = 0;
      head.forEach((item) => {
        student[item] = rows[i].split(',')[j];
        j += 1;
      });
      data.push(student);
    }
    const countField = {};
    data.forEach((item) => {
      if (item.field in countField) {
        countField[item.field] += 1;
      } else {
        countField[item.field] = 1;
      }
    });
    Object.keys(countField).forEach((key) => {
      let names = 'List: ';
      names += data
        .filter((item) => item.field === key)
        .map((item) => item.firstname)
        .join(', ');
      outputLines.push(
        `Number of students in ${key}: ${countField[key]}. ${names}`,
      );
    });
    return outputLines.join('\n');
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const database = process.argv[2];
  res.write('This is the list of our students\n');
  try {
    const studentsData = await countStudents(database);
    res.end(studentsData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
