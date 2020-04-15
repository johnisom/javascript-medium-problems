// Exercise 4

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

const professional = {
  invoice() {
    console.log(`${this.fullName()} is Billing customer`);
  },
  payTax() {
    console.log(`${this.fullName()} is Paying taxes`);
  },
};

const delegate = function delegate(source, destination, name, ...outerArgs) {
  source[name] = (function() {
    return function (...innerArgs) {
      destination[name].call(source, ...outerArgs, ...innerArgs);
    };
  }());
};

const extend = function extend(source, destination) {
  const properties = Object.getOwnPropertyNames(destination);
  const toDelegate = properties.filter((name) => (
    typeof destination[name] === 'function' &&
      !Object.hasOwnProperty.call(source, name)
  ));

  console.log(`toDelegate: ${toDelegate}`);

  toDelegate.forEach((name) => delegate(source, destination, name));
  return source;
};

// Test Cases

var doctor = extend(
  new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'),
  professional,
);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'S
doctor.diagnose();                         // logs 'Diagnosing'

var professor = extend(
  new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'),
  professional,
);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'
