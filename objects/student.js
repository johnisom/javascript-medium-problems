// Exercise 4

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
      return [...this.courses].map((course) => Object.assign({}, course));
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
  };
};
