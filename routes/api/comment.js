const express = require('express');
const router = express.Router();
const commentCtrl = require('../../controllers/api/comment');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/:id/new', ensureLoggedIn, commentCtrl.addComment);
router.delete('/:id/:commentId', ensureLoggedIn, commentCtrl.deleteComment);
router.put('/:id/:commentId/likes', ensureLoggedIn, commentCtrl.toggleLikeComment);

module.exports = router;
