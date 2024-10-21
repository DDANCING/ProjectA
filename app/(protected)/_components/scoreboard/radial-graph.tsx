"use client"

import { useEffect, useState } from "react"
import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { getUserFrequency } from "@/actions/set-frequency"

export const description = "A radial chart with stacked sections"

const chartConfig = {
  frequency: {
    label: "Frequency",
    color: "hsl(var(--primary))", // Primary color for frequency
  },
  total: {
    label: "Total",
    color: "hsl(var(--chart-1))", // Secondary color for total
  },
} satisfies ChartConfig

export function RadialGraphic({ userId }: { userId: string }) {
  const [frequency, setFrequency] = useState(0)
  const [total, setTotal] = useState(30) // Default total for the chart

  useEffect(() => {
    async function fetchFrequency() {
      try {
        const userFrequency = await getUserFrequency(userId) // Call API to get frequency
        setFrequency(userFrequency)

        // Define the total based on the frequency
        if (userFrequency < 30) {
          setTotal(30)
        } else if (userFrequency < 365) {
          setTotal(365)
        } else {
          setTotal(730) // Two years
        }
      } catch (error) {
        console.error("Error fetching user frequency:", error)
      }
    }

    fetchFrequency()
  }, [userId])

  const chartData = [
    { name: "Frequency", value: frequency },
    { name: "Total", value: total - frequency }, // Remaining part
  ]

  return (
    <div className="w-full hidden sm:block">
      <Card className="shadow-none border-2 border-muted-foreground h-[30vh] mr-3 ">
        <CardHeader className="items-center pb-0">
          <CardTitle>Radial Chart - Frequency</CardTitle>
          <CardDescription>Tracking User Frequency</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 items-center pb-0">
          <ChartContainer
            config={chartConfig}
            style={{ height: "20vh", width: "100%" }}
            className="mx-auto aspect-square w-full max-w-[250px]"
          >
            <RadialBarChart
              data={chartData}
              endAngle={180}
              innerRadius={80}
              outerRadius={130}
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 16}
                            className="fill-foreground text-2xl font-bold"
                          >
                            {frequency.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 4}
                            className="fill-muted-foreground"
                          >
                            Days Active
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </PolarRadiusAxis>
              <RadialBar
                dataKey="value"
                name="Frequency"
                cornerRadius={5}
                fill="hsl(var(--primary))" // Use primary color for frequency
                className="stroke-transparent stroke-2"
                maxBarSize={20} // Control the bar thickness
              />
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
