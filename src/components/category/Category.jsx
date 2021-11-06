import React from 'react';
import Categories from "./backend/Categories";
import Posts from "./post/Posts";
import axios from 'axios';


const URL_GET_CATEGORIES = process.env.REACT_APP_URL_GET_CATEGORIES;


class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            category: Categories, 
        }
       
      }

      componentDidMount() {
        axios.get(URL_GET_CATEGORIES)
          .then(res => {
            const data = res.data;
           this.setState({ category: data.categories}) // replace fake backend
          })
      }
   

    render () {
        var category = this.state.category;
        category = category.sort((a, b) => (a.order > b.order ? 1 : -1))
      return <div className="">
          {Object.keys(category).map(function(keyName, keyIndex){ // Posts for each category
                return <Posts category={category[keyName]} key={ keyIndex }></Posts>
                })}
      </div>
    
    }
  }


  export default Category;

  
