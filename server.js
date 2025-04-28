import mongoose from 'mongoose';
import { app } from './app.js'
import dotenv from 'dotenv'



dotenv.config();
const DB = process.env.DATABASE_URL.replace('<db_password>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
}).then((connection) => {
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
