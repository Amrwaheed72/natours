import express from 'express';
import { getAllTours, createTour, getTour, updateTour, deleteTour, aliasTopTours, getTourStats, getMonthlyPlan } from '../controllers/tourController.js'


const router = express.Router();

// router.param('id', checkID)

router.route('/top-5-cheap').get(aliasTopTours, getAllTours) // Middleware to get top 5 cheap tours
router.route('/tour-stats').get(getTourStats)
router.route('/monthly-plan/:year').get(getMonthlyPlan)
router.route('/').get(getAllTours).post(createTour)
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour)

export { router }