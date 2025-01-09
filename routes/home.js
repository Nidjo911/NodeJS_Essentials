const express = require('express');
const router = express.Router();

// here we can add a controller - logic that takes some action
router.get('/', (req, res) => {
    console.log(req.body);
    const data = [
        { x: 1, y: 23 },
        { x: 2, y: 45 },
        { x: 3, y: 17 },
        { x: 4, y: 32 },
        { x: 5, y: 52 },
        { x: 6, y: 28 },
        { x: 7, y: 41 },
        { x: 8, y: 37 },
        { x: 9, y: 29 },
        { x: 10, y: 43 }
    ];

    res.render('plot.ejs', { data });
/*     res.render('index.ejs'); */
});

module.exports = router;