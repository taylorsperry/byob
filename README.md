## Build Your Own Backend: Authors + Books

This is a week-long solo project to practice building databases using Express, Knex, and PostgreSQL. I scraped the book publisher FSG Originals website to create a one-to-many relational database schema of authors and books. I built a RESTful API with 4 GET endpoints, 2 POST endpoints, and 1 DELETE endpoint (detailed below). 

### API endpoints

#### Get all authors

```
GET /api/v1/authors
```

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
