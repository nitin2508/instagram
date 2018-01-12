import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchImages,categorizedImage} from '../actions/index';
import ImageComponent from './ImageComponent'


class ImageContainerComponent extends Component{

    componentDidMount() {
        if(this.props.token){
        this.props.fetchImages(this.props.token);
        }
    }
    shouldComponentUpdate(){
        console.log('SHOLUE COMPONENT UPDATE')
        if(this.props.categorizedImageObj){
            return false;
        }
        return true;
    }
    
    componentDidUpdate(){
       if(this.props.images){
           this.props.categorizedImage(this.props.images)
       }
    }
    
    generateCategorizedImages(){
           if(this.props.categorizedImageObj){
              
        }
    }

    giveCategorizedObject(object){
         const categorizedObj = {};
                 //const object = this.props.categorizedImageObj.outputs;
        for(let i=0;i<object.length;i++){
                let imageUrl =object[i].input.data.image.url;
                let categoryArray = object[i].data.concepts;
                for(let j=0;j<=10;j++){
                    if(categorizedObj[categoryArray[j].name]){
                    categorizedObj[categoryArray[j].name].push(imageUrl)
                }   else{
                            categorizedObj[categoryArray[j].name]=[];    
                            categorizedObj[categoryArray[j].name].push(imageUrl)
                    }
            }
        }

            return categorizedObj;
    }
  
    generateImageArray(){
        if(this.props&& this.props.images && this.props.images.length>0){          
            return this.props.images.map((image)=>{
                return <ImageComponent key={image.images.low_resolution.url} url={image.images.low_resolution.url}/>
            })
        }
    }

