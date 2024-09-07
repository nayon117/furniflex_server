var express = require('express');
const createBooking = require('../../api/bookings/controller/createBooking');

 
var router = express.Router()

router.post("/bookings", createBooking);




module.exports = router;