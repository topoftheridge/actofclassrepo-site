export type LocationTier = "primary" | "secondary" | "neighborhood";

export interface Location {
  slug: string;
  name: string;
  adjective: string;
  tier: LocationTier;
  description: string;
  highlights: string[];
  aboutCommunity: string;
  zipCodes?: string[];
  parentCity?: string; // slug of parent city for secondary/neighborhood
}

/** Neighborhoods/sub-areas listed inside city pages (no standalone pages) */
export interface Neighborhood {
  name: string;
  description: string;
}

/** Map of city slug → section heading + neighborhoods */
export interface CityNeighborhoodSection {
  heading: string;
  intro: string;
  neighborhoods: Neighborhood[];
}

export const cityNeighborhoods: Record<string, CityNeighborhoodSection> = {
  "cape-coral": {
    heading: "Areas We Serve Throughout Cape Coral",
    intro:
      "Cape Coral is a big city with distinct areas, and we've moved families across all of them. Whether you're in a waterfront home off Pelican or a new build in the Northwest Cape, our crews know the terrain.",
    neighborhoods: [
      {
        name: "Pelican",
        description:
          "One of Cape Coral's most desirable areas with canal-front homes, Gulf access, and a relaxed waterfront lifestyle along the Caloosahatchee.",
      },
      {
        name: "Burnt Store",
        description:
          "The northern corridor of Cape Coral featuring newer construction, large lots, and communities like Burnt Store Marina with direct Gulf access.",
      },
      {
        name: "Trafalgar",
        description:
          "A well-established area in the heart of Cape Coral with mature neighborhoods, good schools, and easy access to shopping and dining along Del Prado.",
      },
      {
        name: "Yacht Club",
        description:
          "A Cape Coral landmark area centered around the Yacht Club Community Park, featuring older Florida homes, a public beach, and a strong neighborhood identity.",
      },
      {
        name: "Southwest Cape",
        description:
          "Premium real estate with deep-water canal access and sailboat access to the Gulf. Home to some of Cape Coral's most sought-after waterfront properties.",
      },
      {
        name: "Northwest Cape",
        description:
          "Cape Coral's fastest-growing area with new developments, larger homesites, and expanding infrastructure. A popular choice for families building new.",
      },
    ],
  },
  "bonita-springs": {
    heading: "Areas We Serve in Bonita Springs",
    intro:
      "Bonita Springs has a mix of luxury gated communities and established neighborhoods, and we've been moving families through all of them for over two decades.",
    neighborhoods: [
      {
        name: "Bonita Bay",
        description:
          "A premier gated community featuring championship golf, a private beach park, and a mix of single-family homes and high-rise condos along Estero Bay.",
      },
      {
        name: "Spanish Wells",
        description:
          "A well-established gated golf community with a country club atmosphere, mature landscaping, and a tight-knit residential feel off US-41.",
      },
      {
        name: "Pelican Landing",
        description:
          "A large gated community with canoe and kayak trails, a private beach island, and a range of homes from condos to estate properties.",
      },
      {
        name: "Imperial Shores",
        description:
          "Waterfront living along the Imperial River with dock access, older Florida charm, and a quieter pace just minutes from downtown Bonita.",
      },
      {
        name: "Spring Creek",
        description:
          "A residential area in eastern Bonita Springs offering newer homes, family-friendly neighborhoods, and convenient access to I-75 and local shopping.",
      },
    ],
  },
  "estero": {
    heading: "Communities We Serve in Estero",
    intro:
      "Estero is packed with well-planned communities, and our crews have moved families into and out of most of them. We know the gate codes, the loading zones, and the best routes.",
    neighborhoods: [
      {
        name: "Coconut Point Area",
        description:
          "The commercial and residential hub of Estero centered around Coconut Point Mall, with nearby condos, townhomes, and single-family communities.",
      },
      {
        name: "Bella Terra",
        description:
          "A gated community off Corkscrew Road with Mediterranean-inspired homes, resort-style amenities, and a family-friendly atmosphere.",
      },
      {
        name: "The Brooks",
        description:
          "One of Estero's premier communities featuring multiple neighborhoods, a nature preserve, championship golf, and a range of home styles.",
      },
      {
        name: "Grandezza",
        description:
          "A bundled golf community with well-maintained homes, a beautiful clubhouse, and a welcoming atmosphere for active adults and families.",
      },
      {
        name: "Corkscrew Corridor",
        description:
          "The eastern stretch of Estero along Corkscrew Road, home to newer developments, open spaces, and growing residential communities near FGCU.",
      },
    ],
  },
  "naples": {
    heading: "Neighborhoods We Serve in Naples",
    intro:
      "Naples is a city of distinct neighborhoods, each with its own character. Our team handles moves across all of them with the care and professionalism Naples residents expect.",
    neighborhoods: [
      {
        name: "North Naples",
        description:
          "A thriving area anchored by Mercato and Vanderbilt Beach, featuring newer communities, upscale shopping, and easy access to pristine Gulf beaches.",
      },
      {
        name: "Golden Gate",
        description:
          "One of Naples' largest residential areas offering affordable homes, established neighborhoods, and a strong community feel east of downtown.",
      },
      {
        name: "Park Shore",
        description:
          "An upscale neighborhood bordering Venetian Bay with waterfront condos, luxury single-family homes, and walkable access to the Village Shops.",
      },
      {
        name: "Pelican Bay",
        description:
          "A prestigious gated community with private beach access, a nature preserve, and a mix of high-rises and single-family homes in a resort-like setting.",
      },
      {
        name: "Old Naples",
        description:
          "The historic heart of the city with charming cottages, luxury estates, and walkable access to Fifth Avenue South, Third Street, and the Naples Pier.",
      },
      {
        name: "East Naples",
        description:
          "A diverse residential area with affordable options, established communities, and proximity to Bayview Park, the Botanical Garden, and Collier Boulevard shopping.",
      },
    ],
  },
};

