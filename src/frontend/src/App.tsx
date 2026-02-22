import { useState, useEffect } from 'react';
import { createRouter, RouterProvider, createRoute, createRootRoute } from '@tanstack/react-router';
import SplashScreen from './components/SplashScreen';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CropSchedule from './pages/CropSchedule';
import FertilizerCalculator from './pages/FertilizerCalculator';
import PestDisease from './pages/PestDisease';
import WeatherAdvisory from './pages/WeatherAdvisory';
import MarketPrices from './pages/MarketPrices';
import GovernmentSchemes from './pages/GovernmentSchemes';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Dashboard,
});

const cropScheduleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/crop-schedule',
  component: CropSchedule,
});

const fertilizerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/fertilizer-calculator',
  component: FertilizerCalculator,
});

const pestDiseaseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pest-disease',
  component: PestDisease,
});

const weatherRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/weather-advisory',
  component: WeatherAdvisory,
});

const marketPricesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/market-prices',
  component: MarketPrices,
});

const schemesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/government-schemes',
  component: GovernmentSchemes,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  cropScheduleRoute,
  fertilizerRoute,
  pestDiseaseRoute,
  weatherRoute,
  marketPricesRoute,
  schemesRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return <RouterProvider router={router} />;
}

export default App;
