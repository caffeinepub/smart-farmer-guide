import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { STRINGS } from '../constants/strings';
import { calculateFertilizer, type CropType } from '../utils/fertilizerCalculator';

export default function FertilizerCalculator() {
  const [crop, setCrop] = useState<CropType>('cotton');
  const [area, setArea] = useState<string>('');
  const [result, setResult] = useState<ReturnType<typeof calculateFertilizer> | null>(null);

  const handleCalculate = () => {
    const areaNum = parseFloat(area);
    if (isNaN(areaNum) || areaNum <= 0) {
      return;
    }
    const calculation = calculateFertilizer(crop, areaNum);
    setResult(calculation);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-earth-dark mb-6">
        {STRINGS.fertilizerCalculator.title}
      </h2>

      <Card className="bg-white border-2 border-earth-green shadow-lg mb-6">
        <CardHeader className="bg-earth-green/10">
          <CardTitle className="text-2xl text-earth-dark">
            {STRINGS.fertilizerCalculator.inputTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div>
            <Label htmlFor="crop" className="text-xl font-semibold text-earth-dark mb-3 block">
              {STRINGS.fertilizerCalculator.selectCrop}
            </Label>
            <Select value={crop} onValueChange={(value) => setCrop(value as CropType)}>
              <SelectTrigger id="crop" className="w-full text-xl py-6 touch-target border-2 border-earth-green">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cotton" className="text-xl py-4">{STRINGS.crops.cotton}</SelectItem>
                <SelectItem value="soybean" className="text-xl py-4">{STRINGS.crops.soybean}</SelectItem>
                <SelectItem value="wheat" className="text-xl py-4">{STRINGS.crops.wheat}</SelectItem>
                <SelectItem value="rice" className="text-xl py-4">{STRINGS.crops.rice}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="area" className="text-xl font-semibold text-earth-dark mb-3 block">
              {STRINGS.fertilizerCalculator.landArea}
            </Label>
            <Input
              id="area"
              type="number"
              step="0.1"
              min="0"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder={STRINGS.fertilizerCalculator.enterArea}
              className="text-xl py-6 touch-target border-2 border-earth-green"
            />
          </div>

          <Button
            onClick={handleCalculate}
            className="w-full text-xl py-7 touch-target bg-earth-green hover:bg-earth-dark"
            disabled={!area || parseFloat(area) <= 0}
          >
            {STRINGS.fertilizerCalculator.calculate}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="bg-gradient-to-br from-earth-green/10 to-earth-brown/10 border-2 border-earth-green shadow-lg">
          <CardHeader className="bg-earth-green text-white">
            <CardTitle className="text-2xl">
              {STRINGS.fertilizerCalculator.resultTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {result.fertilizers.map((fert, index) => (
              <div key={index} className="bg-white p-5 rounded-lg border-2 border-earth-green/30">
                <h3 className="text-2xl font-bold text-earth-dark mb-2">
                  {fert.name}
                </h3>
                <p className="text-xl text-earth-brown font-semibold">
                  {STRINGS.fertilizerCalculator.quantity}: {fert.quantity} {fert.unit}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
