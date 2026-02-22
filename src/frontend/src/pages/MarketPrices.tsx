import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { STRINGS } from '../constants/strings';
import { marketPrices } from '../data/marketPrices';

export default function MarketPrices() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-earth-dark mb-6">
        {STRINGS.marketPrices.title}
      </h2>

      <Card className="bg-white border-2 border-earth-green shadow-lg">
        <CardHeader className="bg-earth-green text-white">
          <CardTitle className="text-2xl">
            {STRINGS.marketPrices.subtitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-earth-green/10">
                  <TableHead className="text-xl font-bold text-earth-dark">
                    {STRINGS.marketPrices.cropName}
                  </TableHead>
                  <TableHead className="text-xl font-bold text-earth-dark text-right">
                    {STRINGS.marketPrices.pricePerQuintal}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {marketPrices.map((item, index) => (
                  <TableRow key={index} className="hover:bg-earth-green/5">
                    <TableCell className="text-lg font-semibold text-earth-dark py-4">
                      {item.crop}
                    </TableCell>
                    <TableCell className="text-lg font-bold text-earth-brown text-right py-4">
                      ₹{item.price.toLocaleString('en-IN')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-gray-500 mt-6 italic">
            {STRINGS.marketPrices.note}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
