const axios = require("axios");

var get = async function (url, success){
    const response = await axios.get(url);
    success(response.data)
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

getUserComments(function (comments){
    console.log(comments)
}, function (error){
    console.error(error)
})