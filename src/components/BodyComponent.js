import React ,{Component} from 'react';
import {connect} from 'react-redux';
import LoginComponent from './LoginComponent';
import ImageContainerComponent from './ImageContainerComponent';

class BodyComponent extends Component{
    componentDidMount() {
        if(this.props.token){
        this.props.fetchImages(this.props.token);
        }
    }
    render(){
        return(<div>{this.props.token?<div><ImageContainerComponent/></div>:<LoginComponent/>}</div>)
    }
}

function mapStateToProps(state){
    return{
        token:state.token.token
    }
}




export default connect(mapStateToProps,null)(BodyComponent);