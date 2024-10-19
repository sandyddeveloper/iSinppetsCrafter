
'use server';

import { cookies } from "next/headers";


export async function handleLogin(userId : string, accessToken : string, referToken : string) {
    // This is for how long your go to store the cokkie and tokens before we refresh this from the server
    cookies().set('session_userid', userId,{
        httpOnly : true,
        secure : process.env.NODE_ENV === 'production',
        maxAge : 60 * 60 * 24 * 7 ,// One Week
        path: '/'
    });
    cookies().set('session_access_token', accessToken,{
        httpOnly : true,
        secure : process.env.NODE_ENV === 'production',
        maxAge : 60 * 60  ,// 60 Minues
        path: '/'
    });
    cookies().set('session_refer_token', referToken,{
        httpOnly : true,
        secure : process.env.NODE_ENV === 'production',
        maxAge : 60 * 60 * 24 * 7 * 30 ,// One month
        path: '/'
    });
}

export async function resetAuthCookies(){
    console.log('the action path is working');
    cookies().set('session_userid', '');
    cookies().set('session_access_token', '');
    cookies().set('session_refer_token', '');
}


//GET DATA
export async function getUserId() {
    const userId = cookies().get('session_userid')?.value;
    return userId ? userId : null;
}

export async function getAccessToken() {
    const accessToken = cookies().get('session_access_token')?.value;
    return accessToken;
  }
  
