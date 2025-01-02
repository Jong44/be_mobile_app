import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './configs/database.js';
import UserRoute from './routes/UserRoute.js';
import BusinessRoute from './routes/BusinessRoute.js';
import InvestmentRoute from './routes/InvestmentRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', UserRoute);
app.use('/api/business', BusinessRoute);
app.use('/api/investments', InvestmentRoute);
sequelize.sync({}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
