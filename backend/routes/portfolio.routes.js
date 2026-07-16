const express = require('express');
const { fetchPortfolioDataFromDatabase } = require('../services/portfolio-data.service');
const router = express.Router();

module.exports = function createPortfolioRoutes(pool) {
  router.get('/portfolio-data', async (req, res) => {
    if (!pool) {
      return res.status(500).json({ error: 'MySQL connection is not configured.' });
    }

    try {
      const data = await fetchPortfolioDataFromDatabase(pool);
      if (!data) {
        return res.status(404).json({ error: 'Portfolio data not found in MySQL.' });
      }
      return res.json(data);
    } catch (error) {
      console.error('Unable to load portfolio data from MySQL.', error.message);
      return res.status(500).json({ error: 'Unable to load portfolio data from MySQL.' });
    }
  });

  return router;
};
