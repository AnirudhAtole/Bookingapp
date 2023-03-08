const express = require('express');

const router = express.Router();
const bookingController = require('../controller/Booking');

router.get('/bookings' , bookingController.getBookings );
router.post('/add-booking',bookingController.addBooking);
router.get('/bookings/:id' , bookingController.getBooking);
router.post('/delBooking/:id',bookingController.delBooking);

module.exports = router;