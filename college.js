// Entities -> Student, Professor -> CollegeUser (Person/HumanBeing)

// inheritance

class CollegeUser {
  constructor(name, gender) {
    // this -> Student object, Professor object, any subclass object of CollegeUser
    this.name = name;
    this.gender = gender;
  }

  getDetails() {
    // this -> Student object, Professor object, any subclass object of CollegeUser
    return `Name: ${this.name}\nGender: ${this.gender}`;
  }
}

class Student extends CollegeUser {
  constructor(name, gender, roll, marks) {
    super(name, gender); // parent class contructor
    // Internally
    // CollegeUser.constructor(name, gender, this)

    // this -> Student object

    this.roll = roll;
    this.marks = marks;
  }

  // method overriding / method shadowing
  getDetails() {
    // this -> Student object
    return `${super.getDetails()}\nRoll: ${this.roll}`; // super.getDetails() forcefully calls the super class getDetails()
  }
}

class Professor extends CollegeUser {
  constructor(name, gender, subjects) {
    super(name, gender); // the call to super() must be the first statement in a constructor
    // Internally
    // CollegeUser.constructor(name, gender, this)

    // this -> Professor object

    this.subjects = subjects;
  }
}


const s1 = new Student('mehul', 'm', 10, 90);
// Internally
// new -> 7008
// Student.constructor('mehul', 'm', 10, 90, 7008)


const p1 = new Professor('jane', 'f', ['Physics', 'Chemistry']);
// Internally
// new -> 8006
// Professor.constructor('jane', 'f', ['Physics', 'Chemistry'], 8006)

// console.log(s1);
// console.log(p1);

console.log(s1.getDetails());
console.log(p1.getDetails());