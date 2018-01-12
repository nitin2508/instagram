import React ,{Component} from 'react';
import {connect} from 'react-redux';
import LoginComponent from './LoginComponent';
import ImageContainerComponent from './ImageContainerComponent';

class CategoryComponent extends Component{

    generateCategorizedImages(){
           if(this.props.categorizedImageObj){
               debugger;
              const categorizedObj = {};
                 const object = this.props.categorizedImageObj;
                for(let i=0;i<object.length;i++){
                     let imageUrl =object[i].input.data.image.url;
                     let categoryArray = object[i].data.concepts;
                    for(let j=0;j<=10;j++){
                        if(categorizedObj[categoryArray[j].name]){
                        categorizedObj[categoryArray[j].name].push(imageUrl)
                        }else{
                        categorizedObj[categoryArray[j].name][0]=imageUrl
                    }
                    }
                }
                console.log(categorizedObj)
        }
    }
    
    render(){
        return(<div>{this.props.token?<div><CategoryComponent/><ImageContainerComponent/></div>:<LoginComponent/>}</div>)
    }
}

function mapStateToProps(state){
    return{
        images:state.token.token
    }
}




export default connect(mapStateToProps,null)(CategoryComponent);