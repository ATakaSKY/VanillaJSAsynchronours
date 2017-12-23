const http = new CustomHttp();

//get request
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const data = {
    name:"Sky"
}

//post request
// http.post('https://jsonplaceholder.typicode.com/users',data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


//put request
// http.put('https://jsonplaceholder.typicode.com/users/3',data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


//delete request
http.delete('https://jsonplaceholder.typicode.com/users/3')
    .then(data => console.log(data))
    .catch(err => console.log(err));