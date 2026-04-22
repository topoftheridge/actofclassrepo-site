import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import LocationCard from "@/components/LocationCard";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Areas Served | Act of Class Moving & Storage",
  description:
    "Act of Class Moving & Storage proudly serves Fort Myers, Cape Coral, Naples, Estero, Bonita Springs, and communities throughout Lee County and Collier County in Southwest Florida.",
};

/** Featured communities shown on the main areas-served page with anchor links */
const featuredCommunities = [
  { name: "Villas", citySlug: "fort-myers", anchor: "villas" },
  { name: "Cypress Lake", citySlug: "fort-myers", anchor: "cypress-lake" },
  { name: "Harlem Heights", citySlug: "fort-myers", anchor: "harlem-heights" },
  { name: "Pelican", citySlug: "cape-coral", anchor: "pelican" },
  { name: "Burnt Store", citySlug: "cape-coral", anchor: "burnt-store" },
  { name: "Trafalgar", citySlug: "cape-coral", anchor: "trafalgar" },
  { name: "Bonita Bay", citySlug: "bonita-springs", anchor: "bonita-bay" },
  { name: "Spanish Wells", citySlug: "bonita-springs", anchor: "spanish-wells" },
  { name: "Pelican Landing", citySlug: "bonita-springs", anchor: "pelican-landing" },
  { name: "Bella Terra", citySlug: "estero", anchor: "bella-terra" },
  { name: "The Brooks", citySlug: "estero", anchor: "the-brooks" },
  { name: "Grandezza", citySlug: "estero", anchor: "grandezza" },
  { name: "Golden Gate", citySlug: "naples", anchor: "golden-gate" },
  { name: "Park Shore", citySlug: "naples", anchor: "park-shore" },
  { name: "East Naples", citySlug: "naples", anchor: "east-naples" },
];

export default function AreasServedPage() {
  return (
    <>
      <Hero
        title="Areas We Serve in Southwest Florida"
        subtitle="From Fort Myers to Naples, Cape Coral to Bonita Springs — we proudly serve communities throughout Lee County and Collier County."
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cities */}
          <h2 className="text-2xl font-bold text-dark mb-6">Cities We Serve</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            We provide full-service professional moving throughout Southwest Florida&apos;s major cities.
            Click any city below to learn more about our services in your area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {locations.map((loc) => (
              <LocationCard
                key={loc.slug}
                name={loc.name}
                slug={loc.slug}
                adjective={loc.adjective}
              />
            ))}
          </div>

          {/* Communities & Areas */}
          <h2 className="text-2xl font-bold text-dark mb-6">
            Communities &amp; Areas We Serve
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            In addition to the major cities we serve, we also provide moving services in select
            communities and neighborhoods throughout Southwest Florida.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {featuredCommunities.map((c) => (
              <LocationCard
                key={`${c.citySlug}-${c.anchor}`}
                name={c.name}
                slug={`${c.citySlug}#${c.anchor}`}
                adjective=""
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
