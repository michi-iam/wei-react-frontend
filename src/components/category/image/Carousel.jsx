import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


class MeinCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            mainImage: "", 
            images: "",
        }
      }
    
      componentDidMount() {
       
          var images = this.props.images;
          this.setState({ images:images  })
            var mainImage = this.props.post.mainImage;
        
        
            this.setState({ mainImage: mainImage })
     
          
      }

    render() {
        var mainImage = this.state.mainImage;
        var images = this.state.images;
   
        
        return <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ mainImage.src }
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{ mainImage.slideTitle }</h3>
            <p>{ mainImage.slideText }</p>
          </Carousel.Caption>
        </Carousel.Item>
        {Object.keys(images).map(function(keyName, keyIndex){
          
          if(! images[keyName].main){
            return <Carousel.Item key={keyIndex}>
            <img
              className="d-block w-100"
              src={ images[keyName].src }
              alt="Third slide"
            />
        
            <Carousel.Caption>
            <h3>{ images[keyName].slideTitle }</h3>
            <p>{ images[keyName].slideText }</p>
            </Carousel.Caption>
          </Carousel.Item>

          }
          else {
            return null;
          }
        })}

      </Carousel>
    }

    }



export default MeinCarousel;