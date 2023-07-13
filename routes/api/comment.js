const express = require('express');
const router = express.Router();
const commentCtrl = require('../../controllers/api/comment');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/:id/new', ensureLoggedIn, commentCtrl.addComment);

module.exports = router;
