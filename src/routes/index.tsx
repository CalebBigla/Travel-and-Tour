import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Plane,
  Ship,
  ShieldCheck,
  Headphones,
  Workflow,
  Building2,
  Quote,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Hero floating collage
import heroLuggageImg from "@/assets/download (27).jpg";
import heroPassportImg from "@/assets/Minimalist Travel Aesthetic _ Manifesting My Next Journey 🌍✨.jpg";

// Bento grid - Travel & Tour split
import bentoTravelCoupleImg from "@/assets/download (25).jpg";
import bentoTravelLuggageImg from "@/assets/Day Trips from Los Cabos.jpg";
import bentoTourGroupImg from "@/assets/How to Correct a Name on Expedia Bookings.jpg";
import bentoTourFamilyImg from "@/assets/Happy family posing together _ Premium Photo.jpg";

// Tour gallery (mirroring hotel gallery)
import tourGroupImg1 from "@/assets/How to Correct a Name on Expedia Bookings.jpg";
import tourFamilyImg from "@/assets/Happy family posing together _ Premium Photo.jpg";
import tourAirportImg from "@/assets/family.jpg";
import tourInternationalImg from "@/assets/download (29).jpg";

// Hotel gallery
import hotel1Img from "@/assets/24 Small Guest Room Ideas for Compact Comfort and___.jpg";
import hotel2Img from "@/assets/Borges 2129 I by depptö.jpg";
import hotel3Img from "@/assets/Best Hotel Room in Jaipur.jpg";
import hotel4Img from "@/assets/Akasha Beach Hotel.jpg";

// Full-width banner
import fullWidthBannerImg from "@/assets/Travellife - Kolkata.jpg";

// Stats section lifestyle photo
import statsLifestyleImg from "@/assets/download (29).jpg";

// Key features composite
import featuresPlaneImg from "@/assets/Hatim Turs.jpg";
import featuresAdventureImg from "@/assets/Explore travel adventures with a suitcase and airplane over a vibrant location ___.jpg";

// Trust section
import trustTravelImg from "@/assets/Obtenez le meilleur prix pour votre assurance voyage avec cet outil.jpg";

import { site, travelServices, tourServices } from "@/lib/site";

