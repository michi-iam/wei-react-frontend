import React from 'react';
import Categories from "./backend/Categories";
import Posts from "./post/Posts";
import axios from 'axios';

class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            category: this.get_posts_for_category(), 
        }
        this.get_posts_for_category = this.get_posts_for_category.bind(this);
      }
      

      componentDidMount() {
        axios.get(`http://192.168.178.72:8000/get_categories`)
          .then(res => {
            const data = res.data;
            console.log(res)
            console.log(data.data)
           this.setState({ category: data.data})
          })
      }
   
    // get data from (fake)backend
    get_posts_for_category() {
        var category = Categories;
        return category;
    }

    render () {
        var category = this.state.category;
        category = category.sort((a, b) => (a.order > b.order ? 1 : -1))
      return <div className="row justify-content-center">
       
          {Object.keys(category).map(function(keyName, keyIndex){
                return <Posts category={category[keyName]} key={ keyIndex }></Posts>
                })}
    
      </div>
    
    }
  }


  export default Category;

  
