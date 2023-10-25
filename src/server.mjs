import express from 'express';
import dotenv from 'dotenv';
import { authenticateRechargeToken } from './middlewares/authentication.mjs';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(authenticateRechargeToken);

app.get('/', (req, res) => {
  res.json({ message: 'Server is up and running!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
