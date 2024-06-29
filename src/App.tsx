import { useRoutes } from 'react-router-dom';
import useScrollToPageTop from './lib/hooks/useScrollToPageTop';
import useGameOrProductPath from './lib/hooks/useGameProductPath';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import GameShopPage from './pages/GameShopPage/GameShopPage';
import ProductPage from './pages/ProductPage/ProductPage';
import DesktopPage from './pages/Desktop/DesktopPage';
import MobilePage from './pages/MobilePage';
import DownloadPage from './pages/DownloadPage';
import GameProductPathLayout from './layouts/GameProductPathLayout';

const App = () => {
  useScrollToPageTop();
  const isGameOrProductPath = useGameOrProductPath();

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
      {isGameOrProductPath ? '' : <Navigation />}
      {element}
      <Footer />
    </>
  );
}

export default App;