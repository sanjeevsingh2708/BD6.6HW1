const cors = require('cors');
const express = require('express');
const { getAllMovies, getMoviesById } = require('./controllers');

const app = express();

app.use(cors());
app.use(express.json());

// Endpoint to get all movies

app.get('/movies', async (req, res) => {
  const movies = getAllMovies();
  res.json({ movies });
});

//Endpoint to get movie details by id

app.get('/movies/details/:id', async (req, res) => {
  let movie = getMoviesById(parseInt(req.params.id));

  res.json({ movie });
});

module.exports = { app };

// app.listen(3000, () => {
//   console.log(`Server running on port 3000`);
// });

// Run the index.js file using command bcz this exercise is for test cases(In test file we are running server):-  node server.js
