import Booking from "../models/BookingModel.js";

export const createBooking =  async (req, res) => {
    try {
        await Booking.create(req.body);
        res.status(201).json({msg: "Booking Created"});
    } catch (error) {
        res.send(error.message);
    }
};

export const getAllBookingfromUser =  async (req, res) => {
    try {
      const bookings = await Booking.findAll({
          where: {booking_id: req.params.booking_id}
      });

      res.status(200).json(bookings);
    } catch (error) {
        res.send(error.message);
    }
};

export const getBookings = async (req, res) => {
    try {
      const bookings = await Booking.findAll(); 
  
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };