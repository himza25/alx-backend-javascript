#!/usr/bin/node
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: (emp) => Object.keys(emp).length,
  };
}
