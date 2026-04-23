import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Act of Class Moving & Storage for a free moving estimate. Call us or fill out our contact form. Serving Fort Myers and Southwest Florida.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Ready to plan your move? Get in touch for a free, no-obligation estimate."
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6 text-center">Get in Touch</h2>
          <p className="text-gray-600 mb-12 leading-relaxed text-center max-w-2xl mx-auto">
            Whether you have questions about our services, need a quote, or are ready to book your move,
            we&apos;re here to help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="text-center bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark text-lg mb-2">Phone</h3>
              <a href="tel:+12395394761" className="text-primary hover:underline text-lg">
                (239) 539-4761
              </a>
            </div>

            {/* Location */}
            <div className="text-center bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark text-lg mb-2">Location</h3>
              <p className="text-gray-600">2775 N Airport Rd #109</p>
              <p className="text-gray-600">Fort Myers, FL 33907</p>
              <p className="text-gray-500 text-sm mt-1">Southwest Florida</p>
            </div>

            {/* Business Hours */}
            <div className="text-center bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark text-lg mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon–Sat: 7 AM – 7 PM</p>
              <p className="text-gray-600">Sun: 10 AM – 4 PM</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center bg-primary/5 rounded-2xl p-10 border border-primary/10">
            <h2 className="text-2xl font-bold text-dark mb-4">Get Your Free Estimate</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Ready to get started? Book your free, no-obligation moving estimate online in just a few minutes.
            </p>
            <Link
              href="/book-online"
              className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-primary/90 transition-colors"
            >
              Get Your Free Estimate
            </Link>
          </div>

          {/* Google Map */}
          <div className="mt-12 rounded-xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCWEkCFDamQ_QuMIR1TYqOyEwGfuj63mK8&q=2775+N+Airport+Rd+%23109,+Fort+Myers,+FL+33907"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Act of Class Moving & Storage Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
