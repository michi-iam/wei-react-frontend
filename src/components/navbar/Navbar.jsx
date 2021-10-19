import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import "./navbar.scss";
import Categories from "../category/backend/Categories";
import axios from 'axios';

const DroppyItem = ({ post }) => {
  return <NavDropdown.Item href={ "#"+post.linkName}>{ post.title}</NavDropdown.Item>
}

const Droppy = ({ category }) => {
  var posts = category.posts;
  return <NavDropdown title={ category.linkName } id="navbarScrollingDropdown">
          {Object.keys(posts).map(function(keyName, keyIndex){
                return <DroppyItem post={ posts[keyName] } key={ keyIndex }></DroppyItem>
                })}

</NavDropdown>
}

class MeineNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      categories: Categories 
    }
  }
  componentDidMount() {
    axios.get(`http://192.168.178.72:8000/get_categories`)
      .then(res => {
        const data = res.data;
        console.log(res)
        console.log(data.data)
       this.setState({ categories: data.data})
      })
  }
  
    render () {
      var categories = this.state.categories;
      return <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#">Teil dein Schmeil</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >


          
          {Object.keys(categories).map(function(keyName, keyIndex){
                return <Droppy category={ categories[keyName] } key={ keyIndex }></Droppy>
                })}


    
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    }
  }


  export default MeineNavbar;



