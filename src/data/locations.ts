import type { Faq } from './site';

// Dedicated town pages at /service-area/<slug>/.
// Bargersville has no town page on purpose: the homepage targets "leak detection bargersville",
// and a second Bargersville page would compete with it.
// Facts below come from the 2020 U.S. Census and the utilities' own sites (see `sources`).
// Water providers are written as "depending on your address" because service boundaries don't follow town lines.

export type Location = {
  slug: string; // must match an entry in `areas` (site.ts)
  name: string; // display name, e.g. "Greenwood"
  title: string; // <title>, under ~60 characters
  description: string; // meta description
  h1: string;
  answer: string; // 40–60 word direct answer under the H1 (AEO)
  primaryKeyword: string;
  secondaryKeywords: string[];
  wiki: string; // Wikipedia URL for schema sameAs
  geo: { lat: number; lng: number };
  zips: string[];
  facts: { label: string; value: string }[]; // "at a glance" table
  intro: string[]; // paragraphs, markdown links allowed
  homes: { h2: string; paras: string[] };
  factors: string[]; // local reasons leaks happen
  water: { paras: string[]; links: { name: string; url: string }[] };
  topCalls: { service: string; text: string }[]; // service slug + local note
  guides: string[]; // guide ids
  nearby: string[]; // location slugs (or 'bargersville' for the homepage)
  faqs: Faq[];
  sources: { name: string; url: string }[];
};

const censusNote = '2020 U.S. Census';

