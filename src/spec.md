# Specification

## Summary
**Goal:** Build a progressive web app called "Smart Farmer Guide" that provides offline-accessible farming information and tools for rural farmers on low-end Android devices.

**Planned changes:**
- Create splash screen with app logo and smooth transition to home dashboard
- Build home dashboard with 6 navigation cards: Crop Schedule, Fertilizer Calculator, Pest & Disease, Weather Advisory, Market Prices, Government Schemes
- Implement Crop Schedule screen with dropdown selector for 4 crops (Cotton, Soybean, Wheat, Rice) showing timeline of sowing, fertilizer stages, irrigation, and harvest
- Create Fertilizer Dose Calculator with crop and land area inputs, calculating fertilizer quantities using embedded logic
- Build Pest & Disease Management screen showing crop-wise lists of pests/diseases with symptoms, control methods, and chemical dosages
- Implement Weather Advisory screen with simulated weather selection (Sunny, Rainy, Cloudy) and corresponding farming advice
- Create Market Prices screen displaying static APMC-style crop prices per quintal
- Build Government Schemes screen listing major schemes with eligibility and benefits
- Apply mobile-first responsive design with green/earthy color theme, large fonts, large buttons, and icon-based navigation
- Structure all text strings centrally to support future Hindi/Marathi translation
- Implement PWA functionality with service worker for full offline access to all static data

**User-visible outcome:** Rural farmers can access a simple, offline-capable farming guide on their smartphones with crop schedules, fertilizer calculations, pest management information, weather advisories, market prices, and government scheme details—all without internet connectivity after initial load.
