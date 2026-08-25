import { siteConfig, getAddressLine, getWhatsAppLink, getGeneralWhatsAppLink } from "./config";

// Re-export config values for backwards compatibility
export const site = {
  name: siteConfig.companyName,
  shortName: siteConfig.companyName.split(" ")[0], // First word of company name
  rcNumber: siteConfig.registrationNumber,
  address: siteConfig.officeAddress,
  addressLine: getAddressLine(),
  phones: siteConfig.phones,
  whatsappNumber: siteConfig.whatsappNumber,
  email: siteConfig.email,
  hours: siteConfig.hours,
  mapQuery: siteConfig.mapQuery,
  cityRegion: siteConfig.cityRegion,
} as const;

export function whatsappLink(message: string) {
  return getWhatsAppLink(message);
}

export const generalWhatsapp = getGeneralWhatsAppLink();

export const travelServices = [
  {
    slug: "visa-processing",
    title: "Visa Processing",
    summary: "End-to-end visa application support and documentation guidance.",
    detail:
      "We handle the paperwork from first checklist to submission: eligibility review, document preparation, appointment booking and follow-up, for tourist, business, study and pilgrimage visas.",
  },
  {
    slug: "flight-bookings",
    title: "Flight Bookings",
    summary: "Domestic and international flight reservations.",
    detail:
      "Fare comparisons across major carriers, ticketing, date changes and rebooking, for one-off trips or recurring corporate travel.",
  },
  {
    slug: "hotel-reservations",
    title: "Hotel Reservations",
    summary: "Accommodation booking for business and leisure travel.",
    detail:
      "Vetted hotels and serviced apartments at negotiated rates, matched to your budget, location and length of stay, with confirmations you can present at check-in or for a visa file.",
  },
  {
    slug: "travel-consultancy",
    title: "Travel Consultancy",
    summary: "Personalized travel planning and advisory.",
    detail:
      "Route planning, entry requirements, travel insurance and cost optimization advice, so you know exactly what a trip demands before you commit to it.",
  },
] as const;

export const tourServices = [
  {
    slug: "tour-packages",
    title: "Tour Packages",
    summary: "Domestic and international tour packages for all travel styles.",
    detail:
      "Fully curated itineraries covering flights, accommodation, transfers, and guided activities — from weekend getaways to multi-country adventures. We handle the logistics so you focus on the experience.",
  },
  {
    slug: "group-tours",
    title: "Group Tours",
    summary: "Organized group travel for friends, colleagues, and communities.",
    detail:
      "Coordinated group departures with shared itineraries, group discounts, and dedicated support. Perfect for corporate retreats, school trips, religious pilgrimages, and social clubs traveling together.",
  },
  {
    slug: "custom-itineraries",
    title: "Custom & Bespoke Itineraries",
    summary: "Tailor-made travel experiences designed around your preferences.",
    detail:
      "Tell us your dream trip and we'll build it from scratch: destinations, activities, pace, budget, and accommodation style all customized to your exact requirements. No template packages — just your vision, realized.",
  },
  {
    slug: "family-leisure",
    title: "Family & Leisure Packages",
    summary: "Family-friendly tours and relaxation-focused getaways.",
    detail:
      "Kid-friendly itineraries, multi-generational travel coordination, and leisure-focused packages that balance activities with downtime. Beach resorts, theme parks, cultural sites — we match the trip to your family's rhythm.",
  },
  {
    slug: "tour-consultancy",
    title: "Tour Consultancy",
    summary: "Expert guidance for planning your perfect tour.",
    detail:
      "Not ready to book yet? We provide destination research, itinerary advice, budget planning, and travel tips so you can make informed decisions before committing to a tour.",
  },
] as const;
