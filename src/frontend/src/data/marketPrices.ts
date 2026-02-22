/**
 * Market Prices Data
 * 
 * This file contains static market price data for common crops.
 * Prices are in Indian Rupees (₹) per quintal (100 kg).
 * 
 * TO UPDATE PRICES:
 * 1. Locate the crop in the array below
 * 2. Update the 'price' value with the new price
 * 3. Save the file
 * 
 * Example:
 * { crop: 'Cotton', price: 6500 } // Change 6500 to new price
 * 
 * Note: These are indicative prices. Actual prices may vary by location and market.
 */

interface MarketPrice {
  crop: string;
  price: number; // Price per quintal in ₹
}

export const marketPrices: MarketPrice[] = [
  { crop: 'Cotton', price: 6500 },
  { crop: 'Soybean', price: 4200 },
  { crop: 'Wheat', price: 2125 },
  { crop: 'Rice (Paddy)', price: 2040 },
  { crop: 'Maize', price: 1850 },
  { crop: 'Chickpea (Chana)', price: 5300 },
  { crop: 'Pigeon Pea (Tur)', price: 6600 },
  { crop: 'Groundnut', price: 5500 },
  { crop: 'Sugarcane', price: 315 },
  { crop: 'Onion', price: 1200 },
  { crop: 'Potato', price: 900 },
  { crop: 'Tomato', price: 1500 },
];
