class Student{
    constructor(studentName, studentID, studentBatch, studentAddress){
        this.name = studentName;
        this.id = studentID;
        this.batch = studentBatch;
        this.address = studentAddress;
        this.department = 'Computing and Information System';
        this.university = 'Daffodil International University';
    }
}

const student1 = new Student('Sakib Khandaker', '191-16-399', 5, 'Uttara');
const student2 = new Student('Emran Al Mahmud', '191-16-414', 5, 'Bijoy Sharani');
console.log('Bosdiwale: ', student1.name, ',', student2.name)