// Keep backward compat alias
export const fortMyersNeighborhoods = cityNeighborhoods["fort-myers"]?.neighborhoods ?? [];

// Fort Myers neighborhoods stored here too
cityNeighborhoods["fort-myers"] = {
  heading: "Neighborhoods We Serve in Fort Myers",
  intro:
    "Our team knows Fort Myers inside and out. Here are some of the many neighborhoods and communities where we provide professional moving services:",
  neighborhoods: [
  {
    name: "Allen Park",
    description:
      "A solid residential area with a real neighborhood feel, decent schools, parks, and shopping access. Families appreciate its affordability and quiet atmosphere.",
  },
  {
    name: "Reflection Lakes",
    description:
      "A family-friendly gated community with good schools, nice amenities, and walking trails around scenic lakes. Close to downtown Fort Myers while offering a peaceful setting.",
  },
  {
    name: "Venetian Village",
    description:
      "Known for canal-front properties and a laid-back atmosphere near McGregor Boulevard, offering a mix of older Florida homes and updated properties with water access.",
  },
  {
    name: "Reflection Isles",
    description:
      "A gated community near Alico Road featuring lakefront homes, resort-style amenities, and a family-friendly atmosphere close to Gulf Coast Town Center.",
  },
  {
    name: "Pine Manor",
    description:
      "A census-designated community east of Fort Myers with a diverse population, appreciated for its affordability and accessibility to schools, shopping, and services.",
  },
  {
    name: "Whiskey Creek",
    description:
      "An established community with a golf course running through it, mature trees, and homes where people stay for decades along the US-41 corridor.",
  },
  {
    name: "Heritage Palms",
    description:
      "A country club community with golf courses, well-kept homes, and a relaxed vibe that attracts families and retirees who value a peaceful environment.",
  },
  {
    name: "Sail Harbour",
    description:
      "A waterfront community offering boat access and a friendly neighborhood feel, close to downtown Fort Myers while maintaining its own character.",
  },
  {
    name: "The Forum",
    description:
      "A well-established area known for proximity to major shopping and easy I-75 access, popular with professionals, families, and retirees.",
  },
  {
    name: "Westwood",
    description:
      "A laid-back suburban neighborhood close to everything you need but removed from the noise. A great spot for families, retirees, and working professionals.",
  },
  {
    name: "Omni",
    description:
      "A small residential community with a quiet neighborhood feel, close to major roads and shopping while maintaining off-the-beaten-path charm.",
  },
  {
    name: "Portofino Springs",
    description:
      "A gated neighborhood near Daniels Parkway with Mediterranean-style homes, quick I-75 access, and close proximity to shopping, restaurants, and the airport.",
  },
  {
    name: "Highland Pines",
    description:
      "A residential neighborhood offering families room to breathe with nearby schools, shopping, and parks in a relaxed suburban setting.",
  },
  {
    name: "McGregor",
    description:
      "Famous for its gorgeous palm-lined boulevard with history and charm, offering a mix of older homes and newer builds close to downtown and the beaches.",
  },
  {
    name: "Page Park",
    description:
      "A small census-designated community near Page Field, about four miles south of downtown Fort Myers with easy access to Sanibel and Estero Island beaches.",
  },
  {
    name: "Palm Lee Park",
    description:
      "A smaller community offering a quieter pace with easy access to shopping and main roads — practical, unpretentious, and comfortable.",
  },
  {
    name: "Paseo",
    description:
      "A quiet neighborhood with space, decent schools, nearby shopping, and parks. Suburban without feeling isolated — practical and family-friendly.",
  },
  ],
};

