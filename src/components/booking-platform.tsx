"use client"

import { TrendingUp } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const chartData = [
    { platform: 'Direct booking', value: 61, fill: "var(--color-direct)" },
    { platform: 'Airbnb', value: 15, fill: "var(--color-airbnb)" },
    { platform: 'Hotels.com', value: 9, fill: "var(--color-hotels)" },
    { platform: 'Agoda', value: 7, fill: "var(--color-agoda)" },
    { platform: 'Others', value: 8, fill: "var(--color-others)" },
]

const chartConfig = {
    direct: {
        label: "Direct Booking",
        color: "hsl(var(--chart-1))",
    },
    airbnb: {
        label: "Airbnb",
        color: "hsl(var(--chart-2))",
    },
    hotels: {
        label: "Hotels.com",
        color: "hsl(var(--chart-3))",
    },
    agoda: {
        label: "Agoda",
        color: "hsl(var(--chart-4))",
    },
    others: {
        label: "Others",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export function Component3() {
    const totalBookings = chartData.reduce((sum, item) => sum + item.value, 0)

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-light">Booking Platforms</CardTitle>
                <CardDescription className="text-sm font-light">
                    Bookings sources for the last 6 months
                </CardDescription>
            </CardHeader>
            <CardContent className="flex items-start gap-4">
                <div className="flex-grow w-1/2">
                    <ChartContainer config={chartConfig}>
                        <ResponsiveContainer width="100%" height={350}>
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent />}
                                />
                                <Pie
                                    data={chartData}
                                    dataKey="value"
                                    nameKey="platform"
                                    innerRadius="50%"
                                    outerRadius="100%"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.fill}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </div>
                <div className="w-1/2 h-[250px] overflow-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Platform</TableHead>
                                <TableHead className="text-right font-light">percentage</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {chartData.map((item) => (
                                <TableRow key={item.platform}>
                                    <TableCell className="font-medium flex items-center">
                                        <div
                                            className="h-3 w-3 rounded-full mr-2"
                                            style={{ backgroundColor: item.fill }}
                                        />
                                        {item.platform}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {((item.value / totalBookings) * 100).toFixed(1)}%
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
            
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Direct Bookings Trending <TrendingUp className="h-4 w-4" />
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