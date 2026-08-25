import { createFileRoute } from "@tanstack/react-router";
import { Map, Users, Sparkles, Heart, Compass, Clock, FileText, CheckCircle2, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { tourServices, site } from "@/lib/site";

// Page hero image
import heroImg from "@/assets/Travellife - Kolkata.jpg";

// Group & Family Tours gallery images
import groupToursImg1 from "@/assets/How to Correct a Name on Expedia Bookings.jpg";
import familyToursImg from "@/assets/Happy family posing together _ Premium Photo.jpg";
import muscatAirportImg from "@/assets/family.jpg";
import internationalToursImg from "@/assets/download (29).jpg";

import toursGenericImg from "@/assets/Explore travel adventures with a suitcase and airplane over a vibrant location ___.jpg";

const title = `Tour Services — Tour Packages & Group Tours in ${site.cityRegion} | ${site.name}`;
const description =
  `Tour packages, group tours, custom itineraries, family & leisure packages, and tour consultancy from ${site.name}.`;

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tours" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tours" }],
  }),
  component: ToursPage,
});

const icons: Record<string, LucideIcon> = {
  "tour-packages": Map,
  "group-tours": Users,
  "custom-itineraries": Sparkles,
  "family-leisure": Heart,
  "tour-consultancy": Compass,
};

// Expanded service details with what's included, group size/format, typical duration, and examples
const serviceDetails = {
  "tour-packages": {
    included: [
      "Round-trip flights from your departure city",
      "Accommodation for the duration (hotels, resorts, or lodges based on package tier)",
      "Airport transfers and inter-city transportation",
      "Guided tours and entrance fees to key attractions",
      "Daily breakfast, and selected meals depending on package",
      "Tour guide and 24/7 on-ground support contact",
    ],
    format: "Individual, couple, or small group (up to 15 travelers). Larger groups can be accommodated with advance notice.",
    duration: "Weekend getaways (2-3 days), week-long tours (5-7 days), or extended adventures (10-14 days). Custom durations available.",
    example: "Exploring Dubai for 5 days? We arrange your flight, book a 4-star hotel near the Marina, include desert safari, Burj Khalifa tickets, city tour, and daily breakfast — all confirmed before you pay the balance. You receive a detailed itinerary, vouchers, and our local contact number.",
  },
  "group-tours": {
    included: [
      "Coordinated group departure with shared itinerary",
      "Group discounts on flights, accommodation, and activities",
      "Dedicated tour manager traveling with the group",
      "Pre-trip orientation meeting (online or in-person)",
      "Group WhatsApp channel for real-time updates",
      "Customizable add-ons (group t-shirts, photography package, special meals)",
    ],
    format: "Minimum 10 travelers, maximum 50 (larger groups split into manageable sub-groups). Ideal for corporate retreats, school trips, religious pilgrimages, social clubs.",
    duration: "Typically 3-7 days for domestic tours, 7-14 days for international group travel. Flexible based on group budget and destination.",
    example: "Organizing a company retreat to Ghana for 25 staff? We handle group flights from Abuja, book a beachfront conference resort, arrange team-building activities, city tours, and a farewell dinner — all coordinated with a dedicated tour manager. One invoice, one point of contact, transparent group pricing.",
  },
  "custom-itineraries": {
    included: [
      "One-on-one consultation to understand your travel vision",
      "Fully bespoke itinerary designed around your preferences",
      "Flexible routing, accommodation tiers, and activity mix",
      "Private tours, VIP experiences, or off-the-beaten-path destinations",
      "As many revisions as needed until the itinerary feels perfect",
      "Complete booking and documentation once you approve",
    ],
    format: "Fully personalized for solo travelers, couples, families, or private groups of any size. You set the pace, budget, and style.",
    duration: "Completely flexible — from weekend escapes to month-long sabbaticals. We design around your available time and budget.",
    example: "Dreaming of a 10-day cultural tour through Morocco but want to skip the standard tourist crowds? We craft a bespoke itinerary with a private driver, boutique riads in each city, cooking classes, desert camping under the stars, and visits to local artisan workshops — every detail tailored to your interests.",
  },
  "family-leisure": {
    included: [
      "Family-friendly accommodation (connecting rooms, kid-safe facilities)",
      "Activities suitable for multiple age groups",
      "Flexible itineraries with built-in downtime",
      "Child discounts and family meal plans",
      "Recommendations for kid-friendly attractions and restaurants",
      "Travel insurance options covering all family members",
    ],
    format: "Designed for families (2 adults + kids), multi-generational groups (grandparents, parents, children), or extended family reunions.",
    duration: "Short breaks (3-5 days) for school holidays, or longer vacations (7-14 days) during summer or festive seasons.",
    example: "Planning a family beach holiday to Zanzibar with two young kids? We book a family suite at an all-inclusive resort, arrange airport transfers with car seats, include snorkeling trips, spice farm tours, and recommend kid-friendly restaurants. The itinerary balances activities with pool/beach time so everyone enjoys the trip.",
  },
  "tour-consultancy": {
    included: [
      "Destination research and recommendations based on your interests",
      "Budget breakdown and cost optimization strategies",
      "Visa and entry requirement guidance",
      "Best travel dates considering weather, crowds, and pricing",
      "Itinerary review and improvement suggestions",
      "Referrals to trusted local guides and service providers",
    ],
    format: "One-time consultation (phone, WhatsApp, or in-person) or ongoing advisory for complex multi-destination trips.",
    duration: "Immediate advice for straightforward questions. For complex trip planning (multi-country, large groups), we schedule a detailed consultation within 2-3 days.",
    example: "Considering a Southeast Asia backpacking trip but unsure where to start? We advise on the best route (Thailand → Vietnam → Cambodia), budget expectations, visa-on-arrival countries, must-see vs. skippable destinations, and how to book onward travel. You leave with a clear plan and confidence to book your trip.",
  },
};

