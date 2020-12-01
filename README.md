This app was developed using the MERN stack  

## Project Setup

### Add default.json file in the config folder with the following: 

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### After installing npm, navigate to the project directory and install server dependencies using:
```
npm install
```
### Navigate to the client and install client dependencies:
```
cd client
npm install
```

### From the root, you can run both frontend and backend in development mode using:
```
npm run dev 
```

To view it in the browswer, open http://localhost:3000 



