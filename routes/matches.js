const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    success: true,
    message: "Matches route is working."
  });
});

module.exports = router;
