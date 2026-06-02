import Link from "next/link";
import { clsx } from "@/lib/clsx";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-brand-500 via-brand-600 to-accent-600 text-white shadow-lg shadow-accent-600/30 ring-1 ring-inset ring-white/15 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-500/40",
  secondary:
    "border border-white/15 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

/** Reflet lumineux qui balaye le bouton au survol (effet premium). */
function Shine({ variant }: { variant: Variant }) {
  if (variant === "ghost") return null;
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
    />
  );
}

/** Bouton-lien (interne ou externe). */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ComponentProps<typeof Link>) {
  const external = typeof href === "string" && href.startsWith("http");
  return (
    <Link
      href={href}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      <Shine variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </Link>
  );
}

/** Bouton standard (action / formulaire). */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      <Shine variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
