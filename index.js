import express from "express";
import cors from "cors";
import BookingRoute from "./routes/BookingRoute.js";
import DokterRoute from "./routes/DokterRoute.js";


const PORT = 3000;
const app  = express();

app.use(express.json());
app.use(cors());
// Route
app.get('/', (req, res) => {
    res.send("Hello World")
});


app.use(BookingRoute);
app.use(DokterRoute);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});