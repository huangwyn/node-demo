function Person(name, age){
        this.name = name;
        this.age = age;
}

Person.prototype.toString = function PersonToString() {
        const ans = this.name + ", age " + this.age + " ";
        return ans;
}


const people = Array(new Person('joe', 10), new Person('bob', 18), new Person('timmy', 20), new Person('tom', 30), new Person('maud', 30));

people.push(new Person('jim', 18));

let item = people.pop();
console.log(item.name +' '+ item.age);
item = people.slice(0,2);
console.log("item is now " + item);

item = people.shift();
console.log("people is " + people + " after a shift");
people.unshift(item);
console.log("people is " + people + " after unshifting");
const filtered = people.filter(Person => Person.age >= 18);
console.log(filtered + " are all over 18")
