let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.

obj = "hello";


let myName: string = "Alice";

function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }


  //type alias vs interface
  //https://betterprogramming.pub/differences-between-type-aliases-and-interfaces-in-typescript-4-6-6489246d4e48

//  A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });


//interface
interface Point {
    x: number;
    y: number;
  }
  
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  
  printCoord({ x: 100, y: 100 });

// you can technically do the following, but it's strange

// by themselves, literal types aren’t very valuable:

//let x: "hello" = "hello";
// OK
//x = "hello";
//x = "howdy";
//Type '"howdy"' is not assignable to type '"hello"'.

//It’s not much use to have a variable that can only have one value!

//But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "center");
//Argument of type '"center"' is not assignable to parameter of type '"left" | "right" | "center"'.

//Numeric literal types work the same way:
//return values

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}


/*
//generics

//Without generics, we would either have to give the identity function a specific type:

function identity(arg: number): number {
  return arg;
}

//Or, we could describe the identity function using the any type:

function identity(arg: any): any {
  return arg;
}

//use a type variable, a special kind of variable that works on types rather than values.

function identity<Type>(arg: Type): Type {
  return arg;
}

//What if we want to also log the length of the argument arg to the console with each call? We might be tempted to write this:

function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);

//Property 'length' does not exist on type 'Type'.
  return arg;
}

//When we do, the compiler will give us an error that we’re using the .length member of arg, but nowhere have we said that arg has this member. Remember, we said earlier that these type variables stand in for any and all types, so someone using this function could have passed in a number instead, which does not have a .length member.

//Let’s say that we’ve actually intended this function to work on arrays of Type rather than Type directly. Since we’re working with arrays, the .length member should be available. We can describe this just like we would create arrays of other types:

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

*/




/*
//type alias v interface:

//Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

//Interface	
//Extending an interface

interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
       
//Type
//Extending a type via intersections

type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;




*/