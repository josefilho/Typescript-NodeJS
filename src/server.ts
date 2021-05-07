import express from 'express';
import cors from 'cors';
import helmet from 'helmet'
import routes from './routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
