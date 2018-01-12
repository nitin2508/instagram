import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchImages,predictImage} from '../actions/index';
import ImageComponent from './ImageComponent'


class ImageContainerComponent extends Component{

    componentDidMount() {
        console.log(this.props.token)
        if(this.props.token){
        this.props.fetchImages(this.props.token);
        }
    }

    generateImageArray(){
        if(this.props&& this.props.images && this.props.images.length>0){
            // this.props.predictImage()
            return this.props.images.map((image)=>{
                return <ImageComponent key={image.images.low_resolution.url} url={image.images.low_resolution.url}/>
            })
        }
    }

    render(){
        return(<div className="imageContainer">{this.generateImageArray()}</div>)
    }

}

function mapStateToProps(state){
    console.log(state)
    return{
        images:state.images.images,
        token:state.token.token,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchImages,predictImage
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageContainerComponent);