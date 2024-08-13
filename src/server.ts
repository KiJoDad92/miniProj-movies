import inquirer from 'inquirer';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

await connectToDb();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


pool.query(
    `DELETE FROM movies Where id=$1`,
    0,
    (err: Error, result: QueryResult) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`${result.rowCount} row(s) deleted!`);
        }
      });


app.use((_req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  