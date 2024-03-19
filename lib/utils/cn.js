import clsx from "clsx";
// Adjusted to use named import for twMerge
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
