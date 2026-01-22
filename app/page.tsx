import { DashboardHeader } from "@/components/dashboard-header"
import { StatsGrid } from "@/components/stats-grid"
import { SkillStacker } from "@/components/skill-stacker"
import { FreedomTracker } from "@/components/freedom-tracker"
import { QuickActions } from "@/components/quick-actions"
import { RecentActivity } from "@/components/recent-activity"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Gradient background effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-tl from-cyan-600/20 via-blue-600/10 to-transparent blur-3xl" />
      </div>

      <DashboardHeader />

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Alex</span> 👋
          </h1>
          <p className="mt-1 text-muted-foreground">{"You're"} 62% closer to freedom this month. Keep stacking! 🚀</p>
        </div>

        <div className="space-y-6">
          <StatsGrid />

          <div className="grid gap-6 lg:grid-cols-2">
            <SkillStacker />
            <FreedomTracker />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <QuickActions />
            <div className="md:col-span-1 lg:col-span-2">
              <RecentActivity />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
