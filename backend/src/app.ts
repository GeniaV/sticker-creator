import express from 'express';
import cors from 'cors';
import fileRouter from './routes/files';

const app = express();

app.use(cors({ origin: '*' }));

app.use('/', fileRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
