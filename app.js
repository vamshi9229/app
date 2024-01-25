const express = require('express');
const app = express();
const port = 80;

const movieStorage = [];
// Serve static files (CSS, JS, images) from the "public" directory
app.use(express.static('public'));

// Use middleware to parse POST request bodies
app.use(express.urlencoded({ extended: true }));

// Set up a route for the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle form submissions
app.post('/search', (req, res) => {
    const searchQuery = req.body.query;
    console.log('this is query',searchQuery);
    const movie = movieStorage.find((movie)=>{
      return movie.name == searchQuery;
    });
    if(movie){

    const tableData = [ movie];

  // Create an HTML table dynamically
  const tableHtml = `<table border="1">
                        <thead>
                            <tr>
                                <th>movie name</th>
                                <th>genre</th>
                                <th>rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableData.map(row => `<tr>
                                                     <td>${row.name}</td>
                                                     <td>${row.genre}</td>
                                                     <td>${row.rating}</td>
                                                 </tr>`).join('')}
                        </tbody>
                    </table>`;

  // Send the HTML response#

  res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Node.js Table Example</title>
          <link rel="stylesheet" href="styles.css">
      </head>
      <body>
          <h1>Node.js Table Example</h1>
          ${tableHtml}
      </body>
      </html>
  `);

  }
  else{
    // Handle the search logic here (e.g., query a database)
    res.send('movie not found');}
});


app.post('/insert', (req, res) => {
  const searchQuery = req.body;
  console.log('this is query',searchQuery);
  const movie = movieStorage.find((movie)=>{
    return movie.name == searchQuery.movieName;
  });

  if(movie){
   return res.send('movie already exists');
  }

  movieStorage.push({name:searchQuery.movieName,rating:searchQuery.rating,genre:searchQuery.genre});

  

  
  // Handle the search logic here (e.g., query a database)
  res.send('insert success');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
