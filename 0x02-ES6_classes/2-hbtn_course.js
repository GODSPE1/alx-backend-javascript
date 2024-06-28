export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be number');
    } else if (!Array.isArray(students)) {
      throw new TypeError('students must be an Array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(lenght) {
    this._length = lenght;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}
