"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "~/components/ui/chart"

const chartData = [
    { month: 'Dec 2023', amount: 115000 },
    { month: 'Jan 2024', amount: 125000 },
    { month: 'Feb 2024', amount: 145000 },
    { month: 'Mar 2024', amount: 135000 },
    { month: 'Apr 2024', amount: 155000 },
    { month: 'May 2024', amount: 140000 },
]


const chartConfig = {
    amount : {
        label: "Amount",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function MyChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-light">Revenue Chart</CardTitle>
                <CardDescription className="text-sm font-light">
                    Showing total revenue for the last 6 months
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="amount"
                            type="natural"
                            fill="var(--color-amount)"
                            fillOpacity={0.2}
                            stroke="var(--color-amount)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            January - June 2024
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
