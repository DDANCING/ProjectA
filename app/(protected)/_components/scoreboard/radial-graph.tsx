"use client";

import { useEffect, useState } from "react";
import { Frown, SmileIcon } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
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
import { getUserFrequency } from "@/actions/set-frequency";

export const description = "A radial chart with frequency tracking";

// Configuração do gráfico
const chartConfig: ChartConfig = {
  frequency: {
    label: "Frequency",
    color: "hsl(var(--primary))",
  },
};

export function RadialGraphic({ userId }: { userId: string }) {
  const [frequency, setFrequency] = useState(0);
  const [total, setTotal] = useState(30); // Total padrão para o gráfico

  useEffect(() => {
    async function fetchFrequency() {
      try {
        const userFrequency = await getUserFrequency(userId);
        setFrequency(userFrequency);

        if (userFrequency < 30) {
          setTotal(30);
        } else if (userFrequency < 365) {
          setTotal(365);
        } else {
          setTotal(730); // Dois anos
        }
      } catch (error) {
        console.error("Erro ao buscar a frequência do usuário:", error);
      }
    }

    fetchFrequency();
  }, [userId]);

  const remaining = total - frequency;

  const chartData = [
    { frequency: "Days", Remaining: remaining, Frequency: frequency },
  ];

  const chartConfig = {
    Frequency: {
      label: "Frequency",
      color: "hsl(var(--primary))",
    },
    Remaining: {
      label: "Remaining",
      color: "hsl(var(--muted))",
    },
  } satisfies ChartConfig;

  return (
    <div className="w-full hidden sm:block">
     
        <CardHeader >
          <CardTitle>Frequency</CardTitle>
          <CardDescription className="hidden lg:block">
            Your progression through the different modules
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center mt-[-5vh]">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[30vh] h-auto"
          >
            <RadialBarChart
              data={chartData}
              startAngle={-20}
              endAngle={200}
              innerRadius="60%"
              outerRadius="90%"
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
                            {frequency === 1 ? "Day" : "Days"}
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </PolarRadiusAxis>
              <RadialBar
                dataKey="Remaining"
                stackId="a"
                cornerRadius={5}
                fill="var(--color-Remaining)"
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="Frequency"
                fill="var(--color-Frequency)"
                stackId="a"
                cornerRadius={5}
                className="stroke-transparent stroke-2"
              />
            </RadialBarChart>
          </ChartContainer>
          <div className="flex flex-col items-center mt-[-130px]  w-full">
            {frequency === 0 ? (
              <Frown size={32} className="text-muted" />
            ) : (
              <SmileIcon size={32} className="text-primary" />
            )}
            {frequency === 0 ? (
               <p className="text-muted-foreground">You are not having a good time!</p>
              
            ) : (
              <p className="text-foreground">You are getting a nice frequency!</p>
            )}
          </div>
        </CardContent>
      
    </div>
  );
}
