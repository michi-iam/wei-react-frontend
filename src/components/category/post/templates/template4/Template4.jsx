import React from 'react';
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
    return <div className="container rounded shadow-lg p-3 border border-2 border-purple bg-body-bg bg-gradient">
        <div className="row">
            <div className="col-12 col-lg-8 ">
                <h1>{ title }</h1>
                <h4>{ subTitle }</h4>
                <h4 className="template4_Text text-start"><div dangerouslySetInnerHTML={{ __html: text }} /></h4>
            </div>
            <div className="col-12 col-lg-4  bg-purple p-3">
                <div className="row">
                    <MeinCarousel post={post} images={ images } carouselName={ "dings" + id }></MeinCarousel> 
                </div>
                <div className="row">
                    <SeitenText seitenText={seitenText}></SeitenText>
                </div>
                <div className="row">
                    <Links links={links}></Links>
                </div>
            </div>
        </div>
     
    </div>
}







class Template4 extends React.Component {
    render () {
        return <div> 
        <PostWithImage id={ this.props.id } post={this.props.post} title={ this.props.title } subTitle={ this.props.subTitle } text={ this.props.text } image={ this.props.image } image_alt={ this.props.image_alt } links={ this.props.links } images={ this.props.images } seitenText={ this.props.seitenText }></PostWithImage> 
       
     
        </div>
    }
  }


  export default Template4;

  
