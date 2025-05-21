function exercise1()
    {
    console.log("Exercise 1");
    console.log("_____________________________");

    //Exercise 1.1: Create variables with different data types
    
    const name = "Zuki";
    let isHungry = true;
    let age = 25;
    const measurements = {
    height: 1.64,
    weight: 55,
    };
    const hobbies = ["sleeping", "gaming", "running"];
    let myAge = null;
    let myHeight = undefined;

    //Exercise 1.2: Change the value of a `let` variable and print both old and new values.

    console.log("Old value of isHungry: " + isHungry);
    isHungry = false;
    console.log("New value of isHungry: " + isHungry);

    //Exercise 1.3: Print the variables to the console with their types
        
    console.log("Name: " + name + ", Type: " + typeof name);
    console.log("isHungry: " + isHungry + ", Type: " + typeof isHungry);
    console.log("Age: " + age + ", Type: " + typeof age);
    console.log("Measurements: " + measurements+ ", Type: " + typeof measurements);
    console.log("Hobbies: " + hobbies + ", Type: " + typeof hobbies);
    console.log("myAge: " + myAge + ", Type: " + typeof myAge);
    console.log("myHeight: " + myHeight + ", Type: " + typeof myHeight);

    // End of Exercise 1
    console.log("Exercise 1 completed");
    console.log("_____________________________");
    }

module.exports = exercise1;