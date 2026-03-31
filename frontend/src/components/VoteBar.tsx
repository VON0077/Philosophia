export default function VoteBar({
  agreeCount,
  disagreeCount,
}: {
  agreeCount: number;
  disagreeCount: number;
}) {
  const total = agreeCount + disagreeCount || 1;
  const agreeWidth = (agreeCount / total) * 100;
  const disagreeWidth = (disagreeCount / total) * 100;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-zinc-300">
        <span>Agree {agreeCount}</span>
        <span>Disagree {disagreeCount}</span>
      </div>

      <div className="flex h-3 w-full overflow-hidden rounded-full bg-white/10">
        <div className="bg-emerald-500" style={{ width: `${agreeWidth}%` }} />
        <div className="bg-rose-500" style={{ width: `${disagreeWidth}%` }} />
      </div>
    </div>
  );
}
