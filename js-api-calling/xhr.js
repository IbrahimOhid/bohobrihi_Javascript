//event ➡ onload(), onerror()
//property ➡ response,responseText,responseType,responseURL,status, statusText  
//function ➡ open, send, sendRequestHeader()

// const makeRequest = (method, url) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.onload = () => {
//         const data = xhr.response;
//         console.log(JSON.parse(data));
//     }
//     xhr.onerror = () => {
//         console.log("Error is Here");
//     }
//     xhr.send();
// }

// const getData = () => {
//     makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
// }
// getData();