import axios from 'axios';
export const ON_LOGIN = 'ON_LOGIN';
export const FETCHING_IMAGES = 'FETCHING_IMAGES';
const fetchImageUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='

export function onLogin(token){
    return{
        type:ON_LOGIN,
        payload:token
    }
}

export function fetchImages(token){
     const url=`${fetchImageUrl}${token}`;
    const request =axios.get(url);
    console.log('images')
    return{
        type:FETCHING_IMAGES,
        payload:request,
    };
}