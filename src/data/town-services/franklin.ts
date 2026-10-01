import type { TownServicePage } from '../townServices';

// Franklin, IN (46131): the county seat, with many older homes (historic downtown, Martin Place),
// so this set swaps pool and sprinkler pages for crawl space/basement and thermal inspection pages.
const fr = { town: 'franklin', townName: 'Franklin', published: '2026-10-01', updated: '2026-10-01' };

export const franklinPages: TownServicePage[] = [
  // ───────────────────────────── Slab leak detection ─────────────────────────────
  {
    ...fr,
    slug: 'slab-leak-detection',
    kind: 'detection',
    service: 'slab-leak-detection',
    image: 'slab-leak-detection',
    imageAlt: 'Technician with headphones listening to a tile floor for the sound of a slab leak',
    title: 'Slab Leak Detection in Franklin, IN | No Floor Tear-Up',
    description: 'Slab leak detection in Franklin, IN (46131): warm floors, a meter that keeps turning or water heard under the floor. We find the leak and mark it.',
    h1: 'Slab Leak Detection in Franklin, IN',
    answer: 'In Franklin, slab leaks mostly turn up in homes built on concrete from the 1960s on, in additions and enclosed porches on older houses, and in the newer subdivisions on the edges of town. We confirm the leak at your meter, split the hot and cold sides, pressure-test the suspect line and then pinpoint it through the floor with acoustic equipment and a thermal camera. The spot is marked so the repair is one small opening.',
    primaryKeyword: 'slab leak detection franklin in',
    secondaryKeywords: ['slab leak franklin indiana', 'leak under slab franklin', 'warm spot on floor leak', 'slab leak signs', 'franklin in slab leak'],
    glance: [
      { label: 'Where we see them', value: 'Ranch homes on slabs, additions and enclosed porches, newer subdivisions' },
      { label: 'First test', value: 'Meter leak indicator with all water off' },
      { label: 'Tools', value: 'Valve isolation, pressure gauge, ground microphone, thermal camera' },
      { label: 'ZIP code', value: '46131' },
    ],
    blocks: [
      {
        h2: 'Franklin houses where slab leaks happen',
        paras: [
          'Franklin has a wider mix of houses than most towns in Johnson County. Homes around the courthouse square and in the **Martin Place Historic District** are mostly older houses over basements and crawl spaces. Ranch homes from the 1960s through the 1980s, and the newer neighborhoods on the north and east sides of town, are far more likely to sit on a concrete slab.',
          'Older Franklin houses still turn up slab leaks in a less obvious place: **additions**. A kitchen extension, a family room or an enclosed porch was often poured as a slab and plumbed with lines that run under it to reach the original house. When those lines leak, the main house shows nothing and the addition’s floor is the only clue.',
        ],
      },
      {
        h2: 'What a slab leak looks like before anyone finds it',
        cards: [
          { t: 'A warm floor', d: 'A hot-side leak warms the concrete above it. Tile shows it best: a patch that feels warm under bare feet, often in a hallway, kitchen or bathroom.' },
          { t: 'A meter that won’t stop', d: 'With every fixture off, the small leak indicator on your meter keeps turning. Cold-side slab leaks are usually found this way.' },
          { t: 'Water you can hear', d: 'A faint hiss or rushing sound under the floor at night, when the house is quiet and nothing is running.' },
          { t: 'Damage at the edges', d: 'Damp carpet along a wall, baseboards swelling, or wood flooring that starts to cup near the leak.' },
        ],
        after: ['A water bill that jumps from one month to the next, with nothing else changed, is often the first sign Franklin homeowners notice. See [why is my water bill so high?](/guides/why-is-my-water-bill-so-high/).'],
      },
      {
        h2: 'Check your meter in five minutes',
        id: 'check',
        steps: [
          { t: 'Turn off all water use', d: 'Faucets, toilets, washer, dishwasher, ice maker and any sprinklers. Wait for toilets to finish filling.' },
          { t: 'Read the leak indicator', d: 'Lift the meter pit lid near the curb or sidewalk. If the little triangle or dial is turning, water is moving.' },
          { t: 'Close the main shutoff inside the house', d: 'If the meter stops, the leak is inside the house or under the slab. If it keeps moving, the leak is in the buried line outside; see [water line leak detection in Franklin](/service-area/franklin/water-line-leak-detection/).' },
          { t: 'Isolate the water heater', d: 'Close the cold supply valve on top of the water heater. If the meter stops now, the leak is on the hot side.' },
        ],
      },
      {
        h2: 'How the leak is pinpointed',
        paras: [
          'We work from the meter inward. Closing valves one at a time tells us whether the leak is on the hot side, the cold side or a branch to one fixture group. The suspect line is then pressurized and held on a gauge; a steady drop proves it’s leaking.',
          'Next we trace the route of that line under the slab, because pipes rarely run where you’d expect. Listening along the route with an acoustic ground microphone finds the point where the sound of escaping water peaks, and a thermal camera shows the heat pattern from a hot-side leak on the floor surface. Where the two agree, we mark the floor.',
        ],
      },
      {
        h2: 'Additions, porches and remodeled kitchens',
        table: {
          head: ['Where the leak shows', 'What we check first'],
          rows: [
            ['Floor of a slab addition is warm or damp', 'The line that runs from the original house into the addition'],
            ['Kitchen floor near an island sink', 'The island supply and drain lines that were run under the slab during a remodel'],
            ['Enclosed porch or sunroom', 'Lines to an outside spigot that were enclosed when the porch was built'],
            ['Bathroom added on a slab', 'Supply lines and shower valve on the new bath, and where new pipe joins old'],
          ],
        },
        after: ['Where old and new pipe meet (galvanized to copper, or copper to PEX) is a common leak point in remodeled Franklin homes.'],
      },
      {
        h2: 'After the leak is marked',
        paras: [
          'You get photos and notes with the line, the readings and the marked spot. Our plumbing partner can then repair it through one small opening, or reroute the line out of the slab; or you can give the report to your own plumber. See [slab leak repair in Franklin](/service-area/franklin/slab-leak-repair/) for both options.',
        ],
      },
    ],
    faqs: [
      { q: 'Do older Franklin homes get slab leaks?', a: 'The main house often doesn’t, because many older homes sit over basements or crawl spaces. Slab additions, enclosed porches and remodeled kitchens on those homes do, and so do ranch homes from the 1960s on and newer subdivisions.' },
      { q: 'How can I tell a slab leak from a leak in the yard?', a: 'Turn off all water, then close the main shutoff valve inside the house. If the meter stops, the leak is inside or under the slab. If it keeps going, the leak is in the buried line between the meter and the house.' },
      { q: 'Will you break my floor to find the leak?', a: 'No. Detection uses valve isolation, pressure testing, acoustic listening and thermal imaging. Only the repair needs an opening, and it’s made at the marked spot.' },
      { q: 'What if there’s more than one leak?', a: 'Pressure testing shows whether the line still loses pressure after the first leak is found. If it does, we keep searching, and the report lists each location.' },
    ],
    guides: ['how-to-find-a-slab-leak', 'slab-leak-repair-options', 'why-is-my-water-bill-so-high', 'water-running-sound-in-pipes'],
  },

  // ───────────────────────────── Slab leak repair ─────────────────────────────
  {
    ...fr,
    slug: 'slab-leak-repair',
    kind: 'repair',
    service: 'slab-leak-detection',
    image: 'slab-leak-detection',
    imageAlt: 'Concrete floor opened at a marked spot to repair a leaking water line under the slab',
    title: 'Slab Leak Repair in Franklin, IN | Repair or Reroute',
    description: 'Slab leak repair in Franklin, IN: pinpoint the leak, then fix it through one small opening or reroute the line out of the slab. How to choose and costs.',
    h1: 'Slab Leak Repair in Franklin, IN',
    answer: 'Once a slab leak in your Franklin home is pinpointed, there are two practical fixes: open the floor at the mark and repair that section, or abandon the line under the slab and run a new one overhead. In older Franklin homes with mixed pipe materials and an accessible basement or crawl space next to the slab, a reroute is often easier than it sounds. Our plumbing partner handles either one.',
    primaryKeyword: 'slab leak repair franklin in',
    secondaryKeywords: ['slab leak repair franklin indiana', 'reroute slab leak', 'slab leak plumber franklin', 'under slab pipe repair', 'slab leak fix cost'],
    glance: [
      { label: 'Options', value: 'Spot repair at the mark, reroute overhead or through a crawl space, repipe' },
      { label: 'Key question', value: 'Is the rest of the pipe under the slab worth keeping?' },
      { label: 'Done by', value: 'Our plumbing partner, or your plumber using our report' },
      { label: 'Before you start', value: 'Check your homeowners policy for access and damage coverage' },
    ],
    blocks: [
      {
        h2: 'Spot repair or reroute: the short version',
        table: {
          head: ['', 'Spot repair', 'Reroute'],
          rows: [
            ['What happens', 'Floor and concrete are opened at the mark, the bad section is replaced, the slab is patched', 'The line under the slab is capped and a new line runs through walls, ceiling, attic or crawl space'],
            ['Best when', 'First leak, pipe in good shape, leak in an easy spot', 'Older pipe, repeat leaks, or the leak sits under cabinets or finished flooring'],
            ['Disruption', 'One opening in the floor', 'Small openings in walls and ceilings along the new route'],
            ['Future leaks on that line', 'Possible, if the rest of the pipe is worn', 'That line is no longer under the slab'],
          ],
        },
      },
      {
        h2: 'Why rerouting often fits older Franklin homes',
        paras: [
          'Many Franklin houses are partly on a slab and partly over a basement or crawl space, usually because of an addition. That helps with a reroute: instead of running the new line through finished walls and ceilings, it can often run through the crawl space or basement to the edge of the slab and come up inside one wall.',
          'Pipe age matters too. If the leaking line is old copper or galvanized steel, the rest of that run under the slab is the same age. Fixing one spot and closing the floor can mean opening it again in a year or two. A reroute ends that risk for the line.',
        ],
      },
      {
        h2: 'What a spot repair involves',
        steps: [
          { t: 'Pinpoint the leak', d: 'Start with [slab leak detection in Franklin](/service-area/franklin/slab-leak-detection/) so the floor is opened once, in the right place.' },
          { t: 'Protect the room', d: 'Furniture out, plastic sheeting up and dust control in place before cutting.' },
          { t: 'Cut a small access hole', d: 'Flooring is lifted and a small square of concrete is cut out and dug down to the pipe.' },
          { t: 'Replace the section and test', d: 'The leaking piece is replaced and the line is pressure-tested again before anything is closed.' },
          { t: 'Patch and restore', d: 'The hole is backfilled and the concrete is patched, ready for flooring once it cures.' },
        ],
      },
      {
        h2: 'When a repipe is the better answer',
        list: [
          'You’ve had leaks in more than one place in the last few years.',
          'The house still has a lot of **galvanized steel**, with low pressure or rusty water. See [galvanized pipe replacement](/guides/galvanized-pipe-replacement/).',
          'There is gray **polybutylene** pipe anywhere in the house. See [polybutylene pipe replacement](/guides/polybutylene-pipe-replacement/).',
          'You’re planning a remodel that opens walls anyway.',
        ],
        after: ['See [whole-house repipe cost](/guides/whole-house-repipe-cost/) for what a repipe involves and costs.'],
      },
      {
        h2: 'What slab leak repair costs',
        paras: [
          'National cost guides put a typical single slab leak repair at about **$2,000 to $4,000**. Spot repairs are often **$1,500 to $3,500**, and reroutes range from about **$600 to $7,500** depending on how far the new line has to run. In Franklin homes, what sits on top of the leak (tile, original hardwood, cabinets) and whether there’s crawl space access for a reroute make the biggest difference.',
          'Detection and repair are quoted separately. More detail: [slab leak repair cost](/guides/slab-leak-repair-cost/).',
        ],
      },
      {
        h2: 'Insurance and your water bill',
        paras: [
          'Homeowners policies often pay to break out and restore the floor and for the water damage, but not to fix the pipe. Keep the detection report: it shows where the leak was and what caused it. See [does homeowners insurance cover slab leaks?](/guides/does-insurance-cover-slab-leaks/).',
          'If the leak ran up your bill, ask your utility about a leak adjustment once the repair is done. See [water bill leak adjustment in Indiana](/guides/water-bill-leak-adjustment-indiana/).',
        ],
      },
    ],
    faqs: [
      { q: 'Do you fix slab leaks in Franklin, or only find them?', a: 'Both. We pinpoint the leak, then our plumbing partner repairs it with a spot repair, a reroute or a repipe. If you have your own plumber, we hand them the marked spot and report.' },
      { q: 'Can the new line run through my crawl space instead of the walls?', a: 'Often, yes. Many Franklin homes have a crawl space or basement beside a slab addition, which gives an easier route for the new line than finished walls and ceilings.' },
      { q: 'Is it worth rerouting after just one leak?', a: 'It can be, if the pipe is old copper or galvanized or the leak is under cabinets or expensive flooring. For a first leak on a line in good condition, a spot repair is usually the better value.' },
      { q: 'How soon should a slab leak be repaired?', a: 'As soon as you can. Water under a slab soaks flooring, can wash out soil and grow mold, and a hot-side leak keeps the water heater running. Close the main shutoff overnight if the repair is a few days away.' },
    ],
    guides: ['slab-leak-repair-cost', 'slab-leak-repair-options', 'galvanized-pipe-replacement', 'does-insurance-cover-slab-leaks'],
  },

  // ───────────────────────────── Water line leak detection ─────────────────────────────
  {
    ...fr,
    slug: 'water-line-leak-detection',
    kind: 'detection',
    service: 'underground-water-leak-detection',
    image: 'underground-water-leak-detection',
    imageAlt: 'Ground microphone placed on a lawn over a buried water service line',
    title: 'Water Line Leak Detection in Franklin, IN | Meter to House',
    description: 'Water line leak detection in Franklin, IN: a wet yard, low pressure or a meter that turns with the house shut off. We trace the line and mark the leak.',
    h1: 'Water Line Leak Detection in Franklin, IN',
    answer: 'The water service line is the buried pipe from the utility’s shutoff near your curb to the house, and in Franklin it’s the homeowner’s to repair. On older lots those lines can be long, old and made of galvanized steel or copper. We confirm the leak is outside with your meter and main shutoff, trace the pipe’s route, and pinpoint the break with a ground microphone or tracer gas, so only one hole is dug.',
    primaryKeyword: 'water line leak detection franklin in',
    secondaryKeywords: ['underground water leak franklin indiana', 'main water line leak franklin', 'water service line leak', 'yard leak detection', 'leak between meter and house franklin'],
    glance: [
      { label: 'Your part of the line', value: 'From the utility’s shutoff near the curb to the house' },
      { label: 'Utilities', value: 'Mostly Indiana American Water; some homes west of town on the Bargersville utility' },
      { label: 'Older lots', value: 'Long, deep or galvanized lines are common near downtown' },
      { label: 'Methods', value: 'Line tracing, acoustic listening, tracer gas on plastic' },
    ],
    blocks: [
      {
        h2: 'Old lots, long lines',
        paras: [
          'Homes near downtown Franklin and along the older streets around Franklin College were often built well back from the street, and their service lines can be decades old. Many are **galvanized steel**, which rusts from the inside and fails at threaded joints, or older **copper**. Newer homes on the edges of town more often have plastic (PE) lines.',
          'Franklin’s clay soil makes these leaks hard to spot from the surface. The water follows the trench the pipe was laid in and may come up as a wet patch well away from the break, or soak into a basement wall on the street side of the house. A wet spot tells you there’s a leak; it rarely tells you where.',
        ],
      },
      {
        h2: 'Who owns which part',
        paras: [
          'Most of Franklin is served by **Indiana American Water**. The utility owns the main and the line up to its shutoff valve near the curb; the homeowner owns the rest. Some homes with a Franklin address west of town are on the **Town of Bargersville** water utility. If water is coming up at the meter or curb box itself, call the utility first.',
        ],
        callout: '**Lead lines:** Indiana American Water replaces lead service lines, including the customer-owned side, at no direct cost to customers. In an older Franklin home, it’s worth asking the utility what your line is made of before paying for a replacement.',
      },
      {
        h2: 'Signs the buried line is leaking',
        list: [
          'The meter keeps moving **after you close the main shutoff in the house**.',
          'A patch of lawn that stays soft, wet or greener than the rest, or ground that settles along the line’s path.',
          'Water seeping into the **basement or crawl space** on the side where the line enters.',
          'Pressure that has dropped everywhere in the house.',
          'A higher bill with no change in use, often the only sign in winter.',
        ],
      },
      {
        h2: 'How we find the leak in the yard',
        steps: [
          { t: 'Prove it’s outside', d: 'Meter test with the main shutoff closed. A moving meter means the leak is in the buried line.' },
          { t: 'Find the route', d: 'We locate and mark where the line runs, since older lines don’t always take the shortest path to the house.' },
          { t: 'Listen on metal pipe', d: 'Galvanized and copper carry the sound of the leak well. A ground microphone finds where it’s loudest.' },
          { t: 'Use tracer gas on plastic', d: 'PE lines carry little sound, so a safe hydrogen mix is pushed through the line and detected where it rises through the soil.' },
          { t: 'Mark it', d: 'The spot is painted or flagged, with photos for the repair crew.' },
        ],
      },
      {
        h2: 'Galvanized line: repair or replace?',
        paras: [
          'A leak in a copper or plastic line that’s otherwise sound can usually be repaired at the mark. A leak in a **galvanized** service line is different: if one joint has rusted through, the others are the same age. Replacing the line often costs less than a second and third dig. See [water line repair in Franklin](/service-area/franklin/water-line-repair/).',
        ],
      },
    ],
    faqs: [
      { q: 'Who is responsible for a leaking water line in Franklin?', a: 'The utility, usually Indiana American Water, is responsible for its main and the line up to its shutoff near the curb. The homeowner is responsible for the line from there to the house.' },
      { q: 'Why is my basement wet on the street side?', a: 'A leak in the buried service line can follow the pipe trench to the foundation and seep in where the line enters the house. A meter test with the main shutoff closed tells you if the line is leaking.' },
      { q: 'Can you find a leak in an old galvanized line?', a: 'Yes. Metal pipe carries sound well, so acoustic listening usually pinpoints the leak. Because galvanized lines rust at every joint, we’ll also tell you if the line looks due for replacement.' },
      { q: 'What if my line is plastic?', a: 'We use tracer gas, which escapes at the leak and is picked up by a sensor at the surface, together with tracing the route of the line.' },
    ],
    guides: ['how-to-find-an-underground-water-leak', 'water-in-basement-or-crawl-space', 'galvanized-pipe-replacement', 'low-water-pressure-leak'],
  },

  // ───────────────────────────── Water line repair ─────────────────────────────
  {
    ...fr,
    slug: 'water-line-repair',
    kind: 'repair',
    service: 'underground-water-leak-detection',
    image: 'underground-water-leak-detection',
    imageAlt: 'New water service line being laid in a trench from the curb to an older house',
    title: 'Water Line Repair in Franklin, IN | Fix or Replace',
    description: 'Water line repair in Franklin, IN: fix one leak at the marked spot or replace an old galvanized, copper or lead service line from the curb to the house.',
    h1: 'Water Line Repair & Replacement in Franklin, IN',
    answer: 'Repairing a Franklin water service line starts with one decision: fix the leak where it’s marked, or replace the line. For a sound copper or plastic line, a repair at the mark is quick and inexpensive. For an old galvanized line, or one that has leaked before, replacing it from the curb to the house usually saves money over time. Our plumbing partner does either, with 811 locates handled before digging.',
    primaryKeyword: 'water line repair franklin in',
    secondaryKeywords: ['water line replacement franklin indiana', 'main water line repair franklin', 'galvanized water line replacement', 'service line replacement', 'water line leak repair franklin'],
    glance: [
      { label: 'Fix at the mark', value: 'One leak, line in good condition' },
      { label: 'Replace the line', value: 'Galvanized, lead, polybutylene, or repeat leaks' },
      { label: 'Before digging', value: 'Indiana 811 request at least two full working days ahead' },
      { label: 'Lead line?', value: 'Ask Indiana American Water about its replacement program first' },
    ],
    blocks: [
      {
        h2: 'Repair or replace: what decides it',
        cards: [
          { t: 'The pipe material', d: 'Copper and PE in good shape are worth repairing. Galvanized steel, polybutylene and lead are usually worth replacing.' },
          { t: 'The leak history', d: 'A first leak is a repair. A second or third leak on the same line is a sign the whole line is wearing out.' },
          { t: 'Water pressure', d: 'If pressure was low long before the leak, a narrowed galvanized line may be the cause, and a new line fixes both.' },
          { t: 'What’s above it', d: 'A line under a driveway or mature trees may be cheaper to replace by boring a new path than to dig up and repair.' },
        ],
      },
      {
        h2: 'How a repair at the marked spot works',
        steps: [
          { t: 'Pinpoint first', d: 'The leak is located and marked. See [water line leak detection in Franklin](/service-area/franklin/water-line-leak-detection/).' },
          { t: 'Request 811 locates', d: 'Indiana law requires a call to Indiana 811 at least two full working days before digging, so gas, electric and cable lines are marked.' },
          { t: 'Dig one hole', d: 'A small excavation at the mark exposes the pipe.' },
          { t: 'Repair and test', d: 'The damaged section is replaced, the line is pressurized and checked, then the hole is backfilled and the lawn restored.' },
        ],
      },
      {
        h2: 'Replacing an older Franklin service line',
        paras: [
          'A full replacement runs a new line, usually PE or copper, from the utility’s shutoff near the curb to the house, below the frost line (about 30 to 36 inches in central Indiana). It can be trenched across the yard or pulled underground between two pits.',
          'In older neighborhoods, a few things come up often: lines that enter through a basement wall that needs resealing, meter pits that need work at the same time, and old valves inside the house that should be replaced while the water is off. Your plumber coordinates the shutoff and reconnection with the utility, and the City of Franklin if your job needs a permit.',
        ],
      },
      {
        h2: 'Trenched or trenchless?',
        table: {
          head: ['', 'Trenched', 'Trenchless'],
          rows: [
            ['How it works', 'A trench is dug from curb to house', 'The new line is pulled or bored between two small pits'],
            ['Good for', 'Open lawn, shorter runs', 'Lines under driveways, walks, trees or established gardens'],
            ['Restoration', 'Sod and soil along the whole trench', 'Only the two pits'],
            ['Price', 'Often lower per foot', 'Often higher per foot, but less to restore'],
          ],
        },
        after: ['National guides put a full replacement at roughly **$2,000 to $5,800** trenched and **$3,200 to $8,000** trenchless. See [water line replacement cost in Indiana](/guides/water-line-replacement-cost-indiana/).'],
      },
      {
        h2: 'If your line might be lead',
        paras: [
          'Some very old Franklin homes may still have a lead service line. **Indiana American Water** runs a lead service line replacement program that replaces lead lines, including the customer-owned part, at no direct cost to customers. If your line could be lead, contact the utility before you pay for a replacement.',
        ],
      },
    ],
    faqs: [
      { q: 'Should I replace my galvanized water line or just fix the leak?', a: 'If one joint on a galvanized line has rusted through, the others are the same age. A repair stops this leak, but replacement is often cheaper than repeated digs, and it usually improves water pressure too.' },
      { q: 'How deep is a new water line in Franklin?', a: 'Below the frost line, which is about 30 to 36 inches in central Indiana, so the line doesn’t freeze.' },
      { q: 'Does Indiana American Water pay to replace lead lines?', a: 'Its lead service line replacement program replaces lead lines, including the customer side, at no direct cost to customers. Ask the utility if your line might be lead.' },
      { q: 'Do I need to call 811?', a: 'Yes. Indiana law requires an 811 request at least two full working days before digging. The plumber doing the repair usually places it.' },
    ],
    guides: ['water-line-replacement-cost-indiana', 'galvanized-pipe-replacement', 'water-leak-under-driveway', 'how-to-find-an-underground-water-leak'],
  },

  // ───────────────────────────── Hidden leak detection ─────────────────────────────
  {
    ...fr,
    slug: 'hidden-leak-detection',
    kind: 'detection',
    service: 'hidden-water-leak-detection',
    image: 'hidden-water-leak-detection',
    imageAlt: 'Moisture meter pressed against a plaster wall to find a hidden pipe leak',
    title: 'Hidden Leak Detection in Franklin, IN | Plaster & Old Floors',
    description: 'Hidden leak detection in Franklin, IN: stains, bubbling paint or a musty smell in plaster walls and old floors. We find the leak before anything is opened.',
    h1: 'Hidden Water Leak Detection in Franklin, IN',
    answer: 'In Franklin’s older homes, a hidden leak usually means a stain on a plaster ceiling, bubbling paint, a musty smell or a soft spot in an original wood floor. Plaster and old hardwood are expensive to open and hard to match, so we find the source first: a meter test, moisture mapping, thermal imaging and fixture-by-fixture testing narrow it to one spot before anyone cuts.',
    primaryKeyword: 'hidden water leak detection franklin in',
    secondaryKeywords: ['leak in wall franklin indiana', 'plaster ceiling water stain', 'ceiling leak franklin in', 'old house leak detection', 'find leak behind plaster'],
    glance: [
      { label: 'Typical clues', value: 'Ceiling stains, bubbling paint, musty smell, soft or cupped floors' },
      { label: 'Why care', value: 'Plaster and original hardwood are costly to open and match' },
      { label: 'Tools', value: 'Moisture meters, thermal camera, pressure and flood tests' },
      { label: 'Older pipe', value: 'Galvanized joints and old fittings inside walls and floors' },
    ],
    blocks: [
      {
        h2: 'Why hidden leaks are harder in older Franklin homes',
        paras: [
          'Plaster holds water longer than drywall and spreads it sideways, so a stain can appear a few feet from the leak. Old hardwood swells and cups slowly, often weeks after the leak started. And many older homes have had plumbing added over the years, so a bathroom upstairs may be fed by lines that take an unexpected route through the walls.',
          'Opening the wrong spot in plaster means patching, skim-coating and repainting a whole wall. Finding the leak first is what keeps the repair to one small, neat opening.',
        ],
      },
      {
        h2: 'Common sources in Franklin homes',
        list: [
          '**Galvanized fittings** inside walls and floors, rusting through at the threads.',
          '**Second-floor bathrooms** added to older houses: tub drains, toilet seals and shower valves leaking into the ceiling below.',
          '**Radiator-era routes:** older homes where pipes run through closets and chases that nobody has opened in decades.',
          '**Lines in exterior walls** that froze in a cold snap and split.',
          '**Kitchen and laundry connections** behind appliances: supply hoses, valves and drain lines.',
        ],
      },
      {
        h2: 'How we narrow it down',
        steps: [
          { t: 'Supply or drain?', d: 'With all water off, a moving meter means a pressurized supply leak. A still meter points to a drain, shower or appliance that leaks only when used.' },
          { t: 'Map the moisture', d: 'Moisture meters on plaster, trim and flooring show where the water is concentrated, not just where it shows.' },
          { t: 'Thermal imaging', d: 'Wet areas read cooler and hot-water leaks read warmer, which shows the shape of the wet area behind the surface.' },
          { t: 'Test fixtures one at a time', d: 'For drains and showers, we run each fixture or flood-test the shower pan and watch where moisture appears.' },
          { t: 'Mark the spot', d: 'The source is marked with photos and readings so the opening is small and well placed.' },
        ],
      },
      {
        h2: 'Clues and what they usually mean',
        table: {
          head: ['What you see', 'Usual cause'],
          rows: [
            ['Brown ring on a plaster ceiling below a bath', 'Tub drain, toilet seal or shower valve upstairs'],
            ['Stain that keeps growing with no water in use', 'Pressurized supply line in the ceiling or wall'],
            ['Bubbling paint low on an outside wall', 'Split line to an outside faucet, often after a freeze'],
            ['Musty smell in a closet or hallway', 'Slow leak in a wall cavity or under the floor'],
            ['Cupping boards near a kitchen or bath', 'Supply or drain leak under the subfloor'],
          ],
        },
      },
      {
        h2: 'After the source is found',
        paras: [
          'Our plumbing partner can make the repair through one small opening at the mark, or you can hand the report to your own plumber. If the leak turns out to be old galvanized pipe, we’ll note what else is nearby so you can decide whether to replace more of it. See [leaking pipe repair in Franklin](/service-area/franklin/pipe-leak-repair/).',
          'For insurance, the report shows where the leak was and what caused it, which adjusters ask for. See [burst pipe insurance claims in Indiana](/guides/burst-pipe-insurance-claim-indiana/).',
        ],
      },
    ],
    faqs: [
      { q: 'Can you find a leak behind plaster without opening the wall?', a: 'Yes. Moisture meters and thermal imaging show where the water is behind the plaster, and fixture and pressure tests show which line is leaking. The wall is only opened at the marked spot for the repair.' },
      { q: 'Why is the stain not right under the leak?', a: 'Water runs along joists, pipes and plaster before it shows. A stain can appear several feet from the source, which is why we map the moisture rather than open the stain.' },
      { q: 'My ceiling stain only grows after showers. What is it?', a: 'Usually a shower pan, valve, drain or grout problem, not a supply line. A flood test of the shower and fixture-by-fixture testing confirm it.' },
      { q: 'Do you check for leaks before someone buys an older home?', a: 'Yes. A thermal and moisture inspection with a photo report can show hidden leaks before you buy. See our thermal imaging page for Franklin.' },
    ],
    guides: ['how-to-find-a-leak-in-a-wall', 'water-leaking-from-ceiling', 'galvanized-pipe-replacement', 'shower-pan-leak'],
  },

  // ───────────────────────────── Pipe leak repair ─────────────────────────────
  {
    ...fr,
    slug: 'pipe-leak-repair',
    kind: 'repair',
    service: 'hidden-water-leak-detection',
    image: 'hidden-water-leak-detection',
    imageAlt: 'Plumber replacing a rusted galvanized pipe section with new copper in an older home',
    title: 'Leaking Pipe Repair in Franklin, IN | Old & Frozen Pipes',
    description: 'Leaking pipe repair in Franklin, IN: galvanized, copper and frozen pipes in walls, basements and crawl spaces, fixed through one small opening at the leak.',
    h1: 'Leaking Pipe Repair in Franklin, IN',
    answer: 'Most leaking pipes we see in Franklin are rusted galvanized joints, pinholes in older copper, and lines that froze in a crawl space, basement or outside wall. We pinpoint the leak first, then our plumbing partner opens one small spot, replaces the damaged section, tests the line and leaves the area ready to close. In older homes we also tell you what the rest of the pipe looks like, so you can decide whether to replace more than one section.',
    primaryKeyword: 'pipe leak repair franklin in',
    secondaryKeywords: ['burst pipe repair franklin indiana', 'galvanized pipe leak repair', 'frozen pipe repair franklin', 'leaking pipe in basement', 'water pipe repair franklin'],
    glance: [
      { label: 'Most common', value: 'Rusted galvanized joints, copper pinholes, frozen and split lines' },
      { label: 'Where', value: 'Basements, crawl spaces, exterior walls, under old floors' },
      { label: 'Approach', value: 'Pinpoint, open one spot, replace, test' },
      { label: 'Burst pipe now?', value: 'Close the main shutoff, then call' },
    ],
    blocks: [
      {
        h2: 'Pipes in older Franklin homes and how they fail',
        table: {
          head: ['Pipe', 'How it fails', 'Usual fix'],
          rows: [
            ['Galvanized steel', 'Rusts inside, narrows, then leaks at threaded joints', 'Replace the run; often part of a gradual repipe'],
            ['Older copper', 'Pinholes from wear and hard water', 'Replace the section; replace the run after repeat pinholes'],
            ['Polybutylene (gray plastic)', 'Fittings and pipe crack with age', 'Plan to replace all of it'],
            ['Mixed old and new pipe', 'Leaks where materials meet', 'Proper transition fittings at the joint'],
          ],
        },
      },
      {
        h2: 'Frozen pipes in basements and crawl spaces',
        paras: [
          'Older Franklin homes often have supply lines running through a crawl space or along the cold side of a basement, and lines to outside faucets that pass through exterior walls. In a hard Indiana cold snap these freeze first. The pipe splits while frozen, and the leak starts when it thaws, sometimes days later.',
          'If you find a split pipe, close the main shutoff first. See [burst pipe: what to do](/guides/burst-pipe-what-to-do/) and [frozen pipe leaks](/guides/frozen-pipe-leaks/).',
        ],
      },
      {
        h2: 'How the repair is done',
        steps: [
          { t: 'Pinpoint the leak', d: 'Moisture mapping, thermal imaging and pressure tests. See [hidden leak detection in Franklin](/service-area/franklin/hidden-leak-detection/).' },
          { t: 'Open one small spot', d: 'In plaster, the opening is cut cleanly so it can be patched; in a crawl space or basement, often no opening is needed at all.' },
          { t: 'Replace the damaged section', d: 'The bad pipe is cut out and replaced, with proper transition fittings where new pipe meets old.' },
          { t: 'Test and dry', d: 'The line is pressure-tested before closing, and wet insulation or materials are removed so the area can dry.' },
        ],
      },
      {
        h2: 'Repair a section or start replacing?',
        list: [
          'One leak from a freeze or a single bad fitting: **repair the section**.',
          'Rust-colored water, low pressure and a galvanized leak: **replace that run**, and plan the rest. See [galvanized pipe replacement](/guides/galvanized-pipe-replacement/).',
          'A second pinhole on the same copper line: **replace that line**. See [pinhole leaks in copper pipes](/guides/pinhole-leaks-copper-pipes/).',
          'Leaks in several places within a year: **consider a repipe**. See [whole-house repipe cost](/guides/whole-house-repipe-cost/).',
        ],
      },
      {
        h2: 'Preventing the next one',
        list: [
          'Insulate pipes in crawl spaces and along basement walls, and close crawl space vents for winter.',
          'Disconnect hoses and drain outside faucets before the first hard freeze.',
          'On the coldest nights, open sink cabinets on outside walls and let a faucet drip.',
          'Know where your main shutoff is and make sure it turns. Old gate valves often stick; see [how to shut off the water to your house](/guides/how-to-shut-off-water-to-house/).',
        ],
        after: ['Need other plumbing work? See our [plumber in Franklin](/plumber-franklin-in/) page.'],
      },
    ],
    faqs: [
      { q: 'Can one leaking galvanized pipe be repaired?', a: 'Yes, the section can be replaced. But galvanized pipe rusts from the inside along its whole length, so other joints are often close behind. We’ll tell you what we see so you can decide whether to replace more.' },
      { q: 'What should I do if a pipe bursts in my Franklin home?', a: 'Close the main shutoff, turn off the water heater, open a low faucet to drain the lines, move belongings away from the water and take photos for insurance. Then call.' },
      { q: 'My main shutoff valve won’t turn. What now?', a: 'Old gate valves often seize. Don’t force it hard enough to break it. Call your water utility, which can close its valve near the curb, and have the house valve replaced during the repair.' },
      { q: 'Will patching plaster after a pipe repair be noticeable?', a: 'A small, clean opening at the marked spot patches far better than several exploratory holes. That’s the main reason to pinpoint the leak before opening anything.' },
    ],
    guides: ['galvanized-pipe-replacement', 'frozen-pipe-leaks', 'burst-pipe-what-to-do', 'pinhole-leaks-copper-pipes'],
  },

  // ───────────────────────────── Basement & crawl space ─────────────────────────────
  {
    ...fr,
    slug: 'crawl-space-leak-detection',
    kind: 'detection',
    service: 'hidden-water-leak-detection',
    image: 'hidden-water-leak-detection',
    imageAlt: 'Flashlight on wet soil and pipes in a home’s crawl space during a leak inspection',
    title: 'Basement & Crawl Space Leak Detection in Franklin, IN',
    description: 'Water in your Franklin basement or crawl space? We find out if it’s a plumbing leak, the water line or groundwater, and pinpoint the source.',
    h1: 'Basement & Crawl Space Leak Detection in Franklin, IN',
    answer: 'Water in a Franklin basement or crawl space can come from three places: a plumbing leak inside the house, the buried water line where it enters, or groundwater and surface water after rain. They need very different fixes, so we start by telling them apart with a meter test, the timing of the water and moisture readings. If it’s plumbing, we pinpoint the leak and mark it for repair.',
    primaryKeyword: 'crawl space leak detection franklin in',
    secondaryKeywords: ['water in basement franklin indiana', 'wet crawl space franklin', 'basement leak plumbing or groundwater', 'crawl space plumbing leak', 'basement water leak detection'],
    glance: [
      { label: 'Three sources', value: 'Plumbing leak, buried water line, or groundwater and runoff' },
      { label: 'Key clue', value: 'Does it happen in dry weather, and does the meter move?' },
      { label: 'Local factor', value: 'Older homes over basements and crawl spaces; clay soil; creek-side areas' },
      { label: 'Result', value: 'Source identified and marked, or ruled out as plumbing' },
    ],
    blocks: [
      {
        h2: 'Plumbing leak or groundwater?',
        table: {
          head: ['Clue', 'Points to plumbing', 'Points to groundwater or runoff'],
          rows: [
            ['Timing', 'Wet in dry weather too', 'Wet after rain or snowmelt'],
            ['Water meter', 'Moves with everything off', 'Doesn’t move'],
            ['Where it appears', 'Near pipes, fixtures or where the water line enters', 'Along the base of walls, cove joint or floor cracks'],
            ['Sump pump', 'Runs even in dry spells', 'Runs after storms'],
          ],
        },
        after: ['Clay soil around Franklin holds water against foundations after heavy rain, and homes near Youngs Creek and Hurricane Creek know what high water can do. Groundwater is a waterproofing or drainage job, not a plumbing one, and it’s worth knowing which you have before paying for either. See [water in the basement or crawl space](/guides/water-in-basement-or-crawl-space/).'],
      },
      {
        h2: 'Check before you call',
        steps: [
          { t: 'Meter test', d: 'Turn off all water and watch the leak indicator for 15–30 minutes. Movement means a plumbing leak somewhere.' },
          { t: 'Dry the spot and watch', d: 'Mop or towel the wet area, then check it after a dry day. Water returning in dry weather points to plumbing.' },
          { t: 'Look where the line enters', d: 'Damp or wet concrete where the water service comes through the wall points to the buried line or its entry seal.' },
          { t: 'Listen to the sump pump', d: 'A pump that runs constantly in dry weather can be pumping leak water. See [sump pump running constantly](/guides/sump-pump-running-constantly/).' },
        ],
      },
      {
        h2: 'What we find in Franklin crawl spaces',
        cards: [
          { t: 'Split supply lines', d: 'Lines that froze near vents or the rim joist, especially on the north and west sides of the house.' },
          { t: 'Drain leaks', d: 'Cracked cast iron or loose joints on drain lines from bathrooms and the kitchen, which only leak when fixtures are used.' },
          { t: 'Water heater and softener', d: 'Leaks from a water heater’s relief line, a softener’s brine line or their connections, often in a basement corner.' },
          { t: 'The service line entry', d: 'Water from a leak in the buried line running along the pipe and through the foundation wall.' },
        ],
      },
      {
        h2: 'How we pinpoint it',
        list: [
          '**Meter and valve tests** to separate supply, drain and the buried service line.',
          '**Moisture readings** on joists, subfloor, walls and soil to find where water is concentrated.',
          '**Thermal imaging** to trace hot-water lines and wet areas across the crawl space ceiling.',
          '**Fixture tests** for drain leaks: running water through each fixture while watching the lines below.',
          '**Acoustic listening** on pressurized lines that can’t be seen.',
        ],
        after: ['You get a report that says whether the water is from plumbing and, if so, where it’s coming from, with photos.'],
      },
      {
        h2: 'Don’t let it sit',
        paras: [
          'Standing water in a crawl space raises humidity under the whole house, softens subfloors and feeds mold. Wood floors above can cup, and insulation gets heavy and falls. A slow plumbing leak can do all of that without ever showing upstairs.',
          'Once the source is found, our plumbing partner can repair it, often without opening anything in the living space. See [leaking pipe repair in Franklin](/service-area/franklin/pipe-leak-repair/).',
        ],
      },
    ],
    faqs: [
      { q: 'How do I know if water in my basement is from plumbing?', a: 'Watch the meter with all water off, and see whether the water comes back in dry weather. A moving meter, or water that returns without rain, points to plumbing. Water only after storms points to groundwater or runoff.' },
      { q: 'Do you fix groundwater problems?', a: 'No. Groundwater and runoff are drainage or waterproofing jobs. We tell you whether the water is from plumbing, and if it isn’t, you know to call a waterproofing contractor instead.' },
      { q: 'Why is my crawl space wet near the front of the house?', a: 'The water service line often enters on the street side. A leak in the buried line can follow the pipe to the foundation and seep in there.' },
      { q: 'Can a drain leak cause a wet crawl space?', a: 'Yes. Drain leaks only happen when water is used, so the meter won’t show them. We test fixtures one at a time and watch the drain lines below.' },
    ],
    guides: ['water-in-basement-or-crawl-space', 'sump-pump-running-constantly', 'frozen-pipe-leaks', 'water-heater-leaking'],
  },

  // ───────────────────────────── Thermal imaging ─────────────────────────────
  {
    ...fr,
    slug: 'thermal-imaging-leak-inspection',
    kind: 'detection',
    service: 'thermal-imaging-inspection',
    image: 'thermal-imaging-inspection',
    imageAlt: 'Thermal camera image showing a cool damp area on a ceiling around a leaking pipe',
    title: 'Thermal Imaging Leak Inspection in Franklin, IN',
    description: 'Thermal imaging leak inspection in Franklin, IN: an infrared and moisture survey with a photo report for insurance claims, older homes or before you buy.',
    h1: 'Thermal Imaging Leak Inspection in Franklin, IN',
    answer: 'A thermal imaging inspection uses an infrared camera to show temperature differences on walls, ceilings and floors, then confirms each suspect area with a moisture meter. In Franklin it’s most useful in older homes with plaster and original floors, after a leak for an insurance claim, and before buying a house. You get a photo report with thermal and regular images side by side and the readings for each area.',
    primaryKeyword: 'thermal imaging leak inspection franklin in',
    secondaryKeywords: ['infrared leak detection franklin indiana', 'thermal camera water leak', 'moisture inspection franklin', 'leak inspection before buying house', 'water damage inspection report'],
    glance: [
      { label: 'Best for', value: 'Insurance claims, older homes, pre-purchase checks, mapping water damage' },
      { label: 'What it shows', value: 'Temperature patterns on surfaces, confirmed with moisture readings' },
      { label: 'What you get', value: 'Photo report: thermal and visible images, readings, notes' },
      { label: 'Limits', value: 'It sees surfaces, not through walls; it needs a temperature difference' },
    ],
    blocks: [
      {
        h2: 'What thermal imaging can and can’t do',
        cards: [
          { t: 'It can', d: 'Show the shape of a wet area behind drywall or plaster, trace hot-water lines, find warm spots from a hot-side slab leak, and show water spreading across a ceiling.' },
          { t: 'It can’t', d: 'See through walls or inside pipes. It reads surface temperature, so a cold-water leak with no temperature difference may need other methods.' },
          { t: 'Always confirmed', d: 'Insulation gaps, drafts and sunlight also make cool or warm spots. Every suspect area is checked with a moisture meter before it goes in the report.' },
        ],
      },
      {
        h2: 'When Franklin homeowners use it',
        list: [
          '**Before buying an older home.** Old plumbing, past repairs and plaster can hide leaks a regular home inspection misses.',
          '**For an insurance claim.** The report shows how far the water spread, which is what an adjuster needs to see.',
          '**After a leak is fixed.** To confirm walls and floors are drying, and that nothing is still wet before they are closed up.',
          '**When a stain or smell has no obvious cause.** To find where water is before deciding where to open.',
          '**After a freeze.** To check exterior walls and crawl space ceilings for split lines.',
        ],
      },
      {
        h2: 'How the inspection works',
        steps: [
          { t: 'Create a temperature difference', d: 'Running hot water through the lines, or using the difference between indoor and outdoor air, makes wet areas and pipes stand out.' },
          { t: 'Scan room by room', d: 'Walls, ceilings, floors and around fixtures, windows and exterior walls.' },
          { t: 'Confirm with moisture meters', d: 'Each cool or warm area is measured, so the report separates real moisture from insulation gaps or drafts.' },
          { t: 'Report', d: 'Thermal and regular photos side by side, readings, the likely source and what we recommend next.' },
        ],
      },
      {
        h2: 'Reading a thermal image',
        table: {
          head: ['Pattern', 'Usually means'],
          rows: [
            ['Cool, irregular blotch on a ceiling', 'Water spreading from a leak above; confirmed with moisture readings'],
            ['Warm line along a floor or wall', 'A hot-water pipe; a warm spot that spreads from it can be a leak'],
            ['Cool area at the bottom of a wall', 'Water wicking up from the floor, or a leak in the wall cavity'],
            ['Neat rectangles between studs', 'Missing insulation, not water'],
          ],
        },
      },
      {
        h2: 'From inspection to repair',
        paras: [
          'If the inspection finds an active leak, we pinpoint the source with pressure and acoustic testing and mark it. Our plumbing partner can then make the repair. See [hidden leak detection in Franklin](/service-area/franklin/hidden-leak-detection/) and [leaking pipe repair in Franklin](/service-area/franklin/pipe-leak-repair/).',
          'The report is also useful for your insurer. See [burst pipe insurance claims in Indiana](/guides/burst-pipe-insurance-claim-indiana/) for what adjusters typically ask for.',
        ],
      },
    ],
    faqs: [
      { q: 'Can a thermal camera see a leak inside the wall?', a: 'It sees the surface temperature, not inside the wall. Wet materials usually read cooler and hot-water leaks warmer, so the camera shows where water is behind the surface. Moisture meters confirm it.' },
      { q: 'Is a thermal inspection worth it before buying an older Franklin home?', a: 'It can be. Older homes often have past repairs and aging pipe. A thermal and moisture survey can show active leaks or old water damage before you close.' },
      { q: 'Will the report help my insurance claim?', a: 'Yes. It documents how far the water spread, with photos and moisture readings, and the likely source, which adjusters ask for.' },
      { q: 'Does thermal imaging find every leak?', a: 'No. It needs a temperature difference, and some cold-water leaks don’t create one. That’s why we combine it with moisture readings, pressure tests and acoustic listening.' },
    ],
    guides: ['leak-detection-methods', 'burst-pipe-insurance-claim-indiana', 'water-leaking-from-ceiling', 'is-leak-detection-worth-it'],
  },
];
