/**
 * TEMPLATE CONFIGURATION
 * 
 * This file contains all company-specific values that should be customized
 * when deploying this template for a new Travel & Tour agency.
 * 
 * Replace all {{PLACEHOLDER}} values with actual company information.
 */

export const siteConfig = {
  // Company Information
  companyName: "{{COMPANY_NAME}}", // e.g., "Yahaya Travel and Tours"
  registrationNumber: "{{REGISTRATION_NUMBER}}", // e.g., "RC 9295358"
  
  // Contact Information
  officeAddress: {
    street: "{{OFFICE_STREET}}", // e.g., "B.M Yelwa Plaza, Opp. Bachure Junction"
    locality: "{{OFFICE_CITY}}", // e.g., "Jimeta-Yola"
    region: "{{OFFICE_STATE}}", // e.g., "Adamawa State"
    country: "Nigeria",
  },
  
  phones: [
    "{{PHONE_1}}", // e.g., "0803 606 6163"
    "{{PHONE_2}}", // e.g., "0703 606 6163"
    "{{PHONE_3}}", // e.g., "0903 606 6163"
  ],
  
  email: "{{COMPANY_EMAIL}}", // e.g., "info@yahayatravelandtours.com"
  
  whatsappNumber: "{{WHATSAPP_NUMBER}}", // e.g., "2348036066163" (country code + number, no +)
  
  // SEO & Marketing
  cityRegion: "{{CITY_REGION}}", // e.g., "Yola, Adamawa" - used in SEO copy
  
  // Business Hours
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  
  // Social Media (optional)
  social: {
    facebook: "{{FACEBOOK_URL}}", // Leave empty if not applicable
    twitter: "{{TWITTER_URL}}",
    instagram: "{{INSTAGRAM_URL}}",
    linkedin: "{{LINKEDIN_URL}}",
  },
  
  // Google Maps
  mapQuery: "{{MAP_QUERY}}", // e.g., "B.M+Yelwa+Plaza+Jimeta+Yola+Adamawa"
};

// Helper functions
export const getAddressLine = () => 
  `${siteConfig.officeAddress.street}, ${siteConfig.officeAddress.locality}, ${siteConfig.officeAddress.region}`;

export const getWhatsAppLink = (message: string) => 
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const getGeneralWhatsAppLink = () => 
  getWhatsAppLink(`Hello ${siteConfig.companyName}! I would like to make an enquiry.`);
