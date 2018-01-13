import React from 'react';

const ImageComponent=(props)=>{
    return (<img className="instaImage" alt="Instagramimage" src={props.url}/>);
}

export default ImageComponent;