import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.vehiclepaintcodes.com/paint-code-locations";

export const metadata: Metadata = {
  title: "Vehicle Paint Code Locations by Make",
  description:
    "Find where to check for your vehicle paint code by make. Start with common label locations, avoid copying the wrong number, and verify before buying paint.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Vehicle Paint Code Locations by Make",
    description:
      "Choose your vehicle make and find the most likely paint code label locations before buying touch-up paint or painted parts.",
    url: pageUrl,
    siteName: "VehiclePaintCodes.com",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vehicle Paint Code Locations by Make",
    description:
      "Find the most likely paint code label locations for your vehicle make and verify the code before ordering paint.",
  },
};

export default function PaintCodeLocationsPage() {
  const commonLocations = [
    {
      title: "Driver-side door jamb",
      description:
        "The best first check on many vehicles. Look on the door edge, pillar, latch area, or lower jamb.",
    },
    {
      title: "Passenger-side door jamb",
      description:
        "Some vehicles place the paint or certification label on the passenger-side pillar, latch area, or door edge.",
    },
    {
      title: "Glove box",
      description:
        "Check the inside walls, back panel, and glove box door for small manufacturer or service labels.",
    },
    {
      title: "Trunk or spare tire area",
      description:
        "Look under the trunk floor, near the spare tire, on rear side trim, or inside the cargo area.",
    },
    {
      title: "Under the hood",
      description:
        "Check the radiator support, firewall, strut towers, hood underside, and inner fender areas.",
    },
    {
      title: "Rear hatch or cargo area",
      description:
        "SUVs, hatchbacks, wagons, and vans may place paint information near rear storage panels.",
    },
  ];

  const popularMakes = [
    {
      make: "Toyota",
      slug: "toyota",
      hint: "Often check the driver-side door jamb for a C/TR label.",
      pattern: "C/TR label",
    },
    {
      make: "Honda",
      slug: "honda",
      hint: "Often check the driver-side door jamb or door edge for the color code label.",
      pattern: "Door jamb label",
    },
    {
      make: "Ford",
      slug: "ford",
      hint: "Often check the driver-side door jamb for EXT PNT or exterior paint information.",
      pattern: "EXT PNT",
    },
    {
      make: "Chevrolet",
      slug: "chevrolet",
      hint: "Often check the glove box, trunk, spare tire area, or service parts label depending on year.",
      pattern: "WA / service label",
    },
    {
      make: "GMC",
      slug: "gmc",
      hint: "Often similar to Chevrolet, with labels commonly found in glove box, trunk, or door areas.",
      pattern: "WA / service label",
    },
    {
      make: "Dodge",
      slug: "dodge",
      hint: "Often check the driver-side door jamb, radiator support, or under-hood label areas.",
      pattern: "Door / under hood",
    },
    {
      make: "Jeep",
      slug: "jeep",
      hint: "Often check the driver-side door jamb, firewall, or under-hood label areas.",
      pattern: "Door / firewall",
    },
    {
      make: "BMW",
      slug: "bmw",
      hint: "Often check under the hood, strut tower area, or door jamb depending on model and year.",
      pattern: "Under hood / data plate",
    },
    {
      make: "Mercedes-Benz",
      slug: "mercedes-benz",
      hint: "Often check under the hood, radiator support, door jamb, or manufacturer data plate.",
      pattern: "Data plate",
    },
    {
      make: "Volkswagen",
      slug: "volkswagen",
      hint: "Often check the trunk, spare tire area, service label, or vehicle data sticker.",
      pattern: "Vehicle data sticker",
    },
    {
      make: "Audi",
      slug: "audi",
      hint: "Often check the trunk, spare tire area, service label, or vehicle data sticker.",
      pattern: "Vehicle data sticker",
    },
    {
      make: "Nissan",
      slug: "nissan",
      hint: "Often check the driver-side door jamb, firewall, or under-hood label areas.",
      pattern: "Door / under hood",
    },
    {
      make: "Hyundai",
      slug: "hyundai",
      hint: "Often check the driver-side door jamb or manufacturer certification label.",
      pattern: "Door jamb label",
    },
    {
      make: "Kia",
      slug: "kia",
      hint: "Often check the driver-side door jamb or vehicle certification label.",
      pattern: "Door jamb label",
    },
    {
      make: "Mazda",
      slug: "mazda",
      hint: "Often check the driver-side door jamb, firewall, or under-hood label areas.",
      pattern: "Door / under hood",
    },
    {
      make: "Subaru",
      slug: "subaru",
      hint: "Often check the driver-side door jamb or under-hood manufacturer label.",
      pattern: "Door / under hood",
    },
    {
      make: "Tesla",
      slug: "tesla",
      hint: "Check the vehicle label and confirm with Tesla or a qualified repair source before ordering paint.",
      pattern: "Vehicle label",
    },
    {
      make: "Lexus",
      slug: "lexus",
      hint: "Often similar to Toyota, with C/TR information commonly found on the driver-side door jamb.",
      pattern: "C/TR label",
    },
  ];

  const manufacturerPatterns = [
    {
      title: "Toyota and Lexus",
      description:
        "Often use a C/TR label where the first part usually points to the exterior paint code and the second part relates to trim.",
    },
    {
      title: "Ford and Lincoln",
      description:
        "Often use an exterior paint field such as EXT PNT on the driver-side certification label.",
    },
    {
      title: "GM, Chevrolet, and GMC",
      description:
        "May use WA codes, service parts labels, glove box labels, trunk labels, or spare tire area labels depending on year and model.",
    },
    {
      title: "Volkswagen and Audi",
      description:
        "Often use a vehicle data sticker or service label, commonly found in the trunk, spare tire area, or owner/service documentation.",
    },
    {
      title: "BMW and Mercedes-Benz",
      description:
        "May use manufacturer data plates or labels around under-hood areas, door jambs, radiator support areas, or strut towers.",
    },
    {
      title: "Honda, Hyundai, Kia, Nissan, Mazda, and Subaru",
      description:
        "Often use door jamb, certification, under-hood, or firewall-area labels, depending on model and year.",
    },
  ];

  const faqs = [
    {
      question: "Are paint code locations the same for every vehicle?",
      answer:
        "No. Paint code locations vary by manufacturer, model, model year, body style, region, and trim. Start with your make-specific guide, then check common fallback locations such as the door jamb, glove box, trunk, spare tire area, and under-hood labels.",
    },
    {
      question: "What is the most common place to find a paint code?",
      answer:
        "The driver-side door jamb is the best first place to check on many vehicles. Open the driver door and inspect the pillar, latch area, lower jamb, and door edge for a factory sticker or certification label.",
    },
    {
      question: "What if my vehicle make is not listed yet?",
      answer:
        "Use the common location checklist on this page. Check the driver-side door jamb, passenger-side door jamb, glove box, trunk, spare tire area, radiator support, firewall, hood underside, and strut towers. If you still cannot find it, contact a dealer, paint supplier, or body shop with your VIN.",
    },
    {
      question: "What words should I look for on the label?",
      answer:
        "Look for labels or abbreviations such as PNT, PAINT, COLOR, COLOUR, EXT, EXT PNT, C/TR, BC/CC, WA, BODY COLOR, EXTERIOR, or manufacturer-specific paint markers near a short letter-number sequence.",
    },
    {
      question: "Can a vehicle have more than one paint code?",
      answer:
        "Yes. Two-tone vehicles, accent colors, wheel colors, trim pieces, and specialty finishes may involve more than one code. Confirm which code applies to the exact panel or part you plan to repair.",
    },
    {
      question: "Can the VIN tell me where the paint code is located?",
      answer:
        "The VIN may help a dealer, supplier, or body shop verify vehicle build details, but it usually does not tell the average driver exactly where the physical paint code label is. The factory label is still the best first source.",
    },
    {
      question: "What if the vehicle has been repainted?",
      answer:
        "If the vehicle has been repainted, the factory paint code may not match the current finish. In that case, a body shop or paint supplier may need to color-match a painted part instead of relying only on the original factory code.",
    },
    {
      question: "Should I test paint even if I found the right code?",
      answer:
        "Yes. Test paint before applying it broadly. Age, fading, sun exposure, previous repairs, finish type, and application method can affect the final appearance even when the factory code is correct.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.vehiclepaintcodes.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Paint Code Locations",
        item: pageUrl,
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Vehicle Paint Code Locations by Make",
    description:
      "A make-by-make index for finding common vehicle paint code label locations.",
    url: pageUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "VehiclePaintCodes.com",
      url: "https://www.vehiclepaintcodes.com",
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Popular vehicle makes",
      itemListElement: popularMakes.map((make, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${make.make} paint code location`,
        url: `https://www.vehiclepaintcodes.com/paint-code-locations/${make.slug}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd),
        }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.22),transparent_34%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,1))]" />

        <Navbar />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-100 shadow-[0_0_32px_rgba(220,38,38,0.18)]">
              Paint code locations by make
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-sky-100 sm:text-5xl lg:text-6xl">
              Find where to check for your vehicle paint code.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Choose your vehicle make to find the most likely factory paint
              code label locations, then verify the code before buying touch-up
              paint, spray paint, or painted parts.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#popular-makes"
                className="cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
              >
                Browse Makes
              </Link>

              <Link
                href="/how-to-find-vehicle-paint-code"
                className="cursor-pointer rounded-xl border border-slate-500 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-red-400/60 hover:bg-red-500/10"
              >
                How to Read the Label
              </Link>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400">
              This page is a location directory. For step-by-step label reading,
              use the full paint code guide.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-slate-950/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Start with your make
              </p>

              <div className="mt-5 grid gap-3">
                {popularMakes.slice(0, 6).map((make) => (
                  <Link
                    key={make.slug}
                    href={`/paint-code-locations/${make.slug}`}
                    className="group flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-4 transition hover:border-red-400/50 hover:bg-red-500/10"
                  >
                    <div>
                      <h2 className="text-sm font-bold text-sky-100 transition group-hover:text-white">
                        {make.make}
                      </h2>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {make.pattern}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 transition group-hover:text-red-200">
                      View
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-sky-500/20 bg-sky-500/10 p-4">
                <h2 className="text-base font-semibold text-sky-200">
                  Not sure where to start?
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Check the driver-side door jamb first, then use the make
                  directory below for manufacturer-specific clues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-sky-700">
              Pick your make first
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Paint code labels are not placed consistently across brands. Your
              make usually narrows the search faster than checking random areas.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-sky-700">
              Use common locations second
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              If the make guide does not solve it, check the door jambs, glove
              box, trunk, spare tire area, and under-hood labels.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-sky-700">
              Confirm before ordering
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              A location guide helps you find the label. It does not guarantee a
              final match if the vehicle is faded, repainted, or repaired.
            </p>
          </article>
        </div>
      </section>

      <section id="popular-makes" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Browse by make
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              Popular vehicle paint code location guides
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Start with your vehicle make. These cards point you toward the
              label habits and code clues most commonly associated with each
              manufacturer.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularMakes.map((make) => (
              <Link
                key={make.slug}
                href={`/paint-code-locations/${make.slug}`}
                className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-sky-700 transition group-hover:text-sky-800">
                      {make.make}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {make.hint}
                    </p>
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 transition group-hover:border-sky-200 group-hover:bg-white group-hover:text-sky-700">
                    {make.pattern}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-sky-700">
              More makes are being added
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              If your make is not listed yet, use the universal checklist below
              and verify the code with a dealer, manufacturer, paint supplier,
              or body shop before ordering paint.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Manufacturer patterns
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              Different makes use different label habits
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              This is the main reason a make-based directory helps. Some brands
              usually point you toward the door jamb, while others commonly use
              trunk stickers, service labels, or under-hood data plates.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {manufacturerPatterns.map((pattern) => (
              <article
                key={pattern.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-bold text-sky-700">
                  {pattern.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {pattern.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Universal fallback
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              If your make guide does not solve it, check these areas
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Some labels are small, faded, hidden behind trim, or mixed with
              unrelated manufacturing data. Work through these areas before
              guessing from a color name or photo.
            </p>

            <Link
              href="/how-to-find-vehicle-paint-code"
              className="mt-8 inline-flex cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              Read the Step-by-Step Guide
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {commonLocations.map((location) => (
              <article
                key={location.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                  ✓
                </div>
                <h3 className="mt-4 text-lg font-bold text-sky-700">
                  {location.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {location.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Before you buy paint
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-100 sm:text-4xl">
              A location guide helps you find the code, not guarantee the
              finish.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Once you find the label, still verify the code and account for
              faded paint, repainting, two-tone finishes, specialty coatings,
              and prior body repairs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Read the exact field",
                description:
                  "Do not assume the longest number or most visible code is the paint code. Look for paint-related wording.",
              },
              {
                title: "Check for multiple codes",
                description:
                  "Two-tone vehicles, accents, wheels, and trim pieces may have separate colors or references.",
              },
              {
                title: "Use VIN as backup",
                description:
                  "If the label is missing or unreadable, use your VIN when speaking with a dealer, supplier, or body shop.",
              },
              {
                title: "Test before applying",
                description:
                  "Even with the right code, age, fading, and application method can affect the visible result.",
              },
            ].map((tip) => (
              <article
                key={tip.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-lg font-bold text-sky-100">{tip.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {tip.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
            FAQs about vehicle paint code locations
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            These questions focus on where paint code labels are usually found
            and how to use make-specific location clues correctly.
          </p>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-sky-700">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Next step
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
            Found the label but not sure which code is paint?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Use the step-by-step guide to understand paint code abbreviations,
            example formats, and verification steps before buying paint.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/how-to-find-vehicle-paint-code"
              className="cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              How to Find Your Paint Code
            </Link>

            <Link
              href="/vin-paint-code-lookup"
              className="cursor-pointer rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-sky-300 hover:bg-sky-50"
            >
              Can I Use My VIN?
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-sky-700">
            Paint code accuracy disclaimer
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            VehiclePaintCodes.com provides general paint code location guidance
            and reference information only. Paint code locations, labels, color
            names, and formulas can vary by manufacturer, model year, trim,
            region, prior repairs, fading, repainting, and two-tone or specialty
            finishes. Always verify your paint code with the vehicle’s factory
            label, manufacturer, dealer, paint supplier, or qualified body shop
            before ordering or applying paint.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            We are not responsible for mismatched paint, repair costs,
            application errors, property damage, vehicle damage, or other losses
            resulting from use of the information on this site.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-5">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-sm text-slate-500"
        >
          <Link
            href="/"
            className="cursor-pointer font-medium transition hover:text-sky-700"
          >
            Home
          </Link>
          <span aria-hidden="true" className="text-slate-300">
            /
          </span>
          <span className="font-medium text-slate-700">
            Paint Code Locations
          </span>
        </nav>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold">VehiclePaintCodes.com</p>
          <p className="text-sm text-slate-400">
            A practical reference for finding and understanding vehicle paint
            codes.
          </p>
        </div>
      </footer>
    </main>
  );
}
