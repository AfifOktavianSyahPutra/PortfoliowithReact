const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';


export const fetchPortfolioData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/portfolio-data`);

  if (!response.ok) {
    throw new Error(`Unable to load portfolio data: ${response.status} ${response.statusText}`);
  }

  return response.json();
};
