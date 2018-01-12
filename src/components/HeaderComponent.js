import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Image } from 'semantic-ui-react'


class HeaderComponent extends Component{ 

    generateHtmlForHeader =()=>{
        if(this.props && this.props.images && this.props.images.length>0){
            return(<div className="layout-row"><Image className="profilePic" src={this.props.images[0].user.profile_picture}/>
                    <p className="name">{this.props.images[0].user.full_name}</p></div>)
        }
    }
    
    render(){
        return(
                    <div className="ui menu header HeaderComponent">
                        <div className="header item">
                            <p className="heading">Wooplr</p>
                        </div>
                            {this.generateHtmlForHeader()}    
                    </div>  
              )
    }

}

function mapStateToProps(state){
    console.log(state)
    return{
        images:state.images.images,
        token:state.token.token,
    }
}

export default connect(mapStateToProps,null)(HeaderComponent);