import React from 'react';
import "./template2.scss";

import MeinCarousel from "../../../image/Carousel";
import Link from "../../../link/Link";
const SeitenText = ({ seitenText }) => {
    return <div className="border border-rot border-2 p-3 mt-3 bg-gelb">
        <p className="text-muted">{ seitenText }</p>
    </div>
}








const Links = ( { links } ) => {
    return <div className="bg-gelb p-5 mb-2 rounded shadow-lg border border-rot border-2">
        { Object.keys(links).map(function(keyName, keyIndex){
            return <Link link={links[keyName]} key={ keyIndex }></Link>
        }) }
    </div>
}

const PostWithImage = ({ id, post, title, subTitle, text, image, image_alt, links, images, seitenText  }) => {
    return <div className='row justify-content-center PostMitImage'>
               { images ? 
                    <div className="row">
                    <MeinCarousel post={post} images={ images } carouselName={ "dings" + id } key={id}></MeinCarousel> 
                    </div>
                : ""}
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
 
                { seitenText ? 
                <div className="row">
                    <SeitenText seitenText={ seitenText }></SeitenText>
                </div>
                : "" }
            </div>
            <div className="col-12 col-lg-9 PostMitImageText order-1 order-lg-2 fs-5 fs-lg-3">
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    </div>

}




class Template2 extends React.Component {
    render () {
        return <div> 
        <PostWithImage id={ this.props.id } post={this.props.post} title={ this.props.title } subTitle={ this.props.subTitle } text={ this.props.text } image={ this.props.image } image_alt={ this.props.image_alt } links={ this.props.links } images={ this.props.images } seitenText={ this.props.seitenText }></PostWithImage> 
       
     
        </div>
    }
  }


  export default Template2;

  
