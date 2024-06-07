import { useRoutes } from 'react-router-dom';
import useScrollToPageTop from './lib/hooks/useScrollToPageTop';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import GameShopPage from './pages/GameShopPage';
import ProductPage from './pages/ProductPage';
import DesktopPage from './pages/desktop/DesktopPage';
import MobilePage from './pages/MobilePage';
import DownloadPage from './pages/DownloadPage';
import GameProductPathLayout from './layouts/GameProductPathLayout';

const App = () => {
  useScrollToPageTop();

  const element = useRoutes([
    { path: '/', element: <HomePage /> },
    {
      element: <GameProductPathLayout />,
      children: [
        { path: '/game/:gameId', element: <GameShopPage /> },
        { path: '/product/:productId', element: <ProductPage /> }
      ]
    },
    { path: '/desktop', element: <DesktopPage /> },
    { path: '/mobile', element: <MobilePage /> },
    { path: '/download', element: <DownloadPage /> }
  ]);

  return (
    <>
      <Navigation />
      {element}
      <Footer />
    </>
  );
}

export default App;