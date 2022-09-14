const person = {name:"Sifat", title:"bsdk guruji", fbId: "sifat mahmud", job:"Beimani", friends:['Sakib', 'Siam', 'Antara', 'Richi'], address:"Bijoy Sharani", bike:"Honda Hornet"};
const {name, title, job, friends} = person;
console.log(name, title, job, "kore", friends[1], 'er sathe');

const complexObj = {name2: "Siam",
address: "kalabagan",
phone: 8801939575879,
info:{
    job: "Bekar",
    behavior: "Dildoriya Manush"
}}
const {name2} = complexObj;
const {behavior} = complexObj.info;
console.log(name2,"ekjon", behavior);

const myFriends = ["Sifat", "Sakib", "Antara", "Richi"];
const [bsdk1, bsdk2] = myFriends;
console.log(bsdk1,bsdk2, "dui bsdk")