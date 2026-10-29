import { cn } from "@opal/utils";

interface BrandMarkProps {
  height: number;
  compact?: boolean;
  className?: string;
}

export function BrandMark({ height, compact = false, className }: BrandMarkProps) {
  const name = compact ? "bt-icon" : "bt-mark";
  const width = height * (compact ? 80 / 79 : 195 / 79);

  return (
    <span
      role="img"
      aria-label="B&T"
      className={cn("inline-flex shrink-0", className)}
      style={{ width, height }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/brand/${name}.svg`} alt="" className="block h-full w-full dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/brand/${name}-dark.svg`} alt="" className="hidden h-full w-full dark:block" />
    </span>
  );
}

export function BrandLockup({
  markHeight = 24,
  className,
}: {
  markHeight?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2 whitespace-nowrap", className)}>
      <BrandMark height={markHeight} />
      <span
        className="font-medium leading-none text-[#3B3B3B] dark:text-[#E8E8E8]"
        style={{ fontSize: markHeight * 0.75 }}
      >
        Intelligence
      </span>
    </span>
  );
}
