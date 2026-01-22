"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Target, Flame, TrendingUp, Edit2, X, Check } from "lucide-react"

export function FreedomTracker() {
  const [survivalNumber, setSurvivalNumber] = useState(4500)
  const [sideIncome, setSideIncome] = useState(2800)
  const [isEditing, setIsEditing] = useState(false)
  const [tempSurvival, setTempSurvival] = useState(survivalNumber.toString())
  const [tempIncome, setTempIncome] = useState(sideIncome.toString())

  const progress = Math.min((sideIncome / survivalNumber) * 100, 100)
  const remaining = Math.max(survivalNumber - sideIncome, 0)
  const streak = 12

  const handleSave = () => {
    setSurvivalNumber(Number(tempSurvival) || survivalNumber)
    setSideIncome(Number(tempIncome) || sideIncome)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempSurvival(survivalNumber.toString())
    setTempIncome(sideIncome.toString())
    setIsEditing(false)
  }

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-xl">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Target className="h-5 w-5 text-cyan-400" />
            Freedom Tracker
          </CardTitle>
          {!isEditing ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(true)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Edit2 className="h-4 w-4" />
            </Button>
          ) : (
            <div className="flex gap-1">
              <Button variant="ghost" size="sm" onClick={handleCancel}>
                <X className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleSave} className="text-green-400">
                <Check className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {isEditing ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="survival" className="text-sm text-muted-foreground">
                Survival Number (monthly expenses)
              </Label>
              <Input
                id="survival"
                type="number"
                value={tempSurvival}
                onChange={(e) => setTempSurvival(e.target.value)}
                className="bg-secondary/50 border-border/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="income" className="text-sm text-muted-foreground">
                Current Side Income
              </Label>
              <Input
                id="income"
                type="number"
                value={tempIncome}
                onChange={(e) => setTempIncome(e.target.value)}
                className="bg-secondary/50 border-border/50"
              />
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Side Income</span>
              <span className="font-semibold text-foreground">${sideIncome.toLocaleString()}</span>
            </div>

            <div className="space-y-3">
              <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary/50">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 blur-sm opacity-50 transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">$0</span>
                <span className="font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {progress.toFixed(1)}% to freedom
                </span>
                <span className="text-muted-foreground">${survivalNumber.toLocaleString()}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-secondary/30 p-4 border border-border/30">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                  <Target className="h-3 w-3" />
                  Survival Number
                </div>
                <span className="text-xl font-bold text-foreground">${survivalNumber.toLocaleString()}</span>
              </div>
              <div className="rounded-xl bg-secondary/30 p-4 border border-border/30">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                  <TrendingUp className="h-3 w-3" />
                  Remaining
                </div>
                <span className="text-xl font-bold text-foreground">${remaining.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 p-4 border border-orange-500/20">
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-400" />
                <span className="text-sm text-foreground">Monthly Streak</span>
              </div>
              <span className="text-2xl font-bold text-orange-400">{streak} 🔥</span>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
