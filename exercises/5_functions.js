const exercise5 = ()=>
    {
        console.log('- Exercise 5 -');
        console.log("_____________________________");

        // Exercise 5.1, log passed or failed.
        function logResult(testName, passed){
            passed === true ? console.log(`Test '${testName}' passed.`) : console.log(`Test ${testName} failed.`);
        }
        logResult("User Registration", false);

        // Exercise 5.2, log elasped time.
        function calculateDuration(startTime, endTime){
            let elaspedTime = endTime - startTime;
            console.log(`\nElasped Time : ${elaspedTime} minutes.`);
        }
        calculateDuration(10,45);

        // Exercise 5.3, log formatted report.
        function formattedReport(){
            let report = {
                title: "Test Report.",
                testName: "User Registration.",
                testStatus: "Failed.",
                expectedResult: "User is able to register successfully.",
                actualResult: "User was not able to register successfully.",
            }
           
            console.log(`\nTitle: ${report.title}\nTest Name: ${report.testName}\nTest Status: ${report.testStatus}\nExpected Result: ${report.expectedResult}\nActual Result: ${report.actualResult}`);
            return report;
        }
        formattedReport();

        // End of Exercise 5
        console.log("\n- Exercise 5 completed -");
        console.log("_____________________________");
    }


module.exports = exercise5;