// Exercise 10

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
  const students = [];
  const validYears = ['1st', '2nd', '3rd', '4th', '5th'];
  return {
    addStudent(name, year) {
      if (validYears.includes(year)) {
        const newStudent = createStudent(name, year);
        students.push(newStudent);
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
      const studentGrades = students.map((student) => {
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
    getStudentByName(name) {
      return students.filter((student) => student.name === name)[0];
    },
  };
};
