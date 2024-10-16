const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/', async (req, res) => {

    const celebrities = await Celebrity.find();

    res.render("celebrities/index.ejs", {
        celebrities
    });
})

module.exports = router;