export type CropType = 'cotton' | 'soybean' | 'wheat' | 'rice';

interface PestDisease {
  name: string;
  image: string;
  symptoms: string;
  control: string;
  chemical: string;
}

export const pestDiseaseData: Record<CropType, PestDisease[]> = {
  cotton: [
    {
      name: 'Pink Bollworm',
      image: '/assets/generated/pest-cotton.dim_256x256.png',
      symptoms: 'Pink caterpillars inside cotton bolls. Holes in bolls with webbing. Rosette flowers. Reduced boll size and quality.',
      control: 'Remove and destroy affected bolls. Use pheromone traps. Maintain field sanitation. Deep summer ploughing.',
      chemical: 'Spray Chlorantraniliprole 18.5% SC @ 60 ml per acre or Emamectin Benzoate 5% SG @ 80 gm per acre',
    },
    {
      name: 'Cotton Leaf Curl Virus',
      image: '/assets/generated/pest-cotton.dim_256x256.png',
      symptoms: 'Upward curling of leaves. Thickening of veins. Stunted plant growth. Reduced boll formation.',
      control: 'Use resistant varieties. Control whitefly population. Remove infected plants. Avoid late sowing.',
      chemical: 'Spray Imidacloprid 17.8% SL @ 100 ml per acre or Thiamethoxam 25% WG @ 40 gm per acre for whitefly control',
    },
  ],
  soybean: [
    {
      name: 'Stem Fly',
      image: '/assets/generated/disease-soybean.dim_256x256.png',
      symptoms: 'Yellowing of leaves. Wilting of plants. Tunneling in stem. Death of central shoot.',
      control: 'Early sowing. Use resistant varieties. Remove and destroy affected plants. Crop rotation.',
      chemical: 'Spray Dimethoate 30% EC @ 300 ml per acre or Quinalphos 25% EC @ 400 ml per acre',
    },
    {
      name: 'Yellow Mosaic Virus',
      image: '/assets/generated/disease-soybean.dim_256x256.png',
      symptoms: 'Yellow patches on leaves. Mosaic pattern. Stunted growth. Reduced pod formation.',
      control: 'Control whitefly population. Use resistant varieties. Remove infected plants early. Maintain field hygiene.',
      chemical: 'Spray Imidacloprid 17.8% SL @ 100 ml per acre or Acetamiprid 20% SP @ 50 gm per acre for whitefly control',
    },
  ],
  wheat: [
    {
      name: 'Rust Disease',
      image: '/assets/generated/pest-wheat.dim_256x256.png',
      symptoms: 'Orange-brown pustules on leaves. Yellow spots on upper leaf surface. Premature drying of leaves.',
      control: 'Use resistant varieties. Timely sowing. Remove alternate hosts. Balanced fertilization.',
      chemical: 'Spray Propiconazole 25% EC @ 200 ml per acre or Tebuconazole 25.9% EC @ 200 ml per acre',
    },
    {
      name: 'Aphids',
      image: '/assets/generated/pest-wheat.dim_256x256.png',
      symptoms: 'Small green insects on leaves and stems. Sticky honeydew on plants. Yellowing of leaves. Stunted growth.',
      control: 'Monitor regularly. Encourage natural predators. Remove weeds. Avoid excessive nitrogen.',
      chemical: 'Spray Dimethoate 30% EC @ 300 ml per acre or Thiamethoxam 25% WG @ 40 gm per acre',
    },
  ],
  rice: [
    {
      name: 'Blast Disease',
      image: '/assets/generated/disease-rice.dim_256x256.png',
      symptoms: 'Diamond-shaped spots on leaves. White to gray center with brown margins. Neck rot in severe cases.',
      control: 'Use resistant varieties. Avoid excessive nitrogen. Maintain proper water level. Remove infected plants.',
      chemical: 'Spray Tricyclazole 75% WP @ 120 gm per acre or Carbendazim 50% WP @ 200 gm per acre',
    },
    {
      name: 'Brown Plant Hopper',
      image: '/assets/generated/disease-rice.dim_256x256.png',
      symptoms: 'Yellowing and drying of plants (hopper burn). Stunted growth. Honeydew on plants. Sooty mold.',
      control: 'Avoid excessive nitrogen. Maintain proper water level. Remove weeds. Use light traps.',
      chemical: 'Spray Buprofezin 25% SC @ 400 ml per acre or Imidacloprid 17.8% SL @ 100 ml per acre',
    },
  ],
};
