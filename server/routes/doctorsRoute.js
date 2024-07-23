const express = require('express');
const router = express.Router();

const Doctor = require('../models/doctor');
router.get('/getalldoctors', async(req, res) => {
    try {
        const doctors = await Doctor.find({});
        res.send(doctors);
    } catch (err) {
        return res.status(400).json({ message: err });
    }
}) 

module.exports = router