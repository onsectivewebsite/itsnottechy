export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="group relative overflow-hidden">
      <div className="flex w-max animate-marquee gap-10 py-4 [animation-play-state:running] group-hover:[animation-play-state:paused]">
        {row.map((label, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 whitespace-nowrap text-2xl font-semibold tracking-tight text-white/60 md:text-3xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
