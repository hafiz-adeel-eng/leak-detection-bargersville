export const site = {
  name: 'Leak Detection Bargersville',
  url: 'https://www.leakdetectionbargersville.com',
  // Placeholder number: replace with the real business line before launch. [BUSINESS TO VERIFY]
  phone: '(317) 555-0199',
  phoneHref: '+13175550199',
  email: 'adeelnaqshbandi@gmail.com',
  city: 'Bargersville',
  region: 'IN',
  postalCode: '46106',
  county: 'Johnson County',
  // Google Business Profile. Paste the profile URL and the "Ask for reviews" share link once the profile exists.
  gbpUrl: '', // e.g. https://maps.app.goo.gl/...
  gbpReviewUrl: '', // e.g. https://g.page/r/.../review
  // Trust claims. Turn each on only once the business confirms it is true.
  claims: {
    sameDay: false, // "Same-day appointments"
    emergency247: false, // "24/7 emergency service" + 24/7 opening hours in schema
    licensedInsured: false, // "Licensed & insured" badge
  },
};

export const hoursText = site.claims.emergency247 ? 'Open 24/7 for emergencies' : 'Call to schedule a leak detection visit';

export type Faq = { q: string; a: string };
export type Section = { h2: string; paras?: string[]; list?: string[] };

export type Service = {
  slug: string;
  name: string;
  icon: string;
  short: string;
  title: string; // <title> (brand is appended by the layout only if it fits)
  description: string; // meta description
  h1: string;
  answer: string; // opening answer under the H1
  whatIs: Section;
  signs: string[];
  causes: string[];
  method: { name: string; text: string }[]; // how we locate it
  extra?: Section[]; // service-specific sections (e.g. who owns the line)
  beforeYouCall: string[];
  after: string[];
  costNote: string;
  faqs: Faq[];
  guides: string[]; // related guide ids
  related: string[]; // related service slugs
  image: string; // alt text for the page photo
};

