"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles, TrendingUp, Zap, Video, PenTool, Code, Megaphone, Camera, BarChart3 } from "lucide-react"

interface Skill {
  id: string
  name: string
  value: number
  icon: React.ReactNode
  color: string
}

const skills: Skill[] = [
  {
    id: "ai",
    name: "AI Automation",
    value: 3500,
    icon: <Sparkles className="h-4 w-4" />,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "copy",
    name: "Copywriting",
    value: 2800,
    icon: <PenTool className="h-4 w-4" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "video",
    name: "Video Editing",
    value: 3200,
    icon: <Video className="h-4 w-4" />,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "code",
    name: "No-Code Dev",
    value: 2500,
    icon: <Code className="h-4 w-4" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "social",
    name: "Social Media",
    value: 2000,
    icon: <Megaphone className="h-4 w-4" />,
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "photo",
    name: "Photography",
    value: 1800,
    icon: <Camera className="h-4 w-4" />,
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: "analytics",
    name: "Data Analytics",
    value: 3000,
    icon: <BarChart3 className="h-4 w-4" />,
    color: "from-purple-500 to-violet-600",
  },
]

export function SkillStacker() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["ai", "copy"])

  const toggleSkill = (skillId: string) => {
    setSelectedSkills((prev) => (prev.includes(skillId) ? prev.filter((id) => id !== skillId) : [...prev, skillId]))
  }

  const totalValue = skills.filter((s) => selectedSkills.includes(s.id)).reduce((sum, s) => sum + s.value, 0)

  const multiplier = selectedSkills.length > 1 ? 1 + (selectedSkills.length - 1) * 0.15 : 1
  const stackedValue = Math.round(totalValue * multiplier)

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-xl">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Zap className="h-5 w-5 text-purple-400" />
            Skill Stacker
          </CardTitle>
          <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
            {selectedSkills.length} selected
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => {
            const isSelected = selectedSkills.includes(skill.id)
            return (
              <button
                key={skill.id}
                onClick={() => toggleSkill(skill.id)}
                className={`relative group flex items-center gap-2 rounded-xl px-3 py-2.5 text-left transition-all duration-200 ${
                  isSelected
                    ? "bg-gradient-to-r " + skill.color + " text-white shadow-lg shadow-purple-500/20"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {isSelected && (
                  <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-purple-600">
                    <Check className="h-3 w-3" />
                  </div>
                )}
                {skill.icon}
                <span className="text-xs font-medium truncate">{skill.name}</span>
              </button>
            )
          })}
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 p-6 border border-purple-500/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">Combined Market Value</span>
            {selectedSkills.length > 1 && (
              <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
                <TrendingUp className="h-3 w-3 mr-1" />+{Math.round((multiplier - 1) * 100)}% stack bonus
              </Badge>
            )}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ${stackedValue.toLocaleString()}
            </span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Based on average freelance rates for selected skills</p>
        </div>
      </CardContent>
    </Card>
  )
}
