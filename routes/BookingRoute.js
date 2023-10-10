// untuk APi  get,post buat table 
import express from "express";
import { 
  createBooking,
  getAllBookingfromUser,
  getBookings

 } from "../controllers/BookingController.js";


const router = express.Router();

router.post('/bookings', createBooking);
router.get('/bookings/:booking_id', getAllBookingfromUser);
router.get('/booking',getBookings);



export default router;