const exercise4 = ()=>
    {
        console.log('- Exercise 4 -');
        console.log("_____________________________");

        //Exercise 4.1, create array of steps
        let qaSteps = ["Go to www.example.com", 
                       "click register button", 
                       "enter username: user1", 
                       "enter password: pass@123", 
                       "enter email: example@email.com"];


        //Exercise 4.2, log step with index
        qaSteps.forEach((testStep, i) => console.log(`Step ${i+1}: ${testStep}`));

        console.log("\n");

        //Exercise 4.3, convert to uppercase
        let testSteps = qaSteps.map(convertUppercase)
        console.log(testSteps)

        function convertUppercase(step){
            return step.toUpperCase();
        }

        console.log("\n");
        
        //Exercise 4.4, step execution
        for(i = 0; i < qaSteps.length; i++){
            console.log(`Executing step ${i+1} ${qaSteps[i]}`);
        }

        // End of Exercise 4
        console.log("\n- Exercise 4 completed -");
        console.log("_____________________________");
    }   

module.exports = exercise4;