function ToursPage() {
  const [selectedTourType, setSelectedTourType] = useState<string>("tour-packages");

  // Build dynamic form fields based on selected tour type
  const getFormFields = () => {
    const baseFields = [
      { name: "name", label: "Full name", required: true },
      { name: "phone", label: "Phone number", type: "tel" as const, required: true },
      { name: "email", label: "Email address", type: "email" as const },
      {
        name: "tourType",
        label: "Tour type",
        type: "select" as const,
        required: true,
        options: tourServices.map((s) => s.title),
      },
    ];

    const tourSpecificFields: Record<string, any[]> = {
      "tour-packages": [
        { name: "destination", label: "Preferred destination", required: true, placeholder: "e.g., Dubai, Ghana, Zanzibar" },
        { name: "travelers", label: "Number of travelers", type: "number" as const, placeholder: "e.g., 2 adults, 1 child" },
        { name: "dates", label: "Preferred travel dates", type: "date" as const },
      ],
      "group-tours": [
        { name: "groupSize", label: "Group size", type: "number" as const, required: true, placeholder: "Minimum 10 travelers" },
        { name: "groupType", label: "Group type", type: "select" as const, options: ["Corporate/Team", "School/Education", "Religious/Pilgrimage", "Social Club", "Other"] },
        { name: "destination", label: "Preferred destination", placeholder: "Domestic or international" },
        { name: "dates", label: "Preferred travel period", placeholder: "e.g., Q2 2026, December holidays" },
      ],
      "custom-itineraries": [
        { name: "destination", label: "Dream destination(s)", full: true, required: true, placeholder: "e.g., Multi-city Europe, Southeast Asia backpacking" },
        { name: "travelers", label: "Who's traveling?", placeholder: "e.g., Solo, couple, family of 4" },
        { name: "duration", label: "Trip duration", placeholder: "e.g., 10 days, 2 weeks" },
        { name: "interests", label: "Interests & preferences", type: "textarea" as const, placeholder: "e.g., Culture, adventure, relaxation, food tours" },
      ],
      "family-leisure": [
        { name: "travelers", label: "Family composition", required: true, placeholder: "e.g., 2 adults + 2 kids (ages 5, 8)" },
        { name: "destination", label: "Preferred destination", placeholder: "Beach resort, theme park, cultural city" },
        { name: "dates", label: "Preferred travel dates", type: "date" as const },
      ],
      "tour-consultancy": [
        { name: "query", label: "What do you need advice on?", type: "textarea" as const, full: true, required: true, placeholder: "Describe your trip idea or questions" },
      ],
    };

    const specificFields = tourSpecificFields[selectedTourType] || [
      { name: "destination", label: "Destination of interest", placeholder: "Where would you like to go?" },
      { name: "travelers", label: "Number of travelers" },
    ];

    return [
      ...baseFields,
      ...specificFields,
      { name: "budget", label: "Budget range (optional)", placeholder: "e.g., ₦500k - ₦1M per person" },
      { name: "message", label: "Additional details", type: "textarea" as const, placeholder: "Any special requirements or questions" },
    ];
  };

  return (
    <>
      {/* Full-width Hero Banner */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Travel adventures and tour destinations"
          loading="eager"
          className="h-96 w-full object-cover lg:h-[28rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/85 to-primary-deep/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Tour Division
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Tour Services
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-primary-foreground/85">
                From weekend getaways to international adventures — we design, coordinate, and deliver memorable tours for individuals, families, and groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="container-page grid items-center gap-8 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Tours designed around you</h2>
            <p className="mt-4 text-primary-foreground/75">
              Whether it's a family holiday, a group pilgrimage, or a bespoke adventure you've been dreaming about, we handle the planning, bookings, and logistics so you experience the trip, not the stress of organizing it.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-medium text-primary-foreground/85">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Curated itineraries for domestic and international destinations
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Group discounts and dedicated tour managers
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Fully customizable to your pace, budget, and interests
              </li>
            </ul>
          </div>
          <img
            src={toursGenericImg}
            alt="Travel adventures with luggage and destinations"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full rounded-xl object-cover shadow-elevated"
          />
        </div>
      </section>

      {/* Detailed Services */}
      {tourServices.map((service, i) => {
        const Icon = icons[service.slug] ?? Map;
        const details = serviceDetails[service.slug as keyof typeof serviceDetails];
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-14 sm:py-16 ${i % 2 === 1 ? "bg-secondary/50" : "bg-background"}`}
          >
            <div className="container-page">
              <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-soft">
                  <Icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-bold text-primary sm:text-3xl">{service.title}</h2>
                  <p className="mt-2 font-semibold text-accent-foreground/80">{service.summary}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{service.detail}</p>
                </div>
              </div>

              {details && (
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <h3 className="font-bold text-primary">What's included</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {details.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-accent" />
                        <h3 className="text-sm font-bold text-primary">Group size & format</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{details.format}</p>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-accent" />
                        <h3 className="text-sm font-bold text-primary">Typical duration</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{details.duration}</p>
                    </div>
                  </div>
                </div>
              )}

              {details?.example && (
                <div className="mt-6 rounded-xl border-2 border-accent/20 bg-accent-soft/30 p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent-foreground/70">Example Scenario</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{details.example}</p>
                </div>
              )}

              {/* Group & Family Tours Gallery - Only for specific services */}
              {(service.slug === "group-tours" || service.slug === "family-leisure") && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-primary">Featured group & family tours</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Examples of tours we organize for groups and families — from local getaways to international adventures
                  </p>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { img: groupToursImg1, title: "Friends Getaways", desc: "Group tours for friends and social clubs" },
                      { img: familyToursImg, title: "Family Escapes", desc: "Multi-generational family packages" },
                      { img: muscatAirportImg, title: "Arrival Moments", desc: "Seamless airport pickups and transfers" },
                      { img: internationalToursImg, title: "International Adventures", desc: "Guided tours across continents" },
                    ].map((tour, idx) => (
                      <div
                        key={idx}
                        className="card-interactive group overflow-hidden rounded-2xl border border-border bg-card shadow-card"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={tour.img}
                            alt="Group or family tour"
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="font-bold text-primary">{tour.title}</h4>
                          <p className="mt-2 text-sm text-muted-foreground">{tour.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Interactive Tour Enquiry Form */}
      <section id="inquiry-form" className="scroll-mt-20 bg-primary-deep py-16">
        <div className="container-page max-w-3xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">Request a tour quote</h2>
            <p className="mt-2 text-sm text-primary-foreground/75">
              Select the tour type and the form will adapt to collect the right information
            </p>
          </div>

          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {tourServices.map((service) => {
              const Icon = icons[service.slug] ?? Map;
              return (
                <button
                  key={service.slug}
                  onClick={() => setSelectedTourType(service.slug)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all ${
                    selectedTourType === service.slug
                      ? "bg-accent text-accent-foreground"
                      : "border border-primary-foreground/30 text-primary-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {service.title}
                </button>
              );
            })}
          </div>

          <InquiryForm
            title="Tour enquiry"
            description="Share your tour vision and we'll come back with a detailed itinerary and pricing."
            intro={`Hello ${site.name}! I have a tour enquiry.`}
            fields={getFormFields()}
          />
        </div>
      </section>
    </>
  );
}
