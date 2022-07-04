const express = require('express')
const router = express.Router()
const { createWorkout, getWorkout, getAllWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutController')



// Get all workouts
router.get('/', getAllWorkouts)

// Get a single workout
router.get('/:id', getWorkout)

// Post a new workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id',deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)


module.exports = router