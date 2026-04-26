import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative z-10 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link
          href="/"
          className="group flex cursor-pointer items-center gap-2 text-lg font-bold tracking-tight text-white transition"
          aria-label="VehiclePaintCodes.com home"
        >
          <Image
            src="/logo.png"
            alt="VehiclePaintCodes.com logo"
            width={60}
            height={60}
            priority
            className=" object-contain rounded-xl border-2 border-slate-600 group-hover:border-sky-300"
          />

          <span>
            VehiclePaintCodes
            <span className="text-slate-400 transition group-hover:text-sky-300">
              .com
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <Link
            href="/how-to-find-vehicle-paint-code"
            className="cursor-pointer transition hover:text-sky-300"
          >
            Find Your Code
          </Link>

          <Link
            href="/paint-code-locations"
            className="cursor-pointer transition hover:text-sky-300"
          >
            Locations
          </Link>

          <Link
            href="/vin-paint-code-lookup"
            className="cursor-pointer transition hover:text-sky-300"
          >
            VIN Lookup
          </Link>

          <Link
            href="/what-is-a-vehicle-paint-code"
            className="cursor-pointer transition hover:text-sky-300"
          >
            What Is a Paint Code?
          </Link>
        </nav>
      </div>
    </header>
  );
}
