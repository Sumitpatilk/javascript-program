
class Person {
    constructor(fullName, age, profession) {
        this.fullName = fullName;
        this.age = age;
        this.profession = profession;
    }
}
class Student extends Person {
    constructor(graducation, fullName, age, profession) {
        super(fullName, age, profession);
        this.graducation = graducation;
    }
}
const stdElon = new Student("BE CSC", "Elon Musk", 54, "Student");
console.log(stdElon);
