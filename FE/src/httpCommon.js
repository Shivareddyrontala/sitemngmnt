import axios from 'axios';
const baseURL ='http://localhost:8000/api/';
const headers = {
    'Content-Type': 'application/json'
}

if(localStorage.getItem('token')){
   
}

export const HTTP_GET = async(path,data) => {
    const result = await axios.get(baseURL+path,{
        headers: headers,
        data
    });
    console.log(result,"result");
    return result;
}

export const HTTP_POST = async(path,data) => {
    const result = await axios.post(baseURL+path,{
        headers: headers,
        data
    });
    console.log(result,"result");
    return result;
}