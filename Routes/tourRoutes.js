import express from 'express';
import { getAllTours, addTour, getTour, updateTour, deleteTour,  checkBody } from '../controllers/tourController.js'


const router = express.Router();

// router.param('id', checkID)


router.route('/').get(getAllTours).post(checkBody, addTour)
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour)

export { router }