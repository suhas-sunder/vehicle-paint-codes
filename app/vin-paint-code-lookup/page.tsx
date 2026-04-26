import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.vehiclepaintcodes.com/vin-paint-code-lookup";

export const metadata: Metadata = {
  title: "Can You Find a Paint Code by VIN?",
  description:
    "Learn when a VIN can help find or verify a vehicle paint code, why the factory paint label still matters, and how to avoid ordering the wrong paint.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Can You Find a Paint Code by VIN?",
    description:
      "A clear guide to VIN paint code lookup, what a VIN can and cannot tell you, and how to verify your paint before buying.",
    url: pageUrl,
    siteName: "VehiclePaintCodes.com",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Can You Find a Paint Code by VIN?",
    description:
      "Find out when VIN lookup helps with paint codes and why the factory paint label is still the best first source.",
  },
};

export default function VinPaintCodeLookupPage() {
  const vinCanHelpWith = [
    {
      title: "Confirm vehicle details",
      description:
        "A VIN can help confirm the year, make, model, body style, trim, plant, and other build details.",
    },
    {
      title: "Help a dealer research records",
      description:
        "A dealer or manufacturer may use the VIN to check build records or confirm paint-related information.",
    },
    {
      title: "Reduce parts-ordering mistakes",
      description:
        "Some parts suppliers ask for the VIN before ordering pre-painted parts or paint-matched components.",
    },
    {
      title: "Back up a missing label",
      description:
        "If the factory paint label is missing, damaged, or unreadable, the VIN can help when asking a professional for help.",
    },
  ];

  const vinLimitations = [
    {
      title: "The VIN is not the paint label",
      description:
        "The paint code is usually printed on a separate factory sticker, certification label, service parts label, or data plate.",
    },
    {
      title: "Public VIN decoders may not show paint",
      description:
        "Many public VIN tools show vehicle specs, but not the exact exterior paint code or paint formula.",
    },
    {
      title: "Vehicle history can change the answer",
      description:
        "A vehicle may have been repainted, repaired, wrapped, blended, or refinished after leaving the factory.",
    },
    {
      title: "Special finishes need extra verification",
      description:
        "Pearl, metallic, tri-coat, matte, and two-tone finishes may require more than one code or paint layer.",
    },
  ];

  const lookupSteps = [
    {
      number: "01",
      title: "Check the paint label first",
      description:
        "Look for the factory paint label before relying on a VIN lookup. Start with the driver-side door jamb, then check common backup locations.",
    },
    {
      number: "02",
      title: "Copy the paint code exactly",
      description:
        "Write down the full code as printed, including letters, numbers, spaces, dashes, prefixes, and suffixes.",
    },
    {
      number: "03",
      title: "Use the VIN as backup",
      description:
        "If the label is missing, damaged, or unclear, provide the VIN to a dealer, manufacturer, paint supplier, or body shop.",
    },
    {
      number: "04",
      title: "Verify before buying",
      description:
        "Confirm the paint code, finish type, and vehicle history before ordering touch-up paint, spray paint, or pre-painted parts.",
    },
  ];

  const comparisonRows = [
    {
      item: "Factory paint label",
      bestFor: "Finding the printed paint code on the vehicle",
      caution:
        "Can be faded, damaged, missing, hidden, or affected by prior repairs.",
    },
    {
      item: "VIN",
      bestFor: "Helping a dealer or supplier verify vehicle build details",
      caution:
        "Not always enough for a direct paint match through public lookup tools.",
    },
    {
      item: "Color name",
      bestFor: "Basic description only",
      caution:
        "Too broad for accurate paint matching. Similar names can point to different formulas.",
    },
    {
      item: "Photo or screen color",
      bestFor: "Rough visual reference",
      caution:
        "Lighting, cameras, screens, fading, and metallic effects can distort the color.",
    },
  ];

  const faqs = [
    {
      question: "Can I find my paint code by VIN?",
      answer:
        "Sometimes. A dealer, manufacturer, paint supplier, or parts vendor may be able to use your VIN to help verify paint information. For most drivers, the factory paint label on the vehicle is still the best first source.",
    },
    {
      question: "Does the VIN itself contain the paint code?",
      answer:
        "The VIN identifies the vehicle and may help access build information, but the paint code is usually printed on a separate factory label, service parts label, certification sticker, or manufacturer data plate.",
    },
    {
      question: "Why do some websites offer VIN paint lookup?",
      answer:
        "Some businesses use the VIN with manufacturer, dealer, supplier, or internal databases to help identify paint information. That does not mean every public VIN decoder will show the correct paint code.",
    },
    {
      question: "Where should I look before using my VIN?",
      answer:
        "Check the driver-side door jamb first. Then check the passenger-side jamb, glove box, trunk, spare tire area, radiator support, firewall, hood underside, and strut towers.",
    },
    {
      question: "What should I do if my paint label is missing?",
      answer:
        "Use your VIN as backup when contacting a dealer, manufacturer, paint supplier, or body shop. Also provide the vehicle year, make, model, trim, and clear photos of any labels you can find.",
    },
    {
      question: "Can a VIN lookup be wrong for paint matching?",
      answer:
        "Yes. Vehicle records, repainting, repairs, fading, two-tone finishes, specialty finishes, and database limitations can all cause problems. Always verify before ordering or applying paint.",
    },
    {
      question: "Can I use a color name instead of a paint code?",
      answer:
        "No. A color name is not precise enough. Names like white, black, silver, gray, and blue can refer to many different factory formulas.",
    },
    {
      question: "Should I test the paint after a VIN-assisted lookup?",
      answer:
        "Yes. Test before applying paint to a visible area. Even when the code is correct, paint age, fading, application method, and finish type can affect the final appearance.",
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
        name: "VIN Paint Code Lookup",
        item: pageUrl,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Can You Find a Paint Code by VIN?",
    description:
      "A practical guide explaining when a VIN can help with paint code lookup, why the factory paint label matters, and how to verify the correct vehicle paint code.",
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
              VIN paint code lookup
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-sky-100 sm:text-5xl lg:text-6xl">
              Can you find a vehicle paint code by VIN?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A VIN can help verify vehicle details, but it is not always a
              direct paint-code lookup. Learn when VIN lookup helps, when it
              does not, and why the factory paint label still matters.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#vin-guide"
                className="cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
              >
                Start the VIN Guide
              </Link>

              <Link
                href="/paint-code-locations"
                className="cursor-pointer rounded-xl border border-slate-500 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-red-400/60 hover:bg-red-500/10"
              >
                Browse Paint Code Locations
              </Link>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400">
              Best rule: check the factory paint label first, then use the VIN
              as backup if the label is missing, damaged, or unclear.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-slate-950/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                VIN vs paint label
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                  <p className="text-sm font-bold text-sky-100">VIN</p>
                  <p className="mt-2 font-mono text-sm text-slate-400">
                    1HGCM82633A004352
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Useful for confirming the vehicle and helping a dealer or
                    supplier check build records.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                  <p className="text-sm font-bold text-sky-100">
                    Factory paint label
                  </p>
                  <div className="mt-3 grid gap-3 font-mono text-sm">
                    <div className="flex justify-between border-b border-slate-700 pb-3">
                      <span className="text-slate-400">C/TR</span>
                      <span className="font-bold text-red-300">040 / FA20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">EXT PNT</span>
                      <span className="font-bold text-red-300">WA8555</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Usually the better first source for the actual paint code.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-sky-500/20 bg-sky-500/10 p-4">
                <h2 className="text-base font-semibold text-sky-200">
                  Practical answer
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  VIN lookup can help, but the label is usually where the paint
                  code is printed. Use both when accuracy matters.
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
              VIN lookup can help
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Dealers, manufacturers, suppliers, and body shops may use the VIN
              to confirm build details or research paint information.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-sky-700">
              The label is still the priority
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              The actual paint code is usually printed on a factory sticker,
              certification label, service parts label, or data plate.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-sky-700">
              Verification prevents bad matches
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Repainting, fading, repairs, two-tone finishes, and specialty
              coatings can all affect the final paint match.
            </p>
          </article>
        </div>
      </section>

      <section id="vin-guide" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Step-by-step
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              How to use VIN lookup without skipping the paint label
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This order keeps the VIN in its proper role: useful for
              verification, but not a replacement for the factory label when the
              label is available.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {lookupSteps.map((step) => (
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
              When VIN helps
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              What a VIN can actually help with
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              A VIN is useful because it identifies the vehicle. It becomes most
              helpful when a dealer, supplier, or body shop can use it to verify
              build information or research factory records.
            </p>

            <Link
              href="/how-to-find-vehicle-paint-code"
              className="mt-8 inline-flex cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              Find the Factory Paint Label
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {vinCanHelpWith.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                  ✓
                </div>
                <h3 className="mt-4 text-lg font-bold text-sky-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
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
              Limits of VIN lookup
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              Why a VIN lookup may not be enough for paint matching
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Public VIN decoders often focus on general vehicle specs. Even
              when paint information can be researched, the result still needs
              to be checked against the vehicle’s actual label and condition.
            </p>

            <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-5">
              <h3 className="text-base font-bold text-sky-800">
                Best practice
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Treat VIN lookup as a verification step. Do not rely on it as
                the only source if the factory paint label is available and
                readable.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {vinLimitations.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-lg font-bold text-sky-700">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Compare your options
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-100 sm:text-4xl">
              Paint label vs VIN vs color name
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              The safest workflow is usually label first, VIN second, color name
              last. Each source has a different role.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="grid gap-px bg-white/10 text-sm md:grid-cols-[0.8fr_1.1fr_1.1fr]">
              <div className="bg-slate-950/80 p-4 font-bold text-sky-100">
                Source
              </div>
              <div className="bg-slate-950/80 p-4 font-bold text-sky-100">
                Best for
              </div>
              <div className="bg-slate-950/80 p-4 font-bold text-sky-100">
                Caution
              </div>

              {comparisonRows.map((row) => (
                <div key={row.item} className="contents">
                  <div className="bg-slate-900/80 p-4 font-semibold text-white">
                    {row.item}
                  </div>
                  <div className="bg-slate-900/80 p-4 leading-6 text-slate-300">
                    {row.bestFor}
                  </div>
                  <div className="bg-slate-900/80 p-4 leading-6 text-slate-300">
                    {row.caution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                If the label is missing
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
                What to do when you only have the VIN
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                If the paint label is missing or unreadable, the VIN becomes
                more useful. Give it to a dealer, manufacturer, paint supplier,
                or qualified body shop along with your vehicle details.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                If the vehicle may have been repainted, ask whether a custom
                color match from a painted part is safer than relying only on
                factory records.
              </p>

              <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                <h3 className="text-base font-bold text-sky-800">
                  Useful information to provide
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  VIN, year, make, model, trim, label photos, current paint
                  photos, and whether the vehicle has had paint or body repairs.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-sky-700">
                Verification checklist
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Before ordering paint based on a VIN-assisted lookup, confirm
                these details.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Check all common paint label locations first.",
                  "Confirm the year, make, model, trim, and body style.",
                  "Ask whether the result is based on factory records or a guess.",
                  "Check whether the vehicle has been repainted or repaired.",
                  "Test paint in a small area before broader application.",
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
                href="/paint-code-locations"
                className="mt-6 inline-flex cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
              >
                Browse Paint Code Locations
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
            FAQs about VIN paint code lookup
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            These questions focus on using a VIN to research or verify a vehicle
            paint code without relying on it blindly.
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
            Start with the paint label, then use the VIN as backup.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Search the physical label locations first. If the label is missing
            or unreadable, use the VIN when contacting a dealer, supplier, or
            body shop.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/paint-code-locations"
              className="cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              Browse Paint Code Locations
            </Link>

            <Link
              href="/how-to-find-vehicle-paint-code"
              className="cursor-pointer rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-sky-300 hover:bg-sky-50"
            >
              How to Find Your Paint Code
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
            VehiclePaintCodes.com provides general paint code location guidance,
            VIN lookup guidance, and reference information only. VIN-based paint
            lookup, paint code labels, color names, and formulas can vary by
            manufacturer, model year, trim, region, prior repairs, fading,
            repainting, and two-tone or specialty finishes. Always verify your
            paint code with the vehicle’s factory label, manufacturer, dealer,
            paint supplier, or qualified body shop before ordering or applying
            paint.
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
            VIN Paint Code Lookup
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
