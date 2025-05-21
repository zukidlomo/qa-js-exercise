const exercise2 = ()=>
    {
        console.log('- Exercise 2 -');
        console.log("_____________________________");

        const response = "     Hi Zuki! You Have Successfully Completed Exercise 2!     ";
        console.log("1. Trimmed response:", response.trim());
        console.log("2. Lowercase response:", response.trim().toLowerCase());
        console.log("3. Response contains 'success':", response.toLowerCase().includes("success"));
        console.log("4. Response replaces:", response.trim().replace("Zuki", "Ofentse"))

        // Please Complete Exercise 2 here

        // End of Exercise 2
        console.log("\n- Exercise 2 completed - ");
        console.log("______________________________");
    }

module.exports = exercise2;