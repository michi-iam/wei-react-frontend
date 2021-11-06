import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import Categories from "../category/backend/Categories";
import axios from 'axios';


const URL_GET_CATEGORIES = process.env.REACT_APP_URL_GET_CATEGORIES;

// Dropdown Menu
const Droppy = ({ category }) => {
  var posts = category.posts;
  return <NavDropdown title={ category.linkName } id="navbarScrollingDropdown">
          {Object.keys(posts).map(function(keyName, keyIndex){
                return <DroppyItem post={ posts[keyName] } key={ keyIndex }></DroppyItem>
                })}
        </NavDropdown>
}

// Items in dropdown
const DroppyItem = ({ post }) => {
  return <NavDropdown.Item href={ "#"+post.linkName}>{ post.title}</NavDropdown.Item>
}


class MeineNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      categories: Categories // dev: backend substitute
    }
  }


  componentDidMount() {
    axios.get(URL_GET_CATEGORIES)
      .then(res => {
        const data = res.data;
       this.setState({ categories: data.categories}) // replace categories with cats from backend
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
          
          {Object.keys(categories).map(function(keyName, keyIndex){ // each category = one dropdown menu
                return <Droppy category={ categories[keyName] } key={ keyIndex }></Droppy> 
                })}


    
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    }
  }


  export default MeineNavbar;



