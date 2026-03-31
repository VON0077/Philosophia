import Navbar from "@/components/Navbar";
import DebateCard from "@/components/DebateCard";
import { mockDebates } from "@/data/mockDebates";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            Structured disagreement, better arguments
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            See the strongest arguments from both sides.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
            A debate-focused platform where users post claims, argue from either
            side, and surface the most compelling reasoning instead of chaotic
            comment threads.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {["Politics", "Technology", "Culture", "Education", "Health"].map(
            (category) => (
              <button
                key={category}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                {category}
              </button>
            ),
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Trending debates</h2>
          <a href="/debates" className="text-sm text-zinc-400 hover:text-white">
            View all
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mockDebates.map((debate) => (
            <DebateCard key={debate.id} debate={debate} />
          ))}
        </div>
      </section>
    </main>
  );
}
