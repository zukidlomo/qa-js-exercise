const exercise2 = ()=>
    {
        console.log('- Exercise 2 -');
        console.log("_____________________________");

        //Exercise 2.1, create response message
        const response = "     Hi Zuki! You Have Successfully Completed Exercise 2!     ";
        console.log("Original Response:", response);

        //Exercise 2.2, trimmed and lowercase response
        console.log("Trimmed + Lowercase response:", response.trim().toLowerCase());
        
        //Exercise 2.3, does word exist?
        console.log("Response contains 'success':", response.toLowerCase().includes("success"));
        
        //Exercise 2.4, replace with another word
        console.log("Response replaces:", response.trim().replace("Zuki", "Ofentse"));

        //End of Exercise 2 
        console.log("\n- Exercise 2 completed - ");
        console.log("______________________________");
    }

module.exports = exercise2;