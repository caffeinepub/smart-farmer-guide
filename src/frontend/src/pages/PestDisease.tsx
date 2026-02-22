import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { STRINGS } from '../constants/strings';
import { pestDiseaseData, type CropType } from '../data/pestDiseaseData';

export default function PestDisease() {
  const [selectedCrop, setSelectedCrop] = useState<CropType>('cotton');

  const issues = pestDiseaseData[selectedCrop];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-earth-dark mb-6">
        {STRINGS.pestDisease.title}
      </h2>

      <div className="mb-8">
        <label className="block text-xl font-semibold text-earth-dark mb-3">
          {STRINGS.pestDisease.selectCrop}
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

      <div className="space-y-6">
        {issues.map((issue, index) => (
          <Card key={index} className="bg-white border-2 border-earth-green/30 shadow-md overflow-hidden">
            <CardHeader className="bg-earth-green/10">
              <CardTitle className="text-2xl text-earth-dark">
                {issue.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={issue.image}
                  alt={issue.name}
                  className="w-full md:w-48 h-48 object-cover rounded-lg border-2 border-earth-green/20"
                />
                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-earth-brown mb-2">
                      {STRINGS.pestDisease.symptoms}
                    </h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {issue.symptoms}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-earth-brown mb-2">
                      {STRINGS.pestDisease.control}
                    </h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {issue.control}
                    </p>
                  </div>
                  <div className="bg-earth-green/10 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-earth-dark mb-2">
                      {STRINGS.pestDisease.chemical}
                    </h4>
                    <p className="text-lg text-earth-brown font-semibold">
                      {issue.chemical}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
