import axios from 'axios';
import Clarifai from 'clarifai';
export const ON_LOGIN = 'ON_LOGIN';
export const FETCHING_IMAGES = 'FETCHING_IMAGES';
export const CATEGORISED_IMAGES = 'CATEGORISED_IMAGES';

const app = new Clarifai.App({
 apiKey: 'd2babef6aa204b2e8352899f54569ee1'
});
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
    return{
        type:FETCHING_IMAGES,
        payload:request,
    };
}

export function categorizedImage(images){
    const array = _giveObjectOfImages(images);
    console.log(array)
    const request = app.models.predict(Clarifai.GENERAL_MODEL,array);
     return{
        type:CATEGORISED_IMAGES,
        payload:request,
    };
}  

function _giveObjectOfImages(images){
    return images.map((image)=>{
   // console.log(image.images.standard_resolution.url)
       return {url:image.images.standard_resolution.url}
    })
} 