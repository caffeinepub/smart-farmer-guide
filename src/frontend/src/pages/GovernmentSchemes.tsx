import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { STRINGS } from '../constants/strings';
import { governmentSchemes } from '../data/governmentSchemes';

export default function GovernmentSchemes() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-earth-dark mb-6">
        {STRINGS.governmentSchemes.title}
      </h2>

      <div className="space-y-6">
        {governmentSchemes.map((scheme, index) => (
          <Card key={index} className="bg-white border-2 border-earth-green/30 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-earth-green to-earth-brown text-white">
              <CardTitle className="text-2xl">
                {scheme.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h4 className="text-lg font-bold text-earth-brown mb-2">
                  {STRINGS.governmentSchemes.eligibility}
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {scheme.eligibility}
                </p>
              </div>
              <div className="bg-earth-green/10 p-5 rounded-lg">
                <h4 className="text-lg font-bold text-earth-dark mb-2">
                  {STRINGS.governmentSchemes.benefits}
                </h4>
                <p className="text-lg text-earth-brown leading-relaxed">
                  {scheme.benefits}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
