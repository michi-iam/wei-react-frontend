import React from 'react';

import Template1 from "./templates/template1/Template1";
import Template2 from "./templates/template2/Template2";
import Template3 from "./templates/template3/Template3";
import Template4 from "./templates/template4/Template4";


const CatName = ({ catName }) => {
  return <h1 className="text-center p-3 bg-info rounded shadow mt-5">{ catName }</h1>
}

class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.renderSwitch = this.renderSwitch.bind(this);
  }
  
  renderSwitch(postkeyname, keyIndex) {
    switch(postkeyname.template) {
      case 'template1':
        return <Template1 id={postkeyname.id} mainImage={postkeyname.mainImage} post={postkeyname} title={postkeyname.title} subTitle={postkeyname.subTitle} text={postkeyname.text} image={ postkeyname.image } image_alt={ postkeyname.image_alt } links={ postkeyname.links } images={ postkeyname.images } seitenText={ postkeyname.seitenText } key={ keyIndex }></Template1>;
      case 'template2':
        return <Template2 id={postkeyname.id} mainImage={postkeyname.mainImage} post={postkeyname} title={postkeyname.title} subTitle={postkeyname.subTitle} text={postkeyname.text} image={ postkeyname.image } image_alt={ postkeyname.image_alt } links={ postkeyname.links } images={ postkeyname.images } seitenText={ postkeyname.seitenText } key={ keyIndex }></Template2>;
      case 'template3':
        return <Template3 id={postkeyname.id} mainImage={postkeyname.mainImage} post={postkeyname} title={postkeyname.title} subTitle={postkeyname.subTitle} text={postkeyname.text} image={ postkeyname.image } image_alt={ postkeyname.image_alt } links={ postkeyname.links } images={ postkeyname.images } seitenText={ postkeyname.seitenText } key={ keyIndex }></Template3>;
      case 'template4':
        return <Template4 id={postkeyname.id} mainImage={postkeyname.mainImage} post={postkeyname} title={postkeyname.title} subTitle={postkeyname.subTitle} text={postkeyname.text} image={ postkeyname.image } image_alt={ postkeyname.image_alt } links={ postkeyname.links } images={ postkeyname.images } seitenText={ postkeyname.seitenText } key={ keyIndex }></Template4>;
      default:
        return 'foo';
    }
  }
    render () {
        var post = this.props.category.posts;
        post = post.sort((a, b) => (a.order > b.order ? 1 : -1))
        var renderSwitch = this.renderSwitch;
      return <div>
            
              <CatName catName={ this.props.category.name } />
              {Object.keys(post).map(function(keyName, keyIndex){
                return <div id={ post[keyName].linkName } key={keyIndex} className="row mb-2">
                  { renderSwitch(post[keyName], keyIndex) }
                  </div>
                })}
         
      </div>
    
    }
  }


  export default Posts;

  
