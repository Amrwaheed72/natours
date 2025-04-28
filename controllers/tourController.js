import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))



export const checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        })
    }
    next()
}

export const getAllTours = (req, res) => {
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


export const getTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id)

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })
}


export const addTour = (req, res) => {
    res.status(201).json({
        status: 'success',
        data: {
            tour: newTour
        }
    })
}
export const updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Data updated successfully'
    })
}
export const deleteTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Data updated successfully'
    })
}