const person = {
  name: "Bhupinder Singh",
  age: 20,
  hobbies: ["Sports", "Cooking"],
};

// This above object can be formed in the below way too:
const person2: {
  name: string;
  age: number;
  tple: [number, string];
} = {
  name: "Bhupinder",
  age: 20,
  tple: [2, "Tuple"],
};

// any is for strong any type of data
let favActivities: string[];
favActivities = ["Sports"];

let activity: any[];
activity = ["B", 3];
console.log(person2.age);

console.log([person2.tple]);

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const man = {
  name: "Bhupinder",
  age: 20,
  hobbies: ["Competitve Programming", "Cooking"],
  role: Role.ADMIN,
};

if (man.role === Role.ADMIN) {
  console.log("Is admin");
}
