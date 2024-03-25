const express = require('express');
const {getJoboffers, getJoboffer, createJoboffer, editJoboffer, deleteJoboffer} = require('../controllers/joboffers');
const {protect, authorize} = require('../middleware/auth');
const router = express.Router();

router.route('/').get(getJoboffers).post(protect, authorize('admin'), createJoboffer);
router.route('/:id').get(getJoboffer).put(protect, authorize('admin'), editJoboffer).delete(protect, authorize('admin'), deleteJoboffer);


module.exports = router;