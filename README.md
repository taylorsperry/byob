## Build Your Own Backend: Authors + Books

This is a week-long solo project to practice building databases using Express, Knex, and PostgreSQL. I scraped the book publisher [FSG Originals](https://www.fsgoriginals.com/authors) website to create a one-to-many relational database schema of authors and books. I built a RESTful API with 4 GET endpoints, 2 POST endpoints, and 1 DELETE endpoint (detailed below). 

## API endpoints

### Authors

#### `GET /api/v1/authors`
Response sends all authors in the database. If the authors table is populated, the response has a 200 status and sends the following: 
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

If the authors table is not populated, the response has a 404 status and sends the following: 
```javascript
    {
      error: 'No authors found'
    }
```

#### `GET /api/v1/authors/:id`
Response sends a single author from the database with the `id` that matches the parameter in the request. For example, for the request `/api/v1/authors/183` the response has a 200 status and sends the following:  
```javascript
   [{
     "id": 183,
     "name": "JEFF VANDERMEER",
     "bio": "Jeff VanderMeer is an award-winning novelist and editor.",
     "created_at": "2019-05-01T16:33:27.249Z",
     "updated_at": "2019-05-01T16:33:27.249Z"
   }]
```

If the no id matches the parameter in the request, the response has a 404 status and sends an error. For example, the request `/api/v1/authors/999` sends the following: 
```javascript
    {
      error: 'Could not find author with id 999'
    }
```

#### `POST /api/v1/authors`
Allows users to post a new author to the authors table with the following parameters:

| Name | Type | Description |
|:----:|:----:|-------------|
|`name`|`string`| Name of new author|
|`bio`|`string`| Biography of new author|

The response has a 201 status and sends the unique id created for the new record. For example, the request body

```javascript
{ "name": "Joan Didion", "bio": "Joan Didion is an award-winning novelist and critic" }
```
sends the following response: 

```javascript
   {
     "id": 187
   }
```

If any of the required paramaters are missing from the request, the response has a 422 status and sends an error. For example, the request

```javascript
{ "name": "Joan Didion" }
```

sends the following response: 

```javascript
  {
    error: `Expected format: { name: <String>, bio: <String> }. You're missing a bio property.`
  }
```


### Books

#### `GET /api/v1/books`
Response sends all books in the database. If the books table is populated, the response has a 200 status and sends the following:  
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
 
If the books table is not populated, the response has a 404 status and sends the following: 
```javascript
    {
      error: 'No books found'
    }
```

#### `GET /api/vi/authors/:id/books`
Response sends all books with the `author_id` that matches the parameter in the request. For example, for the request `/api/v1/authors/183/books`, the response has a 200 status and sends the following: 
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

If no id matches the parameter in the request, the response has a 404 status and sends an error. For example, the request `/api/v1/authors/999/books` sends the following: 
```javascript
    {
      error: 'Could not find any books with an author_id of 999'
    }
```

#### `POST /api/v1/books`
Allows users to post a new book to the books table with the following parameters:

| Name | Type | Description |
|:----:|:----:|-------------|
|`title`|`string`| Title of new book|
|`pub`|`integer`| Year of publication|
|`author_id`|`integer`| Foreign key associated with new book's author|

The response has a 201 status and sends the unique id created for the new record. For example, the request body

```javascript
{ "title": "Slouching Towards Bethlehem", "pub": 1968, "author_id": 187 }
```

sends the following response:

```javascript
   {
     "id": 83
   }
```

If any of the required paramaters are missing from the request, the response has a 422 status and sends an error. For example, 
the request 

```javascript
{ "title": "Slouching Towards Bethlehem", "pub": 1968 }
```

sends the following response: 

```javascript
  {
    error: `Expected format: { title: <String>, pub: <integer>, author_id: <integer> }. You're missing the author_id property.`
  }
```

#### `DELETE /api/v1/books/:id`
Allows users to delete a single book that matches the id parameter in the request. For example, the request `/api/v1/books/83` has a 200 status and sends the following: 
```javascript
"Deleted title 'Slouching Towards Bethlehem' with id 83"
```

If no id matches the parameter in the request, the response has a 404 status and sends an error. For example, the request `/api/v1/books/999` sends the following: 
```javascript
    {
      error: 'Could not find book with id 999'
    }
```
