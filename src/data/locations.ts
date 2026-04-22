export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface Location {
  slug: string;
  name: string;
  adjective: string;
  description: string;
  highlights: string[];
  aboutCommunity: string;
  zipCodes: string[];
  /** One-liner about the zip codes / service area */
  zipCodesBlurb: string;
  faqs?: LocationFAQ[];
}

/** Neighborhoods/sub-areas listed inside city pages (no standalone pages) */
export interface Neighborhood {
  name: string;
  /** URL-safe anchor id, e.g. "villas" → /areas-served/fort-myers#villas */
  anchor: string;
  description: string;
}

/** Map of city slug → section heading + neighborhoods */
export interface CityNeighborhoodSection {
  heading: string;
  intro: string;
  neighborhoods: Neighborhood[];
}

export const cityNeighborhoods: Record<string, CityNeighborhoodSection> = {
  "fort-myers": {
    heading: "Neighborhoods We Serve in Fort Myers",
    intro:
      "Our team knows Fort Myers inside and out. Here are some of the many neighborhoods and communities where we provide professional moving services:",
    neighborhoods: [
      { name: "Villas", anchor: "villas", description: "An affordable, quiet neighborhood where people know their neighbors. With easy beach and grocery access, it offers single-family homes and townhouses with a real community vibe." },
      { name: "Cypress Lake", anchor: "cypress-lake", description: "A census-designated place known for mature landscaping, established homes, and a convenient location near US-41 with easy access to shopping, dining, and Gulf Coast beaches." },
      { name: "Harlem Heights", anchor: "harlem-heights", description: "A small, tight-knit community south of Fort Myers proper with a long history and quieter residential character, close to major roads." },
      { name: "Allen Park", anchor: "allen-park", description: "A solid residential area with a real neighborhood feel, decent schools, parks, and shopping access. Families appreciate its affordability and quiet atmosphere." },
      { name: "Reflection Lakes", anchor: "reflection-lakes", description: "A family-friendly gated community with good schools, nice amenities, and walking trails around scenic lakes." },
      { name: "Venetian Village", anchor: "venetian-village", description: "Known for canal-front properties and a laid-back atmosphere near McGregor Boulevard, offering a mix of older Florida homes and updated properties with water access." },
      { name: "Reflection Isles", anchor: "reflection-isles", description: "A gated community near Alico Road featuring lakefront homes, resort-style amenities, and a family-friendly atmosphere close to Gulf Coast Town Center." },
      { name: "Pine Manor", anchor: "pine-manor", description: "A census-designated community east of Fort Myers with a diverse population, appreciated for its affordability and accessibility to schools, shopping, and services." },
      { name: "Whiskey Creek", anchor: "whiskey-creek", description: "An established community with a golf course running through it, mature trees, and homes where people stay for decades along the US-41 corridor." },
      { name: "Heritage Palms", anchor: "heritage-palms", description: "A country club community with golf courses, well-kept homes, and a relaxed vibe that attracts families and retirees." },
      { name: "Sail Harbour", anchor: "sail-harbour", description: "A waterfront community offering boat access and a friendly neighborhood feel, close to downtown Fort Myers." },
      { name: "The Forum", anchor: "the-forum", description: "A well-established area known for proximity to major shopping and easy I-75 access, popular with professionals, families, and retirees." },
      { name: "Westwood", anchor: "westwood", description: "A laid-back suburban neighborhood close to everything you need but removed from the noise. Great for families, retirees, and working professionals." },
      { name: "Omni", anchor: "omni", description: "A small residential community with a quiet neighborhood feel, close to major roads and shopping while maintaining off-the-beaten-path charm." },
      { name: "Portofino Springs", anchor: "portofino-springs", description: "A gated neighborhood near Daniels Parkway with Mediterranean-style homes, quick I-75 access, and close proximity to shopping and the airport." },
      { name: "Highland Pines", anchor: "highland-pines", description: "A residential neighborhood offering families room to breathe with nearby schools, shopping, and parks in a relaxed suburban setting." },
      { name: "McGregor", anchor: "mcgregor", description: "Famous for its gorgeous palm-lined boulevard with history and charm, offering a mix of older homes and newer builds close to downtown and the beaches." },
      { name: "Page Park", anchor: "page-park", description: "A small census-designated community near Page Field, about four miles south of downtown Fort Myers with easy access to Sanibel and Estero Island beaches." },
      { name: "Palm Lee Park", anchor: "palm-lee-park", description: "A smaller community offering a quieter pace with easy access to shopping and main roads — practical, unpretentious, and comfortable." },
      { name: "Paseo", anchor: "paseo", description: "A quiet neighborhood with space, decent schools, nearby shopping, and parks. Suburban without feeling isolated — practical and family-friendly." },
    ],
  },
  "cape-coral": {
    heading: "Areas We Serve Throughout Cape Coral",
    intro:
      "Cape Coral is a big city with distinct areas, and we've moved families across all of them. Whether you're in a waterfront home off Pelican or a new build in the Northwest Cape, our crews know the terrain.",
    neighborhoods: [
      { name: "Pelican", anchor: "pelican", description: "One of Cape Coral's most desirable areas with canal-front homes, Gulf access, and a relaxed waterfront lifestyle along the Caloosahatchee." },
      { name: "Burnt Store", anchor: "burnt-store", description: "The northern corridor featuring newer construction, large lots, and communities like Burnt Store Marina with direct Gulf access." },
      { name: "Trafalgar", anchor: "trafalgar", description: "A well-established area in the heart of Cape Coral with mature neighborhoods, good schools, and easy access to shopping along Del Prado." },
      { name: "Yacht Club", anchor: "yacht-club", description: "A landmark area centered around the Yacht Club Community Park, featuring older Florida homes, a public beach, and a strong neighborhood identity." },
      { name: "Southwest Cape", anchor: "southwest-cape", description: "Premium real estate with deep-water canal access and sailboat access to the Gulf. Home to some of the most sought-after waterfront properties." },
      { name: "Northwest Cape", anchor: "northwest-cape", description: "Cape Coral's fastest-growing area with new developments, larger homesites, and expanding infrastructure. Popular with families building new." },
    ],
  },
  "bonita-springs": {
    heading: "Areas We Serve in Bonita Springs",
    intro:
      "Bonita Springs has a mix of luxury gated communities and established neighborhoods, and we've been moving families through all of them for over two decades.",
    neighborhoods: [
      { name: "Bonita Bay", anchor: "bonita-bay", description: "A premier gated community featuring championship golf, a private beach park, and a mix of single-family homes and high-rise condos along Estero Bay." },
      { name: "Spanish Wells", anchor: "spanish-wells", description: "A well-established gated golf community with a country club atmosphere, mature landscaping, and a tight-knit residential feel off US-41." },
      { name: "Pelican Landing", anchor: "pelican-landing", description: "A large gated community with canoe and kayak trails, a private beach island, and a range of homes from condos to estate properties." },
      { name: "Imperial Shores", anchor: "imperial-shores", description: "Waterfront living along the Imperial River with dock access, older Florida charm, and a quieter pace just minutes from downtown Bonita." },
      { name: "Spring Creek", anchor: "spring-creek", description: "A residential area in eastern Bonita Springs offering newer homes, family-friendly neighborhoods, and convenient access to I-75 and local shopping." },
    ],
  },
  "estero": {
    heading: "Communities We Serve in Estero",
    intro:
      "Estero is packed with well-planned communities, and our crews have moved families into and out of most of them. We know the gate codes, the loading zones, and the best routes.",
    neighborhoods: [
      { name: "Coconut Point Area", anchor: "coconut-point", description: "The commercial and residential hub centered around Coconut Point Mall, with nearby condos, townhomes, and single-family communities." },
      { name: "Bella Terra", anchor: "bella-terra", description: "A gated community off Corkscrew Road with Mediterranean-inspired homes, resort-style amenities, and a family-friendly atmosphere." },
      { name: "The Brooks", anchor: "the-brooks", description: "One of Estero's premier communities featuring multiple neighborhoods, a nature preserve, championship golf, and a range of home styles." },
      { name: "Grandezza", anchor: "grandezza", description: "A bundled golf community with well-maintained homes, a beautiful clubhouse, and a welcoming atmosphere for active adults and families." },
      { name: "Corkscrew Corridor", anchor: "corkscrew-corridor", description: "The eastern stretch along Corkscrew Road, home to newer developments, open spaces, and growing residential communities near FGCU." },
    ],
  },
  "naples": {
    heading: "Neighborhoods We Serve in Naples",
    intro:
      "Naples is a city of distinct neighborhoods, each with its own character. Our team handles moves across all of them with the care and professionalism Naples residents expect.",
    neighborhoods: [
      { name: "North Naples", anchor: "north-naples", description: "A thriving area anchored by Mercato and Vanderbilt Beach, featuring newer communities, upscale shopping, and easy access to pristine Gulf beaches." },
      { name: "Golden Gate", anchor: "golden-gate", description: "One of Naples' largest residential areas offering affordable homes, established neighborhoods, and a strong community feel east of downtown." },
      { name: "Park Shore", anchor: "park-shore", description: "An upscale neighborhood bordering Venetian Bay with waterfront condos, luxury single-family homes, and walkable access to the Village Shops." },
      { name: "Pelican Bay", anchor: "pelican-bay", description: "A prestigious gated community with private beach access, a nature preserve, and a mix of high-rises and single-family homes in a resort-like setting." },
      { name: "Old Naples", anchor: "old-naples", description: "The historic heart of the city with charming cottages, luxury estates, and walkable access to Fifth Avenue South, Third Street, and the Naples Pier." },
      { name: "East Naples", anchor: "east-naples", description: "A diverse residential area with affordable options, established communities, and proximity to Bayview Park, the Botanical Garden, and Collier Boulevard shopping." },
    ],
  },
};

