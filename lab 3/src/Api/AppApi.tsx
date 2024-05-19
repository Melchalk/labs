import axios from "axios";

export const appApiIns = axios.create(
    {
        baseURL : 'http://localhost/',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem('accessToken') 
        }
    }
)