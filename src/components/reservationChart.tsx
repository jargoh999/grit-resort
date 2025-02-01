"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
    { month: 'Dec 2023', booked: 150, cancelled: 20 },
    { month: 'Jan 2024', booked: 180, cancelled: 15 },
    { month: 'Feb 2024', booked: 200, cancelled: 25 },
    { month: 'Mar 2024', booked: 220, cancelled: 30 },
    { month: 'Apr 2024', booked: 190, cancelled: 18 },
    { month: 'May 2024', booked: 210, cancelled: 22 },
]

const chartConfig = {
    booked: {
        label: "Booked Reservations",
        color: "hsl(var(--chart-2))",
    },
    cancelled: {
        label: "Cancelled Reservations",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function Component() {
    return (
        <Card className="bg-[#e7f68f]/40">
            <CardHeader>
                <CardTitle className="font-light">Reservation Chart</CardTitle>
                <CardDescription className="text-sm font-light">
                    Showing booked and cancelled reservations
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
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
                        <Bar
                            dataKey="booked"
                            fill="var(--color-booked)"
                            fillOpacity={0.2}
                            stroke="var(--color-booked)"
                        />
                        <Bar
                            dataKey="cancelled"
                            fill="var(--color-cancelled)"
                            fillOpacity={0.2}
                            stroke="var(--color-cancelled)"
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Reservation Cancellation Rate: 15% <TrendingUp className="h-4 w-4" />
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