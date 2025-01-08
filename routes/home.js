const express = require('express');
const router = express.Router();

// here we can add a controller - logic that takes some action
router.get('/', (req, res) => {
    console.log(req.body);
    res.render('index.ejs');
});
module.exports = router;