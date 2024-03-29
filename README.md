# ListAble

## Link to live app

https://listable.vercel.app/

## Link to Back End Repo

https://github.com/mandyalber/ListAble-API

## Summary section

This app allows users to create lists organized by category. The user also has the ability to edit and delete categories and lists, and can add, edit and mark items complete, as well as search for a specific item or list.
    
## Screenshots of the app

#### Landing Page
![Landing Page Screenshot](src/images/screenshots/landing.PNG?raw=true "Landing Page")

#### Dashboard
![Dashboard Screenshot](src/images/screenshots/dashboard.PNG?raw=true "Dashboard")

#### List Detail
![List Detail Screenshot](src/images/screenshots/list.PNG?raw=true "List Detail")    
   
## Technology used

This app was built using React.js and Vanilla CSS for the client and Node.js, Express and Postgres for the backend.

## API Documentation

The API supports the following requests:

GET 

    /category 

    /category/:categoryId

    /list

    /list/:listId

    /item

    /item/:itemId

POST

    /category

    /list

    /item


PATCH

    /category/:categoryId

    /list/:listId

    /item/:itemId


DELETE

    /category/:categoryId

    /list/:listId

    /item/:itemId
    


