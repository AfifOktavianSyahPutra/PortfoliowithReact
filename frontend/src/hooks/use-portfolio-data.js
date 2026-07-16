import { useEffect, useState } from 'react';
import { fetchPortfolioData } from '../services/portfolio.service';

export const usePortfolioData = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        setPortfolioData(await fetchPortfolioData());
      } catch (error) {
        console.error(error);
      }
    };

    loadPortfolioData();
  }, []);

  return portfolioData;
};
