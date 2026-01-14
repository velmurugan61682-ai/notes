// 1,let numbers = [10, 20, 30, 40, 50];

// let part = numbers.slice(1, 4);

// console.log("Original:", numbers);
// console.log("Sliced:", part);
// Original: [ 10, 20, 30, 40, 50 ]
// Sliced: [ 20, 30, 40 ]
// 2,let user = {
//     name: "vel",
//     details: {
//         city: "Chennai",
//         age: 25
//     }
// };
// let copyuser = Object.assign({}, user);
// copyuser.details.city = "Madurai";
// console.log(user)
// console.log(copyuser)
//  {name: 'vel', details: { city: 'Madurai', age: 25 } }
// { name: 'vel', details: { city: 'Madurai', age: 25 } 
3,
// let users = [
//     { name: "vel", age: 25 },
//     { name: "murugan", age: 28 }
// ];
// let deepCopy = JSON.parse(JSON.stringify(users));
// deepCopy[0].name = "Vijay";
// deepCopy[1].age = 30;
// console.log("Original:", users);
// console.log("Deep Copy:", deepCopy);
// Original:  [ { name: 'vel', age: 25 }, { name: 'Kumar', age: 28 } ]

// Deep Copy: [ { name: 'Vijay', age: 25 }, { name: 'Kumar', age: 30 } ]
// 4,let user = {
//     name: "vel",
//     details: {
//         city: "Chennai",
//         skills: ["HTML", "CSS", "JS"]
//     }
// };
// let deepCopy = structuredClone(user);
// deepCopy.details.city = "Madurai";
// deepCopy.details.skills.push("React");
// console.log("Original:", user);
// console.log("Deep Copy:", deepCopy);
// Original: {
//   name: 'vel',
//   details: { city: 'Chennai', skills: [ 'HTML', 'CSS', 'JS' ] }
// }

// Deep Copy: {
//   name: 'vel',
//   details: { city: 'Madurai', skills: [ 'HTML', 'CSS', 'JS', 'React' ] }
// // }
// 5,let data = {
//     name: "Arun",
//     address: {
//         city: "Chennai",
//         pincode: 600001
//     },
//     skills: ["HTML", "CSS", "JS"],
//     scores: {
//         maths: 90,
//         science: 85
//     }
// };
// let shallowCopy = { ...data };
// let deepCopyJSON = JSON.parse(JSON.stringify(data));
// let deepCopySC = structuredClone(data);
// // shallow copy changes
// shallowCopy.address.city = "Madurai";
// shallowCopy.skills.push("React");

// // deep copy JSONchanges
// deepCopyJSON.address.city = "Coimbatore";
// deepCopyJSON.skills.push("NodeJS");

// // deep copy structuredclone changes
// deepCopySC.address.city = "Salem";
// deepCopySC.skills.push("MongoDB");

// console.log("Original:", data);
// console.log("Shallow Copy:", shallowCopy);
// console.log("Deep Copy (JSON):", deepCopyJSON);
// console.log("Deep Copy (SC):", deepCopySC);
// Original: {
//   name: 'Arun',
//   address: { city: 'Madurai', pincode: 600001 },
//   skills: [ 'HTML', 'CSS', 'JS', 'React' ],
//   scores: { maths: 90, science: 85 }
// }
// Shallow Copy: {
//   name: 'Arun',
//   address: { city: 'Madurai', pincode: 600001 },
//   skills: [ 'HTML', 'CSS', 'JS', 'React' ],
//   scores: { maths: 90, science: 85 }
// }
// Deep Copy (JSON): {
//   name: 'Arun',
//   address: { city: 'Coimbatore', pincode: 600001 },
//   skills: [ 'HTML', 'CSS', 'JS', 'NodeJS' ],
//   scores: { maths: 90, science: 85 }
// }
// Deep Copy (SC): {
//   name: 'Arun',
//   address: { city: 'Salem', pincode: 600001 },
//   skills: [ 'HTML', 'CSS', 'JS', 'MongoDB' ],
//   scores: { maths: 90, science: 85 }
// }
// === Code Execution Successful ===
















































