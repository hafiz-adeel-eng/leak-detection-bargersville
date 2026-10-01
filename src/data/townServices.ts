import type { Faq } from './site';
import { franklinPages } from './town-services/franklin';
import { centerGrovePages } from './town-services/center-grove';

// Service pages for a single town, at /service-area/<town>/<slug>/.
// Each page is written for that town (its utility, soils, housing and permits), not filled in from a template,
// so every page has its own sections. Greenwood came first because the town page already ranks on page one there;
// Franklin and Center Grove pages live in ./town-services/.

export type TownBlock = {
  h2: string;
  id?: string;
  paras?: string[]; // markdown: **bold** and [text](/url)
  list?: string[];
  steps?: { t: string; d: string }[];
  table?: { head: string[]; rows: string[][] };
  cards?: { t: string; d: string }[];
  callout?: string;
  after?: string[]; // paragraphs after the list/steps/table/cards
};

export type TownServicePage = {
  town: string; // location slug, e.g. "greenwood"
  townName: string;
  slug: string;
  kind: 'detection' | 'repair';
  service: string; // matching /services/<slug>/ page
  image: string; // /images/<name>.webp
  imageAlt: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  glance: { label: string; value: string }[];
  blocks: TownBlock[];
  faqs: Faq[];
  guides: string[];
  published: string;
  updated: string;
};

export const townServiceUrl = (p: { town: string; slug: string }) => `/service-area/${p.town}/${p.slug}/`;

const gw = { town: 'greenwood', townName: 'Greenwood', published: '2026-10-01', updated: '2026-10-01' };

