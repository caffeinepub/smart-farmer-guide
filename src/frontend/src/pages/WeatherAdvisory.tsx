import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sun, Cloud, CloudRain } from 'lucide-react';
import { STRINGS } from '../constants/strings';
import { weatherAdvisories, type WeatherType } from '../data/weatherAdvisories';

const weatherOptions = [
  { type: 'sunny' as WeatherType, icon: Sun, label: STRINGS.weather.sunny, color: 'bg-yellow-500' },
  { type: 'cloudy' as WeatherType, icon: Cloud, label: STRINGS.weather.cloudy, color: 'bg-gray-400' },
  { type: 'rainy' as WeatherType, icon: CloudRain, label: STRINGS.weather.rainy, color: 'bg-blue-500' },
];

export default function WeatherAdvisory() {
  const [selectedWeather, setSelectedWeather] = useState<WeatherType | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-earth-dark mb-6">
        {STRINGS.weather.title}
      </h2>

      <p className="text-xl text-earth-brown mb-8 text-center">
        {STRINGS.weather.selectCondition}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {weatherOptions.map((option) => {
          const Icon = option.icon;
          return (
            <Card
              key={option.type}
              className={`cursor-pointer touch-target transition-all duration-200 hover:scale-105 ${
                selectedWeather === option.type
                  ? 'border-4 border-earth-green shadow-xl'
                  : 'border-2 border-earth-green/20'
              }`}
              onClick={() => setSelectedWeather(option.type)}
            >
              <CardContent className="p-8 flex flex-col items-center justify-center text-center">
                <div className={`${option.color} p-6 rounded-full mb-4`}>
                  <Icon className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-earth-dark">
                  {option.label}
                </h3>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {selectedWeather && (
        <Card className="bg-gradient-to-br from-earth-green/10 to-earth-brown/10 border-2 border-earth-green shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-earth-dark mb-6">
              {STRINGS.weather.advisory}
            </h3>
            <div className="space-y-4">
              {weatherAdvisories[selectedWeather].map((advisory, index) => (
                <div key={index} className="bg-white p-5 rounded-lg border-l-4 border-earth-green">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    • {advisory}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