    render(){
        return(<div className="imageContainer">{this.generateImageArray()}{this.generateCategorizedImages()}</div>)
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
        fetchImages,categorizedImage
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageContainerComponent);

var obj = {
  "outdoors": [
    "https://scontent.cdninstagram.com/vp/6423c75c20fa82c3ae449935692b5e91/5AD8DD62/t51.2885-15/s640x640/sh0.08/e35/26262917_1942462446013678_2230267884204982272_n.jpg",
    "https://scontent.cdninstagram.com/vp/e0ead15c05e513ea269e2b431c1cb23d/5ADDB187/t51.2885-15/s640x640/sh0.08/e35/26070157_144091902969117_8936867790879457280_n.jpg",
    "https://scontent.cdninstagram.com/vp/89339e9767d8d1a0509871e8621f36ae/5AFB67E7/t51.2885-15/s640x640/sh0.08/e35/26181204_174171099851324_3608246388086800384_n.jpg"
  ],
  "nature": [
    "https://scontent.cdninstagram.com/vp/6423c75c20fa82c3ae449935692b5e91/5AD8DD62/t51.2885-15/s640x640/sh0.08/e35/26262917_1942462446013678_2230267884204982272_n.jpg",
    "https://scontent.cdninstagram.com/vp/e0ead15c05e513ea269e2b431c1cb23d/5ADDB187/t51.2885-15/s640x640/sh0.08/e35/26070157_144091902969117_8936867790879457280_n.jpg"
  ],
  "sunset": [
    "https://scontent.cdninstagram.com/vp/6423c75c20fa82c3ae449935692b5e91/5AD8DD62/t51.2885-15/s640x640/sh0.08/e35/26262917_1942462446013678_2230267884204982272_n.jpg"
  ],
  "silhouette": [
    "https://scontent.cdninstagram.com/vp/6423c75c20fa82c3ae449935692b5e91/5AD8DD62/t51.2885-15/s640x640/sh0.08/e35/26262917_1942462446013678_2230267884204982272_n.jpg"
  ],
  "horizontal plane": [
    "https://scontent.cdninstagram.com/vp/6423c75c20fa82c3ae449935692b5e91/5AD8DD62/t51.2885-15/s640x640/sh0.08/e35/26262917_1942462446013678_2230267884204982272_n.jpg"
  ],
  "reflection": [
    "https://scontent.cdninstagram.com/vp/6423c75c20fa82c3ae449935692b5e91/5AD8DD62/t51.2885-15/s640x640/sh0.08/e35/26262917_1942462446013678_2230267884204982272_n.jpg"
  ],
  "horizontal": [
    "https://scontent.cdninstagram.com/vp/6423c75c20fa82c3ae449935692b5e91/5AD8DD62/t51.2885-15/s640x640/sh0.08/e35/26262917_1942462446013678_2230267884204982272_n.jpg"
  ],
  "dawn": [
    "https://scontent.cdninstagram.com/vp/6423c75c20fa82c3ae449935692b5e91/5AD8DD62/t51.2885-15/s640x640/sh0.08/e35/26262917_1942462446013678_2230267884204982272_n.jpg"
  ],
  "dusk": [
    "https://scontent.cdninstagram.com/vp/6423c75c20fa82c3ae449935692b5e91/5AD8DD62/t51.2885-15/s640x640/sh0.08/e35/26262917_1942462446013678_2230267884204982272_n.jpg"
  ],
  "sky": [
    "https://scontent.cdninstagram.com/vp/6423c75c20fa82c3ae449935692b5e91/5AD8DD62/t51.2885-15/s640x640/sh0.08/e35/26262917_1942462446013678_2230267884204982272_n.jpg"
  ],
  "grass": [
    "https://scontent.cdninstagram.com/vp/6423c75c20fa82c3ae449935692b5e91/5AD8DD62/t51.2885-15/s640x640/sh0.08/e35/26262917_1942462446013678_2230267884204982272_n.jpg"
  ],
  "celebration": [
    "https://scontent.cdninstagram.com/vp/71707ec5313066a59716ff31097a84df/5AD86B50/t51.2885-15/s640x640/sh0.08/e35/26065268_153709091951169_7738462058621960192_n.jpg",
    "https://scontent.cdninstagram.com/vp/2b747fb4b8859b495e348fffbdaa9dc3/5AFBE26A/t51.2885-15/e35/26072933_158358188139539_4834852171235196928_n.jpg"
  ],
  "no person": [
    "https://scontent.cdninstagram.com/vp/71707ec5313066a59716ff31097a84df/5AD86B50/t51.2885-15/s640x640/sh0.08/e35/26065268_153709091951169_7738462058621960192_n.jpg",
    "https://scontent.cdninstagram.com/vp/e0ead15c05e513ea269e2b431c1cb23d/5ADDB187/t51.2885-15/s640x640/sh0.08/e35/26070157_144091902969117_8936867790879457280_n.jpg"
  ],
  "candle": [
    "https://scontent.cdninstagram.com/vp/71707ec5313066a59716ff31097a84df/5AD86B50/t51.2885-15/s640x640/sh0.08/e35/26065268_153709091951169_7738462058621960192_n.jpg"
  ],
  "Christmas": [
    "https://scontent.cdninstagram.com/vp/71707ec5313066a59716ff31097a84df/5AD86B50/t51.2885-15/s640x640/sh0.08/e35/26065268_153709091951169_7738462058621960192_n.jpg",
    "https://scontent.cdninstagram.com/vp/89339e9767d8d1a0509871e8621f36ae/5AFB67E7/t51.2885-15/s640x640/sh0.08/e35/26181204_174171099851324_3608246388086800384_n.jpg"
  ],
  "religion": [
    "https://scontent.cdninstagram.com/vp/71707ec5313066a59716ff31097a84df/5AD86B50/t51.2885-15/s640x640/sh0.08/e35/26065268_153709091951169_7738462058621960192_n.jpg"
  ],
  "flame": [
    "https://scontent.cdninstagram.com/vp/71707ec5313066a59716ff31097a84df/5AD86B50/t51.2885-15/s640x640/sh0.08/e35/26065268_153709091951169_7738462058621960192_n.jpg"
  ],
  "dark": [
    "https://scontent.cdninstagram.com/vp/71707ec5313066a59716ff31097a84df/5AD86B50/t51.2885-15/s640x640/sh0.08/e35/26065268_153709091951169_7738462058621960192_n.jpg"
  ],
  "winter": [
    "https://scontent.cdninstagram.com/vp/71707ec5313066a59716ff31097a84df/5AD86B50/t51.2885-15/s640x640/sh0.08/e35/26065268_153709091951169_7738462058621960192_n.jpg",
    "https://scontent.cdninstagram.com/vp/89339e9767d8d1a0509871e8621f36ae/5AFB67E7/t51.2885-15/s640x640/sh0.08/e35/26181204_174171099851324_3608246388086800384_n.jpg"
  ],
  "illuminated": [
    "https://scontent.cdninstagram.com/vp/71707ec5313066a59716ff31097a84df/5AD86B50/t51.2885-15/s640x640/sh0.08/e35/26065268_153709091951169_7738462058621960192_n.jpg"
  ],
  "light": [
    "https://scontent.cdninstagram.com/vp/71707ec5313066a59716ff31097a84df/5AD86B50/t51.2885-15/s640x640/sh0.08/e35/26065268_153709091951169_7738462058621960192_n.jpg"
  ],
  "festival": [
    "https://scontent.cdninstagram.com/vp/71707ec5313066a59716ff31097a84df/5AD86B50/t51.2885-15/s640x640/sh0.08/e35/26065268_153709091951169_7738462058621960192_n.jpg"
  ],
  "rose": [
    "https://scontent.cdninstagram.com/vp/2b747fb4b8859b495e348fffbdaa9dc3/5AFBE26A/t51.2885-15/e35/26072933_158358188139539_4834852171235196928_n.jpg"
  ],
  "love": [
    "https://scontent.cdninstagram.com/vp/2b747fb4b8859b495e348fffbdaa9dc3/5AFBE26A/t51.2885-15/e35/26072933_158358188139539_4834852171235196928_n.jpg"
  ],
  "romance": [
    "https://scontent.cdninstagram.com/vp/2b747fb4b8859b495e348fffbdaa9dc3/5AFBE26A/t51.2885-15/e35/26072933_158358188139539_4834852171235196928_n.jpg"
  ],
  "flower": [
    "https://scontent.cdninstagram.com/vp/2b747fb4b8859b495e348fffbdaa9dc3/5AFBE26A/t51.2885-15/e35/26072933_158358188139539_4834852171235196928_n.jpg",
    "https://scontent.cdninstagram.com/vp/e0ead15c05e513ea269e2b431c1cb23d/5ADDB187/t51.2885-15/s640x640/sh0.08/e35/26070157_144091902969117_8936867790879457280_n.jpg"
  ],
  "petal": [
    "https://scontent.cdninstagram.com/vp/2b747fb4b8859b495e348fffbdaa9dc3/5AFBE26A/t51.2885-15/e35/26072933_158358188139539_4834852171235196928_n.jpg"
  ],
  "bouquet": [
    "https://scontent.cdninstagram.com/vp/2b747fb4b8859b495e348fffbdaa9dc3/5AFBE26A/t51.2885-15/e35/26072933_158358188139539_4834852171235196928_n.jpg"
  ],
  "romantic": [
    "https://scontent.cdninstagram.com/vp/2b747fb4b8859b495e348fffbdaa9dc3/5AFBE26A/t51.2885-15/e35/26072933_158358188139539_4834852171235196928_n.jpg"
  ],
  "bride": [
    "https://scontent.cdninstagram.com/vp/2b747fb4b8859b495e348fffbdaa9dc3/5AFBE26A/t51.2885-15/e35/26072933_158358188139539_4834852171235196928_n.jpg"
  ],
  "wedding": [
    "https://scontent.cdninstagram.com/vp/2b747fb4b8859b495e348fffbdaa9dc3/5AFBE26A/t51.2885-15/e35/26072933_158358188139539_4834852171235196928_n.jpg"
  ],
  "gift": [
    "https://scontent.cdninstagram.com/vp/2b747fb4b8859b495e348fffbdaa9dc3/5AFBE26A/t51.2885-15/e35/26072933_158358188139539_4834852171235196928_n.jpg"
  ],
  "leaf": [
    "https://scontent.cdninstagram.com/vp/e0ead15c05e513ea269e2b431c1cb23d/5ADDB187/t51.2885-15/s640x640/sh0.08/e35/26070157_144091902969117_8936867790879457280_n.jpg"
  ],
  "flora": [
    "https://scontent.cdninstagram.com/vp/e0ead15c05e513ea269e2b431c1cb23d/5ADDB187/t51.2885-15/s640x640/sh0.08/e35/26070157_144091902969117_8936867790879457280_n.jpg"
  ],
  "growth": [
    "https://scontent.cdninstagram.com/vp/e0ead15c05e513ea269e2b431c1cb23d/5ADDB187/t51.2885-15/s640x640/sh0.08/e35/26070157_144091902969117_8936867790879457280_n.jpg"
  ],
  "garden": [
    "https://scontent.cdninstagram.com/vp/e0ead15c05e513ea269e2b431c1cb23d/5ADDB187/t51.2885-15/s640x640/sh0.08/e35/26070157_144091902969117_8936867790879457280_n.jpg"
  ],
  "food": [
    "https://scontent.cdninstagram.com/vp/e0ead15c05e513ea269e2b431c1cb23d/5ADDB187/t51.2885-15/s640x640/sh0.08/e35/26070157_144091902969117_8936867790879457280_n.jpg"
  ],
  "summer": [
    "https://scontent.cdninstagram.com/vp/e0ead15c05e513ea269e2b431c1cb23d/5ADDB187/t51.2885-15/s640x640/sh0.08/e35/26070157_144091902969117_8936867790879457280_n.jpg"
  ],
  "agriculture": [
    "https://scontent.cdninstagram.com/vp/e0ead15c05e513ea269e2b431c1cb23d/5ADDB187/t51.2885-15/s640x640/sh0.08/e35/26070157_144091902969117_8936867790879457280_n.jpg"
  ],
  "snow": [
    "https://scontent.cdninstagram.com/vp/89339e9767d8d1a0509871e8621f36ae/5AFB67E7/t51.2885-15/s640x640/sh0.08/e35/26181204_174171099851324_3608246388086800384_n.jpg"
  ],
  "tree": [
    "https://scontent.cdninstagram.com/vp/89339e9767d8d1a0509871e8621f36ae/5AFB67E7/t51.2885-15/s640x640/sh0.08/e35/26181204_174171099851324_3608246388086800384_n.jpg"
  ],
  "season": [
    "https://scontent.cdninstagram.com/vp/89339e9767d8d1a0509871e8621f36ae/5AFB67E7/t51.2885-15/s640x640/sh0.08/e35/26181204_174171099851324_3608246388086800384_n.jpg"
  ],
  "wood": [
    "https://scontent.cdninstagram.com/vp/89339e9767d8d1a0509871e8621f36ae/5AFB67E7/t51.2885-15/s640x640/sh0.08/e35/26181204_174171099851324_3608246388086800384_n.jpg"
  ],
  "frozen": [
    "https://scontent.cdninstagram.com/vp/89339e9767d8d1a0509871e8621f36ae/5AFB67E7/t51.2885-15/s640x640/sh0.08/e35/26181204_174171099851324_3608246388086800384_n.jpg"
  ],
  "mountain": [
    "https://scontent.cdninstagram.com/vp/89339e9767d8d1a0509871e8621f36ae/5AFB67E7/t51.2885-15/s640x640/sh0.08/e35/26181204_174171099851324_3608246388086800384_n.jpg"
  ],
  "landscape": [
    "https://scontent.cdninstagram.com/vp/89339e9767d8d1a0509871e8621f36ae/5AFB67E7/t51.2885-15/s640x640/sh0.08/e35/26181204_174171099851324_3608246388086800384_n.jpg"
  ],
  "weather": [
    "https://scontent.cdninstagram.com/vp/89339e9767d8d1a0509871e8621f36ae/5AFB67E7/t51.2885-15/s640x640/sh0.08/e35/26181204_174171099851324_3608246388086800384_n.jpg"
  ]
}