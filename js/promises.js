// XHR Example ==========================================================================================

// const request = new XMLHttpRequest();

// request.onreadystatechange =  () => {
//   console.log(this);
// };

// request.onreadystatechange()
// request.open("GET", "https://dog.ceo/api/breeds/image/random");
// request.send();

// $.ajax({
//     url: 'https://dog.ceo/api/breeds/image/random',
//     headers: {
//         Accept: 'application/json'
//     }
// }).then((response)=>{console.log(response, 'ajax')})

// fetch('https://dog.ceo/api/breeds/image/random').then(response => {console.log(response, 'fetch')});





// Jquery ajax Example: ==================================================================================


// function jQuery(){
//  this.call = 123
// };

// jQuery.prototype.ajax = function(){
//     console.log(this.call)
//     const request = new XMLHttpRequest();

//     request.onreadystatechange =  () => {
//     console.log(this);
//     };

//     request.onreadystatechange()
//     request.open("GET", "https://dog.ceo/api/breeds/image/random");
//     request.send();
    
// }

// const $ = new jQuery()

// $.ajax()





// fetch() examples: ======================================================================================

// function logData(data){
//     console.log(data)
// }

// These are all semantically the same
// fetch('https://dog.ceo/api/breeds/image/random').then(logData);
// fetch('https://dog.ceo/api/breeds/image/random').then(function(response){
//     console.log(response, 'fetch')
// });
// fetch('https://dog.ceo/api/breeds/image/random').then(response => {console.log(response, 'fetch')});
// fetch('https://dog.ceo/api/breeds/image/random').then(res => Promise.resolve(res))

// -------------------------------------------------------------------------------------------------------

// function logData(data){
//     console.log(data.message)
// }

// const dogData = fetch('https://dog.ceo/api/breeds/image/random')

// dogData.then(logData)

// function getDogData(){
//    return fetch('https://dog.ceo/api/breeds/image/random').then(res => Promise.resolve(res))
// }

// const dogData2  = getDogData()

// fetch('https://dog.ceo/api/breeds/image/random').then(res => console.log(res))


// fetch('https://dog.ceo/api/breeds/image/random').then(res =>{
//     return res 
// }).then(res =>{
//     return res.json()
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log('404 data not found')
// })
//-------------------------------------------------------------------------------------------------------





// Customized Promises {We control when our promise resolves}===============================================

// Example 1:
// const promise = new Promise((resolve, reject) => {
//     reject('Hello form Digital Crafts')
// })

// console.log(promise)


// Example 2:
// const database = {
//     data1: 1234,
//     data2 :()=>(console.log('Hello form dc')),
//     data3: 'A cool string value',
//     data4: ' An even cooler string value',
//     data5: [{name:'Jordan'}, 1234]
// }

// const retrieveData = (key) =>{
//     return new Promise((resolve, reject) => {
//         if(database[key]){
//             resolve({data: database[key], msg: 'success', ok: true})
//         }else{
//             reject({data: null, msg: 'Error: Data not found', ok: false})
//         }
//     }) 
// }

// const getDogData = (err) => {
//     console.log(err, "Retrieving data");
//     return fetch('https://dog.ceo/api/breeds/image/random').then(res => {
//         console.log(res, 'code is inside getDogData')
//         return res
//     })
// }

// retrieveData(null)

// .then(res =>{
//     console.log(res, 'code is then block after first catch')
//     return res.json() 
// })
// .then(data => {
//     console.log(data, 'inside last then block where we can see the data')
//     return data
// }).catch(err => {
//     console.log('404 data not found')
// })



// Async Await ==============================================================================================

// async function myFunction(){
//     try{
//         const data = await fetch('https://httpstat.us/404') // {Promise}
//         const dogData =  data.then(res =>(res))
//         return dogData
//     }catch(err){
//         console.log(err)
//         return {
//             err,
//             message: "An error occurred in the server."
//         }
//     }
// }


// myFunction()


















