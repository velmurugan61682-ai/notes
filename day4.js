// 4 question
//  console.log("print the series of 0 5 10 15 20 25 using for loop");
//  for(let i=0;i<=25;i++)
//  { if (i%5===0)
//    console.log(i)
//  }
   
// console.log("print the series of 0 5 10 15 20 25 using while loop");
// let i=0;
// while( i<=25);
// {
//  if(0%5===0)
//       console.log(i)
//       i++;

// }
// console.log("print the series of 0 5 10 15 20 25 using do loop");
// let k=0;
// do 
// {
//       if(k%5===0)
//        console.log(k) 
//        k++;    
// }
// while (k<=25);  
// 5 question
// function fact2(n){
// console.log ("print the series of 1+2+3+4+....for loop");
// let t="";
// for(let i=1;i<=4;i++)
// {
// if (i<=4)
//       t=t+i+" +"
// else
// t=t+1

// }
// console.log(t)}
// let n=prompt("please enter a no to find factorial2");
// // fact2(n)
// function fact3()
// {
// console.log("print the series of1+2+3+4+....while loop");
// let t="";
// let j=1;
// while (j<=4)
    
// {
//   if(j<=4){
//       t=t+j+"+"
//       }
      
//   else{
//       t=t+j} 
//       j++
// }
// //console.log(t);
// return t;
// }
// // let n1=prompt("please enter a no to find factorial3");
// // let s=fact3(n)
// // console.log ("factorial3 of"+n+"="+s);
// // console.log("factorial3 of"+n+"="+fact3(n1));

// console.log(fact3())








// function fact1()
// { 
// console.log("print the series of1+2+3+4+....do loop");
// let t="";
// let k=1;
// do
// {
//  if(k<=4){
//     t=t+k+"+" }
    
//     else{
//       t=t+k
//     } 
//     k++;
    
//  } while (k<=5);   
// console.log(t)

// }


//  fact1()

// 6 question
// console.log("print the series of 0+2+4+6+ for loop")
// let t="";
// for(i=0;i<=6;i++)
// {
//  if(i%2==0){
//   if(i<=6){
//        t=t+i+"+"
//       }
//  else
//  {
//       t=t+i
//  }
//  }
// }
// console.log(t);

// console.log("print the series of 0+2+4+6+ while loop")
//  let t="";    
// let j=0
// while(j<=6)
// {
//  if(j%2===0)     
//  {
//  t=t+j+"+"
// }
 
//  else{

//     }
//     j++;
//  }
 
//  console.log(t)

// console.log("print the series of +2+4+6+ even number do  loop.....");
// let t="";
// let k=0;
// do
// { 
//       if (k%2===0)
//       {
//        t=t+k+"+"
//       }


//      else{        
//          }
//       k++;
//       console.log(t)
//       }
//       while (k<=6);


// Lexical scope means:
// A function can access variables from its outer (parent) function.

// Example:

// function outer() {
//     let a = 10;
//     function inner() {
//         console.log(a); // inner can access outer variable
//     }
//     inner();
// }
// outer();

// Closure :-
// When a function remembers the variables from its
// outer scope even after the outer function is finished.

// Example 

// function outer() {
//     let a = 10;
//     return function inner() {
//         console.log(a);
//     }
// }

// let fun = outer();
// fun(); // still prints 10 even though outer() is finished


// function datas() {
//     let number = 0;

//     function add() {
//         console.log(number)
//     }
//     return add
// }

// const show = datas()

// show()


// const createAcc = () => {
//     let balance = 1000; // private variable

//     const deposit = (amount) => {
//         balance += amount;
//         console.log("Balance:", balance);
//     }

//     const withdraw = (amount) => {
//         balance -= amount;
//         console.log("Balance:", balance);
//     };

//     return { deposit, withdraw };
// };

// const acc = createAcc();
// acc.deposit(500);   // can access balance
// acc.withdraw(300);
// acc.balance = 300;0
// acc.deposit(100);
+