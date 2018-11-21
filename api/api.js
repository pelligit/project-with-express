const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('localhost/api content');
});

router.get('/about', (req, res) => {
	res.send('/api/about content');
});

module.exports = router;
