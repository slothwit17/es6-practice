class FatherTitle{
    constructor(){
        this.title = "Khan";
    }
}
class Child extends FatherTitle{
    constructor(childName){
        super();
        this.name = childName;
    }

    fullName(){
        return this.name + " " + this.title;
    }
}

const baby1 = new Child("Salman");
const baby2 = new Child("Arbaz");
console.log(baby1.fullName(), baby2.fullName());