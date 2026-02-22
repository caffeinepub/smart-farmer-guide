interface GovernmentScheme {
  name: string;
  eligibility: string;
  benefits: string;
}

export const governmentSchemes: GovernmentScheme[] = [
  {
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    eligibility: 'All farmers growing notified crops in notified areas. Both loanee and non-loanee farmers are eligible.',
    benefits: 'Comprehensive crop insurance covering yield losses due to natural calamities, pests, and diseases. Farmers pay only 2% premium for Kharif crops, 1.5% for Rabi crops, and 5% for horticultural crops. Government subsidizes the remaining premium.',
  },
  {
    name: 'Soil Health Card Scheme',
    eligibility: 'All farmers across India. Free service provided by government.',
    benefits: 'Free soil testing and health card issued every 2 years. Card provides information on soil nutrient status and recommendations for fertilizer application. Helps in balanced fertilization and cost reduction.',
  },
  {
    name: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
    eligibility: 'All landholding farmers. Small and marginal farmers get priority.',
    benefits: 'Direct income support of ₹6,000 per year in three equal installments of ₹2,000 each. Money directly transferred to farmer\'s bank account. No paperwork required after initial registration.',
  },
  {
    name: 'Kisan Credit Card (KCC)',
    eligibility: 'All farmers including tenant farmers, oral lessees, and sharecroppers.',
    benefits: 'Easy access to credit for agricultural needs. Interest subvention of 2% for timely repayment. Additional 3% interest subvention for prompt payment. Flexible repayment terms based on crop cycle.',
  },
];
