// Dependencies 
const router = require('express').Router();
const path =  require('path');

// GET routes for possible query parameters - intended for HTML page
router.get('/notes', (req, res) => { 
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
router.get('*', (req, res) => { 
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;