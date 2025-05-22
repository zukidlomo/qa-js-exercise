const exercise4 = ()=>
    {
        console.log('- Exercise 4 -');
        console.log("_____________________________");

        let qaSteps = ["Go to www.example.com", "click register button", "enter username: user1", "enter password: pass1", "enter email: example@email.com"];
        qaSteps.forEach((step, i) => console.log(`Step ${i + 1}: ${step}`));

        console.log("\n");
        
        for(i = 0; i < qaSteps.length; i++){
            console.log(`Executing step ${i+1} ${qaSteps[i]}`);
        }

        console.log("\n");

        let steps = qaSteps.map(convertUppercase)
        console.log(steps)
        function convertUppercase(step){
            return step.toUpperCase();
        }

        // Please Complete Exercise 4 here

        // End of Exercise 4
        console.log("\n- Exercise 4 completed -");
        console.log("_____________________________");
    }   

module.exports = exercise4;
