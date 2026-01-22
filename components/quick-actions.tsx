import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, BookOpen, Users, Rocket } from "lucide-react"

const actions = [
  { label: "Add New Skill", icon: Plus, gradient: "from-purple-500 to-violet-600" },
  { label: "Browse Courses", icon: BookOpen, gradient: "from-blue-500 to-cyan-500" },
  { label: "Find Mentors", icon: Users, gradient: "from-emerald-500 to-teal-500" },
  { label: "Launch Gig", icon: Rocket, gradient: "from-pink-500 to-rose-500" },
]

export function QuickActions() {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant="secondary"
            className="h-auto flex-col gap-2 py-4 bg-secondary/30 hover:bg-secondary/50 border border-border/30 group"
          >
            <div
              className={`rounded-xl bg-gradient-to-br ${action.gradient} p-2.5 group-hover:scale-110 transition-transform`}
            >
              <action.icon className="h-4 w-4 text-white" />
            </div>
            <span className="text-xs font-medium text-foreground">{action.label}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
