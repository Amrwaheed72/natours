import mongoose from "mongoose";
import dotenv from 'dotenv'
import fs from 'fs'
import { Tour } from "../../models/tourModel.js";

dotenv.config()

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const DB = process.env.DATABASE_URL.replace('<db_password>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {}).then(() => console.log('Connected Successfully'))


//read json file
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'))

//import data into db

const importData = async () => {
    try {
        await Tour.create(tours)
        console.log('imported')
    } catch (err) {
        console.log(err)
    }
    process.exit()
}

//delete all data from db

const deleteData = async () => {
    try {
        await Tour.deleteMany()
        console.log('deleted')
    } catch (err) {
        console.log(err)
    }
    process.exit()
}

if(process.argv[2]==='--import'){
    importData()
}else if(process.argv[2]==='--delete'){
    deleteData()
}
console.log(process.argv)
