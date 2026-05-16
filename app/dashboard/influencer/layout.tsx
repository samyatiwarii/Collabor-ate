import { InfluencerSidebar } from "@/components/layout/InfluencerSidebar";

export default function InfluencerDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface">
      <InfluencerSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
