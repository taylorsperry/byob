## Build Your Own Backend: Authors + Books

This is a week-long solo project to practice building databases using Express, Knex, and PostgreSQL. I scraped the book publisher [FSG Originals](https://www.fsgoriginals.com/authors) website to create a one-to-many relational database schema of authors and books. I built a RESTful API with 4 GET endpoints, 2 POST endpoints, and 1 DELETE endpoint (detailed below). 

## API endpoints

### GET

#### `GET /api/v1/authors`
Response sends all authors in the database. Example: 
```javascript
  [{
      "id": 168,
      "name": "BEN LERNER",
      "bio": "Ben Lerner was born in Topeka, Kansas, in 1979. He has received fellowships from the Fulbright, Guggenheim, Howard, and MacArthur Foundations.",
      "created_at": "2019-05-01T16:33:27.240Z",
      "updated_at": "2019-05-01T16:33:27.240Z"
    },
    {
      "id": 176,
      "name": "RICHARD LLOYD PARRY",
      "bio": "Richard Lloyd Parry is the Asia editor and Tokyo bureau chief of The Times (London) and the author of People Who Eat Darkness and In the Time of Madness.",
      "created_at": "2019-05-01T16:33:27.245Z",
      "updated_at": "2019-05-01T16:33:27.245Z"
    },
    {
      "id": 142,
      "name": "CLAY BYARS",
      "bio": "Clay Byars attended The School of Letters at Sewanee, Tennessee, and is the assistant editor for Narrative Magazine. He lives with his two dogs on a farm outside Birmingham, Alabama.",
      "created_at": "2019-05-01T16:33:27.218Z",
      "updated_at": "2019-05-01T16:33:27.218Z"
    }]
```

#### `GET /api/v1/books`
Response sends all books in the database. Example: 
```javascript
   [{
      "id": 39,
      "title": "The Hatred of Poetry",
      "pub": "2016",
      "author_id": 168,
      "created_at": "2019-05-01T16:33:27.277Z",
      "updated_at": "2019-05-01T16:33:27.277Z"
    },
    {
      "id": 51,
      "title": "People Who Eat Darkness",
      "pub": "2012",
      "author_id": 176,
      "created_at": "2019-05-01T16:33:27.284Z",
      "updated_at": "2019-05-01T16:33:27.284Z"
    },
    {
      "id": 3,
      "title": "Will & I",
      "pub": "2016",
      "author_id": 142,
      "created_at": "2019-05-01T16:33:27.252Z",
      "updated_at": "2019-05-01T16:33:27.252Z"
    }]
 ```

#### `GET /api/v1/authors/:id`
Response sends a single author from the database with the `id` that matches the parameter in the request. For example `/api/v1/authors/183` sends the following response:  
```javascript
   [{
     "id": 183,
     "name": "JEFF VANDERMEER",
     "bio": "Jeff VanderMeer is an award-winning novelist and editor.",
     "created_at": "2019-05-01T16:33:27.249Z",
     "updated_at": "2019-05-01T16:33:27.249Z"
   }]
```

#### `GET /api/vi/authors/:id/books`
Response sends all books with the `author_id` that matches the parameter in the request. For example `/api/v1/authors/183/books` sends the following response: 
```javascript
   [{
      "id": 59,
      "title": "The Strange Bird",
      "pub": "2018",
      "author_id": 183,
      "created_at": "2019-05-01T16:33:27.289Z",
      "updated_at": "2019-05-01T16:33:27.289Z"
    },
    {
      "id": 60,
      "title": "Annihilation",
      "pub": "2018",
      "author_id": 183,
      "created_at": "2019-05-01T16:33:27.290Z",
      "updated_at": "2019-05-01T16:33:27.290Z"
    },
    {
      "id": 61,
      "title": "Area X",
      "pub": "2014",
      "author_id": 183,
      "created_at": "2019-05-01T16:33:27.290Z",
      "updated_at": "2019-05-01T16:33:27.290Z"
    },
    {
      "id": 62,
      "title": "Acceptance",
      "pub": "2014",
      "author_id": 183,
      "created_at": "2019-05-01T16:33:27.291Z",
      "updated_at": "2019-05-01T16:33:27.291Z"
    },
    {
      "id": 63,
      "title": "Authority",
      "pub": "2014",
      "author_id": 183,
      "created_at": "2019-05-01T16:33:27.292Z",
      "updated_at": "2019-05-01T16:33:27.292Z"
    }]
```

### POST

#### `POST /api/v1/authors`
Allows users to post a new author to the authors table with the following parameters:

| Name | Type | Description |
|:----:|:----:|-------------|
|`name`|`string`| Name of new author|
|`bio`|`string`| Biography of new author|

The response is the unique id created for the new record. For example, the request body

```javascript
{ "name": "Joan Didion", "bio": "Joan Didion is an award-winning novelist and critic" }
```
sends the following response: 

```javascript
   {
     "id": 187
   }
```

#### `POST /api/v1/books`
Allows users to post a new book to the books table with the following parameters:

| Name | Type | Description |
|:----:|:----:|-------------|
|`title`|`string`| Title of new book|
|`pub`|`integer`| Year of publication|
|`author_id`|`integer`| Foreign key associated with new book's author|

The response is the unique id created for the new record. For example, the request body

```javascript
{ "title": "Slouching Towards Bethlehem", "pub": 1968, "author_id": 187 }
```
sends the following response:

```javascript
   {
     "id": 83
   }
```

### DELETE

#### `DELETE /api/v1/books/:id`
Allows users to delete a single book that matches the id parameter in the request. For example, `/api/v1/books/83` sends the following response: 
```"Deleted title 'Slouching Towards Bethlehem' with id 83"```
