const express = require("express");
const router = express.Router();

const api = require("../services/api");

// Get all matches
router.get("/", async (req, res) => {
  try {
    const response = await api.get("/football/matches");

    res.json({
      success: true,
      total: response.data.length || 0,
      data: response.data
    });

  } catch (error) {

    console.error(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch matches",
      error: error.response?.data || error.message
    });

  }
});

module.exports = router;
