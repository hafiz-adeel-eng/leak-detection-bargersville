import type { Faq } from './site';

// Nationwide city pages at /leak-detection/<slug>/.
// Cities were picked from Google Ads Keyword Planner data (Sep 2026, US): monthly searches for
// "leak detection {city}" plus a manual review of who ranks, favoring cities where the results are
// mostly plumbers, directories or a regional franchise sub-page rather than strong local specialists.
// Calls are answered through our network of independent local leak detection and plumbing pros.
// Population is the 2020 U.S. Census; utility and local facts come from the sources on each page.

export type NationalCity = {
  slug: string; // e.g. "spring-hill-fl"
  city: string;
  st: string; // state abbreviation
  state: string;
  county: string;
  population: string; // 2020 Census
  utility: { name: string; url?: string };
  wiki: string;
  geo: { lat: number; lng: number };
  searches: number; // Keyword Planner avg monthly searches for "leak detection {city}"
  pools: boolean; // show the pool leak section
  intro: string; // unique local lead paragraph
  factors: string[]; // local leak drivers (markdown bold allowed)
  homes: string; // housing and plumbing notes
  faqs: Faq[]; // city-specific questions (template adds general ones)
  sources: { name: string; url: string }[];
};

export const nationalCities: NationalCity[] = [
  {
    slug: 'spring-hill-fl', city: 'Spring Hill', st: 'FL', state: 'Florida', county: 'Hernando County', population: '113,568',
    utility: { name: 'Hernando County Utilities' }, wiki: 'https://en.wikipedia.org/wiki/Spring_Hill,_Florida',
    geo: { lat: 28.4831, lng: -82.5370 }, searches: 210, pools: true,
    intro: 'Spring Hill is the largest community in Hernando County and one of the most sinkhole-prone places in the country. The limestone under the area, plus a housing stock built largely on concrete slabs with backyard pools, makes hidden water leaks a common and costly problem.',
    factors: [
      '**Limestone and sinkhole activity** that can shift the ground under slabs and stress buried pipes.',
      '**Slab-on-grade homes** where supply lines run under the concrete.',
      '**In-ground pools** with return lines, skimmers and lights that can leak.',
      '**Hot, humid climate** that hides slow leaks until mold or a high bill appears.',
      '**Irrigation systems** that run most of the year.',
    ],
    homes: 'Most Spring Hill homes are single-story slab houses, many built from the 1970s onward. Copper and CPVC supply lines under slabs can develop pinholes, and ground movement can crack joints. A running meter, warm tile or a pool that drops faster than evaporation are the usual first signs.',
    faqs: [
      { q: 'Can ground movement in Spring Hill cause slab leaks?', a: 'Yes. Settling and sinkhole activity in limestone areas can shift the soil under a slab and stress the pipes beneath it. If you notice new cracks along with a running meter or warm floors, have the lines tested.' },
      { q: 'Do you find pool leaks in Spring Hill?', a: 'Yes. Pool leak detection checks the shell, skimmer, returns, lights and plumbing lines. Do a bucket test first to confirm the pool is losing more than evaporation.' },
    ],
    sources: [
      { name: 'WTSP: Spring Hill ranks No. 1 in the nation for sinkholes', url: 'https://www.wtsp.com/article/news/local/community-connection/spring-hill-no-1-sinkholes/67-e037b7c0-ebf1-4464-aec6-6593af014162' },
    ],
  },
  {
    slug: 'port-st-lucie-fl', city: 'Port St. Lucie', st: 'FL', state: 'Florida', county: 'St. Lucie County', population: '204,851',
    utility: { name: 'Port St. Lucie Utility Systems' }, wiki: 'https://en.wikipedia.org/wiki/Port_St._Lucie,_Florida',
    geo: { lat: 27.2730, lng: -80.3582 }, searches: 170, pools: true,
    intro: 'Port St. Lucie is the largest city in St. Lucie County and one of the fastest-growing cities in Florida. Its neighborhoods are mostly single-family slab homes, many with pools and irrigation, which is exactly where hidden water leaks start.',
    factors: [
      '**Slab foundations** with supply lines under the floor.',
      '**Sandy soil and a high water table** that let leak water drain away unseen.',
      '**Pools and spas** in a large share of backyards.',
      '**Year-round irrigation** with buried laterals and valves.',
      '**Storm season** stress and power surges that affect pumps and fittings.',
    ],
    homes: 'Older sections of the city were built out in the 1980s and 1990s, with newer subdivisions to the west. Older copper lines can develop pinholes, and newer PEX lines usually need tracer gas when a leak is too quiet to hear.',
    faqs: [
      { q: 'Why does my Port St. Lucie water bill jump with no visible leak?', a: 'The usual hidden causes are a slab leak, a leak in the buried service line, an irrigation leak or a running toilet. Turn everything off and watch the meter; if it moves, water is escaping somewhere.' },
      { q: 'Can you find a leak in PEX pipe?', a: 'Yes. Plastic pipe carries sound poorly, so tracer gas is added when a leak is too quiet to hear with acoustic equipment.' },
    ],
    sources: [],
  },
  {
    slug: 'tallahassee-fl', city: 'Tallahassee', st: 'FL', state: 'Florida', county: 'Leon County', population: '196,169',
    utility: { name: 'City of Tallahassee Utilities', url: 'https://www.talgov.com/you/you-water' }, wiki: 'https://en.wikipedia.org/wiki/Tallahassee,_Florida',
    geo: { lat: 30.4383, lng: -84.2807 }, searches: 140, pools: false,
    intro: 'Tallahassee, Florida’s capital, has rolling hills, red clay soil and a big tree canopy, plus a lot of older neighborhoods near downtown and the universities. That combination makes buried line leaks and hidden leaks under older homes a steady problem.',
    factors: [
      '**Red clay soil** that holds water and moves with wet and dry seasons.',
      '**Tree roots** from live oaks and pines pressing on buried lines.',
      '**Older homes** near downtown with aging copper or galvanized pipe.',
      '**Crawl spaces and slabs** mixed across neighborhoods.',
      '**Occasional hard freezes** that crack exposed pipes and hose bibs.',
    ],
    homes: 'The city’s water utility serves roughly 88,000 service points through more than 1,200 miles of pipe. On the homeowner’s side of the meter, older service lines under mature trees and older interior plumbing are the most common leak sources.',
    faqs: [
      { q: 'Who owns the water line to my Tallahassee home?', a: 'In most cases the City owns the meter and the line up to it, and the homeowner owns the line from the meter to the house. If the leak is at the meter, call the City of Tallahassee Utilities first.' },
      { q: 'Can tree roots cause water line leaks?', a: 'Yes. Roots can press on or crack buried lines. Acoustic listening and line tracing find the leak so only one small hole is dug near the tree.' },
    ],
    sources: [{ name: 'City of Tallahassee Water Utility', url: 'https://www.talgov.com/you/you-water' }],
  },
  {
    slug: 'gainesville-fl', city: 'Gainesville', st: 'FL', state: 'Florida', county: 'Alachua County', population: '141,085',
    utility: { name: 'Gainesville Regional Utilities (GRU)', url: 'https://www.gru.com/My-Home/Lower-My-Bill/Save-Water/Leak-Detection' }, wiki: 'https://en.wikipedia.org/wiki/Gainesville,_Florida',
    geo: { lat: 29.6516, lng: -82.3248 }, searches: 110, pools: true,
    intro: 'Gainesville, home of the University of Florida, draws its water from the Floridan aquifer, which gives it naturally hard water. Older neighborhoods near campus, rental houses and newer subdivisions all see their share of hidden leaks.',
    factors: [
      '**Hard water** from the limestone Floridan aquifer (GRU reports about 140 mg/L) that builds scale in pipes and fixtures.',
      '**Karst limestone** ground that can settle under slabs.',
      '**Older rental homes** near campus with aging plumbing.',
      '**Slab foundations** with lines under the floor.',
      '**Pools and irrigation** in many single-family homes.',
    ],
    homes: 'Many Gainesville homes are slab-built, and a large share of houses near the university are rentals where leaks can go unnoticed. A moving meter, warm floor or a sudden high GRU bill are the usual first clues.',
    faqs: [
      { q: 'Is Gainesville’s water hard?', a: 'Yes, moderately. GRU’s water comes from the Floridan aquifer and is softened at the treatment plant, but it still carries dissolved minerals that can build scale over time.' },
      { q: 'I rent out a home near UF. Can you check it for leaks?', a: 'Yes. A leak check with a meter test, moisture mapping and thermal imaging is a good idea between tenants or after a high bill.' },
    ],
    sources: [
      { name: 'GRU water quality FAQs', url: 'https://www.gru.com/Our-Community/Content/Water-Quality-FAQs' },
      { name: 'GRU leak detection tips', url: 'https://www.gru.com/My-Home/Lower-My-Bill/Save-Water/Leak-Detection' },
    ],
  },
  {
    slug: 'sarasota-fl', city: 'Sarasota', st: 'FL', state: 'Florida', county: 'Sarasota County', population: '54,842',
    utility: { name: 'City of Sarasota Utilities or Sarasota County Utilities, depending on address' }, wiki: 'https://en.wikipedia.org/wiki/Sarasota,_Florida',
    geo: { lat: 27.3364, lng: -82.5307 }, searches: 110, pools: true,
    intro: 'Sarasota has a lot of pools, lanai homes and condos along the Gulf, and a lot of seasonal owners who aren’t there when a leak starts. Pool leaks and slab leaks are the two biggest calls here.',
    factors: [
      '**Pools and spas** in a large share of homes; pool leak searches are high here.',
      '**Seasonal homes** where a leak can run for weeks unnoticed.',
      '**Slab foundations** close to the water table.',
      '**Salt air** that corrodes exposed fittings and equipment.',
      '**Condos and multi-unit buildings** where one leak affects neighbors.',
    ],
    homes: 'Many Sarasota homes are single-story slab houses with pool cages. Older copper supply lines under slabs can pinhole, and pool return lines often run under the deck where a leak is invisible.',
    faqs: [
      { q: 'How can I tell if my Sarasota pool is leaking or evaporating?', a: 'Do a bucket test: set a bucket of water on a pool step, mark both water levels, and compare after 24 hours. If the pool drops more than the bucket, it is leaking.' },
      { q: 'I’m away for the summer. How do I protect my home from leaks?', a: 'Shut off the main water, or install an automatic shutoff valve with a flow sensor, and have someone check the home and the meter periodically.' },
    ],
    sources: [],
  },
  {
    slug: 'port-charlotte-fl', city: 'Port Charlotte', st: 'FL', state: 'Florida', county: 'Charlotte County', population: '60,625',
    utility: { name: 'Charlotte County Utilities' }, wiki: 'https://en.wikipedia.org/wiki/Port_Charlotte,_Florida',
    geo: { lat: 26.9762, lng: -82.0906 }, searches: 110, pools: true,
    intro: 'Port Charlotte was laid out as a planned community starting in the late 1950s, so many homes here are decades old, alongside newer construction rebuilt after recent hurricanes. Older plumbing and pools make leak detection a common need.',
    factors: [
      '**Older homes** from the 1960s to 1980s with aging copper, galvanized or polybutylene lines.',
      '**Slab foundations** with supply lines under the floor.',
      '**Canal-front lots** and a high water table.',
      '**Pools** with buried return and suction lines.',
      '**Storm damage and repairs** that disturbed plumbing.',
    ],
    homes: 'If your Port Charlotte home was built or replumbed between about 1978 and 1995, check whether it has gray polybutylene pipe, which is prone to failure. Older copper under slabs is another common source of pinhole leaks.',
    faqs: [
      { q: 'Is polybutylene pipe common in Port Charlotte?', a: 'It can be in homes built or replumbed between about 1978 and 1995. Look for flexible gray pipe stamped PB2110. It is prone to failure, and replacement is usually recommended.' },
      { q: 'Do you check for leaks after storm repairs?', a: 'Yes. A meter test, moisture mapping and thermal imaging can confirm whether lines were damaged during a storm or the repairs that followed.' },
    ],
    sources: [],
  },
  {
    slug: 'pensacola-fl', city: 'Pensacola', st: 'FL', state: 'Florida', county: 'Escambia County', population: '54,312',
    utility: { name: 'Emerald Coast Utilities Authority (ECUA)', url: 'https://www.ecua.fl.gov/' }, wiki: 'https://en.wikipedia.org/wiki/Pensacola,_Florida',
    geo: { lat: 30.4213, lng: -87.2169 }, searches: 90, pools: true,
    intro: 'Pensacola has some of the oldest neighborhoods in Florida, from historic homes downtown to postwar ranches and newer suburbs. Water and sewer service in the city and Escambia County is provided by the Emerald Coast Utilities Authority.',
    factors: [
      '**Historic and older homes** with galvanized or early copper pipe.',
      '**Sandy soil** that lets leak water drain away without surfacing.',
      '**Hurricane damage** and the repairs that followed.',
      '**Occasional freezes** that crack exposed pipes.',
      '**Pools and irrigation** in many newer homes.',
    ],
    homes: 'Older downtown and East Hill homes often sit on crawl spaces or piers, with older pipe exposed underneath. Newer suburbs are mostly slab-built, where leaks show up as warm floors or a running meter.',
    faqs: [
      { q: 'Who supplies water in Pensacola?', a: 'The Emerald Coast Utilities Authority (ECUA) provides water and wastewater service for the City of Pensacola and much of Escambia County.' },
      { q: 'Can you find a leak under a raised older home?', a: 'Yes. We check the exposed lines under the house, map moisture, and use acoustic equipment on buried lines to the street.' },
    ],
    sources: [{ name: 'Emerald Coast Utilities Authority', url: 'https://www.ecua.fl.gov/' }],
  },
  {
    slug: 'ocala-fl', city: 'Ocala', st: 'FL', state: 'Florida', county: 'Marion County', population: '63,591',
    utility: { name: 'City of Ocala utilities, or Marion County Utilities outside city limits' }, wiki: 'https://en.wikipedia.org/wiki/Ocala,_Florida',
    geo: { lat: 29.1872, lng: -82.1401 }, searches: 70, pools: true,
    intro: 'Ocala sits on the limestone karst of north-central Florida, with a mix of in-town neighborhoods, large rural lots and horse farms. Long water lines, wells and slab homes all show up in leak detection calls here.',
    factors: [
      '**Karst limestone** ground that can settle and stress buried lines.',
      '**Hard water** from the Floridan aquifer that builds scale.',
      '**Long service lines** and private wells on rural and farm properties.',
      '**Slab foundations** in most subdivisions.',
      '**Pools** in many newer homes.',
    ],
    homes: 'In town, most homes are slab-built with lines under the floor. On larger lots, water lines run long distances to the house, barns and outbuildings, and a leak can be anywhere along that run.',
    faqs: [
      { q: 'Can you find a leak on a long rural water line in Ocala?', a: 'Yes. We trace the line, listen along it for the leak, and use tracer gas on plastic pipe, then mark the spot so only one small hole is dug.' },
      { q: 'My well pump keeps running. Is it a leak?', a: 'It might be. With all water off, the pump should stay off. If the pressure gauge drops and the pump starts by itself, water is escaping somewhere.' },
    ],
    sources: [],
  },
  {
    slug: 'cape-coral-fl', city: 'Cape Coral', st: 'FL', state: 'Florida', county: 'Lee County', population: '194,016',
    utility: { name: 'City of Cape Coral Utilities', url: 'https://www.capecoral.gov/departments/utilities/water_production.php' }, wiki: 'https://en.wikipedia.org/wiki/Cape_Coral,_Florida',
    geo: { lat: 26.5629, lng: -81.9495 }, searches: 70, pools: true,
    intro: 'Cape Coral is known for its hundreds of miles of canals and a very high share of homes with pools. It was also the first sizable U.S. city to rely entirely on reverse osmosis for its drinking water. Pool leaks and slab leaks are the most common calls here.',
    factors: [
      '**Pools** in a very large share of homes; pool leak detection is searched heavily here.',
      '**Canal-front lots** and a high water table.',
      '**Slab foundations** with lines under the floor.',
      '**Separate irrigation-quality (IQ) water lines** in many neighborhoods.',
      '**Hurricane damage** and rebuilding.',
    ],
    homes: 'Most Cape Coral homes are single-story slab houses with a pool and lanai. Pool return lines under the deck, supply lines under the slab and buried irrigation lines are the usual hidden leak sources.',
    faqs: [
      { q: 'How do I know if my Cape Coral pool is leaking?', a: 'Do a bucket test on a pool step for 24 hours. If the pool drops more than the bucket, it is leaking. Also check whether the loss is faster with the pump running.' },
      { q: 'My irrigation water is separate. Can it leak too?', a: 'Yes. Irrigation lines, valves and heads can leak. Isolating the irrigation system from the house plumbing is the first step in finding which one is losing water.' },
    ],
    sources: [{ name: 'City of Cape Coral water production', url: 'https://www.capecoral.gov/departments/utilities/water_production.php' }],
  },
  {
    slug: 'fort-myers-fl', city: 'Fort Myers', st: 'FL', state: 'Florida', county: 'Lee County', population: '86,395',
    utility: { name: 'City of Fort Myers Utilities or Lee County Utilities, depending on address' }, wiki: 'https://en.wikipedia.org/wiki/Fort_Myers,_Florida',
    geo: { lat: 26.6406, lng: -81.8723 }, searches: 70, pools: true,
    intro: 'Fort Myers mixes historic neighborhoods along the Caloosahatchee River with fast-growing suburbs to the east and south. Pools, slabs and a lot of post-storm rebuilding keep leak detection busy.',
    factors: [
      '**Slab foundations** with supply lines under the floor.',
      '**Pools** in many homes, especially newer subdivisions.',
      '**Hurricane damage** and repairs that disturbed plumbing.',
      '**Older copper and galvanized lines** in historic neighborhoods.',
      '**High water table** that hides leak water.',
    ],
    homes: 'Historic homes near downtown may have older pipe and crawl spaces; newer homes are mostly slab-built with PEX or CPVC. Each needs a different approach, from acoustic listening to tracer gas.',
    faqs: [
      { q: 'Should I check for leaks after hurricane repairs?', a: 'Yes. Plumbing can be damaged by the storm or by repair work. A meter test and moisture mapping confirm whether anything is still leaking.' },
      { q: 'Do you find pool leaks in Fort Myers?', a: 'Yes. We test the shell, fittings, lights and plumbing lines. Do a bucket test first to confirm the pool is losing more than evaporation.' },
    ],
    sources: [],
  },
  {
    slug: 'melbourne-fl', city: 'Melbourne', st: 'FL', state: 'Florida', county: 'Brevard County', population: '84,678',
    utility: { name: 'City of Melbourne water utility' }, wiki: 'https://en.wikipedia.org/wiki/Melbourne,_Florida',
    geo: { lat: 28.0836, lng: -80.6081 }, searches: 70, pools: true,
    intro: 'Melbourne sits on Florida’s Space Coast along the Indian River Lagoon, with neighborhoods ranging from older riverfront homes to newer subdivisions to the west. Slab leaks and pool leaks are the most common hidden water problems.',
    factors: [
      '**Slab foundations** in most homes.',
      '**Sandy soil** that lets leak water drain away unseen.',
      '**Pools** with buried return and suction lines.',
      '**Salt air** near the coast that corrodes exposed fittings.',
      '**Older copper lines** that can pinhole under slabs.',
    ],
    homes: 'Many Melbourne homes were built from the 1960s through the 1990s, and older copper under slabs is a common pinhole leak source. Newer homes with PEX often need tracer gas to pinpoint quiet leaks.',
    faqs: [
      { q: 'What are signs of a slab leak in Melbourne?', a: 'Warm spots on tile, the sound of running water with everything off, a meter that keeps moving and a higher bill are the most common signs.' },
      { q: 'Can you find a pool leak under the deck?', a: 'Yes. Pressure testing isolates the leaking line, and acoustic equipment pinpoints the spot under the deck before anything is cut.' },
    ],
    sources: [],
  },
  {
    slug: 'lakeland-fl', city: 'Lakeland', st: 'FL', state: 'Florida', county: 'Polk County', population: '112,641',
    utility: { name: 'City of Lakeland Water Utilities' }, wiki: 'https://en.wikipedia.org/wiki/Lakeland,_Florida',
    geo: { lat: 28.0395, lng: -81.9498 }, searches: 50, pools: true,
    intro: 'Lakeland, between Tampa and Orlando, is named for its dozens of lakes and has a mix of historic neighborhoods, 20th-century ranch homes and fast-growing new subdivisions. The area also sits on Central Florida limestone.',
    factors: [
      '**Limestone ground** that can settle under slabs.',
      '**Slab foundations** with supply lines under the floor.',
      '**Older neighborhoods** with aging copper and galvanized pipe.',
      '**Pools and irrigation** in many homes.',
      '**Rapid new construction** where lines can be damaged during building.',
    ],
    homes: 'Historic homes near the downtown lakes often have older pipe; most newer homes are slab-built with PEX. A running meter or warm floor usually means a line under the slab.',
    faqs: [
      { q: 'Can you find a slab leak in Lakeland without breaking the floor?', a: 'Yes. Pressure testing, acoustic listening and thermal imaging mark the leak on the floor so only one small opening is made for the repair.' },
      { q: 'Who owns the water line to my Lakeland home?', a: 'Usually the utility owns the meter and the line up to it; the homeowner owns the line from the meter to the house. Call your utility first if the leak is at the meter.' },
    ],
    sources: [],
  },
  {
    slug: 'el-paso-tx', city: 'El Paso', st: 'TX', state: 'Texas', county: 'El Paso County', population: '678,815',
    utility: { name: 'El Paso Water', url: 'https://www.epwater.org/residential/services-and-information/leaks-and-property-protection/finding-leaks' }, wiki: 'https://en.wikipedia.org/wiki/El_Paso,_Texas',
    geo: { lat: 31.7619, lng: -106.4850 }, searches: 140, pools: true,
    intro: 'El Paso is a desert city with hard water, alkaline soils and occasional hard freezes. Slab leaks, buried line leaks and pool leaks are the most common hidden water problems, and El Paso Water encourages customers to check their meters for leaks.',
    factors: [
      '**Hard water** (roughly 170–200+ mg/L) that builds scale and stresses fittings.',
      '**Desert soils** that shift with rare heavy rains and heat.',
      '**Hard freezes** that crack exposed and shallow lines.',
      '**Slab foundations** in most homes.',
      '**Pools and evaporative coolers** with their own water lines.',
    ],
    homes: 'Most El Paso homes are slab-built, with copper or PEX lines under the floor. Hot-side slab leaks show up as warm tile and a water heater that runs constantly; cold-side leaks show up on the meter and the bill.',
    faqs: [
      { q: 'How do I check for a leak with my El Paso Water meter?', a: 'Turn off all water and watch the meter’s leak indicator. If it moves, water is leaking somewhere on your side of the meter.' },
      { q: 'Do freezes cause leaks in El Paso?', a: 'Yes. Hard freezes can crack exposed pipes, hose bibs and shallow lines. The leak often starts when the pipe thaws.' },
    ],
    sources: [{ name: 'El Paso Water: finding leaks', url: 'https://www.epwater.org/residential/services-and-information/leaks-and-property-protection/finding-leaks' }],
  },
  {
    slug: 'odessa-tx', city: 'Odessa', st: 'TX', state: 'Texas', county: 'Ector County', population: '114,428',
    utility: { name: 'City of Odessa water utility', url: 'https://www.odessa-tx.gov/1237/Water-Distribution' }, wiki: 'https://en.wikipedia.org/wiki/Odessa,_Texas',
    geo: { lat: 31.8457, lng: -102.3676 }, searches: 30, pools: false,
    intro: 'Odessa, in the Permian Basin, has some of the hardest and most mineral-heavy water in Texas, plus shifting soils and hard winter freezes. Those conditions are tough on plumbing, and slab and yard leaks are common.',
    factors: [
      '**Extremely hard water** with high dissolved solids that builds scale and wears fittings.',
      '**Expansive and caliche soils** that move with moisture and stress buried lines.',
      '**Hard freezes** that crack exposed and shallow pipes.',
      '**Slab foundations** in most homes.',
      '**Long yard lines** on larger lots.',
    ],
    homes: 'Most Odessa homes are slab-built. Yard leaks in the service line and slab leaks under the floor are the two most common hidden leaks; a moving meter and a wet patch of yard are the usual clues.',
    faqs: [
      { q: 'Why is Odessa’s water so hard on pipes?', a: 'Odessa’s water carries a high load of dissolved minerals. Over time that builds scale in pipes, fixtures and water heaters and can shorten the life of fittings.' },
      { q: 'Can you find a yard leak in Odessa without digging up the yard?', a: 'Yes. We trace the service line, listen along it with a ground microphone and mark the spot, so only one small hole is dug.' },
    ],
    sources: [{ name: 'City of Odessa water distribution', url: 'https://www.odessa-tx.gov/1237/Water-Distribution' }],
  },
  {
    slug: 'lubbock-tx', city: 'Lubbock', st: 'TX', state: 'Texas', county: 'Lubbock County', population: '257,141',
    utility: { name: 'City of Lubbock Water Utilities', url: 'https://www.mylubbock.us/444/Water-Utilities-Department' }, wiki: 'https://en.wikipedia.org/wiki/Lubbock,_Texas',
    geo: { lat: 33.5779, lng: -101.8552 }, searches: 20, pools: false,
    intro: 'Lubbock sits on highly expansive West Texas clay that shrinks and swells with moisture, and it gets hard winter freezes. That soil movement is hard on slabs and the pipes underneath them.',
    factors: [
      '**Highly expansive clay** that moves with wet and dry periods and cracks lines under slabs.',
      '**Hard freezes** that split exposed and shallow pipes.',
      '**Slab foundations** in most homes.',
      '**Hard water** that builds scale.',
      '**Sprinkler systems** with buried laterals.',
    ],
    homes: 'Soil movement is the big one here. When a slab shifts, the pipes under it can crack at joints. A running meter, warm floor, new cracks in tile or drywall, or a door that suddenly sticks can all point to a problem under the slab.',
    faqs: [
      { q: 'Can Lubbock’s clay soil cause slab leaks?', a: 'Yes. Expansive clay shrinks and swells with moisture, moving the slab and stressing the pipes under it. A leak can also make soil movement worse by soaking the clay.' },
      { q: 'Should I check for leaks after a freeze?', a: 'Yes. Watch the meter with everything off after a hard freeze. Frozen pipes often leak only once they thaw.' },
    ],
    sources: [{ name: 'City of Lubbock Water Utilities', url: 'https://www.mylubbock.us/444/Water-Utilities-Department' }],
  },
  {
    slug: 'redding-ca', city: 'Redding', st: 'CA', state: 'California', county: 'Shasta County', population: '93,611',
    utility: { name: 'City of Redding water utility' }, wiki: 'https://en.wikipedia.org/wiki/Redding,_California',
    geo: { lat: 40.5865, lng: -122.3917 }, searches: 50, pools: true,
    intro: 'Redding, at the north end of California’s Sacramento Valley, has very hot summers, cool wet winters and a lot of homes with pools and large irrigated lots. Buried line leaks, slab leaks and pool leaks are all common here.',
    factors: [
      '**Very hot summers** and heavy irrigation use.',
      '**Pools** in many homes.',
      '**Rocky and clay soils** that stress buried lines.',
      '**Larger lots** with long service lines.',
      '**Older homes** with aging galvanized or copper pipe.',
    ],
    homes: 'Redding has a mix of slab and raised-floor homes. Older houses may have galvanized lines that leak at joints; newer homes often have PEX, which needs tracer gas when a leak is too quiet to hear.',
    faqs: [
      { q: 'How do I tell if my Redding pool is leaking or just evaporating in the heat?', a: 'Do a bucket test for 24 hours. Summer evaporation is high, but if the pool drops noticeably more than the bucket, it is leaking.' },
      { q: 'Can you find a leak on a long line to my house?', a: 'Yes. We trace the line, listen along it for the leak and use tracer gas on plastic pipe, then mark the spot.' },
    ],
    sources: [],
  },
  {
    slug: 'bakersfield-ca', city: 'Bakersfield', st: 'CA', state: 'California', county: 'Kern County', population: '403,455',
    utility: { name: 'California Water Service (Cal Water) or the City of Bakersfield, depending on address', url: 'https://www.calwater.com/district/bakersfield/' }, wiki: 'https://en.wikipedia.org/wiki/Bakersfield,_California',
    geo: { lat: 35.3733, lng: -119.0187 }, searches: 30, pools: true,
    intro: 'Bakersfield has hot, dry summers, hard water and a lot of slab homes with pools. Parts of the city are served by Cal Water and parts by the City of Bakersfield’s water system.',
    factors: [
      '**Hard water** (about 12.8 grains per gallon reported for the city system) that builds scale.',
      '**Very hot summers** and heavy irrigation.',
      '**Slab foundations** in most homes.',
      '**Pools** in many backyards.',
      '**Soil movement** that stresses buried lines.',
    ],
    homes: 'Most Bakersfield homes are slab-built. A hot-side slab leak shows up as warm tile and a water heater that runs constantly; a pool leak shows up as a pool that drops faster than a bucket of water beside it.',
    faqs: [
      { q: 'Who supplies water in Bakersfield?', a: 'Depending on your address, California Water Service (Cal Water) or the City of Bakersfield. Your bill shows which one you have.' },
      { q: 'Does hard water cause leaks?', a: 'It can contribute. Scale buildup can wear valves and fittings and shorten the life of water heaters. It’s one of several factors, along with pipe age and pressure.' },
    ],
    sources: [{ name: 'Cal Water Bakersfield District', url: 'https://www.calwater.com/district/bakersfield/' }],
  },
  {
    slug: 'henderson-nv', city: 'Henderson', st: 'NV', state: 'Nevada', county: 'Clark County', population: '317,610',
    utility: { name: 'City of Henderson Department of Utility Services' }, wiki: 'https://en.wikipedia.org/wiki/Henderson,_Nevada',
    geo: { lat: 36.0395, lng: -114.9817 }, searches: 40, pools: true,
    intro: 'Henderson, next to Las Vegas, is a fast-growing desert city of slab homes, pools and drip irrigation. Hard water and extreme summer heat are tough on plumbing, and slab and pool leaks are the most common calls.',
    factors: [
      '**Hard water** from the Colorado River that builds scale.',
      '**Extreme summer heat** and desert soils.',
      '**Slab foundations** in nearly all homes.',
      '**Pools and spas** in a large share of backyards.',
      '**Drip irrigation** with buried lines and emitters.',
    ],
    homes: 'Most Henderson homes were built from the 1990s on and are slab-built with PEX or copper lines. Quiet leaks in PEX often need tracer gas; copper can develop pinholes over time.',
    faqs: [
      { q: 'Is a slab leak common in Henderson?', a: 'Slab leaks are one of the most common hidden leaks in desert slab homes. Warm floors, a running meter and a higher bill are the usual signs.' },
      { q: 'Can you find a leak in my drip irrigation?', a: 'Yes. Isolating the irrigation system from the house plumbing is the first step, then the leaking zone or line is traced.' },
    ],
    sources: [],
  },
  {
    slug: 'rio-rancho-nm', city: 'Rio Rancho', st: 'NM', state: 'New Mexico', county: 'Sandoval County', population: '104,046',
    utility: { name: 'City of Rio Rancho utilities', url: 'https://rrnm.gov/1883/Find-and-Fix-Leaks' }, wiki: 'https://en.wikipedia.org/wiki/Rio_Rancho,_New_Mexico',
    geo: { lat: 35.2334, lng: -106.6645 }, searches: 20, pools: false,
    intro: 'Rio Rancho, northwest of Albuquerque, is one of New Mexico’s largest and fastest-growing cities. Most homes are slab-built, and hard water, desert soils and winter freezes all play a part in hidden leaks. The city runs its own “Find and Fix Leaks” program for customers.',
    factors: [
      '**Hard water** that builds scale in pipes and fixtures.',
      '**Sandy and expansive desert soils** that shift with moisture.',
      '**Winter freezes** that crack exposed and shallow lines.',
      '**Slab foundations** in most homes.',
      '**Irrigation and drip systems** with buried lines.',
    ],
    homes: 'Rio Rancho grew rapidly from the 1970s onward, so many homes are several decades old, with copper or PEX lines under slabs. Searches for “Rio Rancho water leak” are as common as “leak detection” here.',
    faqs: [
      { q: 'Does the City of Rio Rancho help with leaks?', a: 'The city has a “Find and Fix Leaks” page with tips for checking your meter. Leaks on your side of the meter are the homeowner’s to find and repair.' },
      { q: 'What are signs of a slab leak in Rio Rancho?', a: 'Warm floors, running water sounds, a meter that moves with everything off and a higher bill.' },
    ],
    sources: [{ name: 'City of Rio Rancho: Find and Fix Leaks', url: 'https://rrnm.gov/1883/Find-and-Fix-Leaks' }],
  },
  {
    slug: 'baton-rouge-la', city: 'Baton Rouge', st: 'LA', state: 'Louisiana', county: 'East Baton Rouge Parish', population: '227,470',
    utility: { name: 'Baton Rouge Water Company', url: 'https://www.brwater.com/' }, wiki: 'https://en.wikipedia.org/wiki/Baton_Rouge,_Louisiana',
    geo: { lat: 30.4515, lng: -91.1871 }, searches: 50, pools: true,
    intro: 'Baton Rouge, Louisiana’s capital, has humid weather, clay soils and a lot of older neighborhoods alongside newer suburbs. Baton Rouge Water Company has supplied the metro area since 1888.',
    factors: [
      '**Expansive clay soils** that swell and shrink and move slabs.',
      '**High humidity** that hides slow leaks until mold appears.',
      '**Older homes** with galvanized or aging copper pipe.',
      '**Flood history** that damaged plumbing in some neighborhoods.',
      '**Slab and raised-floor homes** mixed across the city.',
    ],
    homes: 'Older Baton Rouge homes are often raised on piers with pipes exposed underneath; newer homes are slab-built. Soil movement can crack lines under slabs, and a leak can in turn soften the clay and make settling worse.',
    faqs: [
      { q: 'Who supplies water in Baton Rouge?', a: 'Baton Rouge Water Company serves most of the metro area. Leaks on your side of the meter are the homeowner’s responsibility.' },
      { q: 'Can clay soil cause slab leaks in Baton Rouge?', a: 'Yes. Expansive clay moves with wet and dry periods, which stresses the pipes under a slab.' },
    ],
    sources: [{ name: 'Baton Rouge Water Company', url: 'https://www.brwater.com/' }],
  },
  {
    slug: 'lafayette-la', city: 'Lafayette', st: 'LA', state: 'Louisiana', county: 'Lafayette Parish', population: '121,374',
    utility: { name: 'Lafayette Utilities System (LUS)', url: 'https://lus.org/' }, wiki: 'https://en.wikipedia.org/wiki/Lafayette,_Louisiana',
    geo: { lat: 30.2241, lng: -92.0198 }, searches: 30, pools: true,
    intro: 'Lafayette, the heart of Acadiana, gets its water from Lafayette Utilities System, which serves more than 47,000 water customers. Clay soils, humidity and slab foundations make hidden leaks a common problem.',
    factors: [
      '**Expansive clay soils** that move slabs.',
      '**Humid climate** that hides slow leaks.',
      '**Slab foundations** in most newer homes.',
      '**Flooding** that damaged some neighborhoods’ plumbing.',
      '**Older homes** with aging pipe near downtown.',
    ],
    homes: 'Most Lafayette homes built in recent decades sit on slabs. Pinholes in copper and cracked joints from soil movement are common causes of slab leaks.',
    faqs: [
      { q: 'Who supplies water in Lafayette?', a: 'Lafayette Utilities System (LUS) provides water to most of the city. The homeowner is usually responsible for the line from the meter to the house.' },
      { q: 'What does a slab leak look like?', a: 'Warm spots on the floor, running water sounds with everything off, a moving meter and a higher bill are the common signs.' },
    ],
    sources: [{ name: 'Lafayette Utilities System', url: 'https://lus.org/' }],
  },
  {
    slug: 'shreveport-la', city: 'Shreveport', st: 'LA', state: 'Louisiana', county: 'Caddo Parish', population: '187,593',
    utility: { name: 'City of Shreveport Water & Sewerage' }, wiki: 'https://en.wikipedia.org/wiki/Shreveport,_Louisiana',
    geo: { lat: 32.5252, lng: -93.7502 }, searches: 20, pools: false,
    intro: 'Shreveport sits on some of the most aggressive expansive clay in the region, often called gumbo clay locally. It swells when wet and shrinks when dry, and that movement is hard on slabs, driveways and the pipes under them.',
    factors: [
      '**Highly expansive “gumbo” clay** that moves slabs and cracks buried lines.',
      '**Older homes** with galvanized or aging copper pipe.',
      '**Hot, humid summers** and occasional hard freezes.',
      '**Tree roots** pressing on service lines.',
      '**Slab and pier-and-beam homes** mixed across the city.',
    ],
    homes: 'Soil movement is the leading cause of slab and yard leaks here. New cracks in floors or walls, doors that stick, a running meter or a wet patch of yard are all worth checking.',
    faqs: [
      { q: 'Can Shreveport’s clay soil break water lines?', a: 'Yes. Expansive clay swells and shrinks with moisture, which moves slabs and can crack pipes under the floor and in the yard.' },
      { q: 'Can you find a leak without digging up my yard?', a: 'Yes. We trace the line, listen along it and mark the leak so only one small hole is dug.' },
    ],
    sources: [],
  },
  {
    slug: 'broken-arrow-ok', city: 'Broken Arrow', st: 'OK', state: 'Oklahoma', county: 'Tulsa and Wagoner counties', population: '113,540',
    utility: { name: 'City of Broken Arrow utilities' }, wiki: 'https://en.wikipedia.org/wiki/Broken_Arrow,_Oklahoma',
    geo: { lat: 36.0526, lng: -95.7908 }, searches: 30, pools: false,
    intro: 'Broken Arrow, Oklahoma’s fourth-largest city, is a Tulsa suburb of mostly slab homes built on clay soils. Hot summers, hard winter freezes and soil movement all contribute to hidden leaks.',
    factors: [
      '**Expansive clay soils** that move slabs.',
      '**Hard winter freezes** that crack exposed pipes and hose bibs.',
      '**Slab foundations** in most homes.',
      '**Sprinkler systems** with buried laterals.',
      '**Storm and ice damage** to exposed plumbing.',
    ],
    homes: 'Most Broken Arrow homes were built from the 1970s onward and sit on slabs. Slab leaks, yard leaks and frozen pipes after winter storms are the most common calls.',
    faqs: [
      { q: 'Should I check for leaks after an Oklahoma ice storm?', a: 'Yes. Frozen pipes often leak only after they thaw. Watch the meter with everything off and check crawl spaces, garages and outside walls.' },
      { q: 'Can you find a slab leak in Broken Arrow?', a: 'Yes. Pressure testing, acoustic listening and thermal imaging pinpoint the leak and mark it on the floor.' },
    ],
    sources: [],
  },
  {
    slug: 'huntsville-al', city: 'Huntsville', st: 'AL', state: 'Alabama', county: 'Madison County', population: '215,006',
    utility: { name: 'Huntsville Utilities', url: 'https://www.hsvutil.org/community_resources/educational_resources/water.php' }, wiki: 'https://en.wikipedia.org/wiki/Huntsville,_Alabama',
    geo: { lat: 34.7304, lng: -86.5861 }, searches: 30, pools: false,
    intro: 'Huntsville, Alabama’s largest city, has grown fast, and Huntsville Utilities, the oldest utility system west of the Appalachians, serves about 100,000 water customers. Limestone ground, clay soils and winter freezes all play a part in leaks here.',
    factors: [
      '**Limestone (karst) ground** with clay soils that can shift.',
      '**Winter freezes** that crack exposed pipes and hose bibs.',
      '**Crawl spaces and slabs** mixed across neighborhoods.',
      '**Rapid new construction** where lines can be damaged.',
      '**Older homes** with aging pipe near downtown.',
    ],
    homes: 'Many Huntsville homes have crawl spaces, where leaks show up as wet insulation, musty smells or damp soil. Newer homes are more often slab-built, where leaks show up on the meter and the bill.',
    faqs: [
      { q: 'Who supplies water in Huntsville?', a: 'Huntsville Utilities serves about 100,000 water customers. The homeowner is usually responsible for the line from the meter to the house.' },
      { q: 'Can you find a leak in a crawl space?', a: 'Yes. We check exposed lines, map moisture and use thermal imaging and acoustic equipment on lines that are out of sight.' },
    ],
    sources: [{ name: 'Huntsville Utilities water', url: 'https://www.hsvutil.org/community_resources/educational_resources/water.php' }],
  },
  {
    slug: 'mobile-al', city: 'Mobile', st: 'AL', state: 'Alabama', county: 'Mobile County', population: '187,041',
    utility: { name: 'Mobile Area Water & Sewer System (MAWSS)' }, wiki: 'https://en.wikipedia.org/wiki/Mobile,_Alabama',
    geo: { lat: 30.6954, lng: -88.0399 }, searches: 30, pools: true,
    intro: 'Mobile, on Alabama’s Gulf Coast, has historic neighborhoods, humid weather and a long hurricane history. Its water comes from the Mobile Area Water & Sewer System, which draws from Big Creek Lake.',
    factors: [
      '**Historic homes** with galvanized or aging copper pipe.',
      '**High humidity** that hides slow leaks until mold appears.',
      '**Hurricane damage** and the repairs that followed.',
      '**Clay and sandy soils** that shift and hide leak water.',
      '**Raised and slab homes** mixed across the city.',
    ],
    homes: 'Older Mobile homes are often raised with pipes exposed underneath; newer homes sit on slabs. Pinhole leaks in aging copper and corroded galvanized lines are common in older neighborhoods.',
    faqs: [
      { q: 'Who supplies water in Mobile?', a: 'The Mobile Area Water & Sewer System (MAWSS). Leaks on your side of the meter are the homeowner’s responsibility.' },
      { q: 'Should I check for leaks after a hurricane?', a: 'Yes. Storms and repairs can damage plumbing. A meter test and moisture mapping confirm whether anything is leaking.' },
    ],
    sources: [],
  },
];

export const nationalUrl = (slug: string) => `/leak-detection/${slug}/`;

export const keywordsFor = (c: NationalCity) => {
  const city = c.city.toLowerCase();
  const st = c.st.toLowerCase();
  return {
    primary: `leak detection ${city} ${st}`,
    secondary: [
      `slab leak detection ${city}`,
      `water leak detection ${city} ${st}`,
      `slab leak repair ${city}`,
      `water line leak repair ${city}`,
      ...(c.pools ? [`pool leak detection ${city}`] : []),
      `leak detection near me ${city}`,
    ],
  };
};
