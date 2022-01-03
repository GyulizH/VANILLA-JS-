//RECURSION

let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalaries(department){

    if(Array.isArray(department)){
        return department.reduce((prev,curr) => prev + curr.salary, 0);
    }else{
        let sum = 0;
        for(let subdep of Object.values(department)){
            sum += sumSalaries(subdep)
        }
        return sum;
    }
}

//LINKED LIST

//alternative linked list definition

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//recursion examples

function sumTo(n){
    if(n === 1){
        return n
    }else{
        return n + sumTo(n-1)
    }
}

function factorial(n){
    if(n === 1 || n === 0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}

function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

//output a single-linked list

let list1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list){
    console.log(list)
  if(list.next) printList(list.next)
}

console.log(printList(list1))

//output a linked list in reverse order

function printListReverseOrder(list){
    if(list.next) printList(list.next)
    console.log(list)
}

function printListReverseOrderIterative(list){
    let arr = []
    let tmp = list
    while(tmp){
        arr.push(tmp)
        tmp = tmp.next
    }
    for(let i = arr.length - 1; i>=0; i--){
        console.log(arr[i])
    }
}

console.log(printListReverseOrderIterative(list1))

//rest parameters and spread syntax
Math.max(1,2,3,4,6) // returns the biggest
let obj1 = {
    a:1
}
let obj2 = {
    b:1
}
let obj3 = {}
Object.assign(obj3,obj1,obj2)
console.log(obj3)

function sumAll(...args) { // args is the name for the array
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
}
sumAll(1,2,3,4,5)

function showName(firstName, lastName, ...titles) {
    // alert( firstName + ' ' + lastName ); // Julius Caesar
    //
    // // the rest go into titles array
    // // i.e. titles = ["Consul", "Imperator"]
    // alert( titles[0] ); // Consul
    // alert( titles[1] ); // Imperator
    // alert( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");
//rest parameter must be at the end

/*
function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
                                  // error
}
*/
//
// let arr = [3, 5, 1];
// // Math.max(arr) does not work
// console.log( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)
//
// //without err argument
// try {
//     // ...
// } catch { // <-- without (err)
//           // ...
// }
//
// let json = '{ "age": 30 }'; // incomplete data
// try {
//
//     let user = JSON.parse(json);
//
//     if (!user.name) {
//         throw new SyntaxError("Incomplete data: no name");
//     }
//
//     blabla(); // unexpected error
//
//     console.log( user.name );
//
// } catch (err) {
//
//     if (err instanceof SyntaxError) {
//         console.log( "JSON Error: " + err.message );
//     } else {
//         throw err; // rethrow (*)
//     }
//
// }
//
// /*
// try {
//    ... try to execute the code ...
// } catch (err) {
//    ... handle errors ...
// } finally {
//    ... execute always ...
// }
//  */
//
// //PROMISE is a speacial JS object that links the producing code and the consuming code together
//
// //constructor syntax for promise
//
// let promise = new Promise(function(resolve, reject) {
//     // executor (the producing code, "singer")
// });
//
// let promise1 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
// });
//
// // resolve runs the first function in .then
// promise.then(
//     result => alert(result), // shows "done!" after 1 second
//     error => alert(error) // doesn't run
// );
//
// //LOAD SCRIPT FUNCTION - WRITTEN IN PROMISES
//
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Script load error for ${src}`));
//
//     document.head.append(script);
// }
//
// function loadScriptWithPromise(src){
//     return new Promise(function (resolve,reject){
//         let script = document.createElement('script');
//         script.src = src;
//
//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error("script load error"));
//
//         document.head.append(script);
//     })
// }
//
// /*
// USAGE:
// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
//
// promise.then(
//   script => alert(`${script.src} is loaded!`),
//   error => alert(`Error: ${error.message}`)
// );
//
// promise.then(script => alert('Another handler...'));
//  */
//
// // delay with a promise
//
// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve,ms))
// }
//
// //drawing a circle with promises
// function go() {
//     showCircle(150, 150, 100).then(div => {
//         div.classList.add('message-ball');
//         div.append("Hello, world!");
//     });
// }
//
// function showCircle(cx, cy, radius) {
//     let div = document.createElement('div');
//     div.style.width = 0;
//     div.style.height = 0;
//     div.style.left = cx + 'px';
//     div.style.top = cy + 'px';
//     div.className = 'circle';
//     document.body.append(div);
//
//     return new Promise(resolve => {
//         setTimeout(() => {
//             div.style.width = radius * 2 + 'px';
//             div.style.height = radius * 2 + 'px';
//
//             div.addEventListener('transitionend', function handler() {
//                 div.removeEventListener('transitionend', handler);
//                 resolve(div);
//             });
//         }, 0);
//     })
// }
//
// async function getUserAsync(name) {
//     try{
//         let response = await fetch(`https://api.github.com/users/${name}`);
//         return await response.json();
//     }catch(err){
//         console.error(err);
//         // Handle errors here
//     }
// }
//
// //implicit try catch
//
// new Promise((resolve, reject) => {
//     throw new Error("Whoops!");
// }).catch(); // Error: Whoops!

new Promise((resolve, reject) => {

    throw new Error("Whoops! erroorrr");

}).catch(function(error) {
//console.log(error,'error')
    console.log("The error is handled, continue normally");

}).then(() => console.log("Next successful handler runs"));


// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         throw new Error("Whoops!");
//     }, 1000);
// }).catch(() => console.log("handle this error"));

//The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

//call async from sync
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f(){
    wait().then(result => console.log(result))
}

/*
FETCH SYNTAX
let promise = fetch(url, [options])
url – the URL to access.
options – optional parameters: method, headers etc.

Getting a response is usually a two-stage process.

First, the promise, returned by fetch, resolves with an object of the built-in Response class as soon as the server responds with headers.

At this stage we can check HTTP status, to see whether it is successful or not, check headers, but don’t have the body yet.

The promise rejects if the fetch was unable to make HTTP-request, e.g. network problems, or there’s no such site. Abnormal HTTP-statuses, such as 404 or 500 do not cause an error.

We can see HTTP-status in response properties:

status – HTTP status code, e.g. 200.
ok – boolean, true if the HTTP status code is 200-299.

Response provides multiple promise-based methods to access the body in various formats:

response.text() – read the response and return as text,
response.json() – parse the response as JSON,
response.formData() – return the response as FormData object (explained in the next chapter),
response.blob() – return the response as Blob (binary data with type),
response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),
additionally, response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk, we’ll see an example later.
 */

//two ways of fetching data

// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);
// let commits = await response.json();

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.json())
    .then(commits => alert(commits[0].author.login));

new Promise((resolve, reject) => {

    throw new Error("Whoops! erroorrr");

})