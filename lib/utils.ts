import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(n < 10000 ? 1 : 0) + "K";
  return String(n);
}

export function formatCurrency(n: number): string {
  if (n >= 100000) return "₹" + (n / 100000).toFixed(1) + "L";
  if (n >= 1000) return "₹" + (n / 1000).toFixed(0) + "K";
  return "₹" + n;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export const nicheColors: Record<string, string> = {
  Fitness: "bg-violet-50 text-violet-700 border-violet-200",
  Wellness: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Nutrition: "bg-green-50 text-green-700 border-green-200",
  Beauty: "bg-pink-50 text-pink-700 border-pink-200",
  Skincare: "bg-rose-50 text-rose-700 border-rose-200",
  Fashion: "bg-amber-50 text-amber-700 border-amber-200",
  Lifestyle: "bg-blue-50 text-blue-700 border-blue-200",
  Food: "bg-orange-50 text-orange-700 border-orange-200",
  Travel: "bg-sky-50 text-sky-700 border-sky-200",
  Sports: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Gaming: "bg-purple-50 text-purple-700 border-purple-200",
  Photography: "bg-teal-50 text-teal-700 border-teal-200",
};

export function getNicheColor(niche: string): string {
  return nicheColors[niche] || "bg-gray-50 text-gray-700 border-gray-200";
}
