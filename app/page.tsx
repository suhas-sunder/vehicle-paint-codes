import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.vehiclepaintcodes.com";

export const metadata: Metadata = {
  title: "Vehicle Paint Codes | Find Your Car Paint Code",
  description:
    "Find your vehicle paint code, learn where to check the factory label, understand VIN lookup limits, and verify the right color before buying paint.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Vehicle Paint Codes | Find Your Car Paint Code",
    description:
      "A clean guide to finding your vehicle paint code, reading the factory label, and avoiding the wrong paint match.",
    url: pageUrl,
    siteName: "VehiclePaintCodes.com",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vehicle Paint Codes | Find Your Car Paint Code",
    description:
      "Find your vehicle paint code and verify the right color before buying touch-up paint or painted parts.",
  },
};

export default function Home() {
  const commonLocations = [
    "Driver-side door jamb",
    "Passenger-side door jamb",
    "Glove box",
    "Trunk or spare tire area",
    "Under the hood",
    "Radiator support",
  ];

  const popularMakes = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "GMC",
    "Dodge",
    "Jeep",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Volkswagen",
    "Nissan",
    "Hyundai",
    "Kia",
    "Mazda",
    "Subaru",
    "Tesla",
    "Lexus",
  ];

  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VehiclePaintCodes.com",
    url: pageUrl,
    description:
      "A practical reference for finding vehicle paint codes, factory label locations, VIN lookup guidance, and paint code basics.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${pageUrl}/paint-code-locations?make={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VehiclePaintCodes.com",
    url: pageUrl,
    logo: `${pageUrl}/logo.png`,
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.22),transparent_34%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,1))]" />

        <Navbar />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-100 shadow-[0_0_32px_rgba(220,38,38,0.18)]">
              Vehicle paint code lookup guides
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-sky-100 sm:text-5xl lg:text-6xl">
              Find your vehicle paint code before buying the wrong paint.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Find where to check, what the factory label looks like, and how to
              verify the right code before ordering touch-up paint, spray paint,
              or pre-painted parts.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/how-to-find-vehicle-paint-code"
                className="cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
              >
                Find My Paint Code
              </Link>

              <Link
                href="/paint-code-locations"
                className="cursor-pointer rounded-xl border border-slate-500 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-red-400/60 hover:bg-red-500/10"
              >
                Browse by Make
              </Link>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400">
              Start with the factory paint label. Use your VIN as a backup if
              the label is missing, damaged, or unclear.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-slate-950/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Example factory label
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
                  What you are looking for
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Paint codes are usually short letter-number combinations near
                  labels like PNT, PAINT, COLOR, EXT, C/TR, or exterior paint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-sky-700">Find the label</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Start with the driver-side door jamb, then check backup locations
              like the glove box, trunk, spare tire area, and under the hood.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-sky-700">
              Read the right code
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Factory labels can include VINs, trim codes, barcodes, and weight
              ratings. Look for paint-related wording before copying a code.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-sky-700">
              Verify before buying
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Confirm the code before ordering touch-up paint, pre-painted
              parts, spray paint, or repair materials.
            </p>
          </article>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Start here
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              The fastest places to check first
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Paint code labels are not in the same place on every vehicle, but
              these areas solve many searches before you need to call a dealer
              or body shop.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commonLocations.map((location) => (
              <div
                key={location}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                  ✓
                </div>
                <h3 className="mt-4 text-lg font-bold text-sky-700">
                  {location}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Check for a factory sticker, plate, service label, or
                  certification label with paint-related abbreviations.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/how-to-find-vehicle-paint-code"
              className="inline-flex cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              See the Full Step-by-Step Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Browse by make
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-100 sm:text-4xl">
              Different brands hide paint codes in different places.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Toyota, Ford, GM, Volkswagen, BMW, Honda, and other manufacturers
              use different label formats and common locations. Start with your
              make to narrow the search.
            </p>

            <Link
              href="/paint-code-locations"
              className="mt-8 inline-flex cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
            >
              View Paint Code Locations
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {popularMakes.map((make) => (
              <Link
                key={make}
                href={`/paint-code-locations/${make
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("/", "-")}`}
                className="cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-red-400/50 hover:bg-red-500/10 hover:text-white"
              >
                {make}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Paint code basics
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              Do not order paint by color name alone.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              A name like white, black, silver, gray, or blue is too broad for a
              reliable match. The paint code is the factory reference that gives
              you a better starting point.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Even then, fading, repainting, repairs, metallic flakes, pearl
              finishes, and application method can affect how the final color
              looks.
            </p>

            <Link
              href="/what-is-a-vehicle-paint-code"
              className="mt-8 inline-flex cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
            >
              What Is a Paint Code?
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-2xl font-bold text-sky-700">
              Before ordering paint, confirm:
            </h3>

            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-600" />
                <span>The paint code is copied exactly from the label.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-600" />
                <span>
                  The vehicle year, make, model, and trim are correct.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-600" />
                <span>
                  The finish type is understood, such as solid, metallic, pearl,
                  tri-coat, or two-tone.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-600" />
                <span>
                  The vehicle has not been repainted or repaired with a
                  non-factory color.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              VIN lookup
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
              Can you find a paint code by VIN?
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-700">
              Sometimes a dealer, parts supplier, paint vendor, or body shop can
              use your VIN to help verify vehicle build details. But for most
              drivers, the best first step is still to check the factory paint
              label on the vehicle.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Use the VIN as backup if the label is missing, damaged,
              unreadable, or needs professional verification.
            </p>

            <Link
              href="/vin-paint-code-lookup"
              className="mt-8 inline-flex cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
            >
              Learn About VIN Paint Code Lookup
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Build your match with confidence
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
            Find the code first. Verify it before buying.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            VehiclePaintCodes.com is a practical reference for paint code
            locations, label examples, VIN lookup limits, and make-specific
            guides.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/how-to-find-vehicle-paint-code"
              className="cursor-pointer rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              Find Your Paint Code
            </Link>

            <Link
              href="/paint-code-locations"
              className="cursor-pointer rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-sky-300 hover:bg-sky-50"
            >
              Browse by Make
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
