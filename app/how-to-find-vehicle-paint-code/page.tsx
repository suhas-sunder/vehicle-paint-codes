import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Link from "next/link";

const pageUrl =
  "https://www.vehiclepaintcodes.com/how-to-find-vehicle-paint-code";

export const metadata: Metadata = {
  title: "How to Find Your Vehicle Paint Code Without Guessing",
  description:
    "Find your vehicle paint code, know what labels to check, avoid color-name mistakes, and verify the right paint before buying touch-up paint or painted parts.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "How to Find Your Vehicle Paint Code Without Guessing",
    description:
      "A clear guide to finding your factory paint code, reading the label, and avoiding the wrong color match before buying paint.",
    url: pageUrl,
    siteName: "VehiclePaintCodes.com",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "How to Find Your Vehicle Paint Code Without Guessing",
    description:
      "Find the factory paint code on your vehicle and verify it before ordering touch-up paint or painted parts.",
  },
};

export default function HowToFindVehiclePaintCodePage() {
  const commonLocations = [
    {
      title: "Driver-side door jamb",
      description:
        "Start here first. Check the pillar, door edge, lower jamb, and latch area for the factory label.",
    },
    {
      title: "Passenger-side door jamb",
      description:
        "Some vehicles place the certification or paint label on the passenger-side pillar or door edge.",
    },
    {
      title: "Glove box",
      description:
        "Look on the inside walls, back panel, and glove box door. Some labels are small and easy to miss.",
    },
    {
      title: "Trunk or spare tire area",
      description:
        "Check under the trunk floor, near the spare tire, on side trim panels, or inside the rear storage area.",
    },
    {
      title: "Under the hood",
      description:
        "Look around the radiator support, firewall, inner fenders, hood underside, and strut towers.",
    },
    {
      title: "Rear hatch or cargo area",
      description:
        "SUVs, hatchbacks, vans, and wagons may place paint information near rear panels or storage trim.",
    },
  ];

  const labelKeywords = [
    "PNT",
    "PAINT",
    "COLOR",
    "COLOUR",
    "EXT",
    "EXT PNT",
    "C/TR",
    "BC/CC",
    "WA",
  ];

  const steps = [
    {
      number: "01",
      title: "Start at the driver-side door jamb",
      description:
        "Open the driver door and inspect the pillar, latch area, door edge, and lower jamb. This is the fastest first check on many vehicles.",
    },
    {
      number: "02",
      title: "Find the paint-related label",
      description:
        "Do not copy the first number you see. Scan for labels like PNT, PAINT, COLOR, EXT, EXT PNT, C/TR, BC/CC, or similar wording.",
    },
    {
      number: "03",
      title: "Copy the code exactly",
      description:
        "Paint codes can include letters, numbers, spaces, dashes, prefixes, and suffixes. Copy the full code exactly as printed.",
    },
    {
      number: "04",
      title: "Verify before buying paint",
      description:
        "Confirm the code, year, make, model, trim, finish type, and repaint history before ordering touch-up paint or painted parts.",
    },
  ];

  const problemCases = [
    {
      title: "The label is missing or damaged",
      description:
        "Check the backup locations, then contact a dealer, paint supplier, or body shop with your VIN and vehicle details.",
    },
    {
      title: "The vehicle was repainted",
      description:
        "The original factory code may no longer match the current finish. A custom match from a painted part may be safer.",
    },
    {
      title: "The vehicle has two-tone paint",
      description:
        "Two-tone vehicles may use more than one exterior color. Confirm which code applies to the panel you plan to repair.",
    },
    {
      title: "The finish is pearl, metallic, or tri-coat",
      description:
        "Special finishes may need more than a single paint layer. Confirm the full paint system before ordering materials.",
    },
  ];

  const faqs = [
    {
      question: "Where is the first place to look for a vehicle paint code?",
      answer:
        "Start with the driver-side door jamb. Open the driver door and check the pillar, latch area, lower jamb, and door edge for a factory sticker or certification label.",
    },
    {
      question: "What words or abbreviations should I look for on the label?",
      answer:
        "Look for paint-related labels such as PNT, PAINT, COLOR, COLOUR, EXT, EXT PNT, C/TR, BC/CC, WA, or manufacturer-specific paint markers near a short letter-number code.",
    },
    {
      question: "What does a vehicle paint code look like?",
      answer:
        "A vehicle paint code is usually a short combination of letters and numbers. Example formats include 040, NH-731P, WA8555, YZ, or C/TR: 040/FA20, depending on the manufacturer.",
    },
    {
      question: "Is the paint code the same as the color name?",
      answer:
        "No. A color name like white, silver, black, or blue is not precise enough for matching paint. The paint code is the safer reference because it points to a specific factory paint formula.",
    },
    {
      question: "Can I use my VIN instead of finding the paint code label?",
      answer:
        "A VIN can help a dealer, supplier, or body shop verify vehicle build details, but the factory paint label is still the best first source when it is available and readable.",
    },
    {
      question: "What if the paint code label is missing?",
      answer:
        "Check the passenger-side door jamb, glove box, trunk, spare tire area, radiator support, firewall, hood underside, and strut towers. If you still cannot find it, contact a dealer, paint supplier, or body shop with your VIN.",
    },
    {
      question: "What if my vehicle has been repainted?",
      answer:
        "If the vehicle has been repainted, the factory paint code may not match the current finish. A body shop or paint supplier may need to custom-match the paint from a painted part.",
    },
    {
      question: "Should I test paint before applying it to the vehicle?",
      answer:
        "Yes. Even with the correct code, paint appearance can be affected by fading, sun exposure, repairs, finish type, and application method. Always test before applying paint to a visible area.",
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
        name: "How to Find Your Vehicle Paint Code",
        item: pageUrl,
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Find Your Vehicle Paint Code",
    description:
      "A step-by-step guide to finding a vehicle paint code on the factory label and verifying it before buying paint.",
    totalTime: "PT10M",
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.description,
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Find Your Vehicle Paint Code Without Guessing",
    description:
      "A practical guide to finding a factory vehicle paint code, reading paint label abbreviations, and verifying the correct paint before buying touch-up paint or painted parts.",
    url: pageUrl,
    author: {
      "@type": "Organization",
      name: "VehiclePaintCodes.com",
    },
    publisher: {
      "@type": "Organization",
      name: "VehiclePaintCodes.com",
      url: "https://www.vehiclepaintcodes.com",
    },
    mainEntityOfPage: pageUrl,
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
          __html: JSON.stringify(howToJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.22),transparent_34%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,1))]" />

        <Navbar />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-100 shadow-[0_0_32px_rgba(220,38,38,0.18)]">
              Step-by-step paint code guide
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-sky-100 sm:text-5xl lg:text-6xl">
              How to find your vehicle paint code without guessing.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Find the factory label, read the right code, and verify the color
              before ordering touch-up paint, spray paint, or pre-painted parts.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#steps"
                className="cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
              >
                Start the Guide
              </Link>

              <Link
                href="/paint-code-locations"
                className="cursor-pointer rounded-xl border border-slate-500 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-red-400/60 hover:bg-red-500/10"
              >
                Browse Locations
              </Link>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400">
              Paint code locations vary by manufacturer, model year, region, and
              vehicle history. Use this guide to find the code, then verify it
              before buying or applying paint.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-slate-950/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                What to look for
              </p>

              <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-900 p-5 font-mono text-sm text-slate-200">
                <div className="flex justify-between border-b border-slate-700 pb-3">
                  <span>VIN</span>
                  <span className="text-slate-400">1HGCM82633A004352</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 py-3">
                  <span>MODEL</span>
                  <span className="text-slate-400">SEDAN</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 py-3">
                  <span>C/TR</span>
                  <span className="font-bold text-red-300">040 / FA20</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>EXT PNT</span>
                  <span className="font-bold text-red-300">WA8555</span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-sky-500/20 bg-sky-500/10 p-4">
                <h2 className="text-base font-semibold text-sky-200">
                  The paint code is usually near a label
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Look beside paint-related labels such as PNT, PAINT, COLOR,
                  EXT, EXT PNT, C/TR, BC/CC, or manufacturer-specific markings.
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
              Start with the label
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Your paint code is usually printed on a factory sticker, plate, or
              certification label somewhere on the vehicle.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-sky-700">
              Do not match by color name
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Names like white, black, silver, and blue are too broad. The paint
              code is the safer reference for matching paint.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-sky-700">
              Verify before applying
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Confirm the code if the label is unclear, missing, damaged, or the
              vehicle may have been repainted.
            </p>
          </article>
        </div>
      </section>

      <section id="steps" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Step-by-step
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              The right order to find your paint code
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Work through these steps before guessing from a color name, photo,
              swatch, or online listing.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-bold text-sky-700">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Common locations
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              Where to check first
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              There is no single universal paint code location. Start with the
              driver-side door jamb, then move through the most common backup
              locations.
            </p>

            <Link
              href="/paint-code-locations"
              className="mt-8 inline-flex cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              Browse Paint Code Locations
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {commonLocations.map((location) => (
              <article
                key={location.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
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

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Label keywords
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              Do not copy the wrong number from the label
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Factory labels often include VIN data, trim codes, barcodes,
              weight ratings, and manufacturing information. The paint code is
              usually near a paint-related word or abbreviation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {labelKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 font-mono text-sm font-semibold text-slate-800"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-2xl font-bold text-sky-700">
              Paint code examples
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              These are example formats only. Your actual vehicle code may look
              different depending on the manufacturer.
            </p>

            <div className="mt-6 space-y-3 font-mono text-sm">
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
                <span className="text-slate-500">Toyota style</span>
                <span className="font-bold text-slate-950">C/TR: 040/FA20</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
                <span className="text-slate-500">Honda style</span>
                <span className="font-bold text-slate-950">NH-731P</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
                <span className="text-slate-500">GM style</span>
                <span className="font-bold text-slate-950">WA8555</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
                <span className="text-slate-500">Ford style</span>
                <span className="font-bold text-slate-950">EXT PNT: YZ</span>
              </div>
            </div>
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
              Finding the code does not guarantee a perfect match.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              The paint code is the correct starting point, but age, sun
              exposure, repairs, repainting, finish type, and application method
              can still affect the final result.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {problemCases.map((problem) => (
              <article
                key={problem.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-lg font-bold text-sky-100">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {problem.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Paint code vs VIN
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
                Use the VIN as backup, not your first paint match.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                A VIN can help identify vehicle build details, and some dealers
                or suppliers may use it to research paint information. But the
                factory paint label is still the better first source when it is
                available.
              </p>

              <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                <h3 className="text-base font-bold text-sky-800">
                  Best practice
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Find the factory label first. Use the VIN if the label is
                  missing, damaged, unreadable, or needs dealer or supplier
                  verification.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-sky-700">
                Verify before ordering
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Before buying paint or painted parts, confirm these details.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Check the factory label directly on the vehicle.",
                  "Copy the paint code exactly as printed.",
                  "Confirm the year, make, model, trim, and finish type.",
                  "Check whether the vehicle has been repainted or repaired.",
                  "Test paint in a small area before applying it broadly.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                      ✓
                    </span>
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/vin-paint-code-lookup"
                className="mt-6 inline-flex cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
              >
                Learn About VIN Paint Code Lookup
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Next step
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
            Still not sure where your paint code is?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Use the make-specific location guide next. Different manufacturers
            place labels in different areas and use different paint code
            formats.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/paint-code-locations"
              className="cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              Browse Paint Code Locations
            </Link>

            <Link
              href="/what-is-a-vehicle-paint-code"
              className="cursor-pointer rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-sky-300 hover:bg-sky-50"
            >
              What Is a Paint Code?
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
            FAQs about finding your vehicle paint code
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            These questions focus on finding the factory label, reading the
            paint code correctly, and avoiding a bad paint match.
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

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-sky-700">
            Paint code accuracy disclaimer
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            VehiclePaintCodes.com provides general paint code location guidance
            and reference information only. Paint codes, labels, color names,
            and formulas can vary by manufacturer, model year, trim, region,
            prior repairs, fading, repainting, and two-tone or specialty
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
            How to Find Your Vehicle Paint Code
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
