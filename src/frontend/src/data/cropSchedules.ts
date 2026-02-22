export type CropType = 'cotton' | 'soybean' | 'wheat' | 'rice';

interface CropStage {
  name: string;
  timing: string;
  description: string;
}

interface CropSchedule {
  stages: CropStage[];
}

export const cropSchedules: Record<CropType, CropSchedule> = {
  cotton: {
    stages: [
      {
        name: 'Sowing',
        timing: 'June - July',
        description: 'Sow cotton seeds after first monsoon rain. Maintain 60-90 cm row spacing and 30-45 cm plant spacing. Use treated seeds for better germination.',
      },
      {
        name: 'First Fertilizer Application',
        timing: '20-25 days after sowing',
        description: 'Apply Urea (50 kg/acre) and DAP (50 kg/acre). Mix fertilizer in soil near plant roots. Water immediately after application.',
      },
      {
        name: 'Second Fertilizer Application',
        timing: '45-50 days after sowing',
        description: 'Apply Urea (25 kg/acre) during flowering stage. This helps in better boll formation and increases yield.',
      },
      {
        name: 'Irrigation',
        timing: 'Every 15-20 days',
        description: 'Provide regular irrigation during flowering and boll formation. Avoid waterlogging. Critical stages: flowering, boll formation, and boll development.',
      },
      {
        name: 'Harvest',
        timing: 'October - December',
        description: 'Harvest when 60-70% bolls are fully opened. Pick cotton in 2-3 rounds. Store in dry place to maintain quality.',
      },
    ],
  },
  soybean: {
    stages: [
      {
        name: 'Sowing',
        timing: 'June - July',
        description: 'Sow soybean seeds with first good monsoon rain. Use 30-40 kg seeds per acre. Maintain 45 cm row spacing and 5-7 cm depth.',
      },
      {
        name: 'First Fertilizer Application',
        timing: 'At sowing time',
        description: 'Apply DAP (50 kg/acre) and Potash (25 kg/acre) at the time of sowing. Mix well with soil for better root development.',
      },
      {
        name: 'Second Fertilizer Application',
        timing: '30-35 days after sowing',
        description: 'Apply Urea (25 kg/acre) during flowering stage. This improves pod formation and grain filling.',
      },
      {
        name: 'Irrigation',
        timing: 'As needed',
        description: 'Soybean is mostly rain-fed. Provide irrigation during dry spells, especially during flowering and pod formation stages.',
      },
      {
        name: 'Harvest',
        timing: 'September - October',
        description: 'Harvest when 95% pods turn brown and leaves fall. Dry properly before storage to prevent fungal growth.',
      },
    ],
  },
  wheat: {
    stages: [
      {
        name: 'Sowing',
        timing: 'November - December',
        description: 'Sow wheat seeds in well-prepared field. Use 40-50 kg seeds per acre. Maintain 20-23 cm row spacing and 5 cm depth.',
      },
      {
        name: 'First Fertilizer Application',
        timing: 'At sowing time',
        description: 'Apply DAP (50 kg/acre) and Potash (25 kg/acre) at sowing. This provides essential nutrients for early growth.',
      },
      {
        name: 'First Irrigation',
        timing: '20-25 days after sowing',
        description: 'First irrigation is critical for tillering. Apply light irrigation to avoid waterlogging.',
      },
      {
        name: 'Second Fertilizer Application',
        timing: '30-35 days after sowing',
        description: 'Apply Urea (50 kg/acre) after first irrigation. This promotes tillering and vegetative growth.',
      },
      {
        name: 'Subsequent Irrigations',
        timing: 'Every 20-25 days',
        description: 'Provide 4-5 irrigations during crop period. Critical stages: tillering, jointing, flowering, and grain filling.',
      },
      {
        name: 'Harvest',
        timing: 'March - April',
        description: 'Harvest when grains are hard and moisture content is 20-25%. Dry properly before storage.',
      },
    ],
  },
  rice: {
    stages: [
      {
        name: 'Nursery Preparation',
        timing: 'May - June',
        description: 'Prepare nursery bed and sow rice seeds. Maintain proper water level in nursery. Seedlings ready for transplanting in 25-30 days.',
      },
      {
        name: 'Transplanting',
        timing: 'June - July',
        description: 'Transplant 25-30 day old seedlings. Maintain 20x15 cm spacing. Plant 2-3 seedlings per hill at 2-3 cm depth.',
      },
      {
        name: 'First Fertilizer Application',
        timing: 'At transplanting',
        description: 'Apply DAP (50 kg/acre) and Potash (25 kg/acre) at transplanting. Mix in puddled soil for better absorption.',
      },
      {
        name: 'Second Fertilizer Application',
        timing: '25-30 days after transplanting',
        description: 'Apply Urea (50 kg/acre) during tillering stage. This promotes more tillers and better plant growth.',
      },
      {
        name: 'Third Fertilizer Application',
        timing: '45-50 days after transplanting',
        description: 'Apply Urea (25 kg/acre) during panicle initiation. This improves grain formation and yield.',
      },
      {
        name: 'Water Management',
        timing: 'Throughout crop period',
        description: 'Maintain 5-7 cm water level in field. Drain water 10-15 days before harvest. Critical stages: tillering, flowering, and grain filling.',
      },
      {
        name: 'Harvest',
        timing: 'October - November',
        description: 'Harvest when 80% grains turn golden yellow. Dry paddy to 14% moisture before storage.',
      },
    ],
  },
};