/** Helper: get all neighborhoods across all cities as a flat list with their parent city slug */
export function getAllNeighborhoods(): Array<Neighborhood & { citySlug: string; cityName: string }> {
  const result: Array<Neighborhood & { citySlug: string; cityName: string }> = [];
  for (const loc of locations) {
    const section = cityNeighborhoods[loc.slug];
    if (section) {
      for (const n of section.neighborhoods) {
        result.push({ ...n, citySlug: loc.slug, cityName: loc.name });
      }
    }
  }
  return result;
}

export const locations: Location[] = [
  {
    slug: "fort-myers",
    name: "Fort Myers",
    adjective: "Trusted",
    description:
      "As Fort Myers' premier moving company, we know this city inside and out. From the historic River District to quiet suburban streets, our team navigates every corner of Fort Myers with confidence and care.",
    highlights: [
      "Over 20 years serving Fort Myers families",
      "Deep knowledge of local neighborhoods and traffic patterns",
      "Same-day moving available",
      "40,000 sq ft climate-controlled storage",
    ],
    aboutCommunity:
      "Fort Myers is the heart of Southwest Florida, known for its beautiful riverfront, historic downtown, and strong sense of community. From the Edison & Ford Winter Estates to the vibrant River District, the city offers a mix of history, culture, and modern growth. With its year-round warm weather, expanding neighborhoods, and proximity to beaches, Fort Myers continues to attract families, retirees, and professionals alike. Whether you're moving within the city or relocating to the area, demand for reliable moving services remains strong throughout Fort Myers.",
    zipCodes: ["33901", "33905", "33907", "33908", "33912", "33919"],
    zipCodesBlurb:
      "We provide full-service moving throughout Fort Myers and surrounding areas, including 33901, 33905, 33907, 33908, 33912, and 33919.",
    faqs: [
      {
        question: "How much does it cost to hire movers in Fort Myers?",
        answer:
          "Moving costs can vary depending on the size of your move, distance, and the services you need. Every move is different, so we recommend requesting a free estimate to get accurate pricing based on your specific situation.",
      },
      {
        question: "How far in advance should I book movers in Fort Myers?",
        answer:
          "We recommend booking at least 1 to 2 weeks in advance. During busy times in Southwest Florida, especially spring and summer, availability can fill up quickly, so earlier scheduling is always a good idea.",
      },
      {
        question: "Are you familiar with Fort Myers neighborhoods and local routes?",
        answer:
          "Yes, we service all areas of Fort Myers and are familiar with major roads like McGregor Blvd, Colonial Blvd, and Summerlin Road, helping ensure efficient and well-planned moves.",
      },
      {
        question: "Do you offer packing services for moves in Fort Myers?",
        answer:
          "Yes, we offer packing services to help make your move easier. Whether you need full packing or just assistance with certain items, we can tailor the service to your needs.",
      },
      {
        question: "Can you accommodate last-minute moves in Fort Myers?",
        answer:
          "Depending on availability, we may be able to assist with last-minute or short-notice moves. We recommend reaching out as soon as possible to check scheduling.",
      },
    ],
  },
  {
    slug: "cape-coral",
    name: "Cape Coral",
    adjective: "Reliable",
    description:
      "Cape Coral's canal-lined neighborhoods and growing communities require movers who understand the area. Our crews have been serving Cape Coral residents for years, handling everything from waterfront homes to new construction moves.",
    highlights: [
      "Experienced with waterfront and canal-front properties",
      "Knowledge of Cape Coral's unique grid system",
      "Full-service packing and unpacking",
      "Specialty item handling",
    ],
    aboutCommunity:
      "Cape Coral is one of the fastest-growing cities in Florida, famous for its extensive canal system — more than 400 miles of navigable waterways. The city offers a blend of outdoor recreation, family-friendly neighborhoods, and a thriving local economy.",
    zipCodes: ["33904", "33909", "33914", "33990", "33991", "33993"],
    zipCodesBlurb:
      "Our moving services cover all of Cape Coral, including 33904, 33909, 33914, 33990, 33991, and nearby areas.",
  },
  {
    slug: "bonita-springs",
    name: "Bonita Springs",
    adjective: "Expert",
    description:
      "From luxury communities to charming neighborhoods, Bonita Springs moves require attention to detail. Our experienced team handles relocations throughout Bonita Springs with the professionalism this beautiful area deserves.",
    highlights: [
      "Experience with gated community protocols",
      "Luxury home moving expertise",
      "Knowledge of Bonita Springs neighborhoods",
      "Climate-controlled storage nearby",
    ],
    aboutCommunity:
      "Bonita Springs sits between Fort Myers and Naples, offering the best of both worlds. Known for its beautiful beaches, world-class golf courses, and upscale communities, Bonita Springs attracts families and retirees looking for the quintessential Southwest Florida lifestyle.",
    zipCodes: ["34133", "34134", "34135"],
    zipCodesBlurb:
      "We proudly serve Bonita Springs and surrounding communities, including 34133, 34134, 34135, and nearby zip codes.",
  },
  {
    slug: "estero",
    name: "Estero",
    adjective: "Reliable",
    description:
      "We've been helping people move around Estero for twenty years. From Wildcat Run to The Brooks, from Coconut Point condos to houses in Bella Terra — we know Estero inside and out.",
    highlights: [
      "Deep knowledge of Estero communities",
      "Work around seasonal traffic patterns",
      "Full-service moving and storage",
      "Licensed and insured professionals",
    ],
    aboutCommunity:
      "Estero has that sweet spot — close enough to Fort Myers for convenience but far enough for peace. With FGCU, Coconut Point, and plenty of parks, it feels like a real community, not just another Florida suburb.",
    zipCodes: ["33928", "33929"],
    zipCodesBlurb:
      "Moving services are available throughout Estero, including 33928, 33929, and surrounding areas.",
  },
  {
    slug: "naples",
    name: "Naples",
    adjective: "Premier",
    description:
      "Naples demands a higher standard, and we deliver. From luxury high-rises on the Gulf to gated estate communities, our team brings 20+ years of Southwest Florida experience to every Naples relocation.",
    highlights: [
      "Luxury and white-glove moving experience",
      "Familiar with Naples gated communities and HOA protocols",
      "Fine art, wine collection, and specialty item handling",
      "Climate-controlled storage in Southwest Florida",
    ],
    aboutCommunity:
      "Naples is one of Florida's most prestigious coastal cities, renowned for its pristine beaches, world-class dining, and upscale shopping along Fifth Avenue South and Third Street. Home to stunning communities like Pelican Bay, Grey Oaks, and Port Royal, Naples attracts discerning residents who expect nothing less than the best.",
    zipCodes: ["34102", "34103", "34105", "34108", "34109", "34119"],
    zipCodesBlurb:
      "We provide moving services across Naples, including 34102, 34103, 34105, 34108, 34109, 34119, and nearby communities.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
