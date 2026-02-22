export type CropType = 'cotton' | 'soybean' | 'wheat' | 'rice';

interface Fertilizer {
  name: string;
  quantity: number;
  unit: string;
}

interface FertilizerResult {
  crop: string;
  area: number;
  fertilizers: Fertilizer[];
}

/**
 * Calculate fertilizer requirements based on crop type and land area
 * 
 * Formulas are based on standard agricultural recommendations for Indian farming.
 * These are approximate values and may vary based on soil testing results.
 * 
 * To modify calculations:
 * 1. Update the baseRequirements object with new values per acre
 * 2. Calculations automatically scale based on area input
 */
export function calculateFertilizer(crop: CropType, areaInAcres: number): FertilizerResult {
  // Base fertilizer requirements per acre (in kg)
  const baseRequirements: Record<CropType, Fertilizer[]> = {
    cotton: [
      { name: 'Urea', quantity: 75, unit: 'kg' },
      { name: 'DAP (Di-Ammonium Phosphate)', quantity: 50, unit: 'kg' },
      { name: 'Potash (MOP)', quantity: 25, unit: 'kg' },
    ],
    soybean: [
      { name: 'DAP (Di-Ammonium Phosphate)', quantity: 50, unit: 'kg' },
      { name: 'Potash (MOP)', quantity: 25, unit: 'kg' },
      { name: 'Urea', quantity: 25, unit: 'kg' },
    ],
    wheat: [
      { name: 'Urea', quantity: 50, unit: 'kg' },
      { name: 'DAP (Di-Ammonium Phosphate)', quantity: 50, unit: 'kg' },
      { name: 'Potash (MOP)', quantity: 25, unit: 'kg' },
    ],
    rice: [
      { name: 'Urea', quantity: 75, unit: 'kg' },
      { name: 'DAP (Di-Ammonium Phosphate)', quantity: 50, unit: 'kg' },
      { name: 'Potash (MOP)', quantity: 25, unit: 'kg' },
    ],
  };

  const baseFertilizers = baseRequirements[crop];
  
  // Calculate total fertilizer needed based on area
  const calculatedFertilizers = baseFertilizers.map(fert => ({
    ...fert,
    quantity: Math.round(fert.quantity * areaInAcres * 10) / 10, // Round to 1 decimal
  }));

  return {
    crop,
    area: areaInAcres,
    fertilizers: calculatedFertilizers,
  };
}
