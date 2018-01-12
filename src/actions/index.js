import axios from 'axios';
import Clarifai from 'clarifai';
export const ON_LOGIN = 'ON_LOGIN';
export const FETCHING_IMAGES = 'FETCHING_IMAGES';

const array=[{url:"https://scontent.cdninstagram.com/vp/71707ec5313066a59716ff31097a84df/5AD86B50/t51.2885-15/s640x640/sh0.08/e35/26065268_153709091951169_7738462058621960192_n.jpg"},
            {url:"https://scontent.cdninstagram.com/vp/89339e9767d8d1a0509871e8621f36ae/5AFB67E7/t51.2885-15/s640x640/sh0.08/e35/26181204_174171099851324_3608246388086800384_n.jpg"}];

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
    console.log('images')
    return{
        type:FETCHING_IMAGES,
        payload:request,
    };
}

export function predictImage(){
    const request = app.models.predict(Clarifai.GENERAL_MODEL,array);
     return{
        type:'CATEGORISED',
        payload:request,
    };
}   