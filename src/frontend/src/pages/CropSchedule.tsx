import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { STRINGS } from '../constants/strings';
import { cropSchedules, type CropType } from '../data/cropSchedules';

export default function CropSchedule() {
  const [selectedCrop, setSelectedCrop] = useState<CropType>('cotton');

  const schedule = cropSchedules[selectedCrop];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-earth-dark mb-6">
        {STRINGS.cropSchedule.title}
      </h2>

      <div className="mb-8">
        <label className="block text-xl font-semibold text-earth-dark mb-3">
          {STRINGS.cropSchedule.selectCrop}
        </label>
        <Select value={selectedCrop} onValueChange={(value) => setSelectedCrop(value as CropType)}>
          <SelectTrigger className="w-full text-xl py-6 touch-target bg-white border-2 border-earth-green">
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

      <div className="space-y-4">
        {schedule.stages.map((stage, index) => (
          <Card key={index} className="bg-white border-2 border-earth-green/30 shadow-md">
            <CardHeader className="bg-earth-green/10">
              <CardTitle className="text-2xl text-earth-dark flex items-center gap-3">
                <span className="bg-earth-green text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                {stage.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg text-earth-brown font-semibold mb-2">
                {STRINGS.cropSchedule.timing}: {stage.timing}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {stage.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
