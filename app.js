import express from 'express';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;


app.use(express.json())


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    })
    res.status(404).json({
        status: 'fail',
        message: 'error in the client'
    })
    res.status(500).json({
        status: 'error',
        message: 'server error'
    })
})

app.post('/api/v1/tours', (req, res) => {
    const id = tours[tours.length - 1].id + 1
    const newTour = Object.assign({ id: id }, req.body)

    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    })
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
