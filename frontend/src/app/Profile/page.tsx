import Navbar from "@/components/Navbar";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="h-16 w-16 rounded-full bg-white/10" />
              <h1 className="mt-4 text-3xl font-bold">VON</h1>
              <p className="mt-2 max-w-xl text-zinc-400">
                Interested in structured debate, strong arguments, and better
                online discussion.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-zinc-400">Posts</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <div className="text-2xl font-bold">87</div>
                <div className="text-xs text-zinc-400">Replies</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <div className="text-2xl font-bold">1.2k</div>
                <div className="text-xs text-zinc-400">Votes</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-semibold">Recent debates</h2>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                Is AI making people less thoughtful?
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                Should college be free?
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-semibold">Top arguments</h2>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                "Public investment in education improves long-run economic
                capacity."
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                "AI should enhance thinking, not replace intellectual effort."
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
