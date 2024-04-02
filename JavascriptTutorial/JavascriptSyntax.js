let formated = true;

let num ;

console.log(num);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(NaN/2);
console.log(NaN == NaN);

let s = "i\'m imran bagwan";
console.log(s);

let str = "imran";

str[0] = 'I';

console.log(str);


let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

console.log(contact.firstName);
console.log(contact['address']['city']);

let num1 = 120_12_25; // this is the numaric seperacter to increase readability
console.log(num1);

let e = parseInt('111',2);
console.log(e);

let err = "this is first error";

if(Boolean(err)){
    console.log(err);
}

let sa = true;
let k = sa.toString();
console.log(k);
console.log(Boolean(k));


let person={
     name : "imran",
     age : 24,
     company : "Thinkitive"
}

console.log(person);
delete person.age;
console.log(person);

let player = new Array(10);

// Arrays 

let arr = ['imran','bagwan','thinkitive technologies'];
console.log(arr);

arr.push('abc');

console.log(arr);

arr.unshift('xyz');

console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

let ab = arr.indexOf('bagwan');
console.log("index of bagwan in array : "+ab);

console.log(Array.isArray(arr));


let ad = 10;
let bc = '40';

let result = ad + bc;
console.log(result);

let aa = '10';
let bb = '40';

let res = bb - aa;
console.log(res);


let sas1 = 5 % -3;
console.log(sas1);

let sas2 = -5 % 3;
console.log(sas2);
let sas3 = -5 % -3;
console.log(sas3);

let f1 = "ababc";
let f2 = "Bacd";

let kk = f2.toLowerCase()<f1.toLowerCase();

console.log(kk);

let af = 1 ?? console.log("hi beacause of null value");
console.log(af);

let aaa=1001;
while(aaa !=0){
    //console.log("Enter a num1");
    let az = prompt("Enter a num1");

    // console.log("Enter a num2");
    // let ay = window.prompt();

    // console.log("0:Exist 1:mul 2:add 3:substract 4:div 5:modul");
    //  aaa = window.prompt();
    switch(aaa){
        case 1:
            let ap= az * ay;
            console.log(`Multiply of ${az} and ${ay} is ${ap}`);
            break;
        case 2:
            let af= az + ay;
            console.log(`Addition of ${az} and ${ay} is ${af}`);
            break;
        case 3:
            let ao= az - ay;
            console.log(`Sunstraction of ${az} and ${ay} is ${ao}`);
            break;
        case 4:
            let ai= az / ay;
            console.log(`Division of ${az} and ${ay} is ${ai}`);
            break;
        case 4:
            let au= az % ay;
            console.log(`modul of ${az} and ${ay} is ${au}`);
            break;
        default : 
            console.log("Enter a correct choice");
            break;      
    }
}






