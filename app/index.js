import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './configs/database.js';
import UserRoute from './routes/UserRoute.js';
import BusinessRoute from './routes/BusinessRoute.js';

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', UserRoute);
app.use('/api/business', BusinessRoute);
sequelize.sync({}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
