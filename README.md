# DevBox API

A simple, open-source Express.js API that provides random facts, quotes, and jokes. Perfect for developers looking to add some fun content to their applications.

## Features

- **Facts**: Get interesting facts with optional limiting
- **Quotes**: Retrieve inspirational quotes in English and Hinglish, with filtering options
- **Jokes**: Access a collection of jokes with pagination support
- **Random Selection**: Get random items from any category
- **Language Support**: Quotes support multiple languages (English, Hinglish)
## API Endpoints

### Facts

#### Get All Facts
```
GET /api/facts
```
Returns all facts. Optionally limit the number of results:
```
GET /api/facts?limit=5
```

**Response:**
```json
{
  "facts": ["Fact 1", "Fact 2", ...],
  "total": 100,
  "success": true,
  "message": "Fetched Successfully.."
}
```

#### Get Random Fact
```
GET /api/facts/random
```

**Response:**
```json
{
  "fact": "Random fact here",
  "total": 100,
  "success": true,
  "message": "Fetched Successfully.."
}
```

### Quotes

#### Get All Quotes
```
GET /api/qoutes
```
Returns all quotes. Supports optional parameters:
- `limit`: Number of quotes to return
- `lang`: Filter by language ("english" or "hinglish")

Examples:
```
GET /api/qoutes?limit=10
GET /api/qoutes?lang=english
GET /api/qoutes?lang=hinglish&limit=5
```

**Response:**
```json
{
  "qoutes": [
    {
      "text": "Quote text",
      "author": "Author name",
      "lang": "english"
    }
  ],
  "total": 50,
  "success": true,
  "message": "Fetched Successfully.."
}
```

#### Get Random Quote
```
GET /api/qoutes/random
```
Supports optional `lang` parameter:
```
GET /api/qoutes/random?lang=hinglish
```

**Response:**
```json
{
  "qoute": {
    "text": "Random quote text",
    "author": "Author name",
    "lang": "english"
  },
  "total": 50,
  "success": true,
  "message": "Fetched Successfully.."
}
```

### Jokes

#### Get All Jokes
```
GET /api/jokes
```
Returns all jokes. Optionally limit the number of results:
```
GET /api/jokes?limit=5
```

**Response:**
```json
{
  "jokes": ["Joke 1", "Joke 2", ...],
  "total": 75,
  "success": true,
  "message": "Fetched Successfully.."
}
```

#### Get Random Joke
```
GET /api/jokes/random
```

**Response:**
```json
{
  "joke": "Random joke here",
  "total": 75,
  "success": true,
  "message": "Fetched Successfully.."
}
```
