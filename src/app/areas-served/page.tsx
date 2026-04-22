import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import LocationCard from "@/components/LocationCard";
import { locations, cityNeighborhoods } from "@/data/locations";

export const metadata: Metadata = {
  title: "Areas Served | Act of Class Moving & Storage",
  description:
    "Act of Class Moving & Storage proudly serves Fort Myers, Cape Coral, Naples, Estero, Bonita Springs, and communities throughout Lee County and Collier County in Southwest Florida.",
};

export default function AreasServedPage() {
  // Build a flat list of all neighborhoods with their parent city info
  const allNeighborhoods: Array<{
    name: string;
    anchor: string;
    citySlug: string;
    cityName: string;
  }> = [];

  for (const loc of locations) {
    const section = cityNeighborhoods[loc.slug];
    if (section) {
      for (const n of section.neighborhoods) {
        allNeighborhoods.push({
          name: n.name,
          anchor: n.anchor,
          citySlug: loc.slug,
          cityName: loc.name,
        });
      }
    }
  }

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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {allNeighborhoods.map((n) => (
              <Link
                key={`${n.citySlug}-${n.anchor}`}
                href={`/areas-served/${n.citySlug}#${n.anchor}`}
                className="text-sm text-gray-700 hover:text-primary transition py-2 px-3 rounded-lg border border-gray-100 hover:border-primary/20 hover:shadow-sm"
              >
                <span className="font-medium">{n.name}</span>
                <span className="block text-xs text-gray-400 mt-0.5">{n.cityName}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
