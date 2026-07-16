function parsePositiveInteger(value) {
  const parsed = Number.parseInt(value, 10);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

module.exports = function createPortfolioItemController(pool) {
  return {
    list: async (req, res) => {
      if (!pool) return res.status(503).json({ message: 'Database is not available yet.' });
      try {
        const [rows] = await pool.query('SELECT * FROM portfolio_items ORDER BY created_at DESC');
        res.json(rows);
      } catch (error) {
        res.status(500).json({ message: 'Unable to fetch portfolio items.', error: error.message });
      }
    },

    show: async (req, res) => {
      if (!pool) return res.status(503).json({ message: 'Database is not available yet.' });
      const id = parsePositiveInteger(req.params.id);
      if (!id) return res.status(400).json({ message: 'A valid portfolio item id is required.' });

      try {
        const [rows] = await pool.query('SELECT * FROM portfolio_items WHERE id = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Portfolio item not found.' });
        res.json(rows[0]);
      } catch (error) {
        res.status(500).json({ message: 'Unable to find portfolio item.', error: error.message });
      }
    },

    create: async (req, res) => {
      if (!pool) return res.status(503).json({ message: 'Database is not available yet.' });
      const { title, description, category, url } = req.body;
      if (!title) return res.status(400).json({ message: 'Title is required.' });

      try {
        const [result] = await pool.query(
          'INSERT INTO portfolio_items (title, description, category, url) VALUES (?, ?, ?, ?)',
          [title, description || '', category || 'General', url || '']
        );
        res.status(201).json({ id: result.insertId, title, description, category, url });
      } catch (error) {
        res.status(500).json({ message: 'Unable to create portfolio item.', error: error.message });
      }
    },

    update: async (req, res) => {
      if (!pool) return res.status(503).json({ message: 'Database is not available yet.' });
      const id = parsePositiveInteger(req.params.id);
      if (!id) return res.status(400).json({ message: 'A valid portfolio item id is required.' });

      const { title, description, category, url } = req.body;

      try {
        await pool.query(
          'UPDATE portfolio_items SET title = ?, description = ?, category = ?, url = ? WHERE id = ?',
          [title, description || '', category || 'General', url || '', id]
        );

        const [rows] = await pool.query('SELECT * FROM portfolio_items WHERE id = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Portfolio item not found.' });
        res.json(rows[0]);
      } catch (error) {
        res.status(500).json({ message: 'Unable to update portfolio item.', error: error.message });
      }
    },

    remove: async (req, res) => {
      if (!pool) return res.status(503).json({ message: 'Database is not available yet.' });
      const id = parsePositiveInteger(req.params.id);
      if (!id) return res.status(400).json({ message: 'A valid portfolio item id is required.' });

      try {
        const [result] = await pool.query('DELETE FROM portfolio_items WHERE id = ?', [id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Portfolio item not found.' });
        res.json({ message: 'Portfolio item deleted.' });
      } catch (error) {
        res.status(500).json({ message: 'Unable to delete portfolio item.', error: error.message });
      }
    }
  };
};
