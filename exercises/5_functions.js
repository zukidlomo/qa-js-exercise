const exercise5 = ()=>
    {
        console.log('- Exercise 5 -');
        console.log("_____________________________");

        // Please Complete Exercise 5 here
        function logResult(testName, passed){
            passed ? console.log(`Test "${testName}" passed.`) : console.log(`Test ${testName} failed.`);

        }
        logResult("User Registration", true);

        function calculateDuration(startTime, endTime){
            let elaspedTime = endTime - startTime;
            console.log(`Elasped Time : ${elaspedTime} minutes.`);

        }
        calculateDuration(10,45);

        function formattedReport(){
            let report = {

            }
        }

        // End of Exercise 5
        console.log("\n- Exercise 5 completed -");
        console.log("_____________________________");
    }


module.exports = exercise5;