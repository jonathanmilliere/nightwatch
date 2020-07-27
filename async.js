const axios = require("axios");

var get = async function (url, success){
    const response = await axios.get(url);
    return response.data
}

var getUserFirstComment = async function (success, error){
    var users = await get('https://jsonplaceholder.typicode.com/users')
    var userId = users[0].id
    var posts = await get('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
    return posts[0]
}

getUserFirstComment()
.then(function (comment){
    console.log(comment)
})