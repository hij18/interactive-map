const express = require('express');
const router = express.Router();

const Coord = require('../models/Coord');

router.get('/', async (req, res) => {
    res.json(await Coord.find());
});
 
router.post('/', async (req, res) => {
    const record = new Coord(req.body);
    await record.save();
    res.json({state: 'success'});
});

module.exports = router;
