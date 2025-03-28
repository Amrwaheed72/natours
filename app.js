import express from 'express';
import fs from 'fs';
import morgan from 'morgan';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

app.use(morgan('dev'))

app.use(express.json())


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))


const getAllTours = (req, res) => {

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
}


const getTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id)
    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'No tour found'
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })
}


const addTour = (req, res) => {
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
}
const updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Data updated successfully'
    })
}
const deleteTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Data updated successfully'
    })
}
const getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'aaaaa'
    })
}
const createUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Data updated successfully'
    })
}
const getUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Data updated successfully'
    })
}
const updateUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Data updated successfully'
    })
}
const deleteUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Data updated successfully'
    })
}

app.route('/api/v1/tour').get(getAllTours).post(addTour)
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour)

app.route('/api/v1/users').get(getAllUsers).post(createUser)
app.route('/api/v1/users/:id').get(getUser).patch(updateUser).delete(deleteUser)
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
