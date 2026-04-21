import { Metadata } from "next";
import Hero from "@/components/Hero";
import LocationCard from "@/components/LocationCard";
import { getPrimaryLocations, getSecondaryLocations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Areas Served | Act of Class Moving & Storage",
  description:
    "Act of Class Moving & Storage proudly serves Fort Myers, Cape Coral, Naples, Estero, Bonita Springs, and communities throughout Lee County and Collier County in Southwest Florida.",
};

export default function AreasServedPage() {
  const primary = getPrimaryLocations();
  const secondary = getSecondaryLocations();

  return (
    <>
      <Hero
        title="Areas We Serve in Southwest Florida"
        subtitle="From Fort Myers to Naples, Cape Coral to Bonita Springs — we proudly serve communities throughout Lee County and Collier County."
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary Cities */}
          <h2 className="text-2xl font-bold text-dark mb-6">Cities We Serve</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            We provide full-service professional moving throughout Southwest Florida&apos;s major cities.
            Click any city below to learn more about our services in your area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {primary.map((loc) => (
              <LocationCard
                key={loc.slug}
                name={loc.name}
                slug={loc.slug}
                adjective={loc.adjective}
              />
            ))}
          </div>

          {/* Secondary Communities */}
          <h2 className="text-2xl font-bold text-dark mb-6">Communities We Serve</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            In addition to the major cities, we serve select communities throughout the greater Fort Myers area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {secondary.map((loc) => (
              <LocationCard
                key={loc.slug}
                name={loc.name}
                slug={loc.slug}
                adjective={loc.adjective}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
