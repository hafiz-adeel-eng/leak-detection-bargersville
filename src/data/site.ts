export const site = {
  name: 'Leak Detection Bargersville',
  url: 'https://www.leakdetectionbargersville.com',
  // Placeholder number: replace with the real business line before launch.
  phone: '(317) 555-0199',
  phoneHref: '+13175550199',
  email: 'adeelnaqshbandi@gmail.com',
  city: 'Bargersville',
  region: 'IN',
  postalCode: '46106',
  county: 'Johnson County',
  hours: 'Open 24/7 for emergencies',
};

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  icon: string;
  short: string;
  title: string;
  description: string;
  answer: string;
  signs: string[];
  method: { name: string; text: string }[];
  body: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: 'slab-leak-detection',
    name: 'Slab Leak Detection',
    icon: 'slab',
    short: 'Warm spots on the floor or a meter that keeps running? We trace the line under the concrete.',
    title: 'Slab Leak Detection in Bargersville, IN',
    description:
      'Non-invasive slab leak detection in Bargersville and Johnson County. We pinpoint leaks under concrete with acoustic and thermal equipment, with no guesswork digging.',
    answer:
      'A slab leak is a broken water line running under your home’s concrete foundation. We find it without breaking the floor. We pressure test each line, then use ground microphones and thermal imaging to mark the spot, usually within inches, so your plumber opens only one small section.',
    signs: [
      'Warm or damp spots on tile, wood or carpet',
      'Sound of running water when every fixture is off',
      'Water meter dial moving with no water in use',
      'A water bill that jumps for no clear reason',
      'New cracks in flooring or baseboards that swell',
    ],
    method: [
      { name: 'Meter & isolation test', text: 'Confirms there is a leak and whether it is on the hot or cold side.' },
      { name: 'Line pressure test', text: 'Shows which line is losing pressure.' },
      { name: 'Acoustic listening', text: 'Ground microphones pick up the hiss of water escaping under the slab.' },
      { name: 'Thermal imaging', text: 'Hot-water leaks show up as a warm bloom on the floor.' },
    ],
    body: [
      'Most homes around Bargersville are built on concrete slabs, with copper or PEX water lines running underneath. Over the years, shifting soil, water chemistry and friction against the concrete can wear a pinhole in those lines. Because the water drains into the ground, you often won’t see anything until the damage has spread.',
      'Guessing is expensive. Breaking up the floor in the wrong place means extra tile, extra concrete work and extra days without a kitchen. Our job is to take the guesswork out, so the repair starts in the right spot the first time.',
    ],
    faqs: [
      { q: 'How do I know if I have a slab leak?', a: 'The most common signs are warm spots on the floor, the sound of running water when nothing is on, and a water meter that keeps moving. A sudden jump in your water bill is another clue.' },
      { q: 'Do you have to break my floor to find a slab leak?', a: 'No. Detection is non-invasive. We mark the leak location on the floor; the only opening is made later by your plumber for the repair, and it is usually about one square foot.' },
      { q: 'Is a slab leak an emergency?', a: 'A hot-water slab leak should be handled quickly because it wastes energy and can damage flooring and the foundation. Shut off the water heater supply and call us.' },
    ],
  },
  {
    slug: 'water-line-leak-detection',
    name: 'Water Line Leak Detection',
    icon: 'pipe',
    short: 'Soggy yard or a high water bill. We find breaks between the meter and the house.',
    title: 'Water Line Leak Detection in Bargersville, IN',
    description:
      'Find main water line leaks between the meter and your home in Bargersville, Greenwood and Franklin. Acoustic and tracer testing, with the leak marked on your lawn.',
    answer:
      'A water line leak is a break in the underground pipe that brings water from the meter to your house. We locate the line, then listen along it with ground microphones to find the loudest point, and mark it on the lawn so only a small hole is dug.',
    signs: [
      'A patch of lawn that stays soggy or unusually green',
      'Low water pressure throughout the house',
      'Water meter running with everything off',
      'Muddy water or air in the taps',
    ],
    method: [
      { name: 'Line location', text: 'We trace the path of the pipe from the meter to the house.' },
      { name: 'Acoustic listening', text: 'We listen along the line for the sound of escaping water.' },
      { name: 'Tracer gas (when needed)', text: 'Safe hydrogen/nitrogen gas rises through the soil at the leak on plastic lines that are hard to hear.' },
    ],
    body: [
      'Service lines in older neighborhoods are often galvanized steel or copper, while newer subdivisions use PEX or PVC. Each one fails differently and sounds different underground, which is why we use more than one method.',
      'Once the leak is marked, you or your plumber can make a small repair instead of replacing the whole line. You also get a report with photos showing where we found it.',
    ],
    faqs: [
      { q: 'Who is responsible for the water line leak, me or the utility?', a: 'In most cases the homeowner owns the line from the meter to the house, and the utility owns the line up to the meter. Check with your water provider if the leak is close to the meter.' },
      { q: 'Can you find a leak in a plastic water line?', a: 'Yes. Plastic lines are quieter, so we add tracer gas testing when acoustic listening alone isn’t enough.' },
    ],
  },
  {
    slug: 'pool-leak-detection',
    name: 'Pool & Spa Leak Detection',
    icon: 'pool',
    short: 'Dye testing, pressure testing and underwater listening for shells, returns and skimmers.',
    title: 'Pool Leak Detection in Bargersville, IN',
    description:
      'Pool and spa leak detection in Bargersville and Johnson County. Bucket, dye and pressure testing to find leaks in the shell, lights, skimmers and plumbing lines.',
    answer:
      'If your pool loses more than about a quarter inch of water a day beyond normal evaporation, it probably has a leak. We run a bucket test to confirm it, then use dye, pressure testing and underwater microphones to find leaks in the shell, fittings and underground plumbing.',
    signs: [
      'Water level dropping faster than normal',
      'Needing to top up the pool several times a week',
      'Cracks in the shell or loose tiles',
      'Wet spots or sinking areas around the pool deck',
      'Algae returning soon after treatment',
    ],
    method: [
      { name: 'Bucket test', text: 'Separates evaporation from a real leak.' },
      { name: 'Dye testing', text: 'Colored dye is pulled toward cracks, lights and fittings.' },
      { name: 'Pressure testing', text: 'Each return, skimmer and main drain line is tested one by one.' },
    ],
    body: [
      'Indiana’s freeze and thaw cycles are hard on pools. Fittings, light niches and skimmer throats move a little every winter, and small gaps become leaks by summer.',
      'We check the whole system, not just the shell, so you know whether the fix is a simple patch or a plumbing repair.',
    ],
    faqs: [
      { q: 'How much water loss is normal for a pool?', a: 'Evaporation in summer is usually around a quarter inch per day. More than that, especially with the pump off, points to a leak.' },
      { q: 'Should the pool be full for testing?', a: 'Yes, please keep the pool at its normal level and the equipment working so we can test every line.' },
    ],
  },
  {
    slug: 'thermal-imaging',
    name: 'Thermal Imaging Inspection',
    icon: 'thermal',
    short: 'Infrared cameras spot moisture behind drywall and under flooring without cutting.',
    title: 'Thermal Imaging Leak Inspection | Bargersville, IN',
    description:
      'Infrared thermal imaging to find hidden moisture and leaks behind walls, ceilings and floors in Bargersville homes, without opening them up.',
    answer:
      'Thermal imaging uses an infrared camera to show temperature differences on walls, ceilings and floors. Wet materials read cooler (or warmer for hot-water leaks), so hidden moisture shows up on the screen without cutting into anything.',
    signs: [
      'Stains or bubbling paint on ceilings or walls',
      'Musty smell with no visible source',
      'Soft or swollen drywall or baseboards',
      'Water damage below a bathroom or laundry room',
    ],
    method: [
      { name: 'Infrared scan', text: 'We scan the affected area and the rooms around it.' },
      { name: 'Moisture meter', text: 'Readings confirm what the camera shows.' },
      { name: 'Photo report', text: 'Thermal and normal photos side by side for your records.' },
    ],
    body: [
      'Thermal imaging is also useful before buying a home, after a storm, or when an insurance adjuster needs proof of where the water is coming from.',
    ],
    faqs: [
      { q: 'Can a thermal camera see through walls?', a: 'No. It reads surface temperature. Moisture inside a wall changes that surface temperature, which is what the camera picks up.' },
    ],
  },
  {
    slug: 'shower-wall-leak-detection',
    name: 'Shower & Wall Leaks',
    icon: 'shower',
    short: 'Failed shower pans, supply lines and drains leaking into walls and ceilings.',
    title: 'Shower & Wall Leak Detection in Bargersville, IN',
    description:
      'Find leaks from shower pans, supply lines and drains inside walls and ceilings in Bargersville. Non-invasive testing and a clear report of the source.',
    answer:
      'Shower and wall leaks usually come from a failed shower pan, cracked grout, a leaking valve or a drain connection. We test each one separately, with flood tests, moisture readings and thermal imaging, so you fix the actual source instead of re-grouting and hoping.',
    signs: [
      'Stains on the ceiling below a bathroom',
      'Loose tiles or grout that keeps cracking',
      'Peeling paint or swollen trim outside the shower',
      'Musty smell in the bathroom',
    ],
    method: [
      { name: 'Flood test', text: 'Checks whether the shower pan holds water.' },
      { name: 'Supply and drain test', text: 'Separates plumbing leaks from splash and grout problems.' },
      { name: 'Moisture mapping', text: 'Shows how far the water has spread.' },
    ],
    body: [
      'A bathroom leak can look the same whether it comes from the pan, the valve or the drain. Testing them one at a time saves you from paying for the wrong repair.',
    ],
    faqs: [
      { q: 'Is my shower leak from the grout or the pipes?', a: 'That is exactly what our tests separate. A flood test of the pan and a pressure test of the supply lines show which one is failing.' },
    ],
  },
  {
    slug: 'irrigation-leak-detection',
    name: 'Irrigation Leak Detection',
    icon: 'sprinkler',
    short: 'Sprinkler zones losing pressure and spongy lawn spots, traced to the broken head or line.',
    title: 'Irrigation & Sprinkler Leak Detection | Bargersville, IN',
    description:
      'Sprinkler and irrigation leak detection in Bargersville and Johnson County. We find broken heads, valves and underground lines by zone.',
    answer:
      'An irrigation leak is usually a cracked line, broken head or stuck valve in one zone. We run each zone, check pressure and flow, and trace the underground line to find the break, so only one small spot of lawn is dug up.',
    signs: [
      'Soggy or sunken spots in the lawn',
      'One zone with weak spray',
      'Water bill rising in summer months',
      'Water bubbling up near a valve box',
    ],
    method: [
      { name: 'Zone-by-zone test', text: 'Narrows the leak to one zone.' },
      { name: 'Valve inspection', text: 'Checks for valves that don’t fully close.' },
      { name: 'Line tracing', text: 'Follows the pipe to the break.' },
    ],
    body: [
      'Irrigation systems are often buried shallow and get hit by mowers, aerators and roots. After an Indiana winter, spring start-up is the most common time to find leaks.',
    ],
    faqs: [
      { q: 'When should I check my sprinkler system for leaks?', a: 'At spring start-up and any time your water bill jumps during the watering season.' },
    ],
  },
];

