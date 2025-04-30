import { Tour } from '../models/tourModel.js'

export const getAllTours = async (req, res) => {
    try {
        //BUILD QUERY
        //1) Filtering
        // get the fields of req.query out of it and store it in new object so that it doesnt affect the original object
        const queryObj = { ...req.query }
        const excludedFields = ['page', 'sort', 'limit', 'fields']
        //loop over them using for each
        excludedFields.forEach(el => delete queryObj[el])

        //2) Advanced Filtering
        //gt, gte, lt, lte
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
        console.log(JSON.parse(queryStr))
        const query = Tour.find(JSON.parse(queryStr))


        const allTours = await query



        //SENDING RESPONSE
        res.status(200).json({
            status: 'success',
            results: allTours.length,
            data: {
                tours: allTours
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

export const getTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

export const createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}

export const updateTour = async (req, res) => {
    try {
        const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: 'success',
            data: {
                tour: updatedTour
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

export const deleteTour = async (req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}