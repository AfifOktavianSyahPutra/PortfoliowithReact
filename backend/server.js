require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { initializeDatabase } = require('./database');
const { initializePortfolioSchema } = require('./services/portfolio-data.service');
const createPortfolioRoutes = require('./routes/portfolio.routes');
const createPortfolioItemController = require('./controllers/portfolio-item.controller');

const app = express();
const port = process.env.PORT || 5000;
let pool = null;
let dbState = 'initializing';

app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    const host = process.env.MYSQL_HOST || '127.0.0.1';
    const user = process.env.MYSQL_USER || 'root';
    const password = process.env.MYSQL_PASSWORD || '';
    const database = process.env.MYSQL_DATABASE || 'portfolio_db';
    const portNumber = Number(process.env.MYSQL_PORT || 3306);

    pool = await initializeDatabase({ host, user, password, database, port: portNumber });
    await initializePortfolioSchema(pool);
    dbState = 'ready';
    console.log(`MySQL ready at ${host}:${portNumber}/${database}`);
  } catch (error) {
    dbState = 'offline';
    console.error('MySQL initialization failed:', error.message);
    process.exit(1);
  }

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', database: dbState, message: 'Express API is running' });
  });

  const portfolioItemController = createPortfolioItemController(pool);
  app.use('/api', createPortfolioRoutes(pool));
  app.get('/api/portfolio-items', portfolioItemController.list);
  app.get('/api/portfolio-items/:id', portfolioItemController.show);
  app.post('/api/portfolio-items', portfolioItemController.create);
  app.put('/api/portfolio-items/:id', portfolioItemController.update);
  app.delete('/api/portfolio-items/:id', portfolioItemController.remove);

  app.use((req, res) => res.status(404).json({ message: 'Route not found.' }));

  app.listen(port, () => console.log(`API server listening on http://localhost:${port}`));
}

startServer();
