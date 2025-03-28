import express from 'express';
import { getAllTours, addTour, getTour, updateTour, deleteTour } from '../controllers/tourController.js'


const router = express.Router();


router.route('/').get(getAllTours).post(addTour)
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour)

export { router }