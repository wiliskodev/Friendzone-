import { type AnchorHTMLAttributes } from "react";

export function ButtonLink({ className = "", ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-xl border border-fire/60 bg-fire px-8 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fire/70 ${className}`}
      {...props}
    />
  );
}
