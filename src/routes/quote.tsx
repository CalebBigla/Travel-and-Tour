import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { travelServices, tourServices, site } from "@/lib/site";

const title = `Get a Quote | ${site.name}`;
const description =
  `Request a quote for visa processing, flights, tour packages, or travel consultancy from ${site.name}.`;

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/quote" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Tell us what you need"
        subtitle="One form for both divisions. Fill it in, review the WhatsApp message and send — we will come back with requirements, timelines and pricing."
      />

      <section className="bg-secondary/50 py-16">
        <div className="container-page max-w-3xl">
          <InquiryForm
            title="Request a quote"
            intro={`Hello ${site.name}! I would like to request a quote.`}
            fields={[
              {
                name: "division",
                label: "Division",
                type: "select",
                required: true,
                options: ["Travel Services", "Tour Services"],
              },
              {
                name: "service",
                label: "Service needed",
                type: "select",
                required: true,
                options: [
                  ...travelServices.map((s) => `Travel — ${s.title}`),
                  ...tourServices.map((s) => `Tour — ${s.title}`),
                ],
              },
              { name: "name", label: "Full name", required: true },
              { name: "company", label: "Company (if applicable)" },
              { name: "phone", label: "Phone number", type: "tel", required: true },
              { name: "email", label: "Email address", type: "email" },
              { name: "timeline", label: "Preferred date / timeline", type: "date" },
              { name: "budget", label: "Budget range (optional)" },
              {
                name: "message",
                label: "What do you need?",
                type: "textarea",
                required: true,
                placeholder: "Destination, travel dates, number of travelers, or specific requirements",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
