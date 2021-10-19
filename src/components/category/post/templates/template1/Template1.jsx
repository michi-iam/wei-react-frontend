import React from 'react';
import "./template1.scss"
import Image from "../../../image/Image";
import Link from "../../../link/Link";






const SeitenText = ({ seitenText }) => {
    return <div className="border border-rot border-2 p-3 mt-3 bg-gelb">
        <p className="text-muted">{ seitenText }</p>
    </div>
}




const Images = ( { images } ) => {
    return <div className="p-3 border border-gelb border-2 justify-content-center bg-purple">
    {Object.keys(images).map(function(keyName, keyIndex){
            return <Image image={images[keyName]} key={ keyIndex } id={ keyIndex }></Image>
        })}
    </div> 
}



const Links = ( { links } ) => {
    return <div className="bg-gelb p-5 mb-2 rounded shadow-lg border border-rot border-2">
        { Object.keys(links).map(function(keyName, keyIndex){
            return <Link link={links[keyName]} key={ keyIndex }></Link>
        }) }
    </div>
}



const PostWithImage = ({ title, mainImage, subTitle, text, image, image_alt, links, images, seitenText  }) => {
    return <div className='row justify-content-center PostMitImage'>
       
        <img src={ mainImage.src } alt={ image_alt } />
        
        <div className="row PostMitImageTitleDiv">
         
            <h1>{title}</h1>
            <h2>{subTitle}</h2>

        </div>
        <div className="row justify-content-center">
            <div className="col-12 col-lg-3 PostMitImageText order-2 order-lg-1">
                { links ? 
                <div className="row">
                    <Links links={ links }></Links>
                </div>
                : "" }
                { images ? 
                    <div className="row">
                    <Images images={ images }></Images> 
                    </div>
                : ""}
                { seitenText ? 
                <div className="row">
                    <SeitenText seitenText={ seitenText }></SeitenText>
                </div>
                : "" }
            </div>
            <div className="col-12 col-lg-9 PostMitImageText order-1 order-lg-2">
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    </div>

}




class Template1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            mainImage: ""
         }

      }
      
      componentDidMount() {
        var images = this.props.images;
        this.setState({ images:images  })
          var mainImage = this.props.mainImage;
            this.setState({ mainImage: mainImage })

      }

    render () {
        return <div> 
        <PostWithImage title={ this.props.title } mainImage={ this.state.mainImage } subTitle={ this.props.subTitle } text={ this.props.text } image={ this.state.mainImage.src } image_alt={ this.state.mainImage.alt } links={ this.props.links } images={ this.props.images } seitenText={ this.props.seitenText }></PostWithImage> 
       
     
        </div>
    }
  }


  export default Template1;

  
