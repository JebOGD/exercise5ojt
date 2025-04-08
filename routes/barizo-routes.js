const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/barizoController');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// routes
router.get('/', getUsers);

router.get('/101', (req, res) => {
    res.send('this is user 101 route');
});

router.post('/102', (req, res) => {
    console.log(req.body);
    res.send('why not work?')
});

router.get('/103', (req, res) => {
    res.send('Does this work?')
});

module.exports = router;