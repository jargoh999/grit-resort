import Link from 'next/link'
import * as React from 'react'
import { AdminSidebar } from '~/components/sidebar'
import { DashboardHeader } from '~/components/dashboard-header'
import {
    Calendar,
    Hotel,
    ClipboardList
} from 'lucide-react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "~/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "~/components/ui/table"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"

export default function ReservationsPage() {
    // Sample reservation data (you'll replace this with actual data fetching)
    const reservations = [
        {
            id: 'LG-800108',
            guestName: 'Angus Cooper',
            roomType: 'Deluxe Suite',
            checkIn: 'June 19, 2024',
            checkOut: 'June 22, 2024',
            status: 'Checked In'
        },
        {
            id: 'LG-800109',
            guestName: 'Catherine Lane',
            roomType: 'Standard Room',
            checkIn: 'June 19, 2024',
            checkOut: 'June 21, 2024',
            status: 'Confirmed'
        },
         {
            id: 'LG-800113',
            guestName: 'Angus Cooper',
            roomType: 'Deluxe Suite',
            checkIn: 'June 19, 2024',
            checkOut: 'June 22, 2024',
            status: 'Checked In'
        },
        {
            id: 'LG-800110',
            guestName: 'Catherine Lane',
            roomType: 'Standard Room',
            checkIn: 'June 19, 2024',
            checkOut: 'June 21, 2024',
            status: 'Confirmed'
        },
         {
            id: 'LG-800111',
            guestName: 'Angus Cooper',
            roomType: 'Deluxe Suite',
            checkIn: 'June 19, 2024',
            checkOut: 'June 22, 2024',
            status: 'Checked In'
        },
        {
            id: 'LG-800112',
            guestName: 'Catherine Lane',
            roomType: 'Standard Room',
            checkIn: 'June 19, 2024',
            checkOut: 'June 21, 2024',
            status: 'Confirmed'
        }
    ]

    return (
        <div className="flex min-h-screen w-full flex-col bg-background overflow-y-scroll scrollbar-hide">
            <AdminSidebar />

            {/* Main Content */}
            <div className="pl-64 min-h-screen bg-background">
                <DashboardHeader title="Reservations" />

                <main className="p-6">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className='font-light text-2xl'>Reservation List</CardTitle>
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
                                    <Button className="bg-[#e7f68f] text-black font-light">
                                        <Hotel className="mr-2 w-4 h-4 font-light " /> New Reservation
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Reservation ID</TableHead>
                                        <TableHead>Guest Name</TableHead>
                                        <TableHead>Room Type</TableHead>
                                        <TableHead>Check-In</TableHead>
                                        <TableHead>Check-Out</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {reservations.map((reservation) => (
                                        <TableRow key={reservation.id}>
                                            <TableCell>{reservation.id}</TableCell>
                                            <TableCell>{reservation.guestName}</TableCell>
                                            <TableCell>{reservation.roomType}</TableCell>
                                            <TableCell>{reservation.checkIn}</TableCell>
                                            <TableCell>{reservation.checkOut}</TableCell>
                                            <TableCell>
                                                <Badge
                                                    className={
                                                        reservation.status === "Checked In"
                                                            ? "bg-green-200 text-black font-light rounded-md"
                                                            : "bg-yellow-200 text-black font-light rounded-md"
                                                    }
                                                >
                                                    {reservation.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Link href={`/admin-dashboard/reservations/${reservation.id}`}>
                                                <Button size="sm" variant="outline">
                                                    <ClipboardList className="mr-2 w-4 h-4" /> Details
                                                    </Button>
                                                </Link>
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