export const locations: Location[] = [
  // ── Primary Cities ──
  {
    slug: "fort-myers",
    name: "Fort Myers",
    adjective: "Trusted",
    tier: "primary",
    description:
      "As Fort Myers' premier moving company, we know this city inside and out. From the historic River District to quiet suburban streets, our team navigates every corner of Fort Myers with confidence and care.",
    highlights: [
      "Over 20 years serving Fort Myers families",
      "Deep knowledge of local neighborhoods and traffic patterns",
      "Same-day moving available",
      "40,000 sq ft climate-controlled storage",
    ],
    aboutCommunity:
      "Fort Myers is the heart of Southwest Florida, known for its beautiful riverfront, historic downtown, and warm community spirit. From the Edison & Ford Winter Estates to the vibrant arts scene, Fort Myers offers a quality of life that draws families and professionals from across the country.",
    zipCodes: [
      "33901", "33902", "33903", "33904", "33905", "33906",
      "33907", "33908", "33912", "33913", "33916", "33919",
    ],
  },
  {
    slug: "cape-coral",
    name: "Cape Coral",
    adjective: "Reliable",
    tier: "primary",
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
  },
  {
    slug: "bonita-springs",
    name: "Bonita Springs",
    adjective: "Expert",
    tier: "primary",
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
  },
  {
    slug: "estero",
    name: "Estero",
    adjective: "Reliable",
    tier: "primary",
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
    zipCodes: ["33928"],
  },
  {
    slug: "naples",
    name: "Naples",
    adjective: "Premier",
    tier: "primary",
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
    zipCodes: ["34102", "34103", "34104", "34105", "34108", "34109", "34110", "34112", "34113", "34119"],
  },
  // ── Secondary (CDPs) ──
  {
    slug: "villas",
    name: "Villas",
    adjective: "Experienced",
    tier: "secondary",
    parentCity: "fort-myers",
    description:
      "Located in the greater Fort Myers area, Villas is a community we've been proudly serving for over 20 years. Affordable professional moving that doesn't compromise on quality — that's what we deliver every time.",
    highlights: [
      "Affordable professional service",
      "Same-day moves when available",
      "Flexible scheduling options",
      "20+ years of community experience",
    ],
    aboutCommunity:
      "Villas is an affordable, quiet neighborhood in the greater Fort Myers area where people know their neighbors. With easy beach and grocery access, it offers single-family homes and townhouses with a real community vibe.",
  },
  {
    slug: "cypress-lake",
    name: "Cypress Lake",
    adjective: "Professional",
    tier: "secondary",
    parentCity: "fort-myers",
    description:
      "Situated in the greater Fort Myers area, Cypress Lake's established neighborhoods and well-kept properties deserve careful, professional movers. We've been trusted by Cypress Lake families for over two decades.",
    highlights: [
      "Familiar with Cypress Lake's residential layouts",
      "Careful handling in established neighborhoods",
      "Competitive pricing for local moves",
      "Flexible scheduling options",
    ],
    aboutCommunity:
      "Cypress Lake is a census-designated place in Lee County in the greater Fort Myers area, known for its mature landscaping, established homes, and convenient location near US-41. Residents enjoy easy access to shopping, dining, and the beautiful Gulf Coast beaches.",
  },
  {
    slug: "harlem-heights",
    name: "Harlem Heights",
    adjective: "Expert",
    tier: "secondary",
    parentCity: "fort-myers",
    description:
      "Located in the greater Fort Myers area, Harlem Heights residents have trusted our expertise for everything from basic apartment moves to complicated whole-home relocations. Our locally-rooted, family-owned team brings over two decades of experience to every job.",
    highlights: [
      "Specialty item expertise",
      "Family-owned and locally rooted",
      "Flexible storage options",
      "Apartment and home moving",
    ],
    aboutCommunity:
      "Harlem Heights is a small, tight-knit community south of Fort Myers proper in the greater Fort Myers area, with a long history and quieter residential character. Residents appreciate the sense of community and convenience of being close to major roads.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}

export function getPrimaryLocations(): Location[] {
  return locations.filter((l) => l.tier === "primary");
}

export function getSecondaryLocations(): Location[] {
  return locations.filter((l) => l.tier === "secondary");
}
