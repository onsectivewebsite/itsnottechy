import Image from "next/image";
import Link from "next/link";

type Variant = "light" | "dark" | "auto";

export function Logo({
  className = "",
  height = 40,
  variant = "light",
  showWordmark = false,
}: {
  className?: string;
  height?: number;
  variant?: Variant;
  showWordmark?: boolean;
}) {
  const src =
    variant === "dark" ? "/logo-cropped.png" : "/logo-light-cropped.png";

  return (
    <Link
      href="/"
      aria-label="It's Not Techy — Home"
      className={`inline-flex items-center gap-3 transition hover:opacity-90 ${className}`}
    >
      <Image
        src={src}
        alt="It's Not Techy"
        width={Math.round((height * 1668) / 1008)}
        height={height}
        priority
        unoptimized
        className="h-auto select-none"
        style={{ height }}
      />
      {showWordmark && (
        <span className="hidden font-display text-base font-semibold tracking-tight sm:inline-block">
          It&apos;s Not Techy
        </span>
      )}
    </Link>
  );
}

export function LogoMark({
  height = 64,
  variant = "light",
  className = "",
}: {
  height?: number;
  variant?: Variant;
  className?: string;
}) {
  const src = variant === "dark" ? "/logo-cropped.png" : "/logo-light-cropped.png";
  return (
    <Image
      src={src}
      alt="It's Not Techy"
      width={Math.round((height * 1668) / 1008)}
      height={height}
      priority
      unoptimized
      className={`h-auto select-none ${className}`}
    />
  );
}