export const services: Service[] = [
  {
    slug: 'slab-leak-detection',
    name: 'Slab Leak Detection',
    icon: 'slab',
    short: 'Warm spots on the floor or a meter that keeps running? We trace the line under the concrete.',
    title: 'Slab Leak Detection | Bargersville & Johnson County, IN',
    description: 'Warm floor, a meter that keeps running or a jump in your water bill? We pinpoint leaks under concrete slabs so only a small area needs to be opened.',
    h1: 'Slab Leak Detection in Bargersville, IN',
    answer: 'A slab leak is a broken water line under your home’s concrete foundation. We find it without breaking the floor to search: we isolate and pressure-test the lines, then use acoustic ground microphones and thermal imaging to mark the spot, so your plumber opens only one small section.',
    whatIs: {
      h2: 'What is a slab leak?',
      paras: [
        'Many homes around Bargersville are built on a concrete slab, with the water supply lines running underneath it. When one of those lines develops a pinhole or crack, the water drains into the soil instead of onto your floor, so the first signs are subtle.',
        'Slab leaks happen on either the **hot** or the **cold** side. Hot-side leaks often show up as warm spots on the floor and a water heater that seems to run all the time. Cold-side leaks are usually noticed through the water meter or the bill.',
      ],
    },
    signs: [
      'Warm or damp spots on tile, wood or carpet',
      'The sound of running water when every fixture is off',
      'A water meter that moves with no water in use',
      'A water bill that jumps for no clear reason',
      'Cracks in flooring, or baseboards that swell',
      'A water heater that runs more than usual',
    ],
    causes: [
      'Pipes rubbing against concrete, gravel or each other as the house settles and the pipes expand and contract',
      'Pinholes in older copper lines from age and water chemistry',
      'Soil movement putting stress on the lines',
      'Kinks, weak joints or damage during construction',
    ],
    method: [
      { name: 'Meter and isolation test', text: 'Confirms there is a leak and whether it is on the hot or cold side.' },
      { name: 'Line pressure test', text: 'Shows which line under the slab is losing pressure.' },
      { name: 'Line tracing', text: 'Maps where the pipe actually runs under the floor.' },
      { name: 'Acoustic listening', text: 'Ground microphones pick up the hiss of water escaping under the concrete; the loudest point marks the leak.' },
      { name: 'Thermal imaging', text: 'A hot-water leak shows up as a warm bloom on the floor surface.' },
      { name: 'Tracer gas (when needed)', text: 'For quiet leaks in PEX or very small leaks that are hard to hear.' },
    ],
    beforeYouCall: [
      'Do a meter test: turn off all water and watch the meter for one to two hours.',
      'Close the cold water inlet on the water heater. If the meter stops, the leak is on the hot side.',
      'If it is a hot-side leak, leave the inlet closed and turn the water heater to vacation or off until the repair.',
      'Take photos of any warm, damp or damaged flooring for your insurer.',
    ],
    after: [
      'We mark the leak on the floor and give you photos and readings. The repair is a separate step, usually done by a plumber.',
      'Common repairs are a spot repair through a small opening in the slab, rerouting the line through walls or the attic, or repiping if the lines are old. Accurate detection keeps a spot repair small.',
    ],
    costNote: 'The cost depends on how many lines need testing, the flooring and slab above the pipe, and how easy the line is to trace.',
    faqs: [
      { q: 'How do I know if I have a slab leak?', a: 'The most common signs are warm spots on the floor, the sound of running water when nothing is on, and a water meter that keeps moving. A sudden jump in your water bill is another clue.' },
      { q: 'Can you find a slab leak without breaking the floor?', a: 'Yes. Detection is non-invasive. We mark the leak location on the floor; the only opening is made later by your plumber for the repair.' },
      { q: 'Is a hot water slab leak an emergency?', a: 'It should be handled quickly because it wastes water and energy and can damage flooring. Close the cold water inlet on the water heater to stop the flow until the repair.' },
      { q: 'Does homeowners insurance cover slab leaks?', a: 'Many policies cover sudden water damage and the cost of getting access to the leak, but not the worn pipe itself. Check your policy and keep the detection report.' },
    ],
    guides: ['how-to-find-a-slab-leak', 'leak-detection-methods'],
    related: ['thermal-imaging-inspection', 'underground-water-leak-detection', 'hidden-water-leak-detection'],
    image: 'Technician listening for a slab leak with an acoustic ground microphone while a tablet shows the leak’s sound frequency on a tile floor',
  },
  {
    slug: 'underground-water-leak-detection',
    name: 'Underground Water Leak Detection',
    icon: 'pipe',
    short: 'Soggy yard, low pressure or a high water bill. We find breaks in the buried line between the meter and the house.',
    title: 'Underground Water Leak Detection | Bargersville, IN',
    description: 'Soggy yard, low pressure or a meter that never stops? We trace buried water lines from the meter to your home, pinpoint the leak and mark it for repair.',
    h1: 'Underground Water Leak Detection in Bargersville',
    answer: 'An underground water leak is a break in the buried service line that brings water from the meter to your house. We confirm it with a shutoff test, trace where the line runs, then listen along it with acoustic equipment, or use tracer gas on plastic pipe, and mark the spot on your lawn so only one small hole is dug.',
    whatIs: {
      h2: 'What counts as an underground water leak?',
      paras: [
        'Most underground leaks are in the **service line**: the pressurized pipe from the water meter, usually near the street, to where the water enters your house. Because it’s always under pressure, a leak here runs 24 hours a day, even when nobody is using water.',
        'Sprinkler lines are also buried, but they’re a separate system. If the leak is in your irrigation, see [irrigation leak detection](/services/irrigation-leak-detection/).',
      ],
    },
    signs: [
      'A patch of lawn that stays soggy, sunken or unusually green',
      'Water pooling near the meter or where the line enters the house',
      'Low water pressure throughout the house',
      'Muddy water or air sputtering from the taps',
      'A water meter that moves with everything off',
      'A higher water bill with no change in use',
    ],
    causes: [
      'Freeze–thaw cycles and frost movement in central Indiana winters',
      'Tree roots pressing on or wrapping the line',
      'Age and corrosion in older galvanized or copper lines',
      'Failed fittings on plastic lines',
      'Soil settling, or vehicles over a shallow line',
    ],
    method: [
      { name: 'Shutoff test', text: 'With the main shutoff closed, a moving meter proves the leak is outside the house.' },
      { name: 'Line location', text: 'We trace the path of the pipe from the meter to the house.' },
      { name: 'Acoustic listening', text: 'A ground microphone is moved along the line to find where the leak noise is loudest.' },
      { name: 'Leak noise correlator (when access allows)', text: 'Sensors at two points on the pipe calculate the leak’s position.' },
      { name: 'Tracer gas (plastic pipe)', text: 'A safe hydrogen/nitrogen mix rises through the soil at the leak on lines that are hard to hear.' },
    ],
    extra: [
      {
        h2: 'Who is responsible for the line?',
        paras: [
          'In most areas, the homeowner owns the line from the meter to the house and the water utility owns the meter and the line up to it. If the leak looks like it’s at or near the meter, contact your water utility first. Rules vary, so confirm with your provider.',
        ],
      },
    ],
    beforeYouCall: [
      'Turn off all water, close the main shutoff and watch the meter for 15–30 minutes.',
      'If you have sprinklers, close the irrigation valve too, so an irrigation leak doesn’t look like a service line leak.',
      'Note any soggy, sunken or greener patches between the meter and the house.',
    ],
    after: [
      'We mark the leak with a flag or paint and give you photos and notes. Your plumber digs one small hole at the marked spot for the repair.',
      'If the line is old and leaks keep appearing, replacing the whole line can make more sense than spot repairs. Your plumber can advise once the leak is found.',
    ],
    costNote: 'The cost depends on the length and depth of the line, the pipe material, and what’s above it: lawn, driveway or landscaping.',
    faqs: [
      { q: 'Who is responsible for the water line, me or the utility?', a: 'In most areas the homeowner is responsible for the line from the meter to the house, and the utility for the line up to the meter. Check with your water provider if the leak is close to the meter.' },
      { q: 'Can you find a leak in a plastic water line?', a: 'Yes. Plastic lines carry sound poorly, so we add tracer gas testing when acoustic listening alone isn’t enough.' },
      { q: 'How big a hole is dug after you find the leak?', a: 'Usually just enough for the plumber to reach and repair the pipe at the marked spot, instead of trenching the whole line.' },
    ],
    guides: ['how-to-find-an-underground-water-leak', 'leak-detection-methods'],
    related: ['irrigation-leak-detection', 'slab-leak-detection', 'hidden-water-leak-detection'],
    image: 'Water spraying from a cracked underground pipe while a technician reads an acoustic leak detector',
  },
  {
    slug: 'hidden-water-leak-detection',
    name: 'Hidden Water Leak Detection',
    icon: 'shower',
    short: 'Stains, musty smells or a high bill with no visible leak. We find leaks inside walls, floors and showers.',
    title: 'Hidden Water Leak Detection in Bargersville, IN',
    description: 'Stains, a musty smell or a high water bill with no visible leak? We find hidden leaks inside walls, floors, showers and ceilings with non-invasive testing.',
    h1: 'Hidden Water Leak Detection',
    answer: 'A hidden water leak is one you can’t see: a supply line inside a wall, a shower valve or pan, a drain, or a pipe under the floor. We confirm the leak with a meter test, isolate the fixtures, then map moisture, use thermal imaging and listen for pressurized leaks to find the source before anything is opened.',
    whatIs: {
      h2: 'What is a hidden water leak?',
      paras: [
        'Most plumbing runs behind drywall, tile and flooring. When a pipe or fitting leaks there, water soaks the wall cavity, insulation and subfloor long before it shows. By the time a stain appears, the leak may have been running for weeks.',
        'Hidden leaks come from two kinds of plumbing: **supply lines**, which are always pressurized and leak all the time, and **drains and showers**, which only leak when they’re used.',
      ],
    },
    signs: [
      'Stains, bubbling paint or soft drywall',
      'Warped baseboards, or flooring lifting along a wall',
      'A musty smell in one room or closet',
      'Stains on the ceiling below a bathroom',
      'Loose tiles or grout that keeps cracking around a shower',
      'A water meter that moves with everything off',
    ],
    causes: [
      'Failed shower pans, valves and supply lines behind the shower wall',
      'Leaking sink, toilet and appliance supply lines',
      'Drain connections that leak only when a fixture is used',
      'Pinholes in older copper pipe',
      'Water heater and washing machine connections in utility walls',
    ],
    method: [
      { name: 'Meter test and fixture isolation', text: 'Separates a supply-line leak from a drain or shower leak.' },
      { name: 'Moisture mapping', text: 'Moisture meter readings across walls and floors show where the water is coming from.' },
      { name: 'Thermal imaging', text: 'Wet areas read cooler, and hot-water leaks warmer, on the wall’s surface.' },
      { name: 'Acoustic listening', text: 'Picks up pressurized supply-line leaks inside walls and floors.' },
      { name: 'Flood test', text: 'Checks whether a shower pan holds water.' },
    ],
    extra: [
      {
        h2: 'Shower leaks: pan, valve or grout?',
        paras: [
          'A shower can leak in three places, and they look the same from the outside. A **failed pan** leaks when water sits on the floor. A **valve or supply line** leaks all the time, or whenever the shower runs. **Grout and caulk** let splash water get behind tile. Testing each separately means you fix the real source instead of re-grouting and hoping.',
        ],
      },
    ],
    beforeYouCall: [
      'Do a meter test with all water off to see if a supply line is leaking.',
      'Run the nearby fixture and watch whether the stain grows only after use.',
      'Close the shutoff valve for the fixture if you know the source.',
      'Dry what you can and take photos. The EPA advises drying water-damaged materials within 24–48 hours to help prevent mold.',
    ],
    after: [
      'We mark the source and document it with photos and readings, so the opening is small and in the right place.',
      'If you need it for insurance, a [thermal imaging inspection](/services/thermal-imaging-inspection/) adds side-by-side thermal and regular photos.',
    ],
    costNote: 'The cost depends on how many fixtures and lines need testing and whether a shower flood test is needed.',
    faqs: [
      { q: 'Is my shower leak coming from the grout or the pipes?', a: 'That’s what the tests separate. A flood test checks the pan, a pressure test checks the supply lines, and running the shower shows splash and grout leaks.' },
      { q: 'How do you find a leak inside a wall without opening it?', a: 'With a meter test, fixture isolation, moisture mapping and thermal imaging. Acoustic listening helps on pressurized lines. The wall is opened only at the marked spot.' },
      { q: 'Can a hidden leak cause mold?', a: 'Yes. A slow leak keeps materials wet far longer than the 24–48 hours the EPA gives for drying water-damaged materials to prevent mold growth.' },
    ],
    guides: ['how-to-find-a-leak-in-a-wall', 'how-to-find-a-water-leak-in-your-house', 'why-is-my-water-bill-so-high'],
    related: ['thermal-imaging-inspection', 'slab-leak-detection', 'underground-water-leak-detection'],
    image: 'Technician with an acoustic sensor on a tile floor next to a cabinet, with an inset of a leaking pipe behind it',
  },
  {
    slug: 'pool-spa-leak-detection',
    name: 'Pool & Spa Leak Detection',
    icon: 'pool',
    short: 'Dye testing, pressure testing and underwater listening for shells, returns and skimmers.',
    title: 'Pool & Spa Leak Detection in Bargersville, IN',
    description: 'Topping off your pool every few days? We confirm the leak, then use dye, pressure tests and underwater listening to find it in the shell, fittings and plumbing.',
    h1: 'Pool & Spa Leak Detection',
    answer: 'If your pool drops faster than a bucket of pool water sitting beside it, it’s leaking, not evaporating. We confirm that with a bucket test, then use dye at the fittings and shell, pressure-test each plumbing line, and listen underwater and along buried lines to find exactly where the water is going.',
    whatIs: {
      h2: 'Leaking or evaporating?',
      paras: [
        'Every pool loses some water to evaporation, more on hot, dry, windy days. The **bucket test** separates the two: a bucket of pool water sits on the step in the same conditions, and after 24 hours you compare how much each dropped. If the pool lost more, there’s a leak. See our [guide to finding a pool leak](/guides/how-to-find-a-pool-leak/) for the full test.',
      ],
    },
    signs: [
      'Topping up the water more than once or twice a week',
      'The level always stops at the same fitting, light or skimmer',
      'Wet or soft spots in the yard near the pool or equipment pad',
      'Cracks in the shell, tile line or deck, or loose tiles',
      'Algae returning soon after treatment',
      'Air in the system or the pump losing prime',
    ],
    causes: [
      'Skimmer throats separating from the shell',
      'Leaking return fittings, main drains and light niches',
      'Cracks in the shell or at the tile line',
      'Breaks in the buried plumbing between the pool and the equipment pad',
      'Freeze damage to lines and fittings that weren’t fully winterized',
    ],
    method: [
      { name: 'Bucket test', text: 'Separates evaporation from a real leak.' },
      { name: 'Pump on/off comparison', text: 'Shows whether the leak is on the pressure side, the suction side or the shell.' },
      { name: 'Dye testing', text: 'Colored dye is pulled toward cracks, lights and fittings that leak.' },
      { name: 'Line pressure testing', text: 'Each return, skimmer and main drain line is tested one at a time.' },
      { name: 'Underwater and ground listening', text: 'A hydrophone and ground microphone pick up leaks in fittings and buried lines.' },
    ],
    beforeYouCall: [
      'Run a 24-hour bucket test to confirm the leak.',
      'Keep the pool at its normal level and the equipment working so every line can be tested.',
      'Note where the water level stops dropping.',
    ],
    after: [
      'We mark each leak and tell you where it is: shell, fitting or a specific plumbing line. The repair is quoted separately.',
    ],
    costNote: 'The cost depends on the pool’s size, the number of lines and fittings, and whether a spa is attached.',
    faqs: [
      { q: 'How much water loss is normal for a pool?', a: 'It depends on the weather. Hot, dry, windy days can evaporate roughly a quarter inch a day, and mild days much less. A bucket test tells you whether the loss is more than evaporation.' },
      { q: 'Should the pool be full for testing?', a: 'Yes. Keep the pool at its normal level and the equipment working so we can test every line.' },
      { q: 'Can you find leaks in a hot tub or spa?', a: 'Yes. Spas are tested the same way: dye at the jets and fittings, and pressure testing of the plumbing lines.' },
    ],
    guides: ['how-to-find-a-pool-leak', 'leak-detection-methods'],
    related: ['underground-water-leak-detection', 'irrigation-leak-detection', 'thermal-imaging-inspection'],
    image: 'Technician lowering an underwater acoustic sensor into a backyard pool while reading the detector screen',
  },
  {
    slug: 'thermal-imaging-inspection',
    name: 'Thermal Imaging Inspection',
    icon: 'thermal',
    short: 'Infrared cameras spot moisture behind drywall and under flooring without cutting.',
    title: 'Thermal Imaging Leak Inspection | Bargersville, IN',
    description: 'Infrared thermal imaging reveals moisture behind walls, ceilings and floors. We confirm every reading with a moisture meter and document it in a photo report.',
    h1: 'Thermal Imaging Leak Inspection',
    answer: 'A thermal imaging inspection uses an infrared camera to show temperature differences on walls, ceilings and floors. Wet materials usually read cooler, and hot-water leaks warmer, so hidden moisture shows up without cutting into anything. We confirm every reading with a moisture meter and document it with photos.',
    whatIs: {
      h2: 'What thermal imaging can and can’t show',
      paras: [
        'A thermal camera reads **surface temperature**. It doesn’t see through walls. What it shows is the temperature pattern that water leaves on the surface: a cool stain spreading down a wall, or a warm bloom on a floor above a hot-water line.',
        'Because other things change surface temperature too, such as drafts, insulation gaps and sunlight, thermal images are always confirmed with a moisture meter before any conclusion is drawn.',
      ],
    },
    signs: [
      'Stains or bubbling paint on ceilings or walls',
      'A musty smell with no visible source',
      'Soft or swollen drywall or baseboards',
      'Water damage below a bathroom or laundry room',
      'Warm spots on the floor',
      'Water coming in after storms, around windows or walls',
    ],
    causes: [
      'Supply and drain leaks inside walls and ceilings',
      'Hot-water leaks under slabs',
      'Shower and tub leaks into the floor below',
      'Water intrusion through windows, walls and roofs',
    ],
    method: [
      { name: 'Infrared scan', text: 'We scan the affected area and the rooms around it.' },
      { name: 'Moisture meter confirmation', text: 'Readings confirm what the camera shows.' },
      { name: 'Acoustic listening (when needed)', text: 'Pinpoints a pressurized leak behind the thermal pattern.' },
      { name: 'Photo report', text: 'Thermal and regular photos side by side for your plumber and insurer.' },
    ],
    beforeYouCall: [
      'Avoid running showers or appliances near the wet area on the day of the inspection, so the pattern stays clear.',
      'Note when the stain appeared and whether it grows after rain or after using a fixture.',
    ],
    after: [
      'You get a set of thermal and regular photos with moisture readings. If the source is a pipe, we mark it; if it’s water coming in from outside, the report shows where it’s entering.',
    ],
    costNote: 'The cost depends on the size of the area and whether the inspection is combined with leak pinpointing.',
    faqs: [
      { q: 'Can thermal imaging find water leaks?', a: 'It finds the temperature pattern a leak leaves on walls, ceilings and floors. Combined with moisture readings, that points to where the water is coming from.' },
      { q: 'Can a thermal camera see through walls?', a: 'No. It reads surface temperature. Moisture inside a wall changes that surface temperature, which is what the camera picks up.' },
      { q: 'Can I use my own thermal camera?', a: 'Consumer cameras can show obvious patterns, but reading them correctly takes experience, and every finding should be confirmed with a moisture meter.' },
    ],
    guides: ['how-to-find-a-leak-in-a-wall', 'leak-detection-methods'],
    related: ['hidden-water-leak-detection', 'slab-leak-detection', 'underground-water-leak-detection'],
    image: 'Technician holding a thermal camera that shows a cold moisture pattern on a water-stained wall',
  },
  {
    slug: 'irrigation-leak-detection',
    name: 'Irrigation Leak Detection',
    icon: 'sprinkler',
    short: 'Soggy lawn spots and weak zones, traced to the broken head, valve or buried line.',
    title: 'Irrigation & Sprinkler Leak Detection | Bargersville, IN',
    description: 'Soggy spots, a weak zone or a summer water bill spike? We test each sprinkler zone, check the valves and trace buried lines to find the break before you dig.',
    h1: 'Irrigation & Sprinkler Leak Detection',
    answer: 'An irrigation leak is usually a cracked line, a broken head or a valve that won’t close. We test the always-pressurized mainline separately from each zone, check the valves and backflow preventer, then trace the buried line with acoustic equipment to mark the break, so only one small spot of lawn is dug up.',
    whatIs: {
      h2: 'Mainline or zone? Why it matters',
      paras: [
        'A sprinkler system has two kinds of buried pipe. The **mainline** runs from the backflow preventer to the zone valves and stays pressurized all the time, so a mainline leak wastes water even when the sprinklers are off. The **lateral lines** run from each valve to the heads and only carry water while that zone runs.',
        'Knowing which one is leaking cuts the search down fast. Our [guide to finding a sprinkler leak](/guides/how-to-find-a-sprinkler-leak/) shows the meter test that tells them apart.',
      ],
    },
    signs: [
      'Soggy or sunken spots in the lawn',
      'One zone with weak spray, or heads that don’t pop up',
      'Water in the valve box, or water bubbling up near a valve',
      'A water meter that moves while the sprinklers are off',
      'A water bill that rises during the watering season',
    ],
    causes: [
      'Freeze damage over winter, found at spring start-up',
      'Mower, aerator and landscaping damage to shallow lines and heads',
      'Roots pressing on lines',
      'Worn valve diaphragms that don’t fully close',
      'Cracked backflow preventers',
    ],
    method: [
      { name: 'Mainline test', text: 'Closing the irrigation valve and watching the meter shows whether the always-on mainline is leaking.' },
      { name: 'Zone-by-zone test', text: 'Narrows the leak to one zone.' },
      { name: 'Valve and backflow inspection', text: 'Finds valves that don’t close and cracked fittings.' },
      { name: 'Line tracing and acoustic listening', text: 'Follows the buried pipe to the break.' },
    ],
    extra: [
      {
        h2: 'Irrigation leak or main water line leak?',
        paras: [
          'Both are buried in the yard, so they can look the same. If the meter stops when you close the irrigation valve, it’s the sprinkler system. If it keeps moving, the leak is in the house or in the [main water line](/services/underground-water-leak-detection/).',
        ],
      },
    ],
    beforeYouCall: [
      'Close the irrigation valve and watch the meter to check the mainline.',
      'Run each zone and flag soggy spots or weak heads.',
      'Look inside the valve box for standing water.',
    ],
    after: [
      'We flag the break and tell you whether it’s a head, a valve, a zone line or the mainline, so the repair is quick and targeted.',
    ],
    costNote: 'The cost depends on the number of zones, the size of the yard, and whether the leak is on the mainline or a zone line.',
    faqs: [
      { q: 'When should I check my sprinkler system for leaks?', a: 'At spring start-up, after the system has been winterized, and any time your water bill jumps during the watering season.' },
      { q: 'Is the leak in my sprinkler or my main line?', a: 'Close the irrigation valve and watch the water meter. If it stops, the leak is in the sprinkler system; if it keeps moving, it’s in the house or the main water line.' },
    ],
    guides: ['how-to-find-a-sprinkler-leak', 'how-to-find-an-underground-water-leak'],
    related: ['underground-water-leak-detection', 'pool-spa-leak-detection', 'slab-leak-detection'],
    image: 'Technician using an acoustic detector beside an exposed sprinkler line leaking at a fitting',
  },
];

