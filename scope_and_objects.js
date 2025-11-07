
let globalCount = 10;


function demonstrateLocalScope() {
    let localCount = 5; 
    console.log("Inside demonstrateLocalScope:");
    console.log("Local count:", localCount);
    console.log("Global count (accessible):", globalCount);
}


function modifyCounts() {
    globalCount += 1;

    let localCount = 100;

    console.log("Inside modifyCounts:");
    console.log("Modified globalCount:", globalCount);
    console.log("New localCount (only inside modifyCounts):", localCount);
}

function Student(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;

    this.introduce = function () {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old, majoring in ${this.major}.`);
    };
}

const student1 = new Student("Kungawo", 20, "Mathematics");
const student2 = new Student("Asavela", 22, "Physical Sciences");
const student3 = new Student("SphaFrans", 19, "Life Sciences");

student1.introduce();
student2.introduce();
student3.introduce();

const classroom = {
    name: "Mathematics",
    instructor: {
        firstName: "Mr.",
        lastName: "Manzi",
        experience: "17 years"
    },
    schedule: {
        day: "Monday",
        time: "10:00 AM"
    },
    students: [student1, student2, student3],
    printDetails: function () {
        console.log(`Classroom: ${this.name}`);
        console.log(`Instructor: ${this.instructor.firstName} ${this.instructor.lastName}`);
        console.log(`Schedule: ${this.schedule.day} at ${this.schedule.time}`);
        console.log(`Enrolled Students: ${this.students.map(s => s.name).join(", ")}`);
    }
};

demonstrateLocalScope();
modifyCounts();
classroom.printDetails();
