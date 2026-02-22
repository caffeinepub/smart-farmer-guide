/**
 * Centralized strings file for Smart Farmer Guide
 * 
 * This file contains all user-facing text organized by screen/feature.
 * To add Hindi or Marathi translations:
 * 1. Create new files: strings.hi.ts (Hindi) and strings.mr.ts (Marathi)
 * 2. Copy this structure and translate all values
 * 3. Create a language context/hook to switch between language files
 * 4. Import the appropriate strings file based on selected language
 * 
 * Example for Hindi:
 * export const STRINGS_HI = {
 *   splash: {
 *     appName: "स्मार्ट किसान गाइड",
 *     tagline: "आपकी खेती का साथी"
 *   },
 *   ...
 * }
 */

export const STRINGS = {
  // Splash Screen
  splash: {
    appName: 'Smart Farmer Guide',
    tagline: 'Your Farming Companion',
  },

  // Common
  common: {
    back: 'Back',
  },

  // Footer
  footer: {
    builtWith: 'Built with love using',
  },

  // Dashboard
  dashboard: {
    title: 'Welcome Farmer',
    cropSchedule: 'Crop Schedule',
    fertilizerCalculator: 'Fertilizer Calculator',
    pestDisease: 'Pest & Disease',
    weatherAdvisory: 'Weather Advisory',
    marketPrices: 'Market Prices',
    governmentSchemes: 'Government Schemes',
  },

  // Crops
  crops: {
    cotton: 'Cotton',
    soybean: 'Soybean',
    wheat: 'Wheat',
    rice: 'Rice',
  },

  // Crop Schedule
  cropSchedule: {
    title: 'Crop Schedule',
    selectCrop: 'Select Crop',
    timing: 'Timing',
  },

  // Fertilizer Calculator
  fertilizerCalculator: {
    title: 'Fertilizer Calculator',
    inputTitle: 'Enter Details',
    selectCrop: 'Select Crop',
    landArea: 'Land Area (Acres)',
    enterArea: 'Enter area in acres',
    calculate: 'Calculate',
    resultTitle: 'Recommended Fertilizer',
    quantity: 'Quantity',
  },

  // Pest & Disease
  pestDisease: {
    title: 'Pest & Disease Management',
    selectCrop: 'Select Crop',
    symptoms: 'Symptoms',
    control: 'Control Method',
    chemical: 'Chemical & Dosage',
  },

  // Weather Advisory
  weather: {
    title: 'Weather Advisory',
    selectCondition: 'Select Current Weather Condition',
    sunny: 'Sunny',
    cloudy: 'Cloudy',
    rainy: 'Rainy',
    advisory: 'Farming Advisory',
  },

  // Market Prices
  marketPrices: {
    title: 'Market Prices',
    subtitle: 'Current APMC Prices',
    cropName: 'Crop Name',
    pricePerQuintal: 'Price per Quintal (₹)',
    note: 'Note: Prices are indicative. Please check with your local APMC for current rates.',
  },

  // Government Schemes
  governmentSchemes: {
    title: 'Government Schemes',
    eligibility: 'Eligibility',
    benefits: 'Benefits',
  },
};
