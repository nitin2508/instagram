import { combineReducers } from 'redux';
import {ON_LOGIN,FETCHING_IMAGES,CATEGORISED_IMAGES} from '../actions/index';

const initalState = {
    token:null,
    images:null,
    categoryArray:[],
    categorizedImage:null
}

const rootReducer = combineReducers({
   token:tokenReducer,
   images:fetchImages,
   categorizedImage:categorizedImage
});

function tokenReducer(state=initalState,action){
    switch(action.type){
        case ON_LOGIN:
            return Object.assign({},state,{token:action.payload})
        default:return state;
    }
}

function fetchImages(state=initalState,action){
      switch(action.type){
        case FETCHING_IMAGES:
            return Object.assign({},state,{images:action.payload.data.data})
        default:return state;
    }
}

function categorizedImage(state=initalState,action){
      switch(action.type){
        case CATEGORISED_IMAGES:
            return Object.assign({},state,{categorizedImage:action.payload})
        default:return state;
    }
}

export default rootReducer;

