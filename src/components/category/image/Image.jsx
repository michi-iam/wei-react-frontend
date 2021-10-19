import React from 'react';
import {isMobile} from 'react-device-detect';


class Image extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            id: "", 
            src: "", 
            alt: "", 
            fullsize: false,
        }

        this.handleClick = this.handleClick.bind(this);
      }
      
      componentDidMount() {
            this.setState({ id: this.props.id } )
            this.setState({src: this.props.image.src})
            this.setState({alt: this.props.image.alt})
          console.log("hier")
          console.log(this.props.image.src)
      }


      handleClick() {
        this.state.fullsize ?
        this.setState({ fullsize: false })
        :
        this.setState({ fullsize: true });
        
      }

    render () {
      const fullSizeClass = <div aria-expanded="true" onClick={ this.handleClick } className="row bg-info p-5 justify-content-center" style={{ bottom:50 ,height: "100vh", width:"100%", zIndex:99, position:"absolute", overflow:"visible", overflowX:"scroll" }}>
        <div className="col-8 bg-primary p-3 text-center">
          <img className="img img-fluid p-5 m-2" src={ this.state.src } alt={ this.state.alt }/>
          </div>
      </div>

        const normalClass = <div aria-expanded="false" id={ this.state.id } className="row mb-2">
          <img onClick={ this.handleClick } src={ this.state.src } alt={ this.state.alt } />
          </div>
        var fullsize = this.state.fullsize;
      return fullsize && isMobile === false ? fullSizeClass : normalClass;
    
    }
  }


  export default Image;

  
