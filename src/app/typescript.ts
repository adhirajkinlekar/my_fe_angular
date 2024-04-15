const date = new Date();

date.toISOString();

let string = "this is a string"; // type inference
// Typescript tries to figure out what type of value a variable refers to
// Type inference only works when we do variable declaration and initialization on the same line

string.toLowerCase();

let number: number = 1; // type annotation
//Code we add to tell Typescript what type of value a variable will refer to

number.toString();

const bool = true;

bool.valueOf(); // Returns the primitive value of the specified object.

const object: { string: string; number: number } = {
  string: "value",
  number: 1,
};

object.string;

const colors: string[] = ["red", "green", "blue"];

const manufacturers: string[][] = [["toyota"], ["chevy"], ["mitsubishi"]]

const drink: [string, boolean, number] = ["pepsi", true, 50] // Tuples
// One possible use case of tuples is when it comes to functionality involving CSV files

const logNumber = (num: number): void => {

  console.log(num); 
  // method doesn't return anything
};

const logObject = ({ string, number }: { string: string; number: number; }): void => {
      //annotation with destructuring
  console.log({ string, number });
};

const geography: any = {
  coordinates: {
    lat: 52,
    lon: 12,
  },
};

const { coordinates: { lat, lon } }: { coordinates: { lat: number; lon: number } } = geography;

lat.toString();

class Car {

  origin: string;

  constructor(demonym: string) {
    this.origin = `this is a ${demonym} made car`;
  }

  drive() {
    console.log("driving...");
  }
}

const audi = new Car("German");

audi.origin;

audi.drive();

let hasAccount: boolean | string = false; // A union type allows a variable to have one of multiple types.

if (true) hasAccount = "INBSOSNIWI330333QNV";

type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (x, y) => x + y;

const result: number = add(10, 5);

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

const person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

type location = {
    street: string,
    city: string,
    pincode?: string
}

const L:location = {
  street: "",
  city: "", 
}
// intersection types combine multiple types into one


const myself : Person & location = {
    firstName : "Adhiraj",
    lastName : "Kinlekar",
    age: 28,
    street: "Mapusa-Calangute road",
    city: "Mapusa",
    pincode: "403507",
}

function isString(value: any): string | number {

    if (typeof value === 'string') {

        value.toLowerCase();
        
        // Inside this block, `someValue` is inferred to be of type `string`
    }

    return value
}

interface Vehicle { // When we create an interface we are basically creating a new type
    name: string,
    model: string,
    year: number,
    drive(): string
  }
  
  const myCar: Vehicle = {
    name: "civic",
    model: "XR",
    year: 2023,
    drive(): string {
      return "driving..."
    }
  }
  
  interface Bike {
    geared: boolean,
    name: string
  }
  
  const ride = (bike: Bike): void => {
    
    console.log(`riding ${bike.name}`);
  }
  
  const bike = {
    geared: true,
    name: "Yamaha",
    year: 1995
  };
  
  ride(bike);

  class Animal {
    sound:string;
    constructor(sound:string){
      this.sound = sound
    }
    protected makeSound():void{
      console.log(`${this.sound}...`)
    }
  }



  function my_secret_decorator(constructor: Function) {
    console.log("Class decorator called");
  }


  function logMethod(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    console.log("Class decorator called");

    const originalMethod = descriptor.value;

    descriptor.value = function (this: any, ...args: any[]) {
        console.log(`entering method ${methodName}`);

        const result = originalMethod.call(this, ...args);

        console.log(`exiting method ${methodName}`);

        return result;
    };

    return descriptor;
}
  

  @my_secret_decorator
  class Dog extends Animal {
  
    constructor(sound:string){
      super(sound);
    };
    
    @logMethod
    reactToBeingPet(){
      
      this.makeSound();
      console.log("wag tail...")
    };
  }
  
  const doggy: Dog = new Dog("bow bow");
  
  //doggy.makeSound();// not allowed
  doggy.reactToBeingPet();
  
  const animal: Animal = new Animal("bow bow");
  
  //animal.makeSound() //not allowed
  
  let value: string & number; // Union type


  let value2: unknown;

value2 = 123; // OK
value2 = "hello"; // OK

// You cannot do this without narrowing the type or asserting a specific type:
// const length = value.length; // Error: Property 'length' does not exist on type 'unknown'.

// But you can do this after narrowing the type:

if (typeof value2 === "string") {
    const length = value2.length; // OK
}

interface User1 {
  id: number;
}
type User2 = {
  name: string;
}