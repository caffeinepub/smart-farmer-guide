export type WeatherType = 'sunny' | 'cloudy' | 'rainy';

export const weatherAdvisories: Record<WeatherType, string[]> = {
  sunny: [
    'Good time for spraying pesticides and fertilizers. Spray in early morning or evening.',
    'Irrigation recommended for crops. Water plants in morning or evening to reduce evaporation.',
    'Monitor crops for pest activity. Hot weather increases pest population.',
    'Harvest mature crops during sunny days for better quality and storage.',
    'Apply mulch to conserve soil moisture and reduce water requirement.',
  ],
  cloudy: [
    'Good conditions for transplanting seedlings. Less stress on plants.',
    'Suitable for field operations like ploughing and sowing.',
    'Monitor for pest and disease development. Humid conditions favor diseases.',
    'Delay spraying operations if rain is expected within 24 hours.',
    'Good time for weeding and intercultural operations.',
  ],
  rainy: [
    'Do not spray pesticides or fertilizers during rain. Wait for dry weather.',
    'Ensure proper drainage in fields to avoid waterlogging.',
    'Monitor crops for fungal diseases. High humidity increases disease risk.',
    'Postpone harvesting operations. Wait for dry weather to harvest.',
    'Check for pest damage after rain. Many pests become active after rain.',
    'Avoid field operations during heavy rain to prevent soil compaction.',
  ],
};
