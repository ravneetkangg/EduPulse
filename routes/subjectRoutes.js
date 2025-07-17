const express = require('express')
const router = express.Router();

router.get('/listen', async(req, res) => {
    res.status(500).json({ response: "hello" })
})

module.exports = router;