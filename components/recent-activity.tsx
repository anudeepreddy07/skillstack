import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, TrendingUp, Award, DollarSign } from "lucide-react"

const activities = [
  {
    type: "skill",
    title: "Completed AI Automation course",
    time: "2 hours ago",
    icon: CheckCircle2,
    color: "text-emerald-400",
    badge: "+150 XP",
  },
  {
    type: "income",
    title: "Received payment from client",
    time: "5 hours ago",
    icon: DollarSign,
    color: "text-purple-400",
    badge: "+$450",
  },
  {
    type: "milestone",
    title: "Reached 50% freedom goal",
    time: "1 day ago",
    icon: Award,
    color: "text-amber-400",
    badge: "Milestone",
  },
  {
    type: "growth",
    title: "Skill score increased",
    time: "2 days ago",
    icon: TrendingUp,
    color: "text-cyan-400",
    badge: "+45 pts",
  },
]

export function RecentActivity() {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 rounded-xl bg-secondary/20 p-3 border border-border/20">
            <div className={`mt-0.5 ${activity.color}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
            <Badge
              variant="secondary"
              className="shrink-0 bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs"
            >
              {activity.badge}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
