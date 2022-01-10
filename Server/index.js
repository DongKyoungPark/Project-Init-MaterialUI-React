import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
