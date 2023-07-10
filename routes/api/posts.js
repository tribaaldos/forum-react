const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', postsCtrl.index);

router.post('/', postsCtrl.addPost);

module.exports = router;