const title = `${site.name} | Travel & Tour Services, ${site.cityRegion}`;
const description =
  `Visa processing, flight bookings, hotel reservations, tour packages, group tours, and custom itineraries from ${site.name}.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

/* PLACEHOLDER DATA — replace with real figures before launch. */
const stats = [
  { value: "1000+", label: "Happy travelers" },
  { value: "50+", label: "Destinations covered" },
  { value: "100+", label: "Tours hosted" },
  { value: "5+", label: "Years in operation" },
];

const testimonials = [
  {
    division: "Travel",
    quote:
      "They handled my visa file from start to finish and told me exactly what to bring to the appointment. No guesswork, no wasted trips.",
    name: "Client name",
    role: "Yola",
  },
  {
    division: "Tours",
    quote:
      "We booked a family tour to Dubai through them. Every detail was taken care of — flights, hotel, activities, and a dedicated contact person throughout the trip.",
    name: "Client name",
    role: "Family traveler",
  },
  {
    division: "Travel",
    quote:
      "Flights, hotel and transfers for a team of eight, all arranged in one conversation. Costs were itemized before we committed.",
    name: "Client name",
    role: "Corporate client",
  },
];

const travelSteps = [
  {
    number: 1,
    title: "Tell us your destination",
    description: "Call, WhatsApp, or fill our form with your travel dates, destination, and what you need — visa, flights, hotels, or a complete package.",
  },
  {
    number: 2,
    title: "We handle the details",
    description: "We provide a clear checklist of documents needed, book appointments, secure the best flight and hotel rates, and keep you updated at every stage.",
  },
  {
    number: 3,
    title: "You travel with confidence",
    description: "Receive your visa, confirmed tickets, and accommodation details — everything documented and ready. We're available by phone while you travel.",
  },
];

const tourSteps = [
  {
    number: 1,
    title: "Choose your adventure",
    description: "Browse our tour packages or tell us your dream destination. We'll match you with the perfect itinerary — domestic weekend getaway or international adventure.",
  },
  {
    number: 2,
    title: "We plan every detail",
    description: "Flights, accommodation, transfers, activities, and meals — all coordinated and confirmed. You receive a complete itinerary with vouchers, contacts, and timing.",
  },
  {
    number: 3,
    title: "You experience, we support",
    description: "Travel with confidence knowing our team is available 24/7 during your trip. Airport pickups, tour guides, and on-ground support — all handled.",
  },
];

const faqs = [
  {
    question: "How long does visa processing typically take?",
    answer: "Timelines vary by destination and visa type. UK visitor visas typically take 3 weeks from complete application to decision; Schengen visas average 15 working days. We provide destination-specific timelines when you enquire, help you gather documents efficiently, and track your application throughout. Rush processing is available for some destinations at an additional cost.",
  },
  {
    question: "How does your procurement pricing work?",
    answer: "We provide itemised quotes showing: cost of goods, logistics and clearing fees, and our service margin — no hidden costs. For one-off purchases, payment terms are agreed upfront. For recurring supply contracts, we can structure milestone payments or credit terms based on your business relationship. Every transaction is backed by a purchase order and delivery documentation.",
  },
  {
    question: "What documents do I need to apply for a visa?",
    answer: "Requirements vary by destination, but commonly: valid passport (6+ months validity), recent passport photos, proof of funds, travel itinerary, accommodation confirmation, and invitation or sponsorship letter if applicable. When you contact us, we provide a tailored checklist for your specific destination and visa category, so you know exactly what to prepare.",
  },
  {
    question: "Can you source goods outside of oil and gas?",
    answer: "Yes. While oil and gas trade is a specialty, we source across sectors: building materials, agricultural produce, equipment, consumables, and general wholesale goods. Our procurement process is the same — we verify the supplier, negotiate terms, coordinate delivery, and manage documentation regardless of product category.",
  },
  {
    question: "How quickly do you respond to enquiries?",
    answer: "We aim to respond to all enquiries within 24 hours on business days, typically sooner. For urgent travel (tight visa deadlines) or time-sensitive procurement, call or WhatsApp us directly on any of our three lines and we'll prioritise your request. Our office is open Monday–Friday 8 AM–6 PM, Saturday 9 AM–4 PM.",
  },
  {
    question: "Do you arrange travel for groups or corporate teams?",
    answer: "Absolutely. We handle group travel for corporate retreats, pilgrimages, family reunions, and tour groups. Volume bookings often unlock better rates for flights and accommodation. We coordinate the full itinerary, manage individual visa files if needed, and provide a single point of contact for the whole group.",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    body: `Registered Nigerian company (RC ${site.rcNumber}) with verifiable credentials and contract-ready documentation for both travel and tour operations.`,
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    body: "Multi-channel accessibility — phone, WhatsApp, email — with real people who know your booking and respond within 24 hours. Available during your trip.",
  },
  {
    icon: Workflow,
    title: "Transparent Documentation",
    body: "Every booking backed by clear paperwork: visa checklists, flight confirmations, hotel vouchers, tour itineraries. Nothing left to memory.",
  },
  {
    icon: Building2,
    title: "Verified Partnerships",
    body: "Vetted hotels, airlines, tour operators, and local guides. We verify partners before you commit, ensuring quality and reliability.",
  },
];

const featuredHotels = [
  {
    image: hotel1Img,
    title: "Comfort Stays",
    description: "Cozy accommodations for budget-conscious travelers",
  },
  {
    image: hotel2Img,
    title: "Business Suites",
    description: "Professional environments for corporate travelers",
  },
  {
    image: hotel3Img,
    title: "Premium Rooms",
    description: "Luxury options for discerning guests",
  },
  {
    image: hotel4Img,
    title: "Beachfront Escapes",
    description: "Seaside getaways and resort destinations",
  },
];

const tourGallery = [
  {
    image: tourGroupImg1,
    title: "Group Tours",
    description: "Organized group departures with friends and social clubs",
  },
  {
    image: tourFamilyImg,
    title: "Family Escapes",
    description: "Multi-generational family packages and leisure trips",
  },
  {
    image: tourAirportImg,
    title: "Seamless Arrivals",
    description: "Airport transfers and on-ground coordination",
  },
  {
    image: tourInternationalImg,
    title: "International Adventures",
    description: "Guided tours across continents and cultures",
  },
];

const categoryCards = [
  {
    image: bentoTravelCoupleImg,
    title: "Travel Services",
    subtitle: "Visas & Flights",
    link: "/travel" as const,
  },
  {
    image: bentoTourGroupImg,
    title: "Tour Packages",
    subtitle: "Curated Itineraries",
    link: "/tours" as const,
    hash: "tour-packages" as const,
  },
  {
    image: tourFamilyImg,
    title: "Family Tours",
    subtitle: "Leisure & Adventure",
    link: "/tours" as const,
    hash: "family-leisure" as const,
  },
  {
    image: tourGroupImg1,
    title: "Group Tours",
    subtitle: "Friends & Retreats",
    link: "/tours" as const,
    hash: "group-tours" as const,
  },
];

function Index() {
  const [activeJourney, setActiveJourney] = useState<"travel" | "tour">("travel");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = activeJourney === "travel" ? travelSteps : tourSteps;

  return (
    <>
      {/* Hero with Floating Collage */}
      <section className="gradient-mesh noise-texture relative isolate overflow-hidden bg-primary-deep py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-deep via-primary to-primary-deep/90" />
        
        <div className="container-page relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="animate-fade-up stagger-1 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                RC {site.rcNumber} · Jimeta-Yola, Adamawa
              </p>
              <h1 className="animate-fade-up stagger-2 mt-4 text-4xl font-extrabold leading-tight text-primary-foreground sm:text-6xl">
                Your trusted partner in{" "}
                <span className="text-accent">travel</span> and{" "}
                <span className="text-accent">tours</span>
              </h1>
              <p className="animate-fade-up stagger-3 mt-5 text-lg leading-relaxed text-primary-foreground/80">
                Whether you need a visa processed, a flight booked, or a complete tour package designed — we handle the complexity so you can focus on the journey. Individual travelers, families, and groups welcome.
              </p>
              <div className="animate-fade-up stagger-4 mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/travel"
                  className="btn-interactive inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground"
                >
                  <Plane className="h-4 w-4" /> Explore Travel Services
                </Link>
                <Link
                  to="/tours"
                  className="btn-interactive inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Ship className="h-4 w-4" /> Explore Tour Services
                </Link>
              </div>
            </div>

            {/* Floating Collage */}
            <div className="relative hidden lg:block">
              <div className="animate-float-slow relative">
                <img
                  src={heroLuggageImg}
                  alt="Travel essentials"
                  loading="eager"
                  className="h-72 w-full rounded-3xl object-cover shadow-elevated"
                />
              </div>
              <div className="animate-float-delayed absolute -bottom-8 -left-12 w-64">
                <img
                  src={heroPassportImg}
                  alt="Passport and boarding pass"
                  loading="eager"
                  className="h-56 w-full rounded-2xl object-cover shadow-elevated"
                />
              </div>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -bottom-12 left-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Discover What We Do - Bento Grid */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                Discover what we do
              </h2>
              <p className="mt-3 text-muted-foreground">
                Two divisions, one commitment: getting you where you need to be, and creating memories along the way
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Travel - Flight Bookings */}
            <AnimatedSection animation="scale" delay={0}>
              <Link
                to="/travel"
                hash="flight-bookings"
                className="card-interactive group relative overflow-hidden rounded-3xl"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={bentoTravelCoupleImg}
                    alt="Travel services"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                      Travel
                    </span>
                    <h3 className="mt-3 text-xl font-bold">Flight Bookings</h3>
                    <p className="mt-1 text-sm text-primary-foreground/80">
                      Domestic & international reservations
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Travel - Visa Processing */}
            <AnimatedSection animation="scale" delay={100}>
              <Link
                to="/travel"
                hash="visa-processing"
                className="card-interactive group relative overflow-hidden rounded-3xl"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={bentoTravelLuggageImg}
                    alt="Travel services"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                      Travel
                    </span>
                    <h3 className="mt-3 text-xl font-bold">Visa Processing</h3>
                    <p className="mt-1 text-sm text-primary-foreground/80">
                      End-to-end application support
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Tour - Group Tours */}
            <AnimatedSection animation="scale" delay={200}>
              <Link
                to="/tours"
                hash="group-tours"
                className="card-interactive group relative overflow-hidden rounded-3xl"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={bentoTourGroupImg}
                    alt="Group tour services"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                      Tours
                    </span>
                    <h3 className="mt-3 text-xl font-bold">Group Tours</h3>
                    <p className="mt-1 text-sm text-primary-foreground/80">
                      Organized group travel experiences
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Tour - Family Packages */}
            <AnimatedSection animation="scale" delay={300}>
              <Link
                to="/tours"
                hash="family-leisure"
                className="card-interactive group relative overflow-hidden rounded-3xl"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={bentoTourFamilyImg}
                    alt="Family tour packages"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                      Tours
                    </span>
                    <h3 className="mt-3 text-xl font-bold">Family Packages</h3>
                    <p className="mt-1 text-sm text-primary-foreground/80">
                      Leisure trips for all ages
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Hotel Partners - Travel Division Spotlight */}
      <section className="border-y border-border bg-secondary/40 py-16 sm:py-20">
        <div className="container-page">
          <AnimatedSection animation="fade-up">
            <div className="flex items-end justify-between">
              <div>
                <span className="inline-block rounded-full bg-accent-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                  Travel Division
                </span>
                <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
                  Featured Hotel Partners
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  From budget-friendly comfort to premium beachfront stays — we book you into vetted accommodations across your destination
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredHotels.map((hotel, i) => (
              <AnimatedSection
                key={hotel.title}
                animation="scale"
                delay={i * 100}
              >
                <Link
                  to="/travel"
                  hash="hotel-reservations"
                  className="card-interactive group block overflow-hidden rounded-2xl border border-border bg-card shadow-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={hotel.image}
                      alt="Hotel accommodation"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-primary">{hotel.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {hotel.description}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Memorable Tours - Tour Division Spotlight */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <AnimatedSection animation="fade-up">
            <div className="flex items-end justify-between">
              <div>
                <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
                  Tour Division
                </span>
                <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
                  Memorable Tours
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Group adventures, family escapes, international journeys — we design and coordinate tours that create lasting memories across destinations
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tourGallery.map((item, i) => (
              <AnimatedSection
                key={item.title}
                animation="scale"
                delay={i * 100}
              >
                <Link
                  to="/tours"
                  className="card-interactive group block overflow-hidden rounded-2xl border border-border bg-card shadow-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt="Tour experience"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Banner - Bridging Air & Sea */}
      <section className="relative isolate overflow-hidden">
        <img
          src={fullWidthBannerImg}
          alt="Global logistics"
          loading="lazy"
          className="h-96 w-full object-cover lg:h-[32rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/80 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-page">
            <AnimatedSection animation="fade-up">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-5xl">
                  Explore the world with confidence
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">
                  From visa processing to complete tour packages — one team coordinates your entire travel experience. Individual trips, family vacations, and group adventures all managed with the same attention to detail.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/quote"
                    className="btn-interactive inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground"
                  >
                    Request a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/about"
                    className="btn-interactive inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-6 py-3.5 text-sm font-bold text-primary-foreground hover:border-accent"
                  >
                    Learn Our Story
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* We Help You Get There - Stats with Lifestyle Photo */}
      <section className="gradient-mesh py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <AnimatedSection animation="fade-up">
              <div>
                <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                  We help you get there
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Whether "there" is a business meeting in London or a container landing in Lagos — we've built the systems, partnerships, and expertise to make it happen reliably.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  {stats.map((stat, i) => (
                    <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                      <p className="font-display text-4xl font-extrabold text-accent">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={200}>
              <div className="relative">
                <img
                  src={statsLifestyleImg}
                  alt="Satisfied travelers"
                  loading="lazy"
                  className="h-full w-full rounded-3xl object-cover shadow-elevated"
                />
                <div className="absolute -bottom-6 -left-6 -right-6 h-32 bg-gradient-to-t from-background to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works - Interactive Journey */}
      <section className="border-y border-border bg-secondary/30 py-16 sm:py-20">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              How it works
            </h2>
            <p className="mt-3 text-muted-foreground">
              From first contact to completion — here's what to expect when you work with us
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex gap-2 rounded-full border border-border bg-card p-1.5 shadow-card">
              <button
                onClick={() => setActiveJourney("travel")}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  activeJourney === "travel"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                <Plane className="h-4 w-4" /> Travel Journey
              </button>
              <button
                onClick={() => setActiveJourney("tour")}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  activeJourney === "tour"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                <Ship className="h-4 w-4" /> Tour Journey
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent font-display text-2xl font-extrabold text-accent-foreground">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {step.number < 3 && (
                  <div className="absolute left-1/2 top-7 hidden w-full md:block">
                    <ArrowRight className="ml-8 h-5 w-5 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features with Composite Images */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                Travel & tour expertise combined
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-bold text-primary">Documentation discipline</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Visa applications and tour itineraries both require precise paperwork. We track timelines, manage third parties, and keep everything documented.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-bold text-primary">Logistics coordination</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Arranging a group tour uses the same project management skills as coordinating multi-destination travel with flights, transfers, and accommodations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-bold text-primary">Vendor verification</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We vet hotels, airlines, and tour operators with the same thorough approach — checking references, confirming terms in writing, and building a trusted network.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-bold text-primary">One accountable relationship</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Travelers book visas and tours together. Families plan multi-city adventures. Managing everything through one agency means one point of contact, not multiple vendors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <AnimatedSection animation="scale" delay={200}>
              <div className="relative">
                <img
                  src={featuresPlaneImg}
                  alt="Travel destinations"
                  loading="lazy"
                  className="h-96 w-full rounded-3xl object-cover shadow-elevated"
                />
                <img
                  src={featuresAdventureImg}
                  alt="Adventure travel"
                  loading="lazy"
                  className="absolute -bottom-8 -left-8 h-48 w-64 rounded-2xl object-cover shadow-elevated"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Section with Worker Photo */}
      <section className="border-y border-border bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <AnimatedSection animation="scale" delay={0}>
              <div className="relative">
                <img
                  src={trustTravelImg}
                  alt="Travel protection and insurance"
                  loading="lazy"
                  className="h-full w-full rounded-3xl object-cover shadow-elevated"
                />
              </div>
            </AnimatedSection>

            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Why clients keep coming back
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div key={point.title} className="rounded-2xl border border-primary-foreground/10 bg-primary-deep p-6">
                    <point.icon className="h-7 w-7 text-accent" />
                    <h3 className="mt-4 font-bold">{point.title}</h3>
                    <p className="mt-2 text-sm text-primary-foreground/75">
                      {point.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore by Category Strip */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <AnimatedSection animation="fade-up">
            <h2 className="text-center text-3xl font-bold text-primary sm:text-4xl">
              Explore by category
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categoryCards.map((card, i) => (
              <AnimatedSection key={card.title} animation="scale" delay={i * 100}>
                <Link
                  to={card.link}
                  {...(card.hash ? { hash: card.hash } : {})}
                  className="card-interactive group block overflow-hidden rounded-2xl border border-border bg-card shadow-card"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent">
                        {card.subtitle}
                      </p>
                      <h3 className="mt-1 text-lg font-bold">{card.title}</h3>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-secondary/50 py-16 sm:py-20">
        <div className="container-page">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">What clients say</h2>
          </AnimatedSection>
          
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection
                key={i}
                animation={i % 2 === 0 ? "slide-left" : "slide-right"}
                delay={i * 100}
              >
                <figure className="card-interactive flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="flex items-center justify-between">
                    <Quote className="h-6 w-6 text-accent" />
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                      {t.division}
                    </span>
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                    <span className="font-bold text-primary">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </figcaption>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Common questions
            </h2>
            <p className="mt-3 text-muted-foreground">
              Quick answers to questions we hear most often
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-secondary/50"
                >
                  <span className="font-bold text-primary">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-accent transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="border-t border-border bg-secondary/30 px-5 py-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't see your question?{" "}
            <Link to="/contact" className="font-bold text-accent-foreground underline underline-offset-4">
              Contact us
            </Link>{" "}
            and we'll give you a specific answer.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary-deep py-16">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-3 max-w-xl text-primary-foreground/75">
              Send us the details of your trip or your supply requirement and we will come back with
              costs and timelines.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/quote"
              className="btn-interactive inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-interactive inline-flex items-center justify-center rounded-full border-2 border-primary-foreground/30 px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
