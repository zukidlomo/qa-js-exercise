const exercise6 = ()=>
    {
        console.log('Exercise 6');
        console.log("_____________________________");

        //Exercise 6.1, fetch users
        //Exercise 6.2, log user names
        let usersUrl = "https://jsonplaceholder.typicode.com/users"
        fetch(usersUrl).then(response => response.json()).then(data => {
            data.forEach(user => {
                console.log(`User Name: ${user.name} - Email: ${user.email} - Company: ${user.company.name}`);
            })
        })

        
        console.log("\n")
        let postsUrl = "https://jsonplaceholder.typicode.com/posts"
        fetch(postsUrl).then(response => response.json()).then(data =>{
            let count = 0;
            data.forEach(post => {
                console.log(`Title: ${post.title}`)
                if(post.title.includes("qui")){
                    count++ 
                }
            })
            console.log("Count: " + count)
        })
        

        // End of Exercise 6
       
        console.log("Exercise 6 completed");
        console.log("_____________________________");

    }

module.exports = exercise6;
