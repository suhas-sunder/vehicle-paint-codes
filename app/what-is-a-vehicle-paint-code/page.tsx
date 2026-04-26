import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Link from "next/link";

const pageUrl =
  "https://www.vehiclepaintcodes.com/what-is-a-vehicle-paint-code";

export const metadata: Metadata = {
  title: "What Is a Vehicle Paint Code?",
  description:
    "Learn what a vehicle paint code is, why it matters, how it differs from a color name or VIN, and why the right code helps avoid bad paint matches.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "What Is a Vehicle Paint Code?",
    description:
      "A simple guide to vehicle paint codes, color names, VINs, trim codes, and why the right code matters before buying paint.",
    url: pageUrl,
    siteName: "VehiclePaintCodes.com",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "What Is a Vehicle Paint Code?",
    description:
      "Understand what a vehicle paint code means and why it matters before ordering touch-up paint or painted parts.",
  },
};

export default function WhatIsAVehiclePaintCodePage() {
  const keyDefinitions = [
    {
      title: "Paint code",
      description:
        "The factory identifier used to help match the vehicle’s original exterior paint formula.",
    },
    {
      title: "Color name",
      description:
        "The marketing or descriptive name for a color. Helpful for recognition, but not precise enough for paint matching.",
    },
    {
      title: "VIN",
      description:
        "The vehicle identification number. It identifies the vehicle, but the paint code is usually printed on a separate label.",
    },
    {
      title: "Trim code",
      description:
        "A code that may refer to interior trim, upholstery, or cabin materials. It is not automatically the exterior paint code.",
    },
  ];

  const codeExamples = [
    {
      label: "Short numeric code",
      example: "040",
      note: "Some manufacturers use short numeric codes for exterior paint.",
    },
    {
      label: "Letters and numbers",
      example: "NH-731P",
      note: "Some codes include letters, numbers, hyphens, or suffixes.",
    },
    {
      label: "Manufacturer prefix",
      example: "WA8555",
      note: "Some brands use prefixes or internal paint formula references.",
    },
    {
      label: "Combined label",
      example: "C/TR: 040/FA20",
      note: "Some labels show exterior color and trim information together.",
    },
  ];

  const relatedTerms = [
    {
      title: "Exterior color",
      description:
        "The main outside body color. This is usually what drivers mean when they ask for a paint code.",
    },
    {
      title: "Interior color",
      description:
        "The color of cabin materials such as seats, carpet, dashboard, or door panels. This is separate from exterior paint.",
    },
    {
      title: "Two-tone color",
      description:
        "A vehicle finish with two exterior colors, often split by roof, lower body, trim area, or panel section.",
    },
    {
      title: "Accent color",
      description:
        "A secondary exterior color used on mirrors, moldings, bumpers, flares, or trim pieces.",
    },
    {
      title: "Wheel color",
      description:
        "The finish used on wheels, rims, or hubcaps. It may not match the body paint code.",
    },
    {
      title: "OEM stock number",
      description:
        "A manufacturer or supplier reference used when ordering paint or parts. It may differ from the visible paint code.",
    },
  ];

  const whyItMatters = [
    {
      title: "Color names are too broad",
      description:
        "A name like white, black, silver, gray, or blue can cover many different factory formulas.",
    },
    {
      title: "Screens distort color",
      description:
        "Photos, screens, lighting, reflections, and camera settings can make the same paint look different.",
    },
    {
      title: "Paint ages over time",
      description:
        "Sun exposure, weather, polishing, repairs, and fading can change how closely fresh paint matches the vehicle.",
    },
    {
      title: "Finish type matters",
      description:
        "Solid, metallic, pearl, matte, tri-coat, and two-tone finishes may require different matching or application steps.",
    },
  ];

  const faqs = [
    {
      question: "What is a vehicle paint code?",
      answer:
        "A vehicle paint code is the factory identifier used to help match a vehicle’s original exterior paint formula. It is usually a short combination of letters and numbers printed on a factory label, sticker, service parts label, certification label, or data plate.",
    },
    {
      question: "Is a paint code the same as a color name?",
      answer:
        "No. A color name is a descriptive or marketing name, while the paint code is the more precise identifier used for matching paint. A color name like silver, white, black, or blue is not accurate enough by itself.",
    },
    {
      question: "Is a paint code the same as a VIN?",
      answer:
        "No. The VIN identifies the vehicle, while the paint code identifies the paint color. A dealer or supplier may use the VIN to help verify vehicle details, but the paint code is usually printed on a separate label.",
    },
    {
      question: "What does a vehicle paint code look like?",
      answer:
        "Paint codes are usually short letter-number combinations. Example formats include 040, NH-731P, WA8555, YZ, or C/TR: 040/FA20, depending on the manufacturer.",
    },
    {
      question: "Why does the paint code matter?",
      answer:
        "The paint code reduces guesswork when ordering touch-up paint, spray paint, or painted parts. It is more reliable than matching by color name, screen color, or memory.",
    },
    {
      question: "Can a vehicle have more than one paint code?",
      answer:
        "Yes. Two-tone vehicles, accent colors, wheel colors, trim colors, and specialty finishes may involve more than one color or code. Confirm which code applies to the exact panel or part you plan to repair.",
    },
    {
      question: "Can the correct paint code still produce a mismatch?",
      answer:
        "Yes. Age, fading, sun exposure, previous repairs, repainting, finish type, and application method can affect the final result. Always test paint before applying it broadly.",
    },
    {
      question: "What if my vehicle was repainted?",
      answer:
        "If the vehicle was repainted, the original factory paint code may not match the current finish. A body shop or paint supplier may need to perform a custom match using a painted part.",
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
        name: "What Is a Vehicle Paint Code?",
        item: pageUrl,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is a Vehicle Paint Code?",
    description:
      "A practical guide explaining what a vehicle paint code is, how it differs from a color name or VIN, and why it matters before buying paint.",
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
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.22),transparent_34%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,1))]" />

        <Navbar />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-100 shadow-[0_0_32px_rgba(220,38,38,0.18)]">
              Paint code basics
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-sky-100 sm:text-5xl lg:text-6xl">
              What is a vehicle paint code?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A vehicle paint code is the factory identifier used to match a
              specific exterior paint formula. It is more useful than a color
              name and more specific than a visual match from a photo.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#definition"
                className="cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
              >
                Learn the Basics
              </Link>

              <Link
                href="/how-to-find-vehicle-paint-code"
                className="cursor-pointer rounded-xl border border-slate-500 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-red-400/60 hover:bg-red-500/10"
              >
                Find Your Paint Code
              </Link>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400">
              The code is the starting point for a better match, but it should
              still be verified before buying or applying paint.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-slate-950/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Code vs color name
              </p>

              <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-900 p-5 font-mono text-sm text-slate-200">
                <div className="flex justify-between border-b border-slate-700 pb-3">
                  <span>VIN</span>
                  <span className="text-slate-400">1HGCM82633A004352</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 py-3">
                  <span>COLOR NAME</span>
                  <span className="text-slate-400">White</span>
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
                  The code matters more than the color name
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  “White” is broad. A paint code points to a more specific
                  factory paint reference used for matching.
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
              It identifies the paint
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              The paint code points to the original factory exterior paint
              reference more accurately than a broad color name.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-sky-700">
              It is usually on a label
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Paint codes are commonly printed on a factory sticker,
              certification label, service parts label, or manufacturer data
              plate.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-sky-700">
              It still needs verification
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Fading, repainting, repairs, and specialty finishes can affect the
              final match even when the factory code is correct.
            </p>
          </article>
        </div>
      </section>

      <section id="definition" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Definition
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              A paint code is the factory reference for a vehicle’s paint color
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              When a vehicle is built, the manufacturer assigns exterior paint
              information to that vehicle. The paint code is the short
              identifier used to connect the vehicle to a specific paint
              formula, color family, and finish type.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {keyDefinitions.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                  ✓
                </div>
                <h3 className="mt-5 text-lg font-bold text-sky-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
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
              Code formats
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              What a vehicle paint code can look like
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Paint codes are usually short combinations of letters and numbers,
              but each manufacturer formats them differently. Some labels show
              paint and trim together, while others use separate fields.
            </p>

            <Link
              href="/how-to-find-vehicle-paint-code"
              className="mt-8 inline-flex cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              How to Find Your Paint Code
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {codeExamples.map((item) => (
              <article
                key={item.example}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-500">
                  {item.label}
                </p>
                <p className="mt-3 font-mono text-2xl font-bold text-slate-950">
                  {item.example}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.note}
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
              Related terms
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              Paint code, trim code, accent color, and wheel color are not the
              same thing
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Factory labels can contain several different codes. Some refer to
              exterior paint, some refer to interior trim, and some may identify
              accents, wheels, or supplier-specific information. Copying the
              wrong code can lead to the wrong paint.
            </p>

            <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-5">
              <h3 className="text-base font-bold text-sky-800">
                Best practice
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Look for paint-related labels such as PNT, PAINT, COLOR, COLOUR,
                EXT, EXT PNT, C/TR, BC/CC, or manufacturer-specific paint
                markers before assuming a code is the exterior paint code.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {relatedTerms.map((term) => (
              <article
                key={term.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-lg font-bold text-sky-700">{term.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {term.description}
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
              Why it matters
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-100 sm:text-4xl">
              A paint code reduces guesswork, but it does not remove every
              matching risk.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              The paint code is the correct starting point. It helps avoid
              guessing from photos, color names, or memory. Real-world matching
              can still be affected by age, repairs, fading, and finish type.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyItMatters.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-lg font-bold text-sky-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
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
                The VIN identifies the vehicle. The paint code identifies the
                paint.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                A VIN can help a dealer, supplier, or body shop confirm vehicle
                details. But the paint code itself is usually printed on a
                separate factory label, certification sticker, service parts
                label, or data plate.
              </p>

              <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                <h3 className="text-base font-bold text-sky-800">
                  Simple rule
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Use the paint code for paint matching. Use the VIN to help
                  verify vehicle details when the paint code is hard to find or
                  unclear.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-sky-700">
                Quick comparison
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                These fields are related, but they do different jobs.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Paint code: identifies the factory paint reference.",
                  "Color name: describes the color but is not precise enough.",
                  "VIN: identifies the vehicle and can help with verification.",
                  "Trim code: may refer to interior materials or trim, not exterior paint.",
                  "Finish type: affects how the paint must be matched and applied.",
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

      <section className="border-y border-slate-200 bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
            FAQs about vehicle paint codes
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            These questions focus on what paint codes mean and how they should
            be used before buying or applying paint.
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
            Ready to find the code on your vehicle?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Once you understand what a paint code is, the next step is locating
            the factory label and verifying the exact code before buying paint.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/how-to-find-vehicle-paint-code"
              className="cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              How to Find Your Paint Code
            </Link>

            <Link
              href="/paint-code-locations"
              className="cursor-pointer rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-sky-300 hover:bg-sky-50"
            >
              Browse Paint Code Locations
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
            VehiclePaintCodes.com provides general paint code definitions,
            location guidance, and reference information only. Paint codes,
            labels, color names, and formulas can vary by manufacturer, model
            year, trim, region, prior repairs, fading, repainting, and two-tone
            or specialty finishes. Always verify your paint code with the
            vehicle’s factory label, manufacturer, dealer, paint supplier, or
            qualified body shop before ordering or applying paint.
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
            What Is a Vehicle Paint Code?
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
