import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import {
  locations,
  getLocation,
  getLocationSlugs,
  getPrimaryLocations,
  getSecondaryLocations,
  cityNeighborhoods,
} from "@/data/locations";
import { services } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: `${location.adjective} Movers in ${location.name}, FL | Act of Class Moving`,
    description: `${location.adjective} movers in ${location.name}, FL. Act of Class Moving & Storage offers professional moving services with 20+ years of experience. Free estimates — call (239) 539-4761.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const isSecondary = location.tier === "secondary";
  const neighborhoodSection = cityNeighborhoods[location.slug];

  // Build "Other Areas" links — show primary cities first, then secondary
  const primaryLocations = getPrimaryLocations().filter((l) => l.slug !== slug);
  const secondaryLocations = getSecondaryLocations().filter((l) => l.slug !== slug);

  return (
    <>
      <Hero
        title={`${location.adjective} Movers in ${location.name}, FL`}
        subtitle={location.description}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Secondary pages: reference Fort Myers in intro */}
              {isSecondary && location.parentCity && (
                <p className="text-gray-600 mb-8 text-lg">
                  {location.name} is located in the greater{" "}
                  <Link
                    href={`/areas-served/${location.parentCity}`}
                    className="text-primary font-semibold hover:underline"
                  >
                    Fort Myers
                  </Link>{" "}
                  area. Our team has been proudly serving this community for over 20 years.
                </p>
              )}

              <h2 className="text-2xl font-bold text-dark mb-6">
                Why Choose Act of Class for Your {location.name} Move?
              </h2>
              <div className="space-y-4 mb-12">
                {location.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span className="text-gray-700">{h}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-dark mb-4">
                Moving Services in {location.name}
              </h2>
              <p className="text-gray-600 mb-6">
                As a full-service moving company with over 20 years of experience, we offer comprehensive
                moving solutions for {location.name} residents. Whether you&apos;re moving across the street
                or across the state, our trained professional crews handle every detail.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-100 hover:border-primary/20 hover:shadow-sm transition"
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <p className="font-semibold text-dark">
                        {s.name} in {location.name}
                      </p>
                      <p className="text-xs text-gray-500">Learn more →</p>
                    </div>
                  </Link>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-dark mb-4">
                About {location.name}, FL
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {location.aboutCommunity}
              </p>

              {location.zipCodes && location.zipCodes.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-dark mb-2">Zip Codes Served</h3>
                  <p className="text-gray-600">{location.zipCodes.join(", ")}</p>
                </div>
              )}

              {/* Neighborhoods / sub-areas section for primary cities */}
              {neighborhoodSection && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-dark mb-4">
                    {neighborhoodSection.heading}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {neighborhoodSection.intro}
                  </p>
                  <div className="space-y-4">
                    {neighborhoodSection.neighborhoods.map((n) => (
                      <div
                        key={n.name}
                        className="p-4 rounded-lg bg-gray-50 border border-gray-100"
                      >
                        <h3 className="font-semibold text-dark mb-1">{n.name}</h3>
                        <p className="text-gray-600 text-sm">{n.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Areas We Serve */}
              <h2 className="text-2xl font-bold text-dark mb-4">
                Other Areas We Serve
              </h2>
              <div className="mb-3">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Cities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {primaryLocations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/areas-served/${loc.slug}`}
                      className="text-sm text-gray-700 hover:text-primary font-medium transition py-1"
                    >
                      {loc.name}, FL →
                    </Link>
                  ))}
                </div>
              </div>
              {secondaryLocations.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Communities
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {secondaryLocations.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/areas-served/${loc.slug}`}
                        className="text-sm text-gray-600 hover:text-primary transition py-1"
                      >
                        {loc.name}, FL →
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-4">
                <Link
                  href="/areas-served"
                  className="text-sm text-primary font-semibold hover:underline"
                >
                  View All Areas →
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-dark text-lg mb-4">
                    Free Estimate for Your {location.name} Move
                  </h3>
                  <ContactForm compact />
                </div>

                <div className="bg-primary rounded-xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Ready to Move?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Call us today for a free, no-obligation estimate.
                  </p>
                  <a
                    href="tel:+12395394761"
                    className="block text-center bg-accent text-dark font-bold py-3 rounded-lg hover:bg-accent-light transition"
                  >
                    📞 (239) 539-4761
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
