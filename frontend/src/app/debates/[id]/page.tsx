import Navbar from "@/components/Navbar";
import DebateCard from "@/components/DebateCard";
import { mockDebates } from "@/data/mockDebates";

export default function DebatesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">All debates</h1>
            <p className="mt-2 text-zinc-400">
              Browse active discussions and compare the strongest reasoning on
              both sides.
            </p>
          </div>

          <div className="flex gap-3">
            <input
              placeholder="Search debates..."
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm outline-none placeholder:text-zinc-500"
            />
            <button className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black">
              Search
            </button>
          </div>
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
