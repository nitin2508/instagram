import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button, Icon } from 'semantic-ui-react'
import {onLogin} from '../actions/index';

const instagramLoginUrl = 'https://api.instagram.com/oauth/authorize/?client_id=2bfd0a9c1736474bb0312e45d3735673&redirect_uri=http://localhost:3000&response_type=token';

class LoginComponent extends Component{

    componentDidMount(){
        if(window.location.hash){
            let tokenString = window.location.hash;
            let token = tokenString.substring(tokenString.indexOf('=') + 1);
            this.props.onLogin(token)
        }
    }
   
    render(){
        // console.log(this.props)
        // <a href={instagramLoginUrl}>Login With Instagram</a>
       return(  <div className="instagramButton">
                    <Button href={instagramLoginUrl} color='instagram'>
                         <Icon name='instagram' />Login With Instagram
                    </Button>
                </div> )
       
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onLogin
    }, dispatch);
}

export default connect(null,mapDispatchToProps)(LoginComponent);