export type Area = { slug: string; name: string; note: string };

// Service area. Notes are limited to facts that are true regardless of the business;
// add real local detail (jobs, neighborhoods served, drive times) once confirmed. [BUSINESS TO VERIFY]
export const areas: Area[] = [
  { slug: 'bargersville', name: 'Bargersville', note: 'Our home base in Johnson County.' },
  { slug: 'greenwood', name: 'Greenwood', note: 'The largest city in Johnson County, just north of Bargersville.' },
  { slug: 'franklin', name: 'Franklin', note: 'The Johnson County seat, southeast of Bargersville.' },
  { slug: 'center-grove', name: 'Center Grove', note: 'The Center Grove area in White River Township.' },
  { slug: 'whiteland', name: 'Whiteland & New Whiteland', note: 'Along the I-65 corridor in Johnson County.' },
  { slug: 'trafalgar', name: 'Trafalgar', note: 'In southwestern Johnson County.' },
];

export const generalFaqs: Faq[] = [
  { q: 'What does a leak detection company do?', a: 'We find hidden water leaks without tearing up your home. We use pressure tests, acoustic listening and thermal imaging to pinpoint the leak, mark it, and document it with photos. Your plumber then makes a small, targeted repair.' },
  { q: 'How long does a leak detection visit take?', a: 'It depends on how many lines need testing and how hard the leak is to reach. A single fixture check is quick; a slab or buried line takes longer. We’ll give you an idea when you call.' },
  { q: 'Will homeowners insurance cover the leak?', a: 'Many policies cover the water damage and the cost of getting access to the leak, but not the broken pipe itself. Photos and readings from the detection help with the claim. Check your own policy for details.' },
  { q: 'What should I do while I wait for you to arrive?', a: 'Turn off the main water valve if water is actively spreading, move valuables away from wet areas, and take photos for your insurance claim.' },
  { q: 'Is leak detection the same as leak repair?', a: 'No. Detection finds and marks the leak; the repair is a separate step, usually done by a plumber. Accurate detection keeps the repair small.' },
  ...services[0].faqs.slice(0, 2),
];
