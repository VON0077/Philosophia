import Navbar from "@/components/Navbar";

export default function CreatePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Create a good debate
        </h1>
        <p className="mt-2 text-zinc-400">
          Frame the topic clearly so people can argue the strongest version of
          both sides.
        </p>

        <form className="mt-8 space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-200">
              Title
            </label>
            <input
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-zinc-500"
              placeholder="e.g. Should social media be regulated like public utilities?"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-200">
              Description
            </label>
            <textarea
              rows={6}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-zinc-500"
              placeholder="Give context, define the scope, and explain what is being debated."
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-200">
                Category
              </label>
              <select className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none">
                <option>Politics</option>
                <option>Technology</option>
                <option>Culture</option>
                <option>Education</option>
                <option>Ethics</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-200">
                Tags
              </label>
              <input
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-zinc-500"
                placeholder="policy, ai, economics"
              />
            </div>
          </div>

          <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90">
            Publish debate
          </button>
        </form>
      </section>
    </main>
  );
}
