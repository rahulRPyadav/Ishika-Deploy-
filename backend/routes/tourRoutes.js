const express = require('express');
const router = express.Router();
const { 
  getTours, 
  getTourBySlug, 
  createTour, 
  deleteTour 
} = require('../controllers/tourController'); // Controller functions import karein

// Get All Tours
router.get('/', getTours);

// Get Single Tour by Slug OR ID (Ye route slug aur id dono handle karega)
router.get('/:slug', getTourBySlug);

// Create New Tour Package
router.post('/', createTour);

// Edit / Update Tour Route
router.put('/:id', async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!updatedTour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json(updatedTour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Tour
router.delete('/:id', deleteTour);

module.exports = router;