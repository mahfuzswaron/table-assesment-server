const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        res.json({ "message": "Hello, sadia's Heart!" });
    }
    catch (e) {
        res.json(e);
    }
})

module.exports = router;