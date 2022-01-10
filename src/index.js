let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json())
let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json())
let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())
Promise.all([fetch1,fetch2,fetch3])//get the data for the three calls in an array.
.then((data)=>{
 console.log(`User1 = ${data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array
}) 