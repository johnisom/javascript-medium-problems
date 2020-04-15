// Exercise 3

const Person = function Person(firstName, lastName, age, gender) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age;
  this.gender = gender;
};

Person.prototype.fullName = function fullName() {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.communicate = function communicate() {
  console.log('Communicating');
};

Person.prototype.eat = function eat() {
  console.log('Eating');
};

Person.prototype.sleep = function sleep() {
  console.log('Sleeping');
};

const Doctor = function Doctor(
  firstName,
  lastName,
  age,
  gender,
  specialization
) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
};

Doctor.prototype = Object.create(Person.prototype);
Object.defineProperty(
  Doctor.prototype,
  'constructor',
  { value: Doctor, enumerable: false },
);

Doctor.prototype.diagnose = function diagnose() {
  console.log('Diagnosing');
};

const Professor = function Professor(
  firstName,
  lastName,
  age,
  gender,
  subject
) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
};

Professor.prototype = Object.create(Person.prototype);
Object.defineProperty(
  Professor.prototype,
  'constructor',
  { value: Professor, enumerable: false },
);

Professor.prototype.teach = function teach() {
  console.log('Teaching');
};

const Student = function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
};

Student.prototype = Object.create(Person.prototype);
Object.defineProperty(
  Student.prototype,
  'constructor',
  { value: Student, enumerable: false },
);

Student.prototype.study = function study() {
  console.log('Studying');
};

const GraduateStudent = function GraduateStudent(
  firstName,
  lastName,
  age,
  gender,
  degree,
  graduateDegree
) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
};

GraduateStudent.prototype = Object.create(Student.prototype);
Object.defineProperty(
  GraduateStudent.prototype,
  'constructor',
  { value: GraduateStudent, enumerable: false },
);

GraduateStudent.prototype.research = function research() {
  console.log('Researching');
};

// Test cases

var person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

var doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

var graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender',
                                          'BS Industrial Engineering',
                                          'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student); 
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
