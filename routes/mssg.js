const express = require('express');
const router = express.Router();
//const messageController = require('../controllers/mssg');

/* shaker part of the code: submit selection and show it on next page */

const shakerController = require('../controllers/shakerSelection');

/* we alredy are at /mssgs, no need to add extra string at get/post methods */
// GET route to display the form
router.get('/', shakerController.getSelectedShaker);

// POST route to handle form submission (you'll need this too)
router.post('/', shakerController.submitShakerChoice);

//router.get('/mssgs', messageController.getMssgsControl);
//router.post('/mssgs', messageController.getMssgsControl);
module.exports = router;