import React ,{Component} from 'react';
import {connect} from 'react-redux';
import LoginComponent from './LoginComponent';
import ImageContainerComponent from './ImageContainerComponent';

class BodyComponent extends Component{

    render(){
        return(<div>{this.props.token?<ImageContainerComponent/>:<LoginComponent/>}</div>)
    }
}

function mapStateToProps(state){
    return{
        token:state.token.token
    }
}




export default connect(mapStateToProps,null)(BodyComponent);