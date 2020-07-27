const axios = require("axios");

var get = async function (url, success){
    const response = await axios.get(url);
    //success(response.data)
    return response.data
}

var getUserComments = function (success, error){
    get('https://jsonplaceholder.typicode.com/users', function (response){
        //var users = JSON.parse(response)
        var users = response
        get('https://jsonplaceholder.typicode.com/posts?userId=' + users[0].id, function (response){
            success(response)
        }, function (e){
            error('Erreur AJAX ', e)
        })
    }, function (e){
        error('Erreur AJAX ', e)
    })
}
/* 
var toto = function (){
    return new Promise(function (resolve, reject){
        resolve(get('https://jsonplaceholder.typicode.com/users'))
    })
} */

get('https://jsonplaceholder.typicode.com/users')
.then(function (users){
    //console.log(response)
    return get('https://jsonplaceholder.typicode.com/posts?userId=' + users[0].id)
})
.then(function (coments){
    return coments[0]
})
.then(function (comment){
    console.log(comment)
})
.catch(function (err){
    console.error(err)
})