export const locations: Location[] = [
  {
    slug: 'greenwood',
    name: 'Greenwood',
    title: 'Leak Detection in Greenwood, IN | Slab & Water Line Leaks',
    description: 'Leak detection in Greenwood, IN (46142, 46143). We pinpoint slab, water line, wall and sprinkler leaks without tearing things up, then mark the spot for repair.',
    h1: 'Leak Detection in Greenwood, IN',
    answer: 'We find hidden water leaks in Greenwood homes without tearing up floors, walls or lawns. We confirm the leak at your meter, isolate the line, then pinpoint it with pressure testing, acoustic listening and thermal imaging, and mark the exact spot so your plumber makes one small, targeted repair.',
    primaryKeyword: 'leak detection greenwood in',
    secondaryKeywords: ['water leak detection greenwood indiana', 'slab leak detection greenwood', 'greenwood leak detection company', 'underground water leak greenwood in', 'sprinkler leak detection greenwood', 'leak detection near greenwood'],
    wiki: 'https://en.wikipedia.org/wiki/Greenwood,_Indiana',
    geo: { lat: 39.6137, lng: -86.1067 },
    zips: ['46142', '46143'],
    facts: [
      { label: 'County', value: 'Johnson County, Indiana' },
      { label: 'ZIP codes', value: '46142, 46143' },
      { label: 'Population', value: `63,830 (${censusNote})` },
      { label: 'Water provider', value: 'Mostly Indiana American Water; some addresses on the Bargersville water utility' },
      { label: 'Most common calls', value: 'Slab leaks, buried service lines, sprinkler leaks, hidden wall and shower leaks' },
    ],
    intro: [
      'Greenwood is the largest city in Johnson County, just north and east of our base in Bargersville. Homes here range from older houses near **Old Town Greenwood**, the city’s original 1820s settlement, to large subdivisions built over the last few decades on both sides of I-65.',
      'That mix matters for leak detection. An older home near Main Street may have aging copper or galvanized lines and a long service line to the street; a newer home is more likely to have PEX under a slab and an in-ground sprinkler system. We bring the right method for the pipe you actually have.',
    ],
    homes: {
      h2: 'Greenwood homes and where their leaks hide',
      paras: [
        'Many Greenwood homes are built on a **concrete slab** or over a **crawl space**, with the water lines running under the floor. When a line under a slab develops a pinhole, the water soaks into the soil instead of onto the floor, so the first sign is often a warm spot on tile, a meter that keeps turning or a water bill that jumps.',
        'Central Indiana’s clay-rich glacial soil holds water and drains slowly. A leak in a buried line doesn’t always bubble up at the break; the water can travel along the pipe trench and surface somewhere else, or not surface at all. That’s why we listen along the line rather than dig where the lawn looks wet.',
      ],
    },
    factors: [
      '**Freeze–thaw cycles.** Central Indiana’s frost line runs about 30–36 inches deep, and shallow lines, hose bibs and lines in crawl spaces or garages are the first to crack in a hard freeze.',
      '**Clay soil movement.** Wet–dry and freeze–thaw swings move clay soil, which stresses buried lines and the pipes under slabs.',
      '**Aging copper** in homes from past decades can develop pinholes from wear and water chemistry.',
      '**Irrigation systems** in newer subdivisions: a cracked lateral or a stuck valve can waste thousands of gallons before anyone notices.',
      '**Construction and landscaping** work that nicks or kinks a line, especially in areas that are still being built out.',
    ],
    water: {
      paras: [
        'Most of Greenwood gets its water from **Indiana American Water**, while some addresses on the south and west side are served by the **Town of Bargersville water utility**, which serves customers in the Bargersville, Greenwood and Franklin areas. Your bill tells you which one you have.',
        'In most cases the utility owns the meter and the line up to it, and the homeowner owns the service line from the meter to the house and everything inside. If the leak looks like it’s right at the meter, call your utility first. Anywhere past the meter, it’s usually yours to find and fix, and that’s where we come in.',
      ],
      links: [
        { name: 'Indiana American Water', url: 'https://www.amwater.com/inaw/' },
        { name: 'Town of Bargersville Water Utility', url: 'https://bargersville.in.gov/services/utilities/water/' },
      ],
    },
    topCalls: [
      { service: 'slab-leak-detection', text: 'Warm floors, a running meter or a hot water heater that never shuts off, common in slab-built Greenwood homes.' },
      { service: 'underground-water-leak-detection', text: 'A soggy strip of lawn or low pressure throughout the house, often from a buried service line.' },
      { service: 'irrigation-leak-detection', text: 'High summer water bills and wet zones in subdivisions with in-ground sprinklers.' },
      { service: 'hidden-water-leak-detection', text: 'Stains, soft drywall or a ceiling leak under a bathroom.' },
    ],
    guides: ['water-leak-under-driveway', 'water-bill-leak-adjustment-indiana', 'how-to-find-a-slab-leak', 'how-to-find-an-underground-water-leak', 'why-is-my-water-bill-so-high', 'water-running-sound-in-pipes', 'frozen-pipe-leaks'],
    nearby: ['center-grove', 'whiteland', 'bargersville', 'franklin'],
    faqs: [
      { q: 'Do you offer leak detection in Greenwood, IN?', a: 'Yes. We serve all of Greenwood, including ZIP codes 46142 and 46143, from our base in Bargersville. We find slab leaks, buried water line leaks, leaks inside walls and showers, pool and spa leaks and sprinkler leaks.' },
      { q: 'Who do I call if my water leak is near the meter in Greenwood?', a: 'Call your water utility first, usually Indiana American Water or the Bargersville water utility depending on your address. The utility normally owns the meter and the line up to it. Leaks past the meter are usually the homeowner’s to repair.' },
      { q: 'Can you find a slab leak in Greenwood without breaking the floor?', a: 'Yes. Detection is non-invasive. We pressure-test the lines, then listen through the floor with acoustic equipment and scan with a thermal camera to mark the leak. The only opening is the small one your plumber makes for the repair.' },
      { q: 'Why is my Greenwood water bill so high when I can’t see a leak?', a: 'The most common hidden causes are a running toilet, a sprinkler leak, a leak in the buried service line or a slab leak. Turn everything off and watch your meter for an hour. If it moves, water is leaking somewhere.' },
    ],
    sources: [
      { name: 'U.S. Census Bureau, 2020 Census', url: 'https://data.census.gov/' },
      { name: 'Town of Bargersville Water Utility', url: 'https://bargersville.in.gov/services/utilities/water/' },
      { name: 'Old Town Greenwood history', url: 'https://www.otginc.org/our-history' },
    ],
  },
  {
    slug: 'franklin',
    name: 'Franklin',
    title: 'Leak Detection in Franklin, IN | Hidden & Slab Leaks',
    description: 'Leak detection in Franklin, IN (46131). We find hidden leaks in older and newer homes, slab leaks and buried line leaks, and mark the spot for your plumber.',
    h1: 'Leak Detection in Franklin, IN',
    answer: 'We locate hidden water leaks in Franklin homes, from historic houses near the courthouse square to newer subdivisions. We confirm the leak with a meter test, isolate the line, then pinpoint it with pressure testing, acoustic listening and thermal imaging, and mark the spot so the repair is small.',
    primaryKeyword: 'leak detection franklin in',
    secondaryKeywords: ['water leak detection franklin indiana', 'slab leak detection franklin in', 'franklin in leak detection company', 'underground water line leak franklin indiana', 'hidden water leak franklin in'],
    wiki: 'https://en.wikipedia.org/wiki/Franklin,_Indiana',
    geo: { lat: 39.4806, lng: -86.055 },
    zips: ['46131'],
    facts: [
      { label: 'County', value: 'Johnson County (county seat)' },
      { label: 'ZIP code', value: '46131' },
      { label: 'Population', value: `25,313 (${censusNote})` },
      { label: 'Water provider', value: 'Mostly Indiana American Water; some homes west of town on the Bargersville water utility' },
      { label: 'Most common calls', value: 'Hidden leaks in older homes, buried service lines, slab leaks, frozen pipe damage' },
    ],
    intro: [
      'Franklin is the Johnson County seat, east of Bargersville. It’s home to **Franklin College**, founded in 1834, a downtown listed on the National Register of Historic Places, and neighborhoods such as the **Martin Place Historic District**, alongside newer subdivisions on the edges of town.',
      'Older homes and newer homes leak in different ways. We adjust the method to the plumbing in your house, so the leak is found without opening more walls, floors or lawn than the repair needs.',
    ],
    homes: {
      h2: 'Older Franklin homes need a careful approach',
      paras: [
        'Homes built generations ago often have **galvanized steel** or older copper supply lines, long-buried service lines and plumbing that has been added to over the years. Galvanized pipe corrodes from the inside and tends to leak at threaded joints, often inside walls, under floors or in a crawl space.',
        'Plaster walls, original hardwood and tile are expensive to open and hard to match. That’s where non-invasive detection pays off: thermal imaging, moisture mapping and acoustic listening narrow the leak down to one spot before anyone cuts.',
      ],
    },
    factors: [
      '**Aging galvanized and copper supply lines** in older homes, which corrode and leak at joints.',
      '**Long service lines** from the meter to the house on larger or older lots.',
      '**Crawl spaces and basements** where pipes are exposed to cold in a hard freeze.',
      '**Clay-rich glacial soil** that holds leak water and can hide where a buried line broke.',
      '**Remodels and additions** where old and new pipe materials meet.',
    ],
    water: {
      paras: [
        'Most Franklin addresses are served by **Indiana American Water**. Some homes with a Franklin address west of town are on the **Town of Bargersville water utility**, which serves parts of the Franklin area in Union Township. Check your bill if you’re not sure.',
        'The utility usually owns the meter and the line up to it; the homeowner usually owns the line from the meter to the house. If water is pooling at the meter itself, call the utility first.',
      ],
      links: [
        { name: 'Indiana American Water', url: 'https://www.amwater.com/inaw/' },
        { name: 'City of Franklin utility billing', url: 'https://www.franklin.in.gov/department/division.php?structureid=94' },
      ],
    },
    topCalls: [
      { service: 'hidden-water-leak-detection', text: 'Stains, bubbling paint or a musty smell in older homes with plaster walls and crawl spaces.' },
      { service: 'underground-water-leak-detection', text: 'A wet spot between the meter and the house, low pressure or a meter that never stops.' },
      { service: 'thermal-imaging-inspection', text: 'Moisture mapping with a photo report for an insurance claim or before buying an older home.' },
      { service: 'slab-leak-detection', text: 'Warm spots or running water sounds under the floor in slab-built homes.' },
    ],
    guides: ['water-line-replacement-cost-indiana', 'burst-pipe-insurance-claim-indiana', 'how-to-find-a-leak-in-a-wall', 'water-in-basement-or-crawl-space', 'water-leaking-from-ceiling', 'how-to-find-an-underground-water-leak', 'frozen-pipe-leaks'],
    nearby: ['whiteland', 'greenwood', 'bargersville', 'trafalgar'],
    faqs: [
      { q: 'Do you provide leak detection in Franklin, Indiana?', a: 'Yes. We serve all of Franklin (ZIP 46131) and the surrounding area from Bargersville. We find hidden leaks in walls and floors, slab leaks, buried water line leaks, pool and spa leaks and sprinkler leaks.' },
      { q: 'Can you find leaks in an older Franklin home without damaging plaster or original floors?', a: 'Yes. We use thermal imaging, moisture mapping and acoustic listening to narrow the leak down before anything is opened, so the opening for the repair is small and in the right place.' },
      { q: 'Who owns the water line to my house in Franklin?', a: 'In most cases the utility owns the meter and the line up to it, and the homeowner owns the line from the meter to the house. Check with your provider, usually Indiana American Water, if the leak is at the meter.' },
      { q: 'Should I replace old galvanized pipes after a leak is found?', a: 'That’s a question for your plumber. If one leak is found in old galvanized pipe, more joints are often near the end of their life. Our report shows where the leak is and what the lines are made of, which helps with the decision.' },
    ],
    sources: [
      { name: 'U.S. Census Bureau, 2020 Census', url: 'https://data.census.gov/' },
      { name: 'Franklin College history', url: 'https://franklincollege.edu/about/brief-history-of-franklin-college/' },
      { name: 'Town of Bargersville Water Utility', url: 'https://bargersville.in.gov/services/utilities/water/' },
    ],
  },
  {
    slug: 'center-grove',
    name: 'Center Grove',
    title: 'Leak Detection in Center Grove, IN | Slab, Pool & Sprinklers',
    description: 'Leak detection in Center Grove & White River Township, IN. Slab, water line, pool and sprinkler leaks pinpointed without guesswork digging.',
    h1: 'Leak Detection in Center Grove, IN',
    answer: 'We find hidden water leaks in Center Grove homes: slab leaks, buried water line leaks, pool and spa leaks and sprinkler leaks. We confirm the leak at the meter, isolate the system that’s losing water, then pinpoint it with pressure testing, acoustic listening, thermal imaging and tracer gas, and mark the spot for repair.',
    primaryKeyword: 'leak detection center grove',
    secondaryKeywords: ['water leak detection center grove indiana', 'white river township leak detection', 'pool leak detection center grove', 'sprinkler leak detection center grove in', 'slab leak detection center grove'],
    wiki: 'https://en.wikipedia.org/wiki/White_River_Township,_Johnson_County,_Indiana',
    geo: { lat: 39.587, lng: -86.16 },
    zips: ['46142', '46143', '46106'],
    facts: [
      { label: 'Area', value: 'White River Township, Johnson County' },
      { label: 'ZIP codes', value: '46142, 46143 (some addresses 46106)' },
      { label: 'Population', value: `52,365 in White River Township (${censusNote})` },
      { label: 'Water provider', value: 'Indiana American Water or the Bargersville water utility, depending on address' },
      { label: 'Most common calls', value: 'Sprinkler leaks, pool and spa leaks, slab leaks, buried service lines' },
    ],
    intro: [
      'Center Grove is the name most people use for **White River Township**, the unincorporated area between Greenwood and Bargersville that’s known for the Center Grove school district. Most of it carries a Greenwood mailing address, and it sits right next to our base in Bargersville.',
      'The area is mostly suburban neighborhoods built over the last few decades, many with in-ground sprinklers and backyard pools. Those systems add a lot of buried pipe that nobody sees until the water bill jumps.',
    ],
    homes: {
      h2: 'Newer homes, more buried pipe',
      paras: [
        'Newer homes often use **PEX** or other plastic pipe. Plastic carries sound poorly, which makes some leaks hard to hear with acoustic equipment alone. For quiet leaks we add **tracer gas**: a safe hydrogen and nitrogen mix that escapes at the leak and is picked up by a sensor at the surface.',
        'Sprinkler systems and pools each have their own lines, valves and fittings. The first step is always to isolate them, so you know whether the water is leaving through the house plumbing, the irrigation or the pool before anyone digs.',
      ],
    },
    factors: [
      '**In-ground sprinkler systems** with cracked laterals, broken heads and valves that don’t fully close.',
      '**Pools and spas** losing water through return lines, skimmers, lights or the shell.',
      '**Slab foundations** with supply lines under the concrete.',
      '**Plastic pipe** that needs tracer gas when a leak is too quiet to hear.',
      '**Freeze–thaw damage** to hose bibs, backflow devices and shallow irrigation lines.',
    ],
    water: {
      paras: [
        'Depending on your address, Center Grove homes get their water from **Indiana American Water** or the **Town of Bargersville water utility**, which serves customers in White River and Union Townships. Your bill shows which one.',
        'Most sprinkler systems in the area are fed from the same meter as the house, so an irrigation leak shows up on the same bill. Some homes also have a separate irrigation meter; if yours does, it can help narrow down where the water is going.',
      ],
      links: [
        { name: 'Indiana American Water', url: 'https://www.amwater.com/inaw/' },
        { name: 'Town of Bargersville Water Utility', url: 'https://bargersville.in.gov/services/utilities/water/' },
      ],
    },
    topCalls: [
      { service: 'irrigation-leak-detection', text: 'Wet zones, low sprinkler pressure or a summer bill that doesn’t add up.' },
      { service: 'pool-spa-leak-detection', text: 'A pool losing more than evaporation, confirmed with a bucket test before we come out.' },
      { service: 'slab-leak-detection', text: 'Warm floors or a meter that keeps turning with everything off.' },
      { service: 'underground-water-leak-detection', text: 'A soggy strip between the meter and the house, often on plastic lines that need tracer gas.' },
    ],
    guides: ['water-leak-under-driveway', 'how-to-find-a-sprinkler-leak', 'how-to-find-a-pool-leak', 'how-to-find-a-slab-leak', 'water-heater-leaking', 'smart-water-leak-detectors'],
    nearby: ['bargersville', 'greenwood', 'whiteland', 'franklin'],
    faqs: [
      { q: 'Do you serve Center Grove and White River Township?', a: 'Yes. Center Grove is right next to our base in Bargersville. We serve homes throughout White River Township, including Greenwood 46142 and 46143 and Bargersville 46106 addresses.' },
      { q: 'How do I know if my sprinkler system or my house is leaking?', a: 'Close the irrigation shutoff and watch your water meter with everything in the house off. If the meter stops, the leak is in the sprinkler system. If it keeps moving, the leak is in the house plumbing or the service line.' },
      { q: 'Can you find a leak in PEX or plastic pipe?', a: 'Yes. Plastic pipe carries sound poorly, so when a leak is too quiet to hear we use tracer gas, which escapes at the leak and is detected at the surface.' },
      { q: 'Do you do pool leak detection in Center Grove?', a: 'Yes. We test the shell, fittings, lights and plumbing lines of in-ground pools and spas. Do a bucket test first to confirm the pool is losing more than evaporation.' },
    ],
    sources: [
      { name: 'U.S. Census Bureau, 2020 Census', url: 'https://data.census.gov/' },
      { name: 'Town of Bargersville Water Utility', url: 'https://bargersville.in.gov/services/utilities/water/' },
      { name: 'Center Grove Community School Corporation', url: 'https://www.centergrove.k12.in.us/district' },
    ],
  },
  {
    slug: 'whiteland',
    name: 'Whiteland & New Whiteland',
    title: 'Leak Detection in Whiteland & New Whiteland, IN',
    description: 'Leak detection in Whiteland & New Whiteland, IN (46184). We find slab, water line and hidden leaks and mark the exact spot so the repair stays small.',
    h1: 'Leak Detection in Whiteland & New Whiteland, IN',
    answer: 'We find hidden water leaks in Whiteland and New Whiteland homes without guesswork digging. We confirm the leak at the meter, work out whether it’s in the house or the buried line, then pinpoint it with pressure testing, acoustic listening and thermal imaging, and mark the exact spot for your plumber.',
    primaryKeyword: 'leak detection whiteland in',
    secondaryKeywords: ['leak detection new whiteland', 'water leak detection whiteland indiana', 'slab leak detection whiteland', 'underground water leak whiteland in', 'leak detection 46184'],
    wiki: 'https://en.wikipedia.org/wiki/Whiteland,_Indiana',
    geo: { lat: 39.55, lng: -86.0797 },
    zips: ['46184'],
    facts: [
      { label: 'County', value: 'Johnson County, Indiana' },
      { label: 'ZIP code', value: '46184' },
      { label: 'Population', value: `Whiteland 4,599; New Whiteland 5,550 (${censusNote})` },
      { label: 'Water provider', value: 'Whiteland Water Works (Whiteland) or Indiana American Water (New Whiteland)' },
      { label: 'Most common calls', value: 'Slab leaks, buried service lines, hidden leaks, high water bills' },
    ],
    intro: [
      'Whiteland and New Whiteland sit side by side along the I-65 corridor between Greenwood and Franklin, northeast of Bargersville. They share the 46184 ZIP code, and many streets run from one town straight into the other.',
      'Homes here range from established neighborhoods to newer subdivisions. Whichever you have, the goal is the same: find the leak first, so only one small area gets opened.',
    ],
    homes: {
      h2: 'Why a high water bill is often the first sign',
      paras: [
        'In a slab or crawl-space home, a leak under the floor or in the buried service line can run for weeks without showing. Very often the first clue is the bill, or the leak indicator on the meter spinning when nothing is on.',
        'A quick meter test tells you a lot. With everything off, close the main shutoff in the house: if the meter still moves, the leak is in the buried line outside; if it stops, it’s inside the house.',
      ],
    },
    factors: [
      '**Slab and crawl-space homes** where supply lines run out of sight.',
      '**Buried service lines** stressed by clay soil movement and freeze–thaw.',
      '**Water heaters** and their lines in garages and utility rooms.',
      '**Running toilets and dripping fixtures,** which are cheap to fix but easy to miss.',
      '**Hose bibs** left connected to a hose over winter, which can crack inside the wall.',
    ],
    water: {
      paras: [
        'The **Town of Whiteland** runs its own water utility, Whiteland Water Works, and buys its water wholesale from **Indiana American Water**. **New Whiteland** is served directly by **Indiana American Water**. Your bill shows which one you have.',
        'Either way, the utility usually owns the meter and the line up to it, and the homeowner owns the line from the meter into the house. If water is pooling at the meter, call the utility first.',
      ],
      links: [
        { name: 'Town of Whiteland Water Department', url: 'https://www.townofwhiteland.com/government/departments/water/' },
        { name: 'Indiana American Water', url: 'https://www.amwater.com/inaw/' },
      ],
    },
    topCalls: [
      { service: 'slab-leak-detection', text: 'A meter that keeps running, warm floors or the sound of water under the slab.' },
      { service: 'underground-water-leak-detection', text: 'Low pressure or a wet spot between the meter and the house.' },
      { service: 'hidden-water-leak-detection', text: 'Stains, soft drywall or water showing up in a ceiling under a bathroom.' },
      { service: 'thermal-imaging-inspection', text: 'A moisture map and photo report for an insurance claim.' },
    ],
    guides: ['water-bill-leak-adjustment-indiana', 'why-is-my-water-bill-so-high', 'how-to-find-a-water-leak-in-your-house', 'how-to-find-a-slab-leak', 'water-running-sound-in-pipes', 'water-leak-emergency-what-to-do'],
    nearby: ['greenwood', 'franklin', 'center-grove', 'bargersville'],
    faqs: [
      { q: 'Do you offer leak detection in Whiteland and New Whiteland?', a: 'Yes. We serve both towns and the rest of ZIP code 46184 from our base in Bargersville, including slab leaks, buried water line leaks, hidden leaks in walls and floors, pools and sprinklers.' },
      { q: 'Who supplies water in Whiteland and New Whiteland?', a: 'Whiteland has its own utility, Whiteland Water Works, which buys its water from Indiana American Water. New Whiteland is served by Indiana American Water. Your bill shows which one you have.' },
      { q: 'How do I tell if the leak is inside the house or in the yard?', a: 'Turn off all water, then close the main shutoff valve in the house. If the meter still moves, the leak is in the buried line outside. If it stops, the leak is inside the house.' },
      { q: 'Is a slab leak in Whiteland an emergency?', a: 'It should be handled quickly because it wastes water and can damage flooring. If it’s on the hot side, close the cold water inlet on the water heater until the repair, then have the leak located.' },
    ],
    sources: [
      { name: 'U.S. Census Bureau, 2020 Census', url: 'https://data.census.gov/' },
      { name: 'Town of Whiteland Water Department', url: 'https://www.townofwhiteland.com/government/departments/water/' },
    ],
  },
  {
    slug: 'trafalgar',
    name: 'Trafalgar',
    title: 'Leak Detection in Trafalgar, IN | Water Line & Slab Leaks',
    description: 'Leak detection in Trafalgar, IN (46181). We find leaks in long buried water lines, under slabs and in walls, and mark the spot so only one small hole is dug.',
    h1: 'Leak Detection in Trafalgar, IN',
    answer: 'We find hidden water leaks in and around Trafalgar, including long buried water lines on larger lots. We confirm the leak with a meter test, trace where the line runs, then pinpoint the leak with acoustic listening, pressure testing, thermal imaging or tracer gas, and mark the spot so only one small hole is dug.',
    primaryKeyword: 'leak detection trafalgar in',
    secondaryKeywords: ['water leak detection trafalgar indiana', 'underground water line leak trafalgar', 'slab leak detection trafalgar in', 'leak detection southern johnson county', 'leak detection 46181'],
    wiki: 'https://en.wikipedia.org/wiki/Trafalgar,_Indiana',
    geo: { lat: 39.4164, lng: -86.1508 },
    zips: ['46181'],
    facts: [
      { label: 'County', value: 'Johnson County, Indiana' },
      { label: 'ZIP code', value: '46181' },
      { label: 'Population', value: `1,422 in town (${censusNote})` },
      { label: 'Water provider', value: 'Town of Trafalgar utility in town; many rural homes on private wells' },
      { label: 'Most common calls', value: 'Long buried water lines, slab leaks, frozen pipe damage, well-to-house lines' },
    ],
    intro: [
      'Trafalgar is south of Bargersville along State Road 135, in southern Johnson County and home to the Indian Creek schools. The town has grown quickly over the last two decades, and many homes sit on larger lots outside town limits.',
      'Bigger lots usually mean longer buried water lines, from the meter or the well to the house, and sometimes to a barn, shop or garage. A leak anywhere along that run can be hard to spot, which is exactly what line tracing and acoustic listening are for.',
    ],
    homes: {
      h2: 'Long lines, wells and outbuildings',
      paras: [
        'On a long service line, digging to look for a leak is expensive. We first trace where the pipe actually runs, then move a ground microphone along it to find where the leak noise is loudest. On plastic pipe, which carries sound poorly, we add tracer gas.',
        'If your home is on a **private well**, the water isn’t metered, so the usual clue is the well pump cycling on when nobody is using water, or a pressure tank that won’t hold pressure. A leak in the line between the well and the house, or under the slab, can keep the pump running.',
      ],
    },
    factors: [
      '**Long buried lines** from the meter or well to the house and outbuildings.',
      '**Freeze–thaw cycles,** especially on lines to detached garages, barns and hydrants.',
      '**Clay-rich glacial soil** that hides where a buried line broke.',
      '**New construction** where lines were damaged during building or landscaping.',
      '**Well systems** where a pump that runs with no water in use points to a leak.',
    ],
    water: {
      paras: [
        'Homes inside town limits are generally served by the **Town of Trafalgar’s water utility**, while many homes in the surrounding countryside are on **private wells**. Your bill, or the lack of one, tells you which you have.',
        'With a town water connection, the homeowner usually owns the line from the meter to the house. With a well, the whole system, from the pump to the fixtures, is the owner’s responsibility.',
      ],
      links: [{ name: 'Town of Trafalgar utilities', url: 'https://townoftrafalgar.org/utilities/' }],
    },
    topCalls: [
      { service: 'underground-water-leak-detection', text: 'A wet spot in the yard, low pressure or a pump or meter that won’t stop, on long buried lines.' },
      { service: 'slab-leak-detection', text: 'Warm floors or running water sounds under the concrete.' },
      { service: 'hidden-water-leak-detection', text: 'Stains or soft drywall after a freeze, or near bathrooms and laundry rooms.' },
      { service: 'irrigation-leak-detection', text: 'Sprinkler lines and yard hydrants that leak after winter.' },
    ],
    guides: ['well-pump-keeps-running', 'water-line-replacement-cost-indiana', 'how-to-find-an-underground-water-leak', 'low-water-pressure-leak', 'water-in-basement-or-crawl-space', 'frozen-pipe-leaks', 'leak-detection-methods'],
    nearby: ['bargersville', 'franklin', 'center-grove', 'greenwood'],
    faqs: [
      { q: 'Do you serve Trafalgar and southern Johnson County?', a: 'Yes. Trafalgar is just south of our base in Bargersville along State Road 135. We serve the town and the surrounding countryside in ZIP code 46181.' },
      { q: 'Can you find a leak in a long water line on a rural property?', a: 'Yes. We trace where the line runs, then listen along it with a ground microphone to find the loudest point. On plastic pipe we add tracer gas. We mark the spot so only one small hole is dug.' },
      { q: 'How do I know if I have a leak on a well system?', a: 'With all water off, the well pump shouldn’t turn on. If it cycles on by itself, or the pressure gauge on the tank slowly drops, water is leaking somewhere between the pump and the fixtures.' },
      { q: 'Who is responsible for a water line leak in Trafalgar?', a: 'On town water, the homeowner usually owns the line from the meter to the house. On a private well, the entire system is the owner’s. If a leak is right at the meter, call the town utility first.' },
    ],
    sources: [
      { name: 'U.S. Census Bureau, 2020 Census', url: 'https://data.census.gov/' },
      { name: 'Town of Trafalgar utilities', url: 'https://townoftrafalgar.org/utilities/' },
    ],
  },
];

export const locationUrl = (slug: string) => (slug === 'bargersville' ? '/' : `/service-area/${slug}/`);
