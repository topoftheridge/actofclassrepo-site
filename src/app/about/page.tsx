import { Metadata } from "next";
import Hero from "@/components/Hero";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Act of Class Moving & Storage — a family-owned Fort Myers moving company with over 20 years of experience serving Southwest Florida.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Fort Myers Moving Company | Act of Class Moving & Storage"
        subtitle="Act of Class Moving & Storage is a trusted Fort Myers moving company providing residential, commercial, and storage services across Southwest Florida — delivering reliable, professional moves backed by 20+ years of experience."
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Our Story – Built in Fort Myers, Trusted Across Southwest Florida
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded in Fort Myers, Florida, Act of Class Moving &amp; Storage was built on a simple
              mission: deliver dependable, high-quality moving services that people can trust. Over the
              past 20+ years, we&apos;ve grown from a small local crew into one of the most recognized
              moving companies in Southwest Florida, serving areas including Fort Myers, Cape Coral,
              Bonita Springs, Estero, and Naples.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              As a family-owned and operated moving company, every move we complete reflects directly on
              our name. That level of accountability drives everything we do — from how we hire and train
              our crews to the care we take with every piece of furniture, every box, and every family
              heirloom.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe a service-based business is built on reputation. That&apos;s why our team is
              committed to delivering every move with professionalism, precision, and care — ensuring each
              experience truly reflects an Act of Class.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
            {[
              { number: "20+", label: "Years of Experience" },
              { number: "40,000", label: "Sq Ft of Storage" },
              { number: "1000s", label: "Families Moved" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-gray-50 rounded-xl p-6">
                <p className="text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-dark mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Integrity",
                desc: "Honest quotes, clear communication, and no surprises. What we say is what you get.",
              },
              {
                title: "Professionalism",
                desc: "Our trained crews show up on time, work efficiently, and treat your home with respect.",
              },
              {
                title: "Care",
                desc: "We handle your belongings like they're our own — because your trust means everything to us.",
              },
              {
                title: "Community",
                desc: "We're proud to serve Fort Myers and Southwest Florida. This is our home too.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>

          {/* Serving Fort Myers Section */}
          <h2 className="text-3xl font-bold text-dark mb-6">Serving Fort Myers and Surrounding Areas</h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            If you&apos;re searching for a reliable moving company in Southwest Florida, our team is ready
            to help. Whether you need a local move, long-distance relocation, or storage services, Act of
            Class Moving &amp; Storage delivers a seamless experience from start to finish.
          </p>

          {/* BBB Accredited */}
          <h2 className="text-3xl font-bold text-dark mb-6">BBB Accredited</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We&apos;re proud to be accredited by the Better Business Bureau, reflecting our commitment to
            trust, transparency, and customer satisfaction. Our accreditation is a testament to the way
            we conduct business — honestly and with integrity.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 inline-block border border-gray-100 mb-8">
            <p className="text-sm text-gray-500">BBB Accredited Business</p>
            <p className="font-semibold text-dark">Act of Class Moving & Storage LLC</p>
          </div>

          {/* Google Rating */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-6 h-6 text-yellow-400" style={{ clipPath: "inset(0 20% 0 0)" }} />
              </div>
              <div>
                <p className="font-bold text-dark text-lg">4.8 Stars on Google</p>
                <p className="text-sm text-gray-500">Based on verified customer reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
