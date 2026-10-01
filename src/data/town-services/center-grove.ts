import type { TownServicePage } from '../townServices';

// Center Grove (White River Township): newer suburban homes, PEX and other plastic pipe,
// pools, in-ground sprinklers and slabs. Water from Indiana American Water or the Bargersville utility.
const cg = { town: 'center-grove', townName: 'Center Grove', published: '2026-10-01', updated: '2026-10-01' };

export const centerGrovePages: TownServicePage[] = [
  // ───────────────────────────── Slab leak detection ─────────────────────────────
  {
    ...cg,
    slug: 'slab-leak-detection',
    kind: 'detection',
    service: 'slab-leak-detection',
    image: 'slab-leak-detection',
    imageAlt: 'Acoustic sensor on a tiled slab floor in a newer suburban home',
    title: 'Slab Leak Detection in Center Grove, IN | PEX & Copper',
    description: 'Slab leak detection in Center Grove and White River Township: copper or PEX lines under the slab, found with acoustic, thermal and tracer gas testing.',
    h1: 'Slab Leak Detection in Center Grove, IN',
    answer: 'Most Center Grove homes were built on concrete slabs over the last few decades, with copper or PEX water lines underneath. Copper leaks are usually loud enough to hear through the floor; PEX leaks are often quiet, so we add thermal imaging and tracer gas. Either way, we isolate the line, prove it’s leaking with a pressure test and mark the spot on your floor, without breaking anything to search.',
    primaryKeyword: 'slab leak detection center grove',
    secondaryKeywords: ['slab leak center grove indiana', 'white river township slab leak', 'pex slab leak', 'leak under slab greenwood 46143', 'slab leak signs'],
    glance: [
      { label: 'Common pipe', value: 'Copper in many homes from the 1990s and earlier; PEX in many newer homes' },
      { label: 'Hard part', value: 'PEX leaks under a slab can be quiet' },
      { label: 'Methods', value: 'Isolation, pressure test, acoustic, thermal, tracer gas' },
      { label: 'ZIP codes', value: '46142, 46143 and some 46106 addresses' },
    ],
    blocks: [
      {
        h2: 'Copper or PEX under your slab changes the search',
        table: {
          head: ['', 'Copper', 'PEX'],
          rows: [
            ['Common in', 'Many homes built before the 2000s', 'Many homes built since'],
            ['How it leaks', 'Pinholes from wear and hard water; rubbing against gravel or concrete', 'Fittings and crimp rings, damage during construction, rarely the pipe itself'],
            ['Sound', 'Usually loud enough to hear through the floor', 'Often quiet; plastic carries little sound'],
            ['Main methods', 'Acoustic listening, thermal imaging', 'Tracer gas, thermal imaging, pressure testing'],
          ],
        },
        after: ['If you don’t know which you have, look at the pipes coming out of the water heater or under a sink: copper is orange-brown metal, PEX is flexible plastic, usually red, blue or white.'],
      },
      {
        h2: 'Signs of a slab leak',
        list: [
          'A **warm patch** on tile or wood, often in a kitchen, laundry room or hallway.',
          'The meter’s leak indicator **turning with everything off**.',
          'A **water heater that runs nonstop**, or a gas bill that climbs with the water bill.',
          'A faint sound of **running water under the floor** at night.',
          'Damp carpet or **swelling baseboards** away from any fixture.',
        ],
        after: ['Many Center Grove homes also have sprinklers or a pool on the same meter, so a high bill alone doesn’t prove a slab leak. The test below separates them.'],
      },
      {
        h2: 'Rule out the sprinklers and pool first',
        id: 'check',
        steps: [
          { t: 'Turn everything off', d: 'All indoor water, the sprinkler controller and the pool auto-fill.' },
          { t: 'Close the irrigation shutoff', d: 'Usually near the backflow preventer by the house. If the meter stops, the sprinklers are leaking; see [sprinkler leak detection in Center Grove](/service-area/center-grove/sprinkler-leak-detection/).' },
          { t: 'Close the house main shutoff', d: 'If the meter stops now, the leak is inside the house or under the slab. If it keeps going, it’s the buried service line; see [water line leak detection in Center Grove](/service-area/center-grove/water-line-leak-detection/).' },
          { t: 'Isolate the water heater', d: 'Close the cold inlet valve. If the meter stops, the leak is on the hot side, which matches a warm floor.' },
        ],
      },
      {
        h2: 'How we pinpoint it',
        cards: [
          { t: 'Isolate', d: 'Valves separate hot, cold and branch lines. Manifold plumbing in newer homes makes this faster: each line can often be shut off by itself.' },
          { t: 'Pressure test', d: 'The suspect line is pressurized and watched on a gauge to prove it’s leaking.' },
          { t: 'Trace the route', d: 'We find where the line runs under the slab so testing happens along the pipe.' },
          { t: 'Listen, image or gas', d: 'Acoustic listening for copper, thermal imaging for hot lines, and tracer gas for quiet PEX leaks.' },
          { t: 'Mark it', d: 'The spot is marked on the floor, with photos and readings for the repair.' },
        ],
      },
      {
        h2: 'After the leak is found',
        paras: [
          'Our plumbing partner can repair it through one small opening, or reroute the line out of the slab, which is often simple in homes with a PEX manifold. See [slab leak repair in Center Grove](/service-area/center-grove/slab-leak-repair/).',
        ],
      },
    ],
    faqs: [
      { q: 'Can you find a PEX leak under a slab?', a: 'Yes. PEX leaks are often too quiet to hear clearly, so we combine pressure testing and line isolation with thermal imaging and tracer gas, which escapes at the leak and is detected at the floor surface.' },
      { q: 'How do I know the leak isn’t my sprinklers?', a: 'Close the irrigation shutoff with everything else off. If the meter stops, the sprinkler system is leaking. If it keeps moving, close the house main to tell a slab leak from a service line leak.' },
      { q: 'Do newer homes really get slab leaks?', a: 'Less often than older copper homes, but yes. Fittings, crimp rings and pipe damaged during construction can leak under the slab years later.' },
      { q: 'Is my home in your service area?', a: 'Yes. Center Grove and White River Township are right next to our base in Bargersville, including Greenwood 46142 and 46143 and Bargersville 46106 addresses.' },
    ],
    guides: ['how-to-find-a-slab-leak', 'slab-leak-repair-cost', 'water-heater-leaking', 'smart-water-leak-detectors'],
  },

  // ───────────────────────────── Slab leak repair ─────────────────────────────
  {
    ...cg,
    slug: 'slab-leak-repair',
    kind: 'repair',
    service: 'slab-leak-detection',
    image: 'slab-leak-detection',
    imageAlt: 'New PEX line run through a wall to bypass a leaking pipe under a slab',
    title: 'Slab Leak Repair in Center Grove, IN | Fix or Bypass',
    description: 'Slab leak repair in Center Grove, IN: spot repair at the marked leak or a reroute that bypasses the slab, often simple in homes with PEX manifolds.',
    h1: 'Slab Leak Repair in Center Grove, IN',
    answer: 'After the leak is pinpointed, Center Grove homes have two good repair paths: a spot repair through one small opening in the floor, or a reroute that runs a new line through the walls or attic and leaves the old one under the slab. Many newer homes have a PEX manifold that feeds each fixture with its own line, which makes rerouting just that one line straightforward. Our plumbing partner handles either.',
    primaryKeyword: 'slab leak repair center grove',
    secondaryKeywords: ['slab leak repair center grove indiana', 'slab leak reroute pex', 'slab leak repair white river township', 'fix slab leak without breaking floor', 'slab leak plumber'],
    glance: [
      { label: 'Spot repair', value: 'One opening at the mark, section replaced, slab patched' },
      { label: 'Reroute', value: 'New line through walls or attic, old line abandoned' },
      { label: 'Manifold homes', value: 'One fixture line can be rerouted on its own' },
      { label: 'Insurance', value: 'Often covers access and damage, not the pipe itself' },
    ],
    blocks: [
      {
        h2: 'Why manifold plumbing makes rerouting easier',
        paras: [
          'Many homes built since the 2000s use a **PEX manifold**: one panel, often near the water heater, with a separate line running to each fixture. When one of those lines leaks under the slab, it can be capped at the manifold and replaced with a new line run through the walls or attic to that one fixture. Nothing else in the house is touched.',
          'Older Center Grove homes with copper branch plumbing can be rerouted too, but the new line usually has to serve several fixtures, so it’s a bigger job.',
        ],
      },
      {
        h2: 'Choosing between the two',
        table: {
          head: ['Situation', 'Better fit'],
          rows: [
            ['Single leak, accessible spot, pipe in good shape', 'Spot repair'],
            ['Leak under cabinets, an island or large tile', 'Reroute'],
            ['PEX manifold home, one fixture line leaking', 'Reroute that line'],
            ['Copper line with a second pinhole', 'Reroute or replace that run'],
            ['Polybutylene anywhere in the house', 'Plan a repipe; see [polybutylene pipe replacement](/guides/polybutylene-pipe-replacement/)'],
          ],
        },
      },
      {
        h2: 'The spot repair, step by step',
        steps: [
          { t: 'Leak pinpointed', d: 'See [slab leak detection in Center Grove](/service-area/center-grove/slab-leak-detection/). The floor is opened once, at the mark.' },
          { t: 'Room protected', d: 'Plastic sheeting and dust control go up before any cutting.' },
          { t: 'Small access hole', d: 'The flooring and a small square of concrete are removed and the pipe is exposed.' },
          { t: 'Repair and retest', d: 'The section or fitting is replaced, and the line is pressure-tested with the hole still open.' },
          { t: 'Patch', d: 'Backfill, concrete patch, and the area is ready for flooring once it cures.' },
        ],
      },
      {
        h2: 'Flooring and finishes',
        paras: [
          'In many Center Grove homes the real cost of a slab repair is the floor on top: large-format tile, engineered hardwood or LVP running through several rooms. If the leak sits under a continuous floor, matching it after a spot repair can be hard, and a reroute that avoids the floor entirely can cost less overall. Ask for both prices.',
          'Keep a few spare boxes of flooring if you have them; they make patching much easier.',
        ],
      },
      {
        h2: 'Cost and insurance',
        paras: [
          'National guides put a typical single slab leak repair at about **$2,000 to $4,000**, spot repairs around **$1,500 to $3,500**, and reroutes about **$600 to $7,500** depending on length and route. A single-fixture PEX reroute is usually at the lower end. See [slab leak repair cost](/guides/slab-leak-repair-cost/).',
          'Many homeowners policies cover access and resulting water damage but not the pipe. See [does homeowners insurance cover slab leaks?](/guides/does-insurance-cover-slab-leaks/).',
        ],
      },
    ],
    faqs: [
      { q: 'Can just one line be rerouted?', a: 'In homes with a PEX manifold, yes. The leaking line is capped at the manifold and a new line is run to that fixture through the walls or attic.' },
      { q: 'Is a reroute better than breaking the slab?', a: 'Often, when the leak is under cabinets or continuous flooring, or the pipe is old copper. A spot repair is usually the better value for a first leak in an easy spot.' },
      { q: 'Do you repair slab leaks in Center Grove?', a: 'Yes. We pinpoint the leak and our plumbing partner makes the repair, or we give your own plumber the marked spot and report.' },
      { q: 'How long does a reroute take?', a: 'A single-line PEX reroute is often done in a day. Larger copper reroutes can take one to two days.' },
    ],
    guides: ['slab-leak-repair-options', 'slab-leak-repair-cost', 'polybutylene-pipe-replacement', 'whole-house-repipe-cost'],
  },

  // ───────────────────────────── Water line leak detection ─────────────────────────────
  {
    ...cg,
    slug: 'water-line-leak-detection',
    kind: 'detection',
    service: 'underground-water-leak-detection',
    image: 'underground-water-leak-detection',
    imageAlt: 'Tracer gas sensor moved over a lawn above a plastic water service line',
    title: 'Water Line Leak Detection in Center Grove, IN',
    description: 'Water line leak detection in Center Grove, IN: a wet yard or a meter that keeps turning. Plastic service lines found with tracer gas and marked for one dig.',
    h1: 'Water Line Leak Detection in Center Grove, IN',
    answer: 'Most Center Grove homes have a plastic (PE) water service line from the curb to the house, and plastic carries very little sound. That’s why yard leaks here are often missed by listening alone. We confirm the leak with your meter, rule out the sprinklers, trace the line and use tracer gas, a safe hydrogen mix that rises through the soil at the leak, to mark the exact spot.',
    primaryKeyword: 'water line leak detection center grove',
    secondaryKeywords: ['underground water leak center grove', 'water service line leak white river township', 'tracer gas leak detection', 'plastic water line leak', 'yard water leak greenwood 46143'],
    glance: [
      { label: 'Typical line', value: 'Plastic (PE), which needs tracer gas more often than metal' },
      { label: 'Don’t confuse with', value: 'Sprinkler mainlines running along the same yard' },
      { label: 'Utilities', value: 'Indiana American Water or the Bargersville utility, by address' },
      { label: 'Your part', value: 'From the utility’s shutoff near the curb to the house' },
    ],
    blocks: [
      {
        h2: 'Service line or sprinkler line?',
        paras: [
          'In Center Grove yards, the water service line and the sprinkler mainline often run close together, and both can leave a wet strip in the lawn. The meter tells them apart. With everything off, close the **irrigation shutoff**: if the meter stops, it was the sprinkler system. If it keeps moving, close the **house main**: if the meter still moves, the leak is in the service line.',
          'If it was the sprinklers, see [sprinkler leak detection in Center Grove](/service-area/center-grove/sprinkler-leak-detection/).',
        ],
      },
      {
        h2: 'Why plastic lines need tracer gas',
        cards: [
          { t: 'Metal carries sound', d: 'On copper or steel, a ground microphone hears the leak clearly and the sound peaks over the break.' },
          { t: 'Plastic muffles it', d: 'PE and PVC absorb most of the sound, especially in damp clay. Listening alone can miss the spot by many feet.' },
          { t: 'Gas finds the gap', d: 'A safe mix of 5% hydrogen in nitrogen is pushed into the drained line. Hydrogen escapes at the leak, rises through the soil and is picked up by a sensor at the surface.' },
        ],
      },
      {
        h2: 'Signs of a service line leak',
        list: [
          'Meter moving with both the irrigation and house shutoffs closed.',
          'A soft, soggy or greener strip between the curb and the house.',
          'Lower pressure everywhere in the house.',
          'Water around the meter pit or curb box (call your utility first if it’s right at the meter).',
          'A higher bill in winter, when sprinklers are off and can’t be the cause.',
        ],
      },
      {
        h2: 'How we find it',
        steps: [
          { t: 'Confirm', d: 'Meter tests with the irrigation and house shutoffs closed.' },
          { t: 'Trace', d: 'We locate and mark the route of the line, which in newer neighborhoods may curve around driveways and landscaping.' },
          { t: 'Test', d: 'Acoustic listening on any metal sections; tracer gas along plastic lines.' },
          { t: 'Mark', d: 'The leak is flagged or painted, with photos for the repair.' },
        ],
      },
      {
        h2: 'Whose line, and who to call',
        paras: [
          'Depending on your address, Center Grove water comes from **Indiana American Water** or the **Town of Bargersville** water utility, which serves customers in White River and Union Townships. The utility owns its main and the line up to its shutoff near the curb; the homeowner owns the line from there to the house.',
          'Before the line is dug up, Indiana law requires an **Indiana 811** request at least two full working days ahead. Your plumber places it for the repair. See [water line repair in Center Grove](/service-area/center-grove/water-line-repair/).',
        ],
      },
    ],
    faqs: [
      { q: 'Why couldn’t anyone hear my water line leak?', a: 'Plastic service lines carry very little sound, especially in damp clay soil. Tracer gas, which escapes at the leak and is detected at the surface, finds leaks that listening misses.' },
      { q: 'Is tracer gas safe for my lawn and drinking water?', a: 'Yes. It’s a mix of 5% hydrogen in nitrogen, non-toxic and non-flammable at that concentration. The line is flushed afterwards.' },
      { q: 'How do I tell a service line leak from a sprinkler leak?', a: 'With everything off, close the irrigation shutoff. If the meter stops, it’s the sprinklers. If it keeps moving, close the house main; a meter that still moves means the service line is leaking.' },
      { q: 'Who owns the water line in Center Grove?', a: 'The utility owns the line up to its shutoff near the curb. The homeowner owns the line from there to the house.' },
    ],
    guides: ['how-to-find-an-underground-water-leak', 'water-leak-under-driveway', 'how-to-find-a-sprinkler-leak', 'leak-detection-methods'],
  },

  // ───────────────────────────── Water line repair ─────────────────────────────
  {
    ...cg,
    slug: 'water-line-repair',
    kind: 'repair',
    service: 'underground-water-leak-detection',
    image: 'underground-water-leak-detection',
    imageAlt: 'Small pit dug in a front yard to repair a plastic water line at the marked leak',
    title: 'Water Line Repair in Center Grove, IN | One Small Dig',
    description: 'Water line repair in Center Grove, IN: plastic service lines fixed at the marked leak through one small hole, or replaced when fittings keep failing.',
    h1: 'Water Line Repair in Center Grove, IN',
    answer: 'Most water line repairs in Center Grove are on plastic service lines: a cracked fitting, a line damaged by landscaping or fence posts, or a joint that pulled apart as the clay soil moved. Once the leak is marked, our plumbing partner digs one small hole, repairs the line and tests it before backfilling. Full replacement is only needed when the line keeps failing.',
    primaryKeyword: 'water line repair center grove',
    secondaryKeywords: ['water line repair center grove indiana', 'water service line repair white river township', 'plastic water line repair', 'main water line repair', 'water line replacement'],
    glance: [
      { label: 'Usual repair', value: 'One small dig at the marked leak' },
      { label: 'Common causes', value: 'Landscaping and fence posts, fittings, soil movement' },
      { label: 'Before digging', value: 'Indiana 811 request two full working days ahead' },
      { label: 'Replace when', value: 'Repeat leaks, crushed line, or an old material' },
    ],
    blocks: [
      {
        h2: 'What usually breaks a Center Grove water line',
        cards: [
          { t: 'Landscaping and fences', d: 'Fence posts, tree planting, edging and new patios are a leading cause of damage to shallow plastic lines in newer yards.' },
          { t: 'Fittings and couplings', d: 'Compression and barbed fittings at the meter or the house can loosen or crack.' },
          { t: 'Soil movement', d: 'Clay that swells and shrinks can pull joints apart and stress the line where it enters the foundation.' },
          { t: 'Tree roots', d: 'Roots don’t usually break a pressurized line, but they can crush or wrap it as trees in newer neighborhoods mature.' },
        ],
      },
      {
        h2: 'The repair, step by step',
        steps: [
          { t: 'Leak marked', d: 'Located with tracer gas or listening. See [water line leak detection in Center Grove](/service-area/center-grove/water-line-leak-detection/).' },
          { t: '811 locate', d: 'Gas, electric, cable and fiber lines are marked before digging, as Indiana law requires.' },
          { t: 'Small excavation', d: 'One hole at the mark, sized to work on the pipe safely.' },
          { t: 'Repair', d: 'The damaged section or fitting is replaced with new pipe and approved couplings.' },
          { t: 'Test and restore', d: 'The line is pressurized and checked, then backfilled and the sod replaced.' },
        ],
      },
      {
        h2: 'When replacement makes more sense',
        table: {
          head: ['Situation', 'Why replace'],
          rows: [
            ['Second or third leak on the same line', 'The line itself is failing, not one spot'],
            ['Line crushed by roots or heavy equipment', 'The damage runs along a long stretch'],
            ['Polybutylene service line', 'This material is known to fail; plan to replace it'],
            ['Line too shallow', 'A new line below the 30–36 inch frost line avoids winter breaks'],
          ],
        },
        after: ['Replacement can be trenched or trenchless (pulled between two pits). National guides put it at roughly **$2,000 to $5,800** trenched and **$3,200 to $8,000** trenchless. See [water line replacement cost in Indiana](/guides/water-line-replacement-cost-indiana/).'],
      },
      {
        h2: 'Driveways, patios and HOA landscaping',
        paras: [
          'Many Center Grove lines run under a driveway or a front walk, and many neighborhoods have HOA landscaping rules. A pinpointed leak keeps the dig small, and if the leak is under concrete, boring a short new section beside it can avoid cutting the driveway. See [water leak under the driveway](/guides/water-leak-under-driveway/).',
        ],
      },
      {
        h2: 'Your utility’s part',
        paras: [
          'If the leak is at the meter or the utility’s shutoff near the curb, it’s usually the utility’s to repair: **Indiana American Water** or the **Town of Bargersville** water utility, depending on your address. Past that valve, the line is yours.',
        ],
      },
    ],
    faqs: [
      { q: 'Can my plastic water line be repaired, or does it need replacing?', a: 'Usually it can be repaired at the marked spot with one small dig. Replacement makes sense when the line has leaked repeatedly, was crushed, or is polybutylene.' },
      { q: 'A fence installer hit my water line. What now?', a: 'Close the main shutoff in the house, or ask the utility to close its valve near the curb if the leak is before your shutoff. The leak is usually right at the post, but we can confirm it before digging.' },
      { q: 'Do you handle 811?', a: 'The plumber making the repair places the Indiana 811 request at least two full working days before digging.' },
      { q: 'How long does a water line repair take?', a: 'A single repair at a marked spot is usually done in a few hours once utilities are marked.' },
    ],
    guides: ['water-line-replacement-cost-indiana', 'water-leak-under-driveway', 'how-to-find-an-underground-water-leak', 'polybutylene-pipe-replacement'],
  },

  // ───────────────────────────── Pool leak detection ─────────────────────────────
  {
    ...cg,
    slug: 'pool-leak-detection',
    kind: 'detection',
    service: 'pool-spa-leak-detection',
    image: 'pool-spa-leak-detection',
    imageAlt: 'Dye test at a pool light niche to find a leak in a backyard pool',
    title: 'Pool Leak Detection in Center Grove, IN | Pools & Spas',
    description: 'Pool leak detection in Center Grove, IN: a pool losing more than evaporation or an auto-fill that never stops. We test the shell, fittings and every line.',
    h1: 'Pool Leak Detection in Center Grove, IN',
    answer: 'Center Grove has one of the highest concentrations of backyard pools around Bargersville, and many have an auto-fill that hides a leak by quietly topping the pool up. If your water bill climbs in summer or the bucket test shows the pool losing more than evaporation, we test the shell, skimmers, returns, lights and main drain with dye and underwater listening, and pressure-test each buried line to the equipment pad.',
    primaryKeyword: 'pool leak detection center grove',
    secondaryKeywords: ['pool leak detection center grove indiana', 'pool leak white river township', 'pool auto fill running', 'spa leak detection', 'pool losing water'],
    glance: [
      { label: 'Hidden by', value: 'Auto-fill valves that keep the level steady while the bill climbs' },
      { label: 'Typical sources', value: 'Light niches, skimmer throats, returns, buried lines, liner tears' },
      { label: 'Tests', value: 'Bucket test, dye, underwater acoustic, line pressure tests' },
      { label: 'Season', value: 'Spring openings and the hottest summer weeks' },
    ],
    blocks: [
      {
        h2: 'Is the auto-fill hiding a leak?',
        paras: [
          'Many Center Grove pools have an **auto-fill** that keeps the water level steady. It’s convenient, and it also hides leaks: the pool looks fine while the meter runs. If your summer water bills are much higher than last year, or the auto-fill seems to run all the time, turn it off for a few days and do the bucket test below.',
          'Because most homes here feed the pool, the house and the sprinklers from one meter, a pool leak shows up on the same bill as everything else. Turning off the auto-fill and the sprinklers isolates the pool.',
        ],
      },
      {
        h2: 'The bucket test',
        steps: [
          { t: 'Turn off the auto-fill', d: 'Close its valve so it can’t add water during the test.' },
          { t: 'Set a bucket on the step', d: 'Fill it to match the pool level and mark both water lines.' },
          { t: 'Wait 24 hours', d: 'Run the pump as normal.' },
          { t: 'Compare', d: 'If the pool dropped more than the bucket, the difference is a leak.' },
          { t: 'Repeat with the pump off', d: 'More loss with the pump on suggests the return side; more with it off suggests the suction side or shell.' },
        ],
        after: ['Full instructions: [how to find a pool leak](/guides/how-to-find-a-pool-leak/).'],
      },
      {
        h2: 'Where Center Grove pools leak',
        table: {
          head: ['Spot', 'Why it leaks'],
          rows: [
            ['Light niche and conduit', 'Water follows the light cord conduit; a very common leak in in-ground pools'],
            ['Skimmer throat', 'The joint between skimmer and pool shell cracks with ground movement or freezing'],
            ['Return fittings', 'Seals and fittings loosen; leaks often show only with the pump running'],
            ['Buried return and suction lines', 'Joints under the deck crack from soil movement or freeze damage'],
            ['Vinyl liner', 'Tears along steps, corners and around fittings'],
            ['Equipment pad', 'Pump seals, filter o-rings and valves drip into the gravel'],
          ],
        },
      },
      {
        h2: 'How we test',
        list: [
          'Inspect the **equipment pad** and every visible connection first.',
          'Use **dye** at fittings, the light niche, steps and any cracks or liner seams.',
          'Listen underwater with a **hydrophone** for escaping water through the shell or fittings.',
          '**Plug and pressure-test** each return, suction and main drain line.',
          'On a failing line, **listen through the deck** to find the break before any concrete is cut.',
        ],
        after: ['The report lists every test, what passed, what failed, and photos of each leak, ready for your pool company or our partner.'],
      },
      {
        h2: 'Spas and swim spas',
        paras: [
          'Attached spas share the pool’s plumbing and often leak at the spillover or jet fittings. Standalone hot tubs and swim spas leak most often at pump seals, heater unions and jet bodies inside the cabinet. They’re tested the same way: isolate, pressure-test, dye-test and listen.',
        ],
      },
    ],
    faqs: [
      { q: 'How do I know if my pool is leaking if it has an auto-fill?', a: 'Turn the auto-fill off for the test, then compare the pool with a bucket of water on the step for 24 hours. If the pool loses more than the bucket, it’s leaking. A summer bill that keeps climbing is another sign.' },
      { q: 'Why is the light niche such a common leak?', a: 'The light sits in a niche connected to the deck by a conduit. Water can leak through the niche seal or follow the conduit out of the pool.' },
      { q: 'Can you find leaks in the lines under my deck?', a: 'Yes. Each line is plugged and pressure-tested. If one fails, we listen along it through the deck to pinpoint the break so only a small area is opened.' },
      { q: 'Do you test spas and hot tubs?', a: 'Yes, both attached spas and standalone hot tubs and swim spas.' },
    ],
    guides: ['how-to-find-a-pool-leak', 'why-is-my-water-bill-so-high', 'leak-detection-methods'],
  },

  // ───────────────────────────── Sprinkler leak detection ─────────────────────────────
  {
    ...cg,
    slug: 'sprinkler-leak-detection',
    kind: 'detection',
    service: 'irrigation-leak-detection',
    image: 'irrigation-leak-detection',
    imageAlt: 'Sprinkler zone valve box opened in a suburban lawn to check for a leak',
    title: 'Sprinkler Leak Detection in Center Grove, IN',
    description: 'Sprinkler leak detection in Center Grove, IN: wet zones, a valve that won’t shut off or a summer bill that jumps. We find mainline, valve and zone leaks.',
    h1: 'Sprinkler Leak Detection & Repair in Center Grove, IN',
    answer: 'Most Center Grove homes have an in-ground sprinkler system, and it’s the most common source of a mysterious summer water bill here. We separate the always-pressurized mainline from the zones, check the valves and backflow preventer, and pinpoint the break with acoustic listening or tracer gas, so the repair is one small hole in the lawn and not a dug-up zone.',
    primaryKeyword: 'sprinkler leak detection center grove',
    secondaryKeywords: ['sprinkler repair center grove indiana', 'irrigation leak white river township', 'sprinkler valve stuck on', 'sprinkler mainline leak', 'irrigation leak detection'],
    glance: [
      { label: 'Most common', value: 'Valves that won’t close, cracked laterals, mainline breaks, broken heads' },
      { label: 'Biggest waste', value: 'Mainline and valve leaks, which run 24 hours a day' },
      { label: 'Yearly rule', value: 'Testable backflow devices tested annually (327 IAC 8-10)' },
      { label: 'Separate meter?', value: 'Some homes have one; it makes isolating the system easy' },
    ],
    blocks: [
      {
        h2: 'Mainline, valve or zone',
        table: {
          head: ['Where', 'When it leaks', 'What you notice'],
          rows: [
            ['Mainline (house to valves)', 'All the time', 'Meter moves with the system off; one soggy spot that never dries'],
            ['Zone valve', 'All the time, through one zone', 'Water trickling from the lowest heads of one zone, wet valve box'],
            ['Zone lateral', 'Only when that zone runs', 'Weak heads, geysers or bubbling soil in one zone'],
            ['Backflow preventer', 'All the time once it fails', 'Dripping or spraying near the house, often after a freeze'],
          ],
        },
      },
      {
        h2: 'Five checks you can do',
        steps: [
          { t: 'Meter with the system off', d: 'If it moves, close the irrigation shutoff. If it stops, the mainline, a valve or the backflow device is leaking.' },
          { t: 'Separate irrigation meter', d: 'If your home has one, watch it with the controller off. Any movement is a sprinkler leak.' },
          { t: 'Run zones one at a time', d: 'Walk each zone looking for weak heads, geysers and soggy spots.' },
          { t: 'Open the valve boxes', d: 'Standing water or a hissing valve points to a valve that isn’t sealing.' },
          { t: 'Check the backflow preventer', d: 'Look for drips or spray, especially in spring.' },
        ],
        after: ['More detail: [how to find a sprinkler leak](/guides/how-to-find-a-sprinkler-leak/).'],
      },
      {
        h2: 'How we pinpoint it',
        cards: [
          { t: 'Isolate', d: 'Meter and valve tests separate the irrigation system from the house, then the mainline from the zones.' },
          { t: 'Locate the pipe', d: 'Mainlines and laterals are traced, since they rarely run where the heads suggest.' },
          { t: 'Listen or use gas', d: 'Acoustic listening on the pressurized mainline; tracer gas for quiet leaks in plastic pipe.' },
          { t: 'Repair', d: 'The break, valve or fitting is fixed through one small hole and the zone is tested.' },
        ],
      },
      {
        h2: 'Backflow testing and winterizing',
        paras: [
          'Indiana rules (327 IAC 8-10) require testable backflow prevention devices to be tested every year by a state-certified tester. Your utility, Indiana American Water or the Town of Bargersville, can tell you how results are reported. A device that fails its test is also a common leak.',
          'Before the first hard freeze, the system should be shut off and blown out with compressed air. Water left in the backflow device and shallow lines is behind most spring sprinkler leaks.',
        ],
      },
      {
        h2: 'Sprinkler leak or something else?',
        paras: [
          'If the meter keeps moving after you close the irrigation shutoff, the leak isn’t in the sprinklers. Close the house main next: if the meter stops, see [slab leak detection in Center Grove](/service-area/center-grove/slab-leak-detection/); if it keeps moving, see [water line leak detection in Center Grove](/service-area/center-grove/water-line-leak-detection/). If you have a pool, its auto-fill can also be the cause; see [pool leak detection in Center Grove](/service-area/center-grove/pool-leak-detection/).',
        ],
      },
    ],
    faqs: [
      { q: 'Why is my water bill so high in summer?', a: 'In Center Grove, the sprinkler system is the most common cause, followed by a pool auto-fill. A valve that doesn’t close or a mainline leak wastes water all day, even when the system isn’t running.' },
      { q: 'One zone keeps running after it shuts off. What is it?', a: 'Usually a valve that isn’t sealing, from debris or a worn diaphragm. Water drains out the lowest heads of that zone. The valve can be cleaned or replaced.' },
      { q: 'Does Indiana require backflow testing?', a: 'Yes. Indiana rules (327 IAC 8-10) require testable backflow prevention devices to be tested annually by a state-certified tester.' },
      { q: 'Do you repair sprinkler leaks too?', a: 'Yes. Once the leak is marked, the pipe, fitting or valve is repaired through a small hole and the zone is tested.' },
    ],
    guides: ['how-to-find-a-sprinkler-leak', 'why-is-my-water-bill-so-high', 'water-bill-leak-adjustment-indiana'],
  },

  // ───────────────────────────── Hidden leak detection ─────────────────────────────
  {
    ...cg,
    slug: 'hidden-leak-detection',
    kind: 'detection',
    service: 'hidden-water-leak-detection',
    image: 'hidden-water-leak-detection',
    imageAlt: 'Thermal camera aimed at a ceiling below an upstairs laundry room',
    title: 'Hidden Leak Detection in Center Grove, IN | Walls & Ceilings',
    description: 'Hidden leak detection in Center Grove, IN: stains under upstairs baths and laundry rooms, wet drywall or a musty smell. We find the source and mark it.',
    h1: 'Hidden Water Leak Detection in Center Grove, IN',
    answer: 'In Center Grove’s two-story homes, hidden leaks usually show up as a stain on a first-floor ceiling under an upstairs bathroom or laundry room, or wet drywall behind the kitchen. The cause is most often a shower pan, a toilet seal, a washer box, a refrigerator line or a PEX fitting. We separate supply and drain leaks with the meter, map the moisture with meters and a thermal camera, and mark the source.',
    primaryKeyword: 'hidden water leak detection center grove',
    secondaryKeywords: ['ceiling leak center grove indiana', 'leak in wall white river township', 'upstairs laundry room leak', 'shower leak detection', 'water stain on ceiling'],
    glance: [
      { label: 'Common setup', value: 'Two-story homes with upstairs baths and laundry rooms' },
      { label: 'Frequent sources', value: 'Shower pans, toilet seals, washer boxes, fridge lines, PEX fittings' },
      { label: 'Tools', value: 'Meter test, moisture meters, thermal imaging, flood and fixture tests' },
      { label: 'Result', value: 'Source marked for one small, well-placed opening' },
    ],
    blocks: [
      {
        h2: 'Upstairs laundry rooms and baths',
        paras: [
          'Many Center Grove homes put the laundry room and two or more bathrooms on the second floor. When any of them leaks, the first sign is usually a stain on the ceiling below, and the ceiling can be a room or two away from the source because water runs along joists before it drips.',
          'Washer boxes (the recessed box with the hot and cold valves and the drain), the washer’s hoses and the drain standpipe are common culprits. So are toilet wax rings, tub and shower drains, and shower pans.',
        ],
      },
      {
        h2: 'Common hidden leaks in newer homes',
        cards: [
          { t: 'PEX fittings', d: 'The pipe rarely fails, but crimp rings and fittings can seep, often behind a shower valve or at a manifold.' },
          { t: 'Refrigerator and ice maker lines', d: 'Thin plastic or braided lines behind the fridge crack or loosen and soak the floor and the ceiling below.' },
          { t: 'Shower pans and grout', d: 'A failed pan or cracked grout leaks only when the shower is used. See [shower pan leak](/guides/shower-pan-leak/).' },
          { t: 'Hose bibs', d: 'Outside faucets that weren’t drained can split inside the wall in a freeze. See [outside spigot leaking](/guides/outside-spigot-leaking/).' },
        ],
      },
      {
        h2: 'How we find it',
        steps: [
          { t: 'Meter test', d: 'A moving meter with everything off means a pressurized supply leak; a still meter points to a drain, shower or appliance.' },
          { t: 'Moisture map', d: 'Moisture meters on the ceiling, walls and floors above show where the water is concentrated.' },
          { t: 'Thermal imaging', d: 'Shows the shape of the wet area and traces hot-water lines.' },
          { t: 'Fixture tests', d: 'Run each upstairs fixture, the washer or the shower one at a time, or flood-test the shower pan.' },
          { t: 'Mark', d: 'The source is marked with photos and readings.' },
        ],
      },
      {
        h2: 'What the stain is telling you',
        table: {
          head: ['Clue', 'Likely source'],
          rows: [
            ['Ceiling stain after laundry days', 'Washer drain, standpipe or washer box valves'],
            ['Stain after showers only', 'Shower pan, valve, drain or grout'],
            ['Stain near the kitchen, growing slowly', 'Refrigerator or ice maker line, or dishwasher connection'],
            ['Wet spot that grows with no water in use', 'Pressurized supply line or PEX fitting'],
            ['Damp drywall low on an outside wall', 'Hose bib line, often after a freeze'],
          ],
        },
      },
      {
        h2: 'While you wait',
        list: [
          'If the ceiling sags, put a bucket under it and puncture the lowest point to drain it in one place.',
          'Stop using the fixture you suspect, and turn off the washer valves.',
          'If the meter is moving, close the main shutoff when you’re not using water.',
          'Photograph everything for insurance.',
        ],
        after: ['Once marked, the repair is one small opening. See [leaking pipe repair in Center Grove](/service-area/center-grove/pipe-leak-repair/). A smart leak sensor under the washer and fridge can catch the next one early; see [smart water leak detectors](/guides/smart-water-leak-detectors/).'],
      },
    ],
    faqs: [
      { q: 'Why is my first-floor ceiling leaking under the laundry room?', a: 'Common causes are the washer drain or standpipe, the hoses or valves in the washer box, or an overflowing drain. A meter test and running the washer while watching the ceiling usually narrow it down.' },
      { q: 'Do PEX pipes leak?', a: 'The pipe itself rarely does. Leaks usually come from crimp rings, fittings or damage during construction, often behind a shower valve or at the manifold.' },
      { q: 'Can you find a leak without cutting into the ceiling?', a: 'Yes. Moisture mapping, thermal imaging and fixture tests locate the source, and only the marked spot is opened for the repair.' },
      { q: 'Is a ceiling stain always a plumbing leak?', a: 'No. Roof leaks, condensation from HVAC lines and ice dams can stain ceilings too. Testing the plumbing first tells you whether to call a plumber or a roofer.' },
    ],
    guides: ['water-leaking-from-ceiling', 'refrigerator-water-line-leak', 'washing-machine-leaking', 'shower-pan-leak'],
  },

  // ───────────────────────────── Pipe leak repair ─────────────────────────────
  {
    ...cg,
    slug: 'pipe-leak-repair',
    kind: 'repair',
    service: 'hidden-water-leak-detection',
    image: 'thermal-imaging-inspection',
    imageAlt: 'Small drywall opening exposing a repaired PEX fitting inside a wall',
    title: 'Leaking Pipe Repair in Center Grove, IN | PEX & Copper',
    description: 'Leaking pipe repair in Center Grove, IN: PEX fittings, copper pinholes, frozen hose bib lines and polybutylene, repaired through one small opening at the leak.',
    h1: 'Leaking Pipe Repair in Center Grove, IN',
    answer: 'Pipe repairs in Center Grove homes are usually one of four things: a leaking PEX fitting or crimp ring, a pinhole in older copper, a hose bib line that froze inside the wall, or aging polybutylene in some homes from the 1980s and 1990s. We pinpoint the leak first, then our plumbing partner opens one small spot, replaces the part, tests the line and leaves it ready to close.',
    primaryKeyword: 'pipe leak repair center grove',
    secondaryKeywords: ['pex leak repair', 'burst pipe repair center grove indiana', 'polybutylene replacement white river township', 'frozen hose bib repair', 'leaking pipe in wall repair'],
    glance: [
      { label: 'Most common', value: 'PEX fittings, copper pinholes, frozen hose bibs, polybutylene' },
      { label: 'Approach', value: 'Pinpoint, open one spot, replace, test' },
      { label: 'Manifold homes', value: 'A bad line can be shut off at the manifold and replaced' },
      { label: 'Burst pipe now?', value: 'Close the main shutoff, then call' },
    ],
    blocks: [
      {
        h2: 'Repairs by pipe type',
        table: {
          head: ['Pipe', 'Typical failure', 'Usual repair'],
          rows: [
            ['PEX', 'Crimp ring or fitting seeps; damage from a nail or screw', 'Replace the fitting or a short section'],
            ['Copper', 'Pinholes from wear and hard water', 'Replace the section; replace the run after repeat pinholes'],
            ['Polybutylene (gray)', 'Fittings and pipe crack with age', 'Plan to replace all of it'],
            ['CPVC', 'Becomes brittle and cracks, often at fittings', 'Replace the section; consider replacing brittle runs'],
          ],
        },
      },
      {
        h2: 'If a pipe has burst',
        steps: [
          { t: 'Close the main shutoff', d: 'Usually near the water heater or where the line enters the house. In manifold homes, you can also close the single line at the manifold.' },
          { t: 'Turn off the water heater', d: 'So it doesn’t heat an empty tank.' },
          { t: 'Drain the lines', d: 'Open a faucet at the lowest point of the house.' },
          { t: 'Protect and document', d: 'Move belongings, mop up and take photos for insurance.' },
        ],
        after: ['More: [burst pipe: what to do](/guides/burst-pipe-what-to-do/).'],
      },
      {
        h2: 'Frozen hose bibs and garage lines',
        paras: [
          'The most common winter repair in Center Grove is a **hose bib line that split inside the wall** because a hose was left connected or the faucet wasn’t drained. Frost-free faucets only work if the hose is off; a connected hose traps water in the long stem, and it freezes inside the wall. The leak often shows up in spring, the first time the faucet is used.',
          'Lines in garage walls and over unheated garages are the other common freeze point. See [frozen pipe leaks](/guides/frozen-pipe-leaks/).',
        ],
      },
      {
        h2: 'How the repair works',
        steps: [
          { t: 'Pinpoint', d: 'Moisture mapping, thermal imaging and pressure tests. See [hidden leak detection in Center Grove](/service-area/center-grove/hidden-leak-detection/).' },
          { t: 'Open one small spot', d: 'A square opening in drywall at the mark, just big enough to work.' },
          { t: 'Replace the part', d: 'The fitting, crimp ring, section of pipe or faucet is replaced.' },
          { t: 'Test and dry', d: 'The line is pressure-tested, wet insulation is removed and the cavity dries before patching.' },
        ],
      },
      {
        h2: 'Polybutylene in Center Grove homes',
        paras: [
          'Gray **polybutylene** supply pipe was installed in many U.S. homes from the late 1970s to the mid-1990s, and some homes in the area have it. It fails without warning, usually at the fittings. If a leak turns up polybutylene, plan to replace it rather than patch it. See [polybutylene pipe replacement](/guides/polybutylene-pipe-replacement/) and [whole-house repipe cost](/guides/whole-house-repipe-cost/).',
          'Need other plumbing work? See our [plumber in Greenwood](/plumber-greenwood-in/) page, which covers Center Grove too.',
        ],
      },
    ],
    faqs: [
      { q: 'Can a leaking PEX fitting be fixed without opening the whole wall?', a: 'Yes. Once the leak is pinpointed, a small opening at the mark is enough to replace the fitting or a short section of pipe and test it.' },
      { q: 'Why did my outside faucet leak inside the wall?', a: 'Usually because a hose was left connected over the winter, which traps water in a frost-free faucet’s stem so it freezes and splits inside the wall. The leak often appears the first time the faucet is used in spring.' },
      { q: 'Should I replace polybutylene pipe after one leak?', a: 'Yes, plan to. Polybutylene fails at fittings and along the pipe without warning, so one leak is a sign more are coming.' },
      { q: 'Do you serve all of White River Township?', a: 'Yes. Center Grove and White River Township are next to our base in Bargersville.' },
    ],
    guides: ['polybutylene-pipe-replacement', 'outside-spigot-leaking', 'frozen-pipe-leaks', 'burst-pipe-what-to-do'],
  },
];
