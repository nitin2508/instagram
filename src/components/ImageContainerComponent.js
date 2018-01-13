import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchImages,fetchCategorizedImage} from '../actions/index';
import ImageComponent from './ImageComponent'
import { Dropdown ,Loader} from 'semantic-ui-react'


class ImageContainerComponent extends Component{

    constructor(props){
      super(props);
      this.categorizedObj = null;
      this.state = {
        images:null
      }
    }

    componentDidMount() {
        if(this.props.token){
        this.props.fetchImages(this.props.token);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.images &&nextProps.images.length>0 &&!this.props.categorizedImageObj){
          this.setState({images:nextProps.images})
        }
    }
    
    componentDidUpdate(){
       if(this.props.images &&this.props.images.length>0 &&!this.props.categorizedImageObj){
           this.props.fetchCategorizedImage(this.props.images)
       }
    }

    onChangeingDroapDownValues = (event,data)=>{
        if(data && data.value){
          if(data.value ==='allImages'){
            this.setState({images:this.props.images})
          }else{
            let images = this.categorizedObj[data.value];
            let cloneImage = images.slice();  
            this.setState({images:cloneImage})
          }
        }
    }
    
    generateCategorizedImages(){
        if(this.props.images&&this.props.categorizedImageObj){
          this.categorizedObj = this.giveCategorizedObject(this.props.categorizedImageObj.outputs);
          let options = this.giveDropDownValues(this.categorizedObj)
          options.unshift({key:'allImages',value:'allImages',text:'All Images'})
        
          return(<div className="categoryDropDown">
                    <Dropdown onChange={this.onChangeingDroapDownValues} placeholder='Select Category' selection options={options} />
                  </div>) 
        }else if(this.props.images && this.props.images.length===0){
          return (<h4 style={{textAlign:'center'}}>No Image Found</h4>)
        }      
        else{
          return(<Loader active inline='centered' />)
        }
    }

    giveDropDownValues(categoryObj){
        let array = Object.keys(categoryObj);
        return array.map((category)=>{
          return{key:category,value:category,text:category}
        })
    }

    giveCategorizedObject(object){
         const categorizedObj = {};

        for(let i=0;i<object.length;i++){
                let imageUrl =object[i].input.data.image.url;
                let categoryArray = object[i].data.concepts;

                for(let j=0;j<=10;j++){
                    if(categorizedObj[categoryArray[j].name]){
                      categorizedObj[categoryArray[j].name].push(imageUrl)
                     }else{
                      categorizedObj[categoryArray[j].name]=[];    
                      categorizedObj[categoryArray[j].name].push(imageUrl)
                    }
             }
          }
            return categorizedObj;
    }

     generateImageArray(){
        if(this.state&& this.state.images && this.state.images.length>0){          
            return this.state.images.map((image)=>{
              if(image.images){
                return <ImageComponent key={image.images.low_resolution.url} url={image.images.low_resolution.url}/>
              }else{
                 return <ImageComponent key={image} url={image}/>
              }
            })
        }
    }

    render(){
        return(<div className="bodyContainer">
                  {this.generateCategorizedImages()}
                    <div className="imageContainer">
                      {this.generateImageArray()}
                    </div>
                </div>)
       }

}

function mapStateToProps(state){
    console.log(state);
    return{
        images:state.images.images,
        token:state.token.token,
        categorizedImageObj:state.categorizedImage.categorizedImage
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchImages,fetchCategorizedImage
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageContainerComponent);
