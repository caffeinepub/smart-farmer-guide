import { useNavigate } from '@tanstack/react-router';
import { Card } from '@/components/ui/card';
import { STRINGS } from '../constants/strings';

const features = [
  {
    id: 'crop-schedule',
    title: STRINGS.dashboard.cropSchedule,
    icon: '/assets/generated/icon-crop-schedule.dim_128x128.png',
    path: '/crop-schedule',
  },
  {
    id: 'fertilizer',
    title: STRINGS.dashboard.fertilizerCalculator,
    icon: '/assets/generated/icon-fertilizer.dim_128x128.png',
    path: '/fertilizer-calculator',
  },
  {
    id: 'pest-disease',
    title: STRINGS.dashboard.pestDisease,
    icon: '/assets/generated/icon-pest-disease.dim_128x128.png',
    path: '/pest-disease',
  },
  {
    id: 'weather',
    title: STRINGS.dashboard.weatherAdvisory,
    icon: '/assets/generated/icon-weather.dim_128x128.png',
    path: '/weather-advisory',
  },
  {
    id: 'market',
    title: STRINGS.dashboard.marketPrices,
    icon: '/assets/generated/icon-market-prices.dim_128x128.png',
    path: '/market-prices',
  },
  {
    id: 'schemes',
    title: STRINGS.dashboard.governmentSchemes,
    icon: '/assets/generated/icon-gov-schemes.dim_128x128.png',
    path: '/government-schemes',
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-earth-dark mb-8 text-center">
        {STRINGS.dashboard.title}
      </h2>
      
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {features.map((feature) => (
          <Card
            key={feature.id}
            className="touch-target cursor-pointer hover:shadow-xl transition-all duration-200 hover:scale-105 bg-white border-2 border-earth-green/20 overflow-hidden"
            onClick={() => navigate({ to: feature.path })}
          >
            <div className="p-6 flex flex-col items-center justify-center text-center min-h-[180px]">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold text-earth-dark leading-tight">
                {feature.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
