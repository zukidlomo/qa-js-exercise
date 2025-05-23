const exercise6 = async ()=>
    {
        console.log('Exercise 6');
        console.log("_____________________________");

        //Exercise 6.1 and 6.2
        //Fetching user data
        let usersUrl = "https://jsonplaceholder.typicode.com/users"   
        const userPromise = fetch(usersUrl).then(response => response.json()).then(users => {
            users.forEach(user => {
                console.log(`User Name: ${user.name} - Email: ${user.email} - Company: ${user.company.name}`);
            })
        })
        
        //Exercise 6.3 and 6.4
        //Fetching post titles and counting of occurence of "qui"
        let postsUrl = "https://jsonplaceholder.typicode.com/posts"
        const postPromise = fetch(postsUrl).then(response => response.json()).then(posts =>{
            let count = 0;
            posts.forEach(post => {console.log(`Title: ${post.title}`)
                if(post.title.includes("qui")){
                    count++ 
                }
            })
            console.log("Count: " + count)
        })

        //Wait for promises to complete the log exercise completed
        return Promise.all([userPromise, postPromise])
            .then(() => {
                console.log("\n- Exercise 6 completed -");
                console.log("_____________________________");
            })
            .catch((error) => {
                console.log("Exercise 6 has the following error:", error);
            });
        

        // End of Exercise 6

    }

module.exports = exercise6;
