import { appApiIns } from "../Api/AppApi";

export interface LoginResult{
    token : string;
    refreshToken : string | null;
}

export interface RegisterRequest{
    userName:string,
    userPhone:string,
    userPassword:string
}

export function loginUser(userPhone:string, userPassword:string){
    return appApiIns.post('login',{
        username: "mor_2314",
        password: "83r5^_"
    });
}

export function registerUser(request:RegisterRequest){
    return appApiIns.post('login',{
        username: "mor_2314",
        password: "83r5^_"
    });
}
