import React from 'react';
import HeaderImage from "../../assets/images/haseheader.jpg"

class Header extends React.Component {

      
    render () {
      return <div className='row imagerow g-0 '>
            <img className="" src={ HeaderImage } alt="Koblenzer Schlosspark. Im Hintergund ist der Rhein und die Festung Ehrenbreitstein zwischen braunen und grünen Bäumen. Im Vordergrund eine Statue von einer Frau in den armen eines Mannes mit langem Bart. Eine Darstellung von Vater Rhein und Mutter Mosel." />
            <div  className="imagetext text-center pt-2 pb-2 font-monospace ps-2 pe-2">
                <h1 className="text-Title">{ this.props.title }</h1>
                <h3 className="text-subTitle">{ this.props.subTitle }</h3>
            </div>
         </div>
    
    }
  }


  export default Header;

  
