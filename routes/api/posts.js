const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, postsCtrl.index);

router.post('/', ensureLoggedIn, postsCtrl.addPost);

module.exports = router;