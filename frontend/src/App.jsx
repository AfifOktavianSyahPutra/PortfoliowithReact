import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PortfolioSections from './components/PortfolioSections';
import { usePortfolioData } from './hooks/use-portfolio-data';

const App = () => {
  const portfolioData = usePortfolioData();

  if (!portfolioData) return <div>Loading portfolio data...</div>;

  return (
    <>
      <Navbar />
      <PortfolioSections data={portfolioData} />
      <Footer data={portfolioData.personalInfo} />
    </>
  );
};

export default App;