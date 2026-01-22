import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, DollarSign, Clock, Target } from "lucide-react"

const stats = [
  {
    label: "Total Earned",
    value: "$12,450",
    change: "+23%",
    icon: DollarSign,
    color: "from-purple-500 to-violet-600",
  },
  {
    label: "Hours Saved",
    value: "147h",
    change: "+12%",
    icon: Clock,
    color: "from-blue-500 to-cyan-500",
  },
  {
    label: "Active Clients",
    value: "8",
    change: "+3",
    icon: Target,
    color: "from-emerald-500 to-teal-500",
  },
  {
    label: "Skill Score",
    value: "847",
    change: "+45",
    icon: TrendingUp,
    color: "from-pink-500 to-rose-500",
  },
]

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden group">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
              <div
                className={`rounded-xl bg-gradient-to-br ${stat.color} p-2.5 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1 text-xs">
              <span className="text-emerald-400 font-medium">{stat.change}</span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
