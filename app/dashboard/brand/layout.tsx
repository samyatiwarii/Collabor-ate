import { BrandSidebar } from "@/components/layout/BrandSidebar";

export default function BrandDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface">
      <BrandSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
