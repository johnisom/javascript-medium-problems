// Exercise 5

const createStudent = function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      return this.courses;
    },
    addNote(code, note) {
      const course = this.getCourseByCode(code);
      if (!course) return;

      if (course.note) {
        course.note += `; ${note}`;
      } else {
        course.note = note;
      }
    },
    addGrade(code, grade) {
      const course = this.getCourseByCode(code);
      if (course) {
        course.grade = grade;
      }
    },
    updateNote(code, note) {
      const course = this.getCourseByCode(code);
      if (course) {
        course.note = note;
      }
    },
    viewNotes() {
      this.courses.filter(({ note }) => note).forEach(({ name, note }) => {
        console.log(`${name}: ${note}`);
      });
    },
    getCourseByCode(code) {
      return this.courses.filter((course) => course.code === code)[0];
    },
    getCourseByName(name) {
      return this.courses.filter((course) => course.name === name)[0];
    },
  };
};

const createSchool = function createSchool() {
  return {
    students: [],
    addStudent(name, year) {
      if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
        const newStudent = createStudent(name, year);
        this.students.push(newStudent);
        return newStudent;
      } else {
        console.log('Invalid Year.');
        return null;
      }
    },
    enrollStudent(name, course) {
      const student = this.getStudentByName(name);
      if (student) {
        student.addCourse(course);
      }
    },
    addGrade(studentName, courseCode, grade) {
      const student = this.getStudentByName(studentName);
      if (student) {
        student.addGrade(courseCode, grade);
      }
    },
    getReportCard(student) {
      student.listCourses().forEach(({ name, grade }) => {
        console.log(`${name}: ${grade === undefined ? 'In progress' : grade}`);
      });
    },
    courseReport(courseName) {
      const studentGrades = this.students.map((student) => {
        const course = student.getCourseByName(courseName) || {};
        return {name: student.name, grade: course.grade };
      }).filter(({ grade }) => grade !== undefined);

      if (studentGrades.length === 0) return;

      const courseAverage = studentGrades.reduce((total, { grade }) => (
        total + grade
      ), 0) / studentGrades.length;

      console.log(`=${courseName} Grades=`);

      studentGrades.forEach(({ name, grade }) => {
        console.log(`${name}: ${grade}`);
      });

      console.log('---');
      console.log(`Course Average: ${courseAverage}`);
    },
    getStudentByName(name) {n
      return this.students.filter((student) => student.name === name)[0];
    },
  };
};

const school = createSchool();
const foo = school.addStudent('foo', '3rd');
const bar = school.addStudent('bar', '1st');
const qux = school.addStudent('qux', '2nd');

foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.addCourse({ name: 'Physics', code: 202 });

school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);

bar.addCourse({ name: 'Math', code: 101 });

school.addGrade('bar', 101, 91);

qux.addCourse({ name: 'Math', code: 101 });
qux.addCourse({ name: 'Advanced Math', code: 102 });

school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);

school.getReportCard(foo);
/*
Math: 95
Advanced Math: 90
Physics: In progress
*/

school.courseReport('Math');
/*
=Math Grades=
foo: 95
bar: 91
qux: 93
---
Course Average: 93
*/

school.courseReport('Advanced Math');
/*
=Advanced Math Grades=
foo: 90
qux: 90
---
Course Average: 90
*/

school.courseReport('Physics'); // nothing
