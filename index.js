require('dotenv').config();
const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(path.resolve(__dirname, './react-ui/build')));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  });