const greenwoodPages: TownServicePage[] = [
  // ───────────────────────────── Slab leak detection ─────────────────────────────
  {
    ...gw,
    slug: 'slab-leak-detection',
    kind: 'detection',
    service: 'slab-leak-detection',
    image: 'slab-leak-detection',
    imageAlt: 'Technician listening through a tile floor with an acoustic sensor to find a slab leak',
    title: 'Slab Leak Detection in Greenwood, IN | No Guesswork',
    description: 'Slab leak detection in Greenwood, IN (46142, 46143): warm floors, a meter that won’t stop or a high bill. We pinpoint the leak under the concrete and mark it.',
    h1: 'Slab Leak Detection in Greenwood, IN',
    answer: 'A slab leak is a water line leaking under the concrete floor of your Greenwood home. We confirm it at your meter, work out whether it’s on the hot or cold side, pressure-test that line, then listen through the floor and scan it with a thermal camera to mark the spot within inches. Nothing is broken to search; the only opening is the one made for the repair.',
    primaryKeyword: 'slab leak detection greenwood in',
    secondaryKeywords: ['slab leak greenwood indiana', 'slab leak signs', 'hot water slab leak', 'leak under concrete floor greenwood', 'find slab leak without breaking floor'],
    glance: [
      { label: 'Typical signs', value: 'Warm tile, a meter that keeps turning, water heater running nonstop, sound of water under the floor' },
      { label: 'How it’s found', value: 'Meter test, line isolation, pressure gauge, acoustic ground mic, thermal imaging' },
      { label: 'What you get', value: 'Leak confirmed, line identified, exact spot marked, photo report' },
      { label: 'ZIP codes', value: '46142, 46143' },
    ],
    blocks: [
      {
        h2: 'Why slab leaks are common in Greenwood homes',
        paras: [
          'A large share of the houses built in Greenwood since the 1990s, on both sides of I-65 and out toward Smith Valley and Worthsville Road, sit on a **concrete slab** with the water lines running through the gravel and soil underneath. Older homes around Old Town and Madison Avenue are more often on crawl spaces or basements, but many of them had additions or kitchens moved onto slabs later.',
          'Three things put those buried lines under stress here. Central Indiana’s **clay-rich glacial soil** swells when it’s wet and shrinks when it dries, so the ground under a slab is never completely still. Greenwood’s water comes from **groundwater wells** run by Indiana American Water, and like most well water in the region it is hard, which leaves scale inside copper lines and speeds up wear where pipes rub against gravel or concrete. And a hot water line under a slab expands and contracts every time someone showers, which slowly works a pipe against whatever it touches.',
        ],
      },
      {
        h2: 'Signs of a slab leak in your Greenwood home',
        list: [
          '**A warm or hot spot on the floor**, often on tile in a kitchen, bathroom or hallway. That points to a leak on the hot side.',
          '**The sound of running water** under the floor when every faucet, toilet and appliance is off.',
          '**A water meter that keeps moving** with nothing running. The small leak indicator on the meter is the quickest tell.',
          '**A water heater that runs constantly** or a gas bill that jumps along with the water bill.',
          '**Damp carpet pad, cupping wood floors or swelling baseboards** with no plumbing fixture nearby.',
          '**A water bill that jumps** from one month to the next without a change in how you use water.',
        ],
        after: ['One sign is enough to check; two together usually means a leak. A warm floor alone can also be a heat duct in the slab, which is one more reason to test before anyone breaks concrete.'],
      },
      {
        h2: 'Test your meter before you call',
        id: 'check',
        steps: [
          { t: 'Shut everything off', d: 'Turn off faucets, the dishwasher, washing machine, ice maker and sprinklers. Make sure no toilet is refilling.' },
          { t: 'Find the meter', d: 'In most of Greenwood it sits in a pit near the curb or sidewalk. Lift the lid carefully and look for the small triangle or star-shaped leak indicator.' },
          { t: 'Watch for 15–30 minutes', d: 'If the indicator turns, or the reading changes, water is leaving the pipes somewhere on your side of the meter.' },
          { t: 'Close the main shutoff in the house', d: 'If the meter stops, the leak is inside the house or under the slab. If it keeps going, the leak is in the buried line in the yard; see [water line leak detection in Greenwood](/service-area/greenwood/water-line-leak-detection/).' },
          { t: 'Close the water heater’s cold supply valve', d: 'If the meter stops when only the water heater is isolated, the leak is likely on the hot side, which matches a warm spot on the floor.' },
        ],
      },
      {
        h2: 'How we find a slab leak without breaking the floor',
        paras: ['Every Greenwood slab leak call follows the same order, because each step narrows the search before the next one starts.'],
        cards: [
          { t: 'Confirm and isolate', d: 'We read the meter, then close valves to separate the hot side, the cold side and any branch lines. This tells us which pipe is leaking before any equipment comes out.' },
          { t: 'Pressure test', d: 'The suspect line is pressurized and watched on a gauge. A steady drop confirms it’s the leaking line and roughly how fast it’s losing water.' },
          { t: 'Trace the pipe route', d: 'Slab lines rarely run in a straight line. We trace the route under the floor so we listen along the pipe, not across the whole room.' },
          { t: 'Listen and scan', d: 'An acoustic ground microphone picks up the hiss of water escaping under pressure, and a thermal camera shows the heat pattern a hot-side leak leaves on the floor surface.' },
          { t: 'Mark and document', d: 'The spot is marked on the floor with tape or a marker, and you get photos and notes showing the readings, the line and the location.' },
        ],
      },
      {
        h2: 'Slab construction in Greenwood that affects the search',
        table: {
          head: ['What’s on top', 'What it means for detection'],
          rows: [
            ['Tile over slab', 'Sound carries well and heat shows clearly, so hot-side leaks are often the easiest to pinpoint.'],
            ['Carpet over slab', 'Padding dampens sound; we listen at more points and lean on thermal imaging and moisture readings.'],
            ['Engineered wood or LVP', 'Floating floors trap moisture underneath; cupping or soft spots are common clues.'],
            ['Garage or patio slab', 'Lines that pass under the garage are often deeper and colder; pressure testing does most of the work.'],
          ],
        },
      },
      {
        h2: 'After the leak is marked',
        paras: [
          'You choose what happens next. Our plumbing partner can make the repair, either a **spot repair** through one small opening at the mark or a **reroute** that abandons the old line under the slab and runs a new one through the walls or attic. If you already have a plumber, we hand them the mark and the report.',
          'See [slab leak repair in Greenwood](/service-area/greenwood/slab-leak-repair/) for how each repair works, and [does homeowners insurance cover slab leaks?](/guides/does-insurance-cover-slab-leaks/) before you file a claim. Many policies pay for the damage and for access to the pipe, but not for the pipe itself.',
        ],
      },
    ],
    faqs: [
      { q: 'How do I know if I have a slab leak in Greenwood?', a: 'Turn off all water in the house and watch the leak indicator on your meter. If it moves and stops again when you close the main shutoff in the house, the leak is inside, often under the slab. A warm spot on the floor or a water heater that never shuts off points to the hot side.' },
      { q: 'Can a slab leak be found without breaking the floor?', a: 'Yes. Detection uses line isolation, pressure testing, acoustic listening and thermal imaging. The floor is only opened at the marked spot, and only for the repair.' },
      { q: 'Is a warm floor always a slab leak?', a: 'No. Heat ducts in the slab, a radiant heating loop or sun on tile can also warm a floor. That’s why we confirm the leak with the meter and a pressure test before anything else.' },
      { q: 'Will my water utility find a slab leak for me?', a: 'Indiana American Water and the Bargersville utility are responsible for their main and the line up to their shutoff near the curb. A leak under your house is on the homeowner’s side, so it is yours to locate and repair.' },
      { q: 'How long does slab leak detection take?', a: 'Most slab leak visits take a couple of hours, depending on how many lines need testing and what flooring is on top. Homes with more than one leak take longer.' },
    ],
    guides: ['how-to-find-a-slab-leak', 'slab-leak-repair-cost', 'does-insurance-cover-slab-leaks', 'pinhole-leaks-copper-pipes'],
  },

  // ───────────────────────────── Slab leak repair ─────────────────────────────
  {
    ...gw,
    slug: 'slab-leak-repair',
    kind: 'repair',
    service: 'slab-leak-detection',
    image: 'slab-leak-detection',
    imageAlt: 'Small access opening cut in a slab floor at a marked leak for a spot repair',
    title: 'Slab Leak Repair in Greenwood, IN | Spot Repair or Reroute',
    description: 'Slab leak repair in Greenwood, IN: the leak is pinpointed first, then fixed through one small opening or rerouted around the slab. Compare your options.',
    h1: 'Slab Leak Repair in Greenwood, IN',
    answer: 'Slab leak repair in Greenwood starts with finding the exact spot, so the repair is one small opening instead of a trench across your floor. From there, our plumbing partner either fixes the pipe at the mark (a spot repair), runs a new line around the slab through the walls or attic (a reroute), or, when the pipes keep failing, repipes the house. We help you pick the option that fits the age of your pipes and how many leaks you’ve had.',
    primaryKeyword: 'slab leak repair greenwood in',
    secondaryKeywords: ['slab leak repair greenwood indiana', 'slab leak reroute', 'spot repair slab leak', 'fix slab leak without jackhammer', 'slab leak plumber greenwood'],
    glance: [
      { label: 'Repair options', value: 'Spot repair at the mark, reroute through walls or attic, whole-house repipe' },
      { label: 'Starts with', value: 'Pinpointed leak location, so only one small area is opened' },
      { label: 'Who does it', value: 'Our plumbing partner, or your own plumber with our mark and report' },
      { label: 'Also check', value: 'Your homeowners policy for access and water damage coverage' },
    ],
    blocks: [
      {
        h2: 'The three ways to fix a slab leak',
        cards: [
          { t: 'Spot repair', d: 'A small section of floor and concrete is opened at the marked spot, the damaged piece of pipe is replaced, the line is pressure-tested, and the slab is patched. Best for a single leak on a line that’s otherwise in good shape.' },
          { t: 'Reroute', d: 'The leaking line under the slab is capped and abandoned, and a new line, usually PEX, is run through the walls, ceiling or attic to the same fixtures. Best when the line under the slab is old or has leaked before, or when the leak sits under cabinets or expensive flooring.' },
          { t: 'Repipe', d: 'All supply lines in the house are replaced. It costs the most but ends repeat leaks in homes with failing copper or polybutylene pipe. See [whole-house repipe cost](/guides/whole-house-repipe-cost/).' },
        ],
      },
      {
        h2: 'Which repair makes sense in a Greenwood home',
        table: {
          head: ['Your situation', 'Usually the better choice'],
          rows: [
            ['First leak, newer home, line in good shape', 'Spot repair'],
            ['Leak under kitchen cabinets, hardwood or large-format tile', 'Reroute, to avoid tearing out finishes'],
            ['Second or third slab leak on the same line', 'Reroute that line'],
            ['Pinholes showing up in several places in older copper', 'Repipe, or reroute the worst lines first'],
            ['Hot-side leak with the water heater running all day', 'Repair soon either way; the heater and gas bill keep climbing'],
          ],
        },
        after: ['Greenwood’s hard well water matters here. If one copper line under the slab has pinholed from the inside, the rest of that copper is the same age and has seen the same water, so a reroute often saves a second repair a year later.'],
      },
      {
        h2: 'What a spot repair involves, step by step',
        steps: [
          { t: 'Protect the room', d: 'Furniture is moved, the area is sealed off with plastic, and dust control goes up before any cutting starts.' },
          { t: 'Open the floor at the mark', d: 'The flooring is lifted and a small hole, typically a couple of feet across, is cut through the concrete and dug down to the pipe.' },
          { t: 'Replace the damaged section', d: 'The leaking piece is cut out and replaced, and the pipe around it is inspected for wear.' },
          { t: 'Pressure-test before closing', d: 'The line is tested again with the hole still open, so a second leak nearby isn’t buried under new concrete.' },
          { t: 'Backfill and patch', d: 'The hole is backfilled, the concrete is patched, and the area is ready for flooring once it cures.' },
        ],
      },
      {
        h2: 'Why pinpointing first keeps the repair small',
        paras: [
          'Without an exact location, a slab repair turns into exploration: a trench across the kitchen, a second hole when the first one misses, flooring replaced in a whole room instead of a few tiles. Detection that marks the leak within inches is what makes a one-opening repair possible, and it’s the part of the job that saves the most money.',
          'If the leak hasn’t been found yet, start with [slab leak detection in Greenwood](/service-area/greenwood/slab-leak-detection/).',
        ],
      },
      {
        h2: 'Slab leak repair cost',
        paras: [
          'National cost guides put a typical single slab leak repair at about **$2,000 to $4,000**, with spot repairs often around **$1,500 to $3,500** and reroutes anywhere from **$600 to $7,500** depending on the length and route of the new line. What moves the price most in Greenwood homes is what sits on top of the leak (tile, hardwood, cabinets), how deep the pipe is, and whether there’s more than one leak.',
          'Detection and repair are quoted separately. See [slab leak repair cost](/guides/slab-leak-repair-cost/) for the full breakdown, and get a written quote for your home.',
        ],
      },
      {
        h2: 'Insurance and paperwork',
        paras: [
          'Many homeowners policies cover the cost of **getting to** the pipe (breaking and restoring the floor) and the water damage, but not the repair of the pipe itself. Keep the photo report from detection; it shows the cause and location, which is the first thing an adjuster asks for. Read [does homeowners insurance cover slab leaks?](/guides/does-insurance-cover-slab-leaks/) before you call your insurer.',
          'If the leak ran up your bill, Indiana American Water and many Indiana utilities have a leak adjustment process once the leak is repaired. See [water bill leak adjustment in Indiana](/guides/water-bill-leak-adjustment-indiana/).',
        ],
      },
    ],
    faqs: [
      { q: 'Do you repair slab leaks in Greenwood, or only find them?', a: 'Both. We pinpoint the leak, then our plumbing partner makes the repair: a spot repair at the mark, a reroute, or a repipe when the pipes keep failing. If you have your own plumber, we give them the mark and report instead.' },
      { q: 'Is rerouting better than breaking the slab?', a: 'Often, yes, when the line under the slab is old, has leaked before, or the leak sits under cabinets or expensive flooring. A spot repair is usually the better value for a first leak on a line in good condition.' },
      { q: 'Can I wait to fix a slab leak?', a: 'It isn’t a good idea. Water under a slab can wash out soil, soak flooring and drywall and grow mold, and a hot-side leak keeps your water heater running. Shut the water off at night if you must wait a few days for the repair.' },
      { q: 'How long does a slab leak repair take?', a: 'A spot repair is usually done in a day, with time afterwards for the concrete patch to cure before flooring goes back down. A reroute can take one to two days depending on the route.' },
      { q: 'Will insurance pay for slab leak repair in Indiana?', a: 'It depends on your policy. Many cover access to the pipe and resulting water damage but not the pipe repair itself. Check your policy and keep the detection report for your claim.' },
    ],
    guides: ['slab-leak-repair-options', 'slab-leak-repair-cost', 'whole-house-repipe-cost', 'does-insurance-cover-slab-leaks'],
  },

  // ───────────────────────────── Water line leak detection ─────────────────────────────
  {
    ...gw,
    slug: 'water-line-leak-detection',
    kind: 'detection',
    service: 'underground-water-leak-detection',
    image: 'underground-water-leak-detection',
    imageAlt: 'Technician tracing a buried water service line across a front yard with a ground microphone',
    title: 'Water Line Leak Detection in Greenwood, IN | Yard Leaks',
    description: 'Water line leak detection in Greenwood, IN: soggy yard, low pressure or a meter that moves with the house shut off. We trace and pinpoint the buried line leak.',
    h1: 'Water Line Leak Detection in Greenwood, IN',
    answer: 'Your water service line is the buried pipe that runs from the utility’s shutoff near the curb to your house. When it leaks, the water soaks into Greenwood’s clay soil instead of showing up indoors. We confirm the leak with your meter and house shutoff, trace the line across the yard, and listen to it with a ground microphone (or test it with tracer gas if it’s plastic) to mark the spot, so only one small hole is dug.',
    primaryKeyword: 'water line leak detection greenwood in',
    secondaryKeywords: ['underground water leak greenwood', 'main water line leak greenwood indiana', 'water service line leak', 'leak between meter and house', 'yard water leak detection'],
    glance: [
      { label: 'Who owns the line', value: 'Homeowner, from the utility’s shutoff near the curb to the house' },
      { label: 'Common signs', value: 'Soggy or greener strip of lawn, low pressure, meter moving with the house valve closed' },
      { label: 'How it’s found', value: 'Line tracing, acoustic ground microphone, tracer gas for plastic pipe' },
      { label: 'Utilities', value: 'Indiana American Water or the Town of Bargersville, by address' },
    ],
    blocks: [
      {
        h2: 'Whose leak is it? The meter, the curb and your side',
        paras: [
          'Indiana American Water, which serves most of Greenwood, owns the main in the street and the service line up to its shutoff valve near the curb. Everything from that valve to your house is the **customer-owned** portion. Some addresses on Greenwood’s south and west side are served by the **Town of Bargersville water utility** instead; your bill tells you which one you have.',
          'If water is bubbling up at the meter pit or curb box, call your utility first. If the leak is anywhere between there and the house, it’s yours to find and repair, and that is the part of the line we test.',
        ],
        callout: '**Lead service lines:** Indiana American Water runs a program that replaces lead service lines, including the customer-owned side, at no direct cost to the customer. If your line turns out to be lead, ask the utility before paying for a replacement.',
      },
      {
        h2: 'Signs the buried line is leaking',
        list: [
          'A **strip of lawn that stays soggy**, greener than the rest, or sinks slightly along the path from the meter to the house.',
          '**Low water pressure** everywhere in the house at once, not just one faucet.',
          'The meter keeps moving **after you close the main shutoff in the house**. This one test separates a yard leak from an indoor one.',
          'Water seeping into the basement or crawl space **on the street side** of the house, where the line comes through the wall.',
          'A **higher bill** in a month when nothing changed, often the first sign in winter when the lawn doesn’t show anything.',
        ],
        after: ['Clay soil hides these leaks well. Water often follows the gravel bedding of the pipe trench and surfaces several feet from the break, or doesn’t surface at all. A wet spot is a clue, not the location.'],
      },
      {
        h2: 'How we pinpoint a leak in the yard',
        steps: [
          { t: 'Confirm it’s outside', d: 'With the house shutoff closed, a moving meter proves the leak is between the meter and the house.' },
          { t: 'Trace the route', d: 'Service lines don’t always run straight to the front door. We locate and mark the path so every listening point is on top of the pipe.' },
          { t: 'Listen along the line', d: 'A ground microphone picks up the sound of water escaping under pressure. Metal pipe carries that sound well, and the noise peaks right over the leak.' },
          { t: 'Use tracer gas on plastic pipe', d: 'PE and PVC lines carry little sound. A safe hydrogen and nitrogen mix is pushed into the line and detected where it rises through the soil.' },
          { t: 'Mark and report', d: 'The spot is flagged or painted on the lawn, driveway or sidewalk, with photos and notes for whoever makes the repair.' },
        ],
      },
      {
        h2: 'Pipe materials in Greenwood service lines',
        table: {
          head: ['Pipe', 'Where you’ll see it', 'Detection method'],
          rows: [
            ['Copper', 'Many homes from the 1960s through the 1990s', 'Acoustic listening works well'],
            ['Galvanized steel', 'Older homes near Old Town', 'Acoustic; these lines often have several weak spots'],
            ['Polyethylene (PE) or PVC', 'Many newer subdivisions', 'Tracer gas, since plastic carries little sound'],
            ['Lead', 'Rare, mostly very old homes', 'Ask Indiana American Water about its replacement program'],
          ],
        },
      },
      {
        h2: 'Under the driveway, sidewalk or a tree',
        paras: [
          'Many Greenwood service lines pass under a driveway or a front walk. Pinpointing matters most here: one cut through concrete at the right spot costs far less than a trench, and sometimes the better answer is to bore a new line beside the old one. See [water leak under the driveway](/guides/water-leak-under-driveway/).',
          'Before anyone digs, Indiana law requires a call to **Indiana 811** at least two full working days ahead so gas, electric and cable lines are marked. Your plumber handles this for the repair.',
        ],
      },
      {
        h2: 'Once the leak is found',
        paras: [
          'A single leak in a line that is otherwise sound can usually be fixed with one small excavation at the mark. A line that has leaked more than once, or is old galvanized steel, is often better replaced. Both options are covered in [water line repair in Greenwood](/service-area/greenwood/water-line-repair/).',
        ],
      },
    ],
    faqs: [
      { q: 'Who is responsible for a water line leak in Greenwood?', a: 'The utility (usually Indiana American Water, or the Bargersville utility for some addresses) owns the line up to its shutoff near the curb. The line from there to your house is the homeowner’s to repair.' },
      { q: 'How do I know the leak is in the yard and not the house?', a: 'Turn off all water, then close the main shutoff valve inside the house. If the meter still moves, the leak is in the buried line between the meter and the house.' },
      { q: 'Can you find a leak in a plastic water line?', a: 'Yes. Plastic lines carry little sound, so we use tracer gas, a safe hydrogen and nitrogen mix that rises through the soil at the leak, along with line tracing.' },
      { q: 'Why is my yard wet in one spot but the leak is somewhere else?', a: 'Water follows the gravel bedding around the pipe and moves through gaps in clay soil, so it can surface several feet from the break. Acoustic listening or tracer gas finds the actual leak.' },
      { q: 'Do I need to call 811 before the line is dug up?', a: 'Yes. Indiana law requires contacting Indiana 811 at least two full working days before digging so buried utilities are marked. The plumber making the repair normally places the request.' },
    ],
    guides: ['how-to-find-an-underground-water-leak', 'water-leak-under-driveway', 'water-line-replacement-cost-indiana', 'low-water-pressure-leak'],
  },

  // ───────────────────────────── Water line repair ─────────────────────────────
  {
    ...gw,
    slug: 'water-line-repair',
    kind: 'repair',
    service: 'underground-water-leak-detection',
    image: 'underground-water-leak-detection',
    imageAlt: 'Small excavation in a lawn exposing a water service line at a marked leak',
    title: 'Water Line Repair & Replacement in Greenwood, IN',
    description: 'Water line repair in Greenwood, IN: fix one leak at the marked spot or replace the service line from the curb to the house. Options, permits and cost drivers.',
    h1: 'Water Line Repair & Replacement in Greenwood, IN',
    answer: 'When the buried water line between the curb and your Greenwood home leaks, there are two ways to fix it: repair the leak through one small hole at the pinpointed spot, or replace the whole service line, trenched or trenchless. We find the leak first, then our plumbing partner makes the repair you choose, with 811 locates and any required permit handled.',
    primaryKeyword: 'water line repair greenwood in',
    secondaryKeywords: ['main water line replacement greenwood', 'water service line replacement greenwood indiana', 'trenchless water line replacement', 'water line leak repair', 'replace water line curb to house'],
    glance: [
      { label: 'Options', value: 'Spot repair at the leak, trenched replacement, trenchless replacement' },
      { label: 'Before digging', value: 'Indiana 811 locate request, at least two full working days ahead' },
      { label: 'Your section', value: 'From the utility’s shutoff near the curb to the house' },
      { label: 'Lead line?', value: 'Check Indiana American Water’s lead line replacement program first' },
    ],
    blocks: [
      {
        h2: 'Repair the leak or replace the line?',
        table: {
          head: ['Choose a spot repair when…', 'Consider replacing the line when…'],
          rows: [
            ['It’s the first leak on the line', 'The line has leaked before, or leaks in more than one place'],
            ['The pipe around the leak is in good condition', 'The line is galvanized steel, polybutylene or lead'],
            ['The leak is in open lawn or easy to reach', 'Water pressure has been low for years even before the leak'],
            ['The line is copper or PE in good shape', 'Tree roots have crushed or wrapped the line'],
          ],
        },
        after: ['A spot repair costs far less and is usually the right first step. Replacing the whole line makes sense when the pipe itself is the problem, not one bad spot.'],
      },
      {
        h2: 'How a spot repair works',
        steps: [
          { t: 'Pinpoint and mark', d: 'The leak is located with acoustic listening or tracer gas and marked on the ground. See [water line leak detection in Greenwood](/service-area/greenwood/water-line-leak-detection/).' },
          { t: 'Call 811', d: 'Gas, electric, cable and fiber lines are marked before anyone digs, as Indiana law requires.' },
          { t: 'Dig one hole', d: 'A small excavation exposes the pipe at the mark, often just a few feet across.' },
          { t: 'Repair and test', d: 'The damaged section is cut out and replaced with a repair coupling or new pipe, then the line is pressurized and checked before backfilling.' },
          { t: 'Backfill and restore', d: 'The hole is backfilled and compacted and the sod or surface is put back.' },
        ],
      },
      {
        h2: 'Replacing the service line: trenched vs trenchless',
        cards: [
          { t: 'Trenched replacement', d: 'A trench is dug from the curb to the house and the new line, usually PE or copper, is laid below frost depth. Straightforward and often the lower price when the path is open lawn.' },
          { t: 'Trenchless replacement', d: 'The new line is pulled or bored underground between two small pits, so driveways, walks, trees and landscaping stay in place. Usually costs more per foot but saves restoration.' },
          { t: 'Depth matters here', d: 'Central Indiana’s frost line is about 30 to 36 inches, so a new line has to run deep enough to stay below it. Shallow old lines are a common source of winter breaks.' },
        ],
      },
      {
        h2: 'Working with your Greenwood water utility',
        paras: [
          'Indiana American Water serves most of Greenwood; some south and west side addresses are on the **Town of Bargersville** utility. A full line replacement usually means shutting the water at the utility’s valve near the curb and reconnecting to it, so your plumber coordinates with the utility, and with the City of Greenwood if a permit is required for your job.',
          'If your existing line turns out to be **lead**, contact Indiana American Water before paying for a replacement. Its lead service line replacement program replaces lead lines, including the customer side, at no direct cost to customers.',
        ],
      },
      {
        h2: 'What drives water line repair cost',
        list: [
          '**Length of the line** from the curb to the house. Homes set far back from the street cost more to replace.',
          '**What’s on top:** open lawn is cheapest to dig; driveways, patios and mature trees push the price up or make trenchless worth it.',
          '**Depth and soil.** Deep lines in heavy clay take longer to expose.',
          '**Pipe material** and how the line connects at the curb and the house.',
          '**Spot repair vs full replacement.** One small dig at a pinpointed leak is a fraction of the cost of a new line.',
        ],
        after: ['National guides put a full service line replacement at roughly **$2,000 to $5,800** trenched and **$3,200 to $8,000** trenchless. See [water line replacement cost in Indiana](/guides/water-line-replacement-cost-indiana/) for the per-foot numbers.'],
      },
    ],
    faqs: [
      { q: 'Can one leak in my water line be repaired without replacing it?', a: 'Usually, yes. If the line is in good condition, the leak is pinpointed and fixed through one small excavation at the mark. Replacement makes sense when the line has leaked repeatedly or is galvanized, polybutylene or lead.' },
      { q: 'Who pays to repair the water line in Greenwood?', a: 'The homeowner pays for the section from the utility’s shutoff near the curb to the house. The utility handles its main and the line up to its valve.' },
      { q: 'Does Indiana American Water replace lead service lines?', a: 'Yes. Indiana American Water runs a lead service line replacement program that replaces lead lines, including the customer-owned portion, at no direct cost to the customer. Ask the utility before paying for a replacement if your line might be lead.' },
      { q: 'What is trenchless water line replacement?', a: 'The new line is pulled or bored underground between two small pits instead of digging a trench, so driveways, sidewalks and landscaping are left in place.' },
      { q: 'How deep should a water line be in Greenwood?', a: 'Below the frost line, which is about 30 to 36 inches in central Indiana. Lines that are shallower are more likely to freeze and crack in a hard winter.' },
    ],
    guides: ['water-line-replacement-cost-indiana', 'how-to-find-an-underground-water-leak', 'water-leak-under-driveway', 'galvanized-pipe-replacement'],
  },

  // ───────────────────────────── Hidden leak detection ─────────────────────────────
  {
    ...gw,
    slug: 'hidden-leak-detection',
    kind: 'detection',
    service: 'hidden-water-leak-detection',
    image: 'hidden-water-leak-detection',
    imageAlt: 'Thermal camera showing a cool damp patch on drywall where a pipe is leaking inside the wall',
    title: 'Hidden Water Leak Detection in Greenwood, IN',
    description: 'Hidden leak detection in Greenwood, IN: stains, soft drywall, musty smells or a ceiling leak. We find leaks in walls, ceilings, showers and floors.',
    h1: 'Hidden Water Leak Detection in Greenwood, IN',
    answer: 'A hidden leak is water escaping somewhere you can’t see: inside a wall, above a ceiling, under a shower pan or beneath a floor. In Greenwood homes we usually trace it to a supply line, a drain, a shower valve or the shower pan. We map the moisture with meters and a thermal camera, test the supply and drain lines separately, and mark the source so the opening for the repair is small and in the right place.',
    primaryKeyword: 'hidden water leak detection greenwood in',
    secondaryKeywords: ['leak in wall greenwood indiana', 'ceiling leak detection', 'shower leak detection greenwood', 'water stain on ceiling', 'find leak behind drywall'],
    glance: [
      { label: 'Where they hide', value: 'Walls, ceilings under bathrooms, shower pans and valves, floors, crawl spaces' },
      { label: 'Typical clues', value: 'Stains, bubbling paint, soft drywall, musty smell, a meter that moves' },
      { label: 'Tools', value: 'Moisture meters, thermal imaging, pressure and flood tests, acoustic listening' },
      { label: 'Result', value: 'Source marked, so one small opening replaces several exploratory holes' },
    ],
    blocks: [
      {
        h2: 'Where hidden leaks start in Greenwood homes',
        cards: [
          { t: 'Under a second-floor bathroom', d: 'Two-story homes are common in Greenwood’s newer subdivisions. A stain on the kitchen or living room ceiling usually traces to a tub drain, toilet seal, shower pan or valve above it.' },
          { t: 'Inside exterior walls', d: 'Lines to hose bibs and kitchen sinks on outside walls are the first to freeze and split in a hard Indiana winter, then leak quietly once they thaw.' },
          { t: 'Behind the shower', d: 'Failed grout, a cracked pan or a leaking valve body can soak the wall and subfloor for months before a stain appears in the next room.' },
          { t: 'In the crawl space', d: 'Older Greenwood homes over crawl spaces hide supply and drain leaks under the floor, where they show up as a musty smell or soft flooring.' },
        ],
      },
      {
        h2: 'Supply leak or drain leak? Why the difference matters',
        paras: [
          'A **supply** line is under pressure all the time, so it leaks whether anyone is using water or not, and it turns the water meter. A **drain** line only leaks when water runs down it: after a shower, a bath or a flush. The meter test tells them apart in minutes.',
          'This is the first thing we settle, because the methods are different. Pressurized leaks can be heard and pressure-tested; drain and shower leaks are found by running water through one fixture at a time and watching where the moisture appears.',
        ],
      },
      {
        h2: 'How we find a leak inside a wall or ceiling',
        steps: [
          { t: 'Meter test', d: 'With all water off, a moving meter means a supply leak; a still meter points to a drain, shower or appliance leak.' },
          { t: 'Moisture mapping', d: 'Pin and pinless moisture meters measure how wet the drywall, wood and subfloor are, and where the wettest point is.' },
          { t: 'Thermal imaging', d: 'Evaporating water cools a surface and hot-water leaks warm it, so a thermal camera shows the shape of the wet area behind the finish.' },
          { t: 'Fixture-by-fixture tests', d: 'For drains and showers, we run one fixture at a time, or flood-test a shower pan, and watch which one feeds the wet spot.' },
          { t: 'Mark the source', d: 'The leak is marked on the wall or ceiling with notes and images, so the repair opening is one small, well-placed hole.' },
        ],
      },
      {
        h2: 'What you’re noticing and what it usually means',
        table: {
          head: ['Clue', 'Most likely source'],
          rows: [
            ['Ceiling stain under a bathroom, worse after showers', 'Shower pan, valve, tub drain or grout'],
            ['Stain that grows even when nobody uses water', 'Pressurized supply line in the ceiling or wall'],
            ['Bubbling paint low on an outside wall', 'Hose bib or sink supply line, often freeze damage'],
            ['Water on the floor around a toilet', 'Wax ring or supply connection; see [toilet leaking at the base](/guides/toilet-leaking-at-base/)'],
            ['Musty smell with no visible water', 'Slow leak in a crawl space, wall cavity or under flooring'],
          ],
        },
      },
      {
        h2: 'While you wait for the visit',
        list: [
          'If the ceiling is bulging or sagging, put a bucket underneath and carefully puncture the lowest point to let water drain in one place.',
          'If the meter is moving, close the main shutoff when you aren’t using water. See [how to shut off the water to your house](/guides/how-to-shut-off-water-to-house/).',
          'Stop using the shower or fixture you suspect.',
          'Take photos of stains and readings for your insurance claim.',
        ],
        after: ['Once the source is marked, our plumbing partner can fix it through one small opening. See [leaking pipe repair in Greenwood](/service-area/greenwood/pipe-leak-repair/).'],
      },
    ],
    faqs: [
      { q: 'How do you find a leak inside a wall without tearing it open?', a: 'We combine a meter test, moisture meters, thermal imaging and, for pressurized lines, acoustic listening and pressure testing. The leak is marked so only one small opening is needed for the repair.' },
      { q: 'Why is my ceiling leaking only after someone showers?', a: 'A leak that appears after showers but not otherwise is usually a drain, shower pan, valve or grout problem, not a supply line. A flood test of the pan and fixture-by-fixture testing finds it.' },
      { q: 'Can a thermal camera see through walls?', a: 'No. It sees temperature differences on the surface. Wet drywall is usually cooler than dry drywall, and a hot-water leak warms it, so the camera shows the shape of the wet area behind the finish.' },
      { q: 'Is a musty smell a sign of a hidden leak?', a: 'Often. A slow leak in a wall, crawl space or under flooring keeps materials damp enough to grow mold long before a stain shows. Moisture readings confirm it.' },
      { q: 'Do you serve both ZIP codes in Greenwood?', a: 'Yes, 46142 and 46143, from our base in Bargersville just south of the city.' },
    ],
    guides: ['how-to-find-a-leak-in-a-wall', 'water-leaking-from-ceiling', 'shower-pan-leak', 'water-running-sound-in-pipes'],
  },

  // ───────────────────────────── Pipe leak repair ─────────────────────────────
  {
    ...gw,
    slug: 'pipe-leak-repair',
    kind: 'repair',
    service: 'hidden-water-leak-detection',
    image: 'thermal-imaging-inspection',
    imageAlt: 'Small square opening in drywall exposing a repaired copper water pipe',
    title: 'Leaking Pipe Repair in Greenwood, IN | Walls & Ceilings',
    description: 'Leaking pipe repair in Greenwood, IN: pinhole, burst and frozen pipes in walls, ceilings and crawl spaces, repaired through one small opening at the leak.',
    h1: 'Leaking Pipe Repair in Greenwood, IN',
    answer: 'A leaking pipe inside a wall, ceiling or crawl space is cheapest to fix when the opening is small and in the right place. We pinpoint the leak first, then our plumbing partner opens the wall or ceiling at the mark, replaces the damaged section, tests the line, and leaves a clean opening ready for drywall. Frozen and burst pipes, pinhole leaks in copper and failed fittings are the most common repairs in Greenwood homes.',
    primaryKeyword: 'pipe leak repair greenwood in',
    secondaryKeywords: ['burst pipe repair greenwood indiana', 'pinhole leak repair copper', 'frozen pipe repair greenwood', 'leaking pipe in wall repair', 'water pipe repair near greenwood'],
    glance: [
      { label: 'Common repairs', value: 'Frozen and burst pipes, pinhole leaks in copper, failed fittings and valves' },
      { label: 'Approach', value: 'Pinpoint first, then one small opening at the marked spot' },
      { label: 'Winter risk', value: 'Lines in exterior walls, garages and crawl spaces' },
      { label: 'Burst pipe now?', value: 'Close the main shutoff, then call' },
    ],
    blocks: [
      {
        h2: 'Burst pipe right now? Do this first',
        steps: [
          { t: 'Close the main shutoff', d: 'Usually where the water line enters the house: basement, crawl space, utility room or near the water heater. See [how to shut off the water to your house](/guides/how-to-shut-off-water-to-house/).' },
          { t: 'Turn off the water heater', d: 'Switch a gas heater to pilot or turn off the breaker for an electric one so it doesn’t heat an empty tank.' },
          { t: 'Open a faucet at the lowest point', d: 'This drains the water left in the pipes and takes pressure off the break.' },
          { t: 'Protect what you can', d: 'Move belongings, mop up, and keep electrical cords and devices away from the water.' },
          { t: 'Document it', d: 'Photos of the damage and the pipe help with an insurance claim. Then call.' },
        ],
        after: ['More detail: [burst pipe: what to do](/guides/burst-pipe-what-to-do/).'],
      },
      {
        h2: 'Pipe problems we repair in Greenwood homes',
        cards: [
          { t: 'Frozen and burst pipes', d: 'Indiana cold snaps freeze lines in exterior walls, unheated garages and crawl spaces. The pipe splits while frozen and starts leaking when it thaws. See [frozen pipe leaks](/guides/frozen-pipe-leaks/).' },
          { t: 'Pinhole leaks in copper', d: 'Hard water and age wear copper from the inside. One pinhole is often followed by more on the same run. See [pinhole leaks in copper pipes](/guides/pinhole-leaks-copper-pipes/).' },
          { t: 'Failed fittings and valves', d: 'Shower valves, shutoff valves under sinks, and push-fit or crimp fittings can drip inside the wall for months.' },
          { t: 'Older pipe materials', d: 'Galvanized steel in older homes near Old Town and gray polybutylene in some homes from the late 1970s to mid 1990s fail more often and may need replacing, not patching.' },
        ],
      },
      {
        h2: 'How a pipe repair inside a wall or ceiling works',
        steps: [
          { t: 'Pinpoint the leak', d: 'Moisture mapping, thermal imaging and pressure testing mark the exact spot. See [hidden leak detection in Greenwood](/service-area/greenwood/hidden-leak-detection/).' },
          { t: 'Open at the mark', d: 'A small, square opening is cut in the drywall or ceiling right over the leak.' },
          { t: 'Replace the damaged section', d: 'The leaking piece is cut out and replaced with new pipe and fittings, often PEX or copper to match.' },
          { t: 'Test before closing', d: 'The line is pressurized and checked for leaks with the wall still open.' },
          { t: 'Dry out and close', d: 'Wet insulation is removed and the cavity is left to dry before the opening is patched.' },
        ],
      },
      {
        h2: 'Repair one spot or replace the run?',
        table: {
          head: ['Situation', 'Usual recommendation'],
          rows: [
            ['One leak from a freeze or a damaged fitting', 'Repair the section'],
            ['A second pinhole on the same copper run', 'Replace that run'],
            ['Polybutylene (gray plastic) supply lines', 'Plan to replace; see [polybutylene pipe replacement](/guides/polybutylene-pipe-replacement/)'],
            ['Galvanized steel with low pressure and rust', 'Plan to replace; see [galvanized pipe replacement](/guides/galvanized-pipe-replacement/)'],
            ['Leaks in several rooms within a year', 'Talk about a repipe; see [whole-house repipe cost](/guides/whole-house-repipe-cost/)'],
          ],
        },
      },
      {
        h2: 'Keep it from happening again',
        list: [
          'Before the first hard freeze, disconnect hoses and shut off and drain the lines to outside faucets.',
          'Insulate pipes in crawl spaces, garages and exterior walls, and close crawl space vents in winter.',
          'On the coldest nights, open cabinet doors under sinks on outside walls and let a faucet drip.',
          'If you have a water softener, keep it working; hard water speeds up wear in copper.',
          'Consider a smart leak detector or automatic shutoff near the water heater and washer. See [smart water leak detectors](/guides/smart-water-leak-detectors/).',
        ],
        after: ['Need more plumbing work while we’re there? See our [plumber in Greenwood](/plumber-greenwood-in/) page.'],
      },
    ],
    faqs: [
      { q: 'Can you fix a leaking pipe inside the wall without tearing out the whole wall?', a: 'Yes. Once the leak is pinpointed, the opening is one small square at the marked spot, just large enough to replace the damaged section and test it.' },
      { q: 'What should I do if a pipe bursts in my Greenwood home?', a: 'Close the main water shutoff, turn off the water heater, open a low faucet to drain the lines, move belongings away from the water and take photos for insurance. Then call.' },
      { q: 'Why do my copper pipes keep getting pinhole leaks?', a: 'Age, water chemistry and hard water all wear copper from the inside. When one pinhole appears, the rest of that run has seen the same conditions, so a second leak is common. Replacing the run often costs less than repeated repairs.' },
      { q: 'Are frozen pipes covered by homeowners insurance?', a: 'Sudden damage from a burst pipe is often covered, but policies differ and many exclude damage from neglect such as an unheated house. See our guide to burst pipe insurance claims in Indiana.' },
      { q: 'Do you repair pipes in crawl spaces?', a: 'Yes. Many older Greenwood homes are built over crawl spaces, and the supply and drain lines there are repaired the same way: pinpoint, open access, replace the section and test.' },
    ],
    guides: ['burst-pipe-what-to-do', 'frozen-pipe-leaks', 'pinhole-leaks-copper-pipes', 'burst-pipe-insurance-claim-indiana'],
  },

  // ───────────────────────────── Pool leak detection ─────────────────────────────
  {
    ...gw,
    slug: 'pool-leak-detection',
    kind: 'detection',
    service: 'pool-spa-leak-detection',
    image: 'pool-spa-leak-detection',
    imageAlt: 'Technician testing a backyard pool’s skimmer and return lines for leaks',
    title: 'Pool Leak Detection in Greenwood, IN | Pools & Spas',
    description: 'Pool leak detection in Greenwood, IN: water dropping faster than evaporation or wet spots near the pool. We test the shell, fittings and buried lines.',
    h1: 'Pool & Spa Leak Detection in Greenwood, IN',
    answer: 'If your Greenwood pool is losing more water than a bucket on the step loses beside it, it’s leaking. We test the shell, skimmer, returns, lights and main drain with dye and underwater listening, then pressure-test each buried plumbing line to the equipment pad, so you know exactly where the water is going before anyone patches or digs.',
    primaryKeyword: 'pool leak detection greenwood in',
    secondaryKeywords: ['pool leak greenwood indiana', 'swimming pool leak detection near greenwood', 'pool losing water', 'spa leak detection', 'pool plumbing leak'],
    glance: [
      { label: 'Season', value: 'Most calls come at spring opening and in the hottest weeks of summer' },
      { label: 'Common sources', value: 'Skimmer, return and light fittings, liner tears, buried return and suction lines' },
      { label: 'How it’s found', value: 'Bucket test, dye testing, underwater acoustic listening, line pressure tests' },
      { label: 'Pools tested', value: 'Vinyl liner, fiberglass and concrete pools, and attached or standalone spas' },
    ],
    blocks: [
      {
        h2: 'Leak or evaporation? Run the bucket test',
        steps: [
          { t: 'Fill a bucket', d: 'Set a bucket on the pool step or a ledge and fill it to the same level as the pool water.' },
          { t: 'Mark both levels', d: 'Mark the water line inside the bucket and on the pool tile or skimmer.' },
          { t: 'Wait 24 hours', d: 'Run the pump as usual, and don’t add water or let the auto-fill run.' },
          { t: 'Compare', d: 'Both lose the same amount from evaporation. If the pool dropped more than the bucket, the extra is a leak.' },
          { t: 'Repeat with the pump off', d: 'If the pool loses more with the pump running, suspect the pressure side (return lines). More with it off often points to the suction side or the shell.' },
        ],
        after: ['Hot, windy Indiana summer days can pull a quarter inch or more a day out of a pool by evaporation alone, so the bucket matters more than a ruler. Full method: [how to find a pool leak](/guides/how-to-find-a-pool-leak/).'],
      },
      {
        h2: 'Why Greenwood pools leak',
        cards: [
          { t: 'Winter freeze damage', d: 'If lines aren’t fully blown out and plugged at closing, water left in the skimmer throat or returns can freeze and crack them. The leak shows up when the pool is opened in spring.' },
          { t: 'Ground movement', d: 'Clay soil around an in-ground pool shifts with wet springs and dry summers, stressing the buried plumbing and the seals around skimmers and lights.' },
          { t: 'Vinyl liner wear', d: 'Liners get brittle with sun and chemicals; tears hide along steps, corners and fittings.' },
          { t: 'Equipment pad leaks', d: 'Pump seals, filter o-rings and valves drip at the pad and are easy to miss when the pad sits on gravel.' },
        ],
      },
      {
        h2: 'How we find a pool leak',
        list: [
          '**Equipment check:** pump, filter, heater, valves and unions at the pad, where many “pool leaks” actually are.',
          '**Dye testing:** colored dye released near fittings, light niches, steps and cracks is pulled toward a leak.',
          '**Underwater acoustic listening:** a hydrophone picks up the sound of water escaping through the shell or a fitting.',
          '**Line pressure tests:** each return, suction and main drain line is plugged and pressurized; one that won’t hold pressure is leaking.',
          '**Acoustic listening on the deck:** on a line that fails its test, we listen through the deck to pinpoint the break.',
        ],
        after: ['You get a report of every test, the leaks found, and photos of each location, ready for your pool company or our partner to repair.'],
      },
      {
        h2: 'Before the visit',
        table: {
          head: ['Do', 'Why'],
          rows: [
            ['Keep the water at normal operating level', 'Fittings and the skimmer must be under water to test'],
            ['Note how much water you add each week', 'The rate of loss helps narrow the search'],
            ['Write down whether loss changes with the pump on or off', 'Points to the pressure side or the suction side'],
            ['Check for wet spots near the pad or between the pool and the pad', 'Buried line leaks often show there first'],
          ],
        },
      },
      {
        h2: 'Spas and hot tubs',
        paras: [
          'Attached spas share plumbing with the pool and often leak at the spillover, jet fittings or the heater connections. Standalone hot tubs leak most at the pump seals, heater unions and jet bodies inside the cabinet. Both are tested the same way: isolate, pressure-test, dye-test and listen.',
        ],
      },
    ],
    faqs: [
      { q: 'How much water loss is normal for a pool in Greenwood?', a: 'It depends on heat, wind and sun. On hot, windy days a quarter inch or more a day from evaporation alone is common. The bucket test compares your pool with a bucket beside it so weather is taken out of the equation.' },
      { q: 'Why did my pool start leaking after I opened it this spring?', a: 'If lines weren’t fully cleared and plugged at closing, water left in a skimmer or return line can freeze and crack it over the winter. Those leaks show up as soon as the pool is filled and running.' },
      { q: 'Can you find a leak in the underground pool plumbing?', a: 'Yes. Each line is plugged and pressure-tested. If one won’t hold pressure, we listen along it through the deck or yard to pinpoint the break, so only a small area is opened.' },
      { q: 'Do you test vinyl liner pools?', a: 'Yes. Liner tears are often along steps, corners and around fittings. Dye testing and underwater listening find them, and small tears can usually be patched without draining.' },
      { q: 'Can a pool leak be under the deck?', a: 'Yes. Return and suction lines run under the deck to the equipment pad. A line pressure test tells us which one is leaking before any concrete is cut.' },
    ],
    guides: ['how-to-find-a-pool-leak', 'is-leak-detection-worth-it', 'leak-detection-methods'],
  },

  // ───────────────────────────── Sprinkler leak detection ─────────────────────────────
  {
    ...gw,
    slug: 'sprinkler-leak-detection',
    kind: 'detection',
    service: 'irrigation-leak-detection',
    image: 'irrigation-leak-detection',
    imageAlt: 'Technician checking a sprinkler valve box and buried irrigation line in a lawn',
    title: 'Sprinkler Leak Detection & Repair in Greenwood, IN',
    description: 'Sprinkler leak detection in Greenwood, IN: soggy zones, weak heads or a summer bill that jumps. We test the mainline and zones and mark the leak for repair.',
    h1: 'Sprinkler Leak Detection & Repair in Greenwood, IN',
    answer: 'Many Greenwood homes in newer subdivisions have in-ground sprinklers, and a cracked pipe or a valve that won’t close can waste thousands of gallons before anyone notices. We find out whether the leak is in the always-pressurized mainline or in one zone, trace that pipe, and pinpoint the break with acoustic listening, so the repair is one small hole in the lawn.',
    primaryKeyword: 'sprinkler leak detection greenwood in',
    secondaryKeywords: ['sprinkler repair greenwood indiana', 'irrigation leak greenwood', 'sprinkler valve leaking', 'sprinkler line break', 'irrigation mainline leak'],
    glance: [
      { label: 'Common signs', value: 'Soggy spots, low pressure in a zone, water running with the system off, high summer bills' },
      { label: 'Where leaks hide', value: 'Mainline, zone valves, laterals, heads, backflow preventer' },
      { label: 'Indiana rule', value: 'Testable backflow devices must be tested every year (327 IAC 8-10)' },
      { label: 'Winter', value: 'Lines must be blown out before the first hard freeze' },
    ],
    blocks: [
      {
        h2: 'Mainline or zone? The first question',
        paras: [
          'A sprinkler system has two kinds of pipe. The **mainline** runs from the house to the zone valves and stays under pressure all the time, so a mainline leak runs 24 hours a day and turns your water meter even when the system is off. **Zone laterals** only carry water when that zone is running, so a lateral leak shows up as a soggy patch or weak heads in one zone.',
          'Telling the two apart takes a few minutes with the meter and the irrigation shutoff valve, and it decides where we search.',
        ],
      },
      {
        h2: 'Quick checks you can do',
        steps: [
          { t: 'Meter with the system off', d: 'Turn off all indoor water and leave the sprinklers off. If the meter moves, close the irrigation shutoff. If it stops, the mainline or a valve is leaking.' },
          { t: 'Run each zone', d: 'Run zones one at a time and walk them. Weak heads, geysers or bubbling soil mark the problem zone.' },
          { t: 'Check the valve box', d: 'Water standing in a valve box, or a zone that keeps running after it shuts off, points to a valve that isn’t sealing.' },
          { t: 'Look at the backflow preventer', d: 'Dripping or spraying from the device near the house is a separate repair, and it often fails after a freeze.' },
        ],
        after: ['More detail: [how to find a leak in your sprinkler system](/guides/how-to-find-a-sprinkler-leak/).'],
      },
      {
        h2: 'Why sprinkler systems leak in Greenwood',
        list: [
          '**Freeze damage** when a system isn’t fully blown out before winter, especially to the backflow preventer and shallow pipe.',
          '**Mowers, aerators and landscaping** that hit shallow lines and heads.',
          '**Clay soil movement** that pulls fittings apart and cracks older PVC.',
          '**Tree roots** wrapping or crushing laterals near mature trees.',
          '**Worn valve diaphragms** that let a zone weep all day.',
        ],
      },
      {
        h2: 'How we pinpoint a sprinkler leak',
        cards: [
          { t: 'Isolate', d: 'Meter and valve tests separate mainline, valve and zone leaks, and separate the sprinkler system from the house.' },
          { t: 'Trace', d: 'The pipe route is located and marked, since sprinkler lines rarely run where the heads suggest.' },
          { t: 'Listen', d: 'On the pressurized mainline, a ground microphone pinpoints the hiss of the break.' },
          { t: 'Mark and repair', d: 'The leak is flagged in the lawn and repaired through one small hole, with the zone tested afterwards.' },
        ],
      },
      {
        h2: 'Indiana backflow testing and winterizing',
        paras: [
          'A sprinkler system connected to your drinking water has a **backflow preventer** that keeps lawn water from being pulled back into the house. Indiana rules (327 IAC 8-10) require testable backflow devices to be tested every year by a state-certified tester, even if the system isn’t used. A failing device is also a common leak.',
          'Before the first hard freeze, the system should be shut off, drained and blown out with compressed air. Water left in the backflow preventer and shallow lines is the most common cause of spring leaks in Greenwood yards.',
        ],
      },
      {
        h2: 'Sprinkler leak or house water line?',
        paras: [
          'A wet strip of lawn between the meter and the house can be a sprinkler mainline or your water service line. Closing the irrigation shutoff tells them apart: if the meter stops, it’s the sprinkler system; if it keeps moving with the house shutoff also closed, see [water line leak detection in Greenwood](/service-area/greenwood/water-line-leak-detection/).',
        ],
      },
    ],
    faqs: [
      { q: 'How do I know if my sprinkler system is leaking?', a: 'With all water off and the sprinklers off, watch the meter. If it moves and stops when you close the irrigation shutoff, the sprinkler mainline or a valve is leaking. Soggy patches or weak heads in one zone point to a lateral leak in that zone.' },
      { q: 'Does Indiana require backflow testing for sprinklers?', a: 'Indiana rules (327 IAC 8-10) require testable backflow prevention devices to be tested annually by a state-certified tester. Check with your water utility for its reporting process.' },
      { q: 'Why is my sprinkler system leaking after winter?', a: 'Water left in the backflow preventer or shallow lines freezes and cracks them. Blowing out the system before the first hard freeze prevents most spring leaks.' },
      { q: 'Can a sprinkler leak raise my water bill even when the system is off?', a: 'Yes, if the leak is on the mainline or a valve, which stay under pressure all the time. Zone leaks only waste water while that zone runs.' },
      { q: 'Do you repair the sprinkler leak too?', a: 'Yes. Once the leak is marked, the broken pipe, fitting or valve is repaired through one small hole and the zone is tested afterwards.' },
    ],
    guides: ['how-to-find-a-sprinkler-leak', 'why-is-my-water-bill-so-high', 'water-bill-leak-adjustment-indiana'],
  },
];

export const townServicePages: TownServicePage[] = [...greenwoodPages, ...franklinPages, ...centerGrovePages];

export const townPages = (town: string) => townServicePages.filter((p) => p.town === town);
