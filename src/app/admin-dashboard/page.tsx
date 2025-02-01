"use client"
import * as React from 'react'
import { AreaChart, Calendar, CircleDollarSign, ClipboardList, Home, Hotel, LayoutDashboard, LogInIcon, LogOutIcon, Mail, MessageSquare, Package, Settings, Star, User } from 'lucide-react'
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Progress } from "~/components/ui/progress"
import { Badge } from "~/components/ui/badge"

// Import recharts for the line and donut charts
import { PieChart, Pie, Cell, CartesianGrid, XAxis, Area, ResponsiveContainer } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { MyChart } from '~/components/revenueChart'
import { Component } from '~/components/reservationChart'
import { Component3 } from '~/components/booking-platform'
import { AdminSidebar } from '~/components/sidebar'
import { DashboardHeader } from '~/components/dashboard-header'




const bookingPlatforms = [
  { name: 'Direct Booking', value: 61, color: '#10B981' },
  { name: 'Booking.com', value: 12, color: '#6366F1' },
  { name: 'Expedia', value: 11, color: '#F59E0B' },
  { name: 'Airbnb', value: 9, color: '#EF4444' },
  { name: 'Hotels.com', value: 5, color: '#8B5CF6' },
  { name: 'Others', value: 2, color: '#6B7280' },
]

const tasks = [
  {
    title: "Set Up Conference Room B for 10 AM Meeting",
    date: "June 19, 2024",
    time: "10:00 AM",
    type: "setup"
  },
  {
    title: "Restock Housekeeping Supplies on 3rd Floor",
    date: "June 19, 2024",
    time: "2:00 PM",
    type: "housekeeping"
  },
  {
    title: "Inspect and Clean the Pool Area",
    date: "June 19, 2024",
    time: "4:00 PM",
    type: "maintenance"
  }
]

const bookings = [
  {
    id: "LG-800108",
    guest: "Angus Cooper",
    type: "Deluxe",
    room: "Room 101",
    nights: "3 nights",
    dates: "June 19, 2024 - June 22, 2024",
    status: "Checked In"
  },
  {
    id: "LG-800109",
    guest: "Catherine Lane",
    type: "Standard",
    room: "Room 202",
    nights: "2 nights",
    dates: "June 19, 2024 - June 21, 2024",
    status: "Confirmed"
  }
]



export default function Page() {
  return (
   
    <div className="flex min-h-screen w-full flex-col bg-background  overflow-y-scroll scrollbar-hide">
      {/* Sidebar */}
      <AdminSidebar/>
      {/* Main Content */}
      <div className="pl-64 scrollbar-hide">
        {/* Header */}
        <DashboardHeader title="Dashboard" />
        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-[#d5f6e5]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium font-light">Total Bookings</CardTitle>
                <Button variant="outline" size="icon" className="h-6 w-6">
                  <Mail className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">840</div>
                <p className="text-xs text-muted-foreground mt-1 font-light">
                  +5.25% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-light">Check-ins Today</CardTitle>
                <Button variant="outline" size="icon" className="h-6 w-6 bg-[#d5f6e5]">
                  <LogInIcon className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">231</div>
                <p className="text-xs text-muted-foreground bg-[#e7f68f] rounded-md text-black mt-1 font-light">
                  +2.5% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-light">Check-outs Today</CardTitle>
                <Button variant="outline" size="icon" className="h-6 w-6 bg-[#d5f6e5]">
                  <LogOutIcon className="h-4 w-4"/>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">124</div>
                <p className="text-xs bg-[#f8c2c2] rounded-md text-black mt-1 font-light">
                  -1.5% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-light">Total Revenue</CardTitle>
                <Button variant="outline" size="icon" className="h-6 w-6 bg-[#d5f6e5] ">
                  <CircleDollarSign className=" h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">$123,980</div>
                <p className="text-xs text-muted-foreground mt-1 font-light bg-[#e7f68f] rounded-md text-black">
                  +8.2% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Revenue Chart */}
            <MyChart />
            <Component />
            {/* Overall Rating */}
            <Card>
              <CardHeader>
                <CardTitle className='font-light text-xl'>Overall Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold font-light  bg-[#e7f68f]/40 rounded-md">4.6<span className="text-sm ml-1">/5</span>
                      </span>
                    <span className="text-sm text-muted-foreground">Impressive</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Facilities</span>
                      <span>4.4</span>
                    </div>
                    <Progress value={88} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Cleanliness</span>
                      <span>4.7</span>
                    </div>
                    <Progress value={94} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Service</span>
                      <span>4.6</span>
                    </div>
                    <Progress value={92} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Location</span>
                      <span>4.5</span>
                    </div>
                    <Progress value={90} className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Booking Platform Distribution */}
               <Component3/>
            {/* Tasks */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Tasks</CardTitle>
                  <Button size="sm" variant="outline">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div key={task.title} className="flex items-start space-x-4 rounded-lg border p-3 bg-[#d5f6e5]">
                      <div className="flex-1 space-y-1 ">
                        <p className="font-medium">{task.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {task.date} at {task.time}
                        </p>
                      </div>
                      <Badge variant="outline" className='bg-white text-black rounded-md font-light border-gray-400 border-2'>{task.type}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking List */}
          <Card className="mt-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className='font-light text-2xl'>Booking List</CardTitle>
                <div className="flex items-center space-x-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="checked-in">Checked In</SelectItem>
                      <SelectItem value="checked-out">Checked Out</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Search booking..." className="w-64" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Booking ID</TableHead>
                    <TableHead>Guest Name</TableHead>
                    <TableHead>Room Type</TableHead>
                    <TableHead>Room Number</TableHead>
                    <TableHead>Nights</TableHead>
                    <TableHead>Dates</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>{booking.id}</TableCell>
                      <TableCell>{booking.guest}</TableCell>
                      <TableCell className='font-light text-black'>{booking.type}</TableCell>
                      <TableCell>{booking.room}</TableCell>
                      <TableCell>{booking.nights}</TableCell>
                      <TableCell>{booking.dates}</TableCell>
                      <TableCell>
                        <Badge className={booking.status === "Checked In" ? "bg-green-200 text-black font-light rounded-md :hover:bg-green-200 cursor-pointer" : "bg-[#e7f68f] text-black font-light rounded-md cursor-pointer"}>
                          {booking.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
      </div>
  )
}