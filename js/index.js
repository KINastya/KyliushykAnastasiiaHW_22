class Student {
    constructor(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.grades = [];
    this.attendance = new Array(25).fill(undefined);
    }

    present() {
    const emptyIndex = this.attendance.findIndex((entry) => entry === undefined);
    if (emptyIndex !== -1) {
        this.attendance[emptyIndex] = true;
    } else {
        console.log('Attendance array is full.');
    }
    }

    absent() {
    const emptyIndex = this.attendance.findIndex((entry) => entry === undefined);
    if (emptyIndex !== -1) {
        this.attendance[emptyIndex] = false;
    } else {
        console.log('Attendance array is full.');
    }
    }

    getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
    }

    calculateGPA() {
    if (this.grades.length === 0) {
        return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
    }

    summary() {
    const averageGrade = this.calculateGPA();
    const attendanceRate = this.attendance.filter(Boolean).length / this.attendance.length;

    if (averageGrade > 90 && attendanceRate > 0.9) {
        return 'Well done!';
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
        return 'Good, but you can do better.';
    } else {
        return 'Radish!';
    }
    }
}

const student1 = new Student('John', 'Doe', 2000);
const student2 = new Student('Alice', 'Smith', 2001);
const student3 = new Student('Bob', 'Johnson', 2002);

student1.present();
student2.absent();

student1.grades = [85, 92, 88];
student2.grades = [95, 90, 91, 89];
student3.grades = [80, 85, 78, 92, 87];

console.log(student1.getAge());
console.log(student2.calculateGPA());

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());
