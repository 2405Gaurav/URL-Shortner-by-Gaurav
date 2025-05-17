# URL Shortener Service

A simple and efficient URL shortening service built with Node.js, Express, and MongoDB. This service allows you to create short URLs from long ones and track their usage through analytics.

## Features

- 🔗 Convert long URLs into short, manageable links
- 📊 Track URL visits with timestamps
- 📈 View analytics for each shortened URL
- 🚀 Fast and efficient redirection
- 🔒 Built-in error handling
- 🌐 CORS enabled for cross-origin requests

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd url-shortner
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on your system:
```bash
# MongoDB should be running on mongodb://localhost:27017
```

## Usage

1. Start the development server:
```bash
npm run dev
```

2. Start the production server:
```bash
npm start
```

The server will start on http://localhost:3000

## API Endpoints

### Create Short URL
```http
POST /url
Content-Type: application/json

{
    "url": "https://your-long-url.com"
}
```

### Redirect to Original URL
```http
GET /:shortid
```

### Get URL Analytics
```http
GET /analytics/:shortid
```

## Response Examples

### Create Short URL Response
```json
{
    "id": "generated-short-id"
}
```

### Analytics Response
```json
{
    "totalClicks": 5,
    "history": [
        {
            "timestamp": 1234567890
        }
        // ... more visit records
    ]
}
```

## Error Handling

The API includes comprehensive error handling for:
- Invalid URLs
- Non-existent short URLs
- Server errors
- Database connection issues

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- ShortID (for generating unique short URLs)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

If you encounter any issues or have questions, please open an issue in the repository. 
