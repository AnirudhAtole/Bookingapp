const Booking = require('../model/Booking');

exports.getBookings = (req,res,next) =>{
    Booking.findAll()
    .then((bookings) =>{
        res.json(bookings);
    })
    .catch(err => console.log(err));
}

exports.addBooking = (req,res,next) =>{
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    Booking.create({
        name : name,
        email:email,
        phoneNumber : phoneNumber
    })
    .then((result) =>{
        console.log('created Booking')
        res.json(result);
    })
    .catch(err => console.log(err));
}

exports.getBooking = (req,res,next) =>{
    const BookId = req.params.id;
    Booking.findByPk(BookId)
    .then((response) =>{
        res.json(response);
    })
    .catch(err => console.log(err));
}

exports.delBooking = (req , res , next) =>{
    const BookId = req.params.id;
    Booking.findByPk(BookId)
    .then((booking) =>{
        res.json(booking.destroy());
    })
    .catch(err => console.log(err))
}