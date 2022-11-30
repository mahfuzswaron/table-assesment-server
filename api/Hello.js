const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        res.json({ "message": "Hello, this is running!" });
    }
    catch (e) {
        res.json(e);
    }
})

module.exports = router;