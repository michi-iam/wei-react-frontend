# Wei-react-frontend

## simple react-app as a frontend for my django app (wei-react-backend)
#
### Flow
* ***components/Category.jsx*** fetches the categories from server and passes them to ***components/category/Posts.jsx***
* ***Posts.jsx*** passes each post according to it's template to ***components/category/post/templates/***
* If connection to server fails, the app uses ***components/category/backend/Categories.jsx***


