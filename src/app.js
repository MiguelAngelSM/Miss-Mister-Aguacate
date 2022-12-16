import express from 'express';

const app = express();

app.get('/', function(request, response){
    response.sendFile('absolutePathToYour/htmlPage.html');
});


app.listen (3000, () => console.log('Listening on port 3000'));