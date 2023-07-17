const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, postsCtrl.index);
router.get('/:id', ensureLoggedIn, postsCtrl.show);
router.post('/', ensureLoggedIn, postsCtrl.addPost);
router.delete('/:id', ensureLoggedIn, postsCtrl.deletePost);
router.put('/:id', ensureLoggedIn, postsCtrl.updatePost);

module.exports = router;
