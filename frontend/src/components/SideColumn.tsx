import { DebateReply } from "@/lib/types";

export default function SideColumn({
  title,
  tone,
  topArgument,
  replies,
}: {
  title: string;
  tone: "agree" | "disagree";
  topArgument: DebateReply;
  replies: DebateReply[];
}) {
  const theme =
    tone === "agree"
      ? {
          badge: "bg-emerald-500/15 text-emerald-300",
          border: "border-emerald-500/20",
          panel: "bg-emerald-500/[0.06]",
        }
      : {
          badge: "bg-rose-500/15 text-rose-300",
          border: "border-rose-500/20",
          panel: "bg-rose-500/[0.06]",
        };

  return (
    <section
      className={`rounded-2xl border ${theme.border} ${theme.panel} p-5`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className={`rounded-full px-3 py-1 text-xs ${theme.badge}`}>
          Top side
        </span>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
        <p className="text-sm leading-6 text-zinc-100">{topArgument.content}</p>
        <div className="mt-3 text-xs text-zinc-400">
          by {topArgument.author} · {topArgument.upvotes} upvotes
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {replies.map((reply) => (
          <div
            key={reply.id}
            className="rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <p className="text-sm leading-6 text-zinc-200">{reply.content}</p>
            <div className="mt-2 text-xs text-zinc-400">
              by {reply.author} · {reply.upvotes} upvotes
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
