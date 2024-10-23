"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked area chart";

interface MonthlyProgress {
  averagePoints: number;
  exercisePoints: number;
  videoPoints: number;
  gameMusicPoints: number;
  month: number;
}

interface ProgressGraphComponentProps {
  monthlyProgress: MonthlyProgress[];
}

// Função para formatar o mês como abreviação
const formatMonth = (month: number): string => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return monthNames[month - 1]; 
};

export function ProgressGraphComponent({ monthlyProgress }: ProgressGraphComponentProps) {
  const chartConfig = {
    average: {
      label: "Average Points",
      color: "hsl(var(--chart-4))",
    },
    exercise: {
      label: "Exercise Points",
      color: "hsl(var(--chart-2))",
    },
    video: {
      label: "Video Points",
      color: "hsl(var(--chart-3))",
    },
    game: {
      label: "Game Music Points",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <div>
      
        <CardHeader>
          <CardTitle>Progress Graphics</CardTitle>
          <CardDescription >
            Your progression through the different modules
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <ChartContainer config={chartConfig} style={{ height: '19vh', width: '100%' }}>
            <AreaChart
              width={500}
              height={200}
              data={monthlyProgress}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => formatMonth(value)} // Converter número do mês para string
              />
              <YAxis
                domain={[0, 100]}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
             <Area
  dataKey="averagePoints"
  type="natural"
  fill={chartConfig.average.color}
  fillOpacity={0.4}
  stroke={chartConfig.average.color}
/>
<Area
  dataKey="exercisePoints"
  type="natural"
  fill={chartConfig.exercise.color}
  fillOpacity={0.4}
  stroke={chartConfig.exercise.color}
/>
<Area
  dataKey="videoPoints"
  type="natural"
  fill={chartConfig.video.color}
  fillOpacity={0.4}
  stroke={chartConfig.video.color}
/>
<Area
  dataKey="gameMusicPoints"
  type="natural"
  fill={chartConfig.game.color}
  fillOpacity={0.4}
  stroke={chartConfig.game.color}
/>
            </AreaChart>
          </ChartContainer>
        </CardContent>
      
    </div>
  );
}
