interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName[0]}. ${lastName}`;

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterFace;
}
interface StudentClassInterFace {
  workOnHomework(): string;
  displayName(): string;
  [key: string]: any;
}

class StudentClass implements StudentClassInterFace {
  _firstName: string;
  _lastName: string;
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  workOnHomework = () => 'Currently working';
  displayName = () => this._firstName;
}

export {
  Teacher,
  Directors,
  printTeacherFunction,
  printTeacher,
  StudentClassConstructor,
  StudentClassInterFace,
  StudentClass,
};
