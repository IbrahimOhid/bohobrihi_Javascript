//event ➡ onload(), onerror()
//property ➡ response,responseText,responseType,responseURL,status, statusText  
//function ➡ open, send, sendRequestHeader()

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.onload = () => {
        const data = xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror = () => {
        console.log("Error is Here");
    }
    xhr.send();
}
getData();