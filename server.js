import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.text()); // To parse text body

app.post('/log', (req, res) => {
  console.log('--- ERROR LOG RECEIVED FROM BROWSER ---');
  console.log(req.body);
  console.log('---------------------------------------');
  res.send('ok');
});

app.listen(9999, () => {
  console.log('Log server listening on port 9999');
});