export type Area = { slug: string; name: string; note: string };

export const areas: Area[] = [
  { slug: 'bargersville-in', name: 'Bargersville', note: 'Bargersville is our home base, so homes here get the fastest scheduling. Many newer subdivisions around town are built on slabs with PEX lines, and older homes near the town center often still have copper or galvanized service lines.' },
  { slug: 'greenwood-in', name: 'Greenwood', note: 'Greenwood is the largest city in Johnson County, with a mix of older neighborhoods and newer slab-built subdivisions. We handle slab, water line and irrigation leaks across the city.' },
  { slug: 'franklin-in', name: 'Franklin', note: 'Franklin is the Johnson County seat. Its historic homes near downtown often have older pipes and crawl spaces, while newer builds on the edge of town sit on slabs. We work with both.' },
  { slug: 'center-grove-in', name: 'Center Grove', note: 'The Center Grove area in White River Township has many larger homes with pools and irrigation systems. That means more pool and sprinkler leak calls, along with slab leaks.' },
  { slug: 'whiteland-in', name: 'Whiteland', note: 'We serve Whiteland and New Whiteland for slab, water line and bathroom leaks, with same-day visits when our schedule allows.' },
  { slug: 'trafalgar-in', name: 'Trafalgar', note: 'Rural properties around Trafalgar often have long service lines and wells. We trace long underground runs and mark leaks so you avoid digging up the whole line.' },
];

export const generalFaqs: Faq[] = [
  { q: 'What does a leak detection company do?', a: 'We find hidden water leaks without tearing up your home. We use pressure tests, acoustic listening and thermal imaging to pinpoint the leak, mark it, and give you a report. Your plumber then makes a small, targeted repair.' },
  { q: 'How long does a leak detection visit take?', a: 'Most homes take one to three hours, depending on how many lines need testing and how hard the leak is to reach.' },
  { q: 'Will homeowners insurance cover the leak?', a: 'Many policies cover the water damage and the cost of getting access to the leak, but not the broken pipe itself. Our photo report gives your adjuster the documentation they usually ask for. Check your own policy for details.' },
  { q: 'What should I do while I wait for you to arrive?', a: 'Turn off the main water valve if water is actively spreading, move valuables away from wet areas, and take photos for your insurance claim.' },
  { q: 'Do you repair the leak too?', a: 'Our focus is finding the leak accurately. We can recommend trusted local plumbers for the repair, and our report tells them exactly where to work.' },
  ...services[0].faqs.slice(0, 2),
];
