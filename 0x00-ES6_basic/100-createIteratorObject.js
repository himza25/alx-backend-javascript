export default function createIteratorObject(report) {
  let answer = [];
  /* eslint-disable no-unused-vars */
  for (const [key, val] of Object.entries(report.allEmployees)) {
    answer = [...answer, ...val];
  }
  return answer;
}
