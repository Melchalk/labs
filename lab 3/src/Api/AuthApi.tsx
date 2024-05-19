import { appApiIns } from "../Api/AppApi";

export interface LoginResult{
    accessToken : string;
    refreshToken : string;
}

export interface RegisterRequest{
    userName:string,
    userPhone:string,
    userPassword:string
}

export enum TeachingPositions
{
    Assistant,
    Teacher,
    SeniorLecturer
}

export function loginUser(userPhone:string, userPassword:string){
    return appApiIns.post('auth/login',{
        phone: userPhone,
        password: userPassword
    });
}

export function registerUser(request:RegisterRequest){
    return appApiIns.post('auth/register',{
        name: request.userName,
        phone: request.userPhone,
        password: request.userPassword
    });
}