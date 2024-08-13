import inquirer from 'inquirer';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

await connectToDb();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//GET Movie-reviews
app.get('/api/movies-reviews', async(req, res) => {
  try {
      const results = await pool.query('SELECT * FROM reviews INNER JOIN movies ON reviews.movie_id = movies.id');
      const movieReviews = results.rows;
      res.json(movieReviews);
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'failed to retrieve movie reviews'});
  }
});

pool.query(
    `DELETE FROM movies Where id=$1`,
    
    (err: Error, result: QueryResult) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`${result}movie deleted!`);
        }
      });


app.use((_req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  