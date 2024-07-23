const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());

const dbConfig = require("./db")
const roomsRoute = require("./routes/roomsRoute");
const doctorsRoute = require("./routes/doctorsRoute");

app.use('/api/rooms', roomsRoute)
app.use('/api/doctors', doctorsRoute)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening using nodemon on ${port}`));