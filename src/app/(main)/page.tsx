import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section
        className="relative overflow-hidden rounded-2xl mt-5 bg-[radial-gradient(1200px_400px_at_10%_-20%,hsl(var(--foreground)/0.1)_0%,transparent_60%),radial-gradient(1000px_300px_at_100%_0%,hsl(var(--foreground)/0.12)_0%,transparent_60%)]"
        aria-label="Dashboard banner"
      >
        <div className="relative h-60 sm:h-72">
          <Image
            src="/globe.svg"
            alt="Globe illustration"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center saturate-[0.9] contrast-[0.95]"
          />
        </div>
        <div className="absolute inset-0 flex items-end p-4 bg-linear-to-t from-background/40 to-transparent">
          <div>
            <h1 className="text-2xl font-semibold">Welcome back</h1>
            <p className="mt-1 opacity-80">Kaulu Concept</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4" aria-label="Quick stats">
        <div className="border border-foreground/10 rounded-xl p-4">
          <div className="text-sm opacity-70">Projects</div>
          <div className="text-2xl font-bold">12</div>
        </div>
        <div className="border border-foreground/10 rounded-xl p-4">
          <div className="text-sm opacity-70">Active</div>
          <div className="text-2xl font-bold">5</div>
        </div>
        <div className="border border-foreground/10 rounded-xl p-4">
          <div className="text-sm opacity-70">Alerts</div>
          <div className="text-2xl font-bold">2</div>
        </div>
      </section>
    </div>
  );
}
