'use client'

import * as React from "react"
import Image from "next/image"
import { format } from "date-fns"
import { ArrowLeft, BedDouble, Calendar, Edit, ExternalLink, MailIcon, MoreHorizontal, Phone, Square, Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Separator } from "~/components/ui/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"
import { useRouter } from 'next/navigation'

interface GuestProfile {
    id: string
    name: string
    email: string
    phone: string
    dateOfBirth: string
    gender: string
    nationality: string
    passportId: string
    loyaltyPoints: number
    loyaltyTier: string
    currentBooking: {
        id: string
        roomType: string
        roomNumber: string
        checkIn: Date
        checkOut: Date
        rate: number
        guests: number
        requests: string
        amenities: string[]
    }
    bookingHistory: Array<{
        id: string
        roomNumber: string
        checkIn: Date
        checkOut: Date
        guests: number
        status: string
    }>
}

const guestData: GuestProfile = {
    id: "LG-B00109",
    name: "Angus Copper",
    email: "angus.copper@example.com",
    phone: "+1 (555) 789-1234",
    dateOfBirth: "June 15, 1985",
    gender: "Male",
    nationality: "American",
    passportId: "A12345678",
    loyaltyPoints: 15000,
    loyaltyTier: "Platinum Member",
    currentBooking: {
        id: "LG-B00109",
        roomType: "Deluxe",
        roomNumber: "101",
        checkIn: new Date("2024-06-19T14:00:00"),
        checkOut: new Date("2024-06-22T12:00:00"),
        rate: 150,
        guests: 2,
        requests: "Guest requested extra pillows and towels. Ensure room service is available upon arrival.",
        amenities: ["Complimentary breakfast", "Free WiFi", "Access to gym and pool"]
    },
    bookingHistory: [
        {
            id: "LG-B00109",
            roomNumber: "101",
            checkIn: new Date("2024-06-19T14:00:00"),
            checkOut: new Date("2024-06-22T12:00:00"),
            guests: 2,
            status: "Deluxe"
        },
        {
            id: "LG-B00085",
            roomNumber: "205",
            checkIn: new Date("2024-03-25T14:00:00"),
            checkOut: new Date("2024-03-30T12:00:00"),
            guests: 1,
            status: "Suite"
        }
    ]
}

export default function GuestProfilePage() {
    const router = useRouter()
    return (
        <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
            {/* Header */}
            
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon"
                        onClick={() => router.push('/admin-dashboard/reservations')}
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <div>
                        <div className="flex items-center space-x-2">
                            <span className="text-muted-foreground">Reservation</span>
                            <span className="text-muted-foreground">/</span>
                            <span>Guest Profile</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="/placeholder.svg" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium">Jaylon Dorwart</p>
                        <p className="text-xs text-muted-foreground">Admin</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                
                {/* Profile Section */}
                <div className="space-y-4">
                    <Card>
                        <div className="flex items-center justify-between">
                         <CardHeader>
                        <h3 className="text-2xl font-light">Profile</h3>
                        </CardHeader>        
                        </div>
                     <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="/placeholder.svg" alt={guestData.name} />
                            <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-semibold">{guestData.name}</h3>
                            <p className="text-sm text-muted-foreground">2024-06-19 14:00</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{guestData.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MailIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{guestData.email}</span>
                        </div>
                            </div>
                        </CardContent>    
                   </Card>
                    <Card className="space-y-4">
                        <CardHeader className="text-sm font-semibold">Personal Information</CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-muted-foreground">Date of Birth</p>
                                <p>{guestData.dateOfBirth}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Gender</p>
                                <p>{guestData.gender}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Nationality</p>
                                <p>{guestData.nationality}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Passport</p>
                                <p>{guestData.passportId}</p>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">Loyalty Program</h3>
                        <Card>
                            <CardContent className="p-4">
                                <Badge className="bg-[#E8F5D3] text-[#84D187] mb-4">Platinum Member</Badge>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Points Balance</p>
                                        <p className="text-lg font-semibold">{guestData.loyaltyPoints} points</p>
                                    </div>
                                    <Badge variant="outline">Elite</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Booking Info Section */}
                <div className="space-y-6">
                    <div>
                        <Badge className="bg-[#E8F5D3] text-[#84D187] mb-2">Booking Confirmed</Badge>
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Booking ID: {guestData.currentBooking.id}</h2>
                            <p className="text-sm text-muted-foreground">{format(new Date(), "MMM d, yyyy, h:mm aa")}</p>
                        </div>
                    </div>

                    <Card>
                        <CardContent className="p-5 space-y-8">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Room Type</p>
                                    <p className="font-medium">{guestData.currentBooking.roomType}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Room Number</p>
                                    <p className="font-medium">{guestData.currentBooking.roomNumber}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Rate</p>
                                    <p className="font-medium">${guestData.currentBooking.rate}/day</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Stay Duration</p>
                                    <p className="font-medium">3 nights</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm">Check In</span>
                                    </div>
                                    <p className="text-sm">{format(guestData.currentBooking.checkIn, "MMM dd, yyyy")}</p>
                                    <p className="text-sm text-muted-foreground">2:00 PM</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm">Check Out</span>
                                    </div>
                                    <p className="text-sm">{format(guestData.currentBooking.checkOut, "MMM dd, yyyy")}</p>
                                    <p className="text-sm text-muted-foreground">12:00 PM</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm font-medium">Special Requests</p>
                                <p className="text-sm text-muted-foreground">{guestData.currentBooking.requests}</p>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm font-medium">Hotel Facilities</p>
                                <div className="flex flex-wrap gap-2">
                                    {guestData.currentBooking.amenities.map((amenity, index) => (
                                        <Badge key={index} variant="secondary">{amenity}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="flex space-x-2">
                                <Button variant="outline" className="flex-1">Edit</Button>
                                <Button variant="outline" className="flex-1 text-red-600 hover:text-red-600">Cancel Booking</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Room Info Section */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Room Info</h2>
                        <Button variant="link" className="text-[#84D187]">View Detail</Button>
                    </div>

                    <Card>
                        <CardContent className="p-0">
                            <div className="relative h-48 w-full">
                                <Image
                                    src="https://res.cloudinary.com/dbjtncfmz/image/upload/v1737979396/a_nice_hotel_room_v1hgij.jpg"
                                    alt="Room"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Square className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm">30 m²</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <BedDouble className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm">King Bed</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Users className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm">2 guests</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-2">Price Summary</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>Room rate (3x)</span>
                                            <span>$450.00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Extras</span>
                                            <span>$0.00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>VAT 10%</span>
                                            <span>$45.00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>City Tax</span>
                                            <span>$40.50</span>
                                        </div>
                                        <Separator />
                                        <div className="flex justify-between font-medium">
                                            <span>Total Price</span>
                                            <span>$535.50</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        Invoice sent to corporate account, payment confirmed by BDL Corporation
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Booking History */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Booking History</h2>
                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" className="text-xs">
                            19 - 24 June, 2024
                        </Button>
                    </div>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Booking ID</TableHead>
                            <TableHead>Room Type</TableHead>
                            <TableHead>Room Number</TableHead>
                            <TableHead>Check In</TableHead>
                            <TableHead>Check Out</TableHead>
                            <TableHead>Guests</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {guestData.bookingHistory.map((booking) => (
                            <TableRow key={booking.id}>
                                <TableCell>
                                    <div className="relative h-16 w-24">
                                        <Image
                                            src="https://res.cloudinary.com/dbjtncfmz/image/upload/v1737979396/a_nice_hotel_room_v1hgij.jpg"
                                            alt="Room"
                                            fill
                                            className="object-cover rounded"
                                        />
                                    </div>
                                </TableCell>
                                <TableCell>{booking.id}</TableCell>
                                <TableCell>
                                    <Badge variant="outline">{booking.status}</Badge>
                                </TableCell>
                                <TableCell>Room {booking.roomNumber}</TableCell>
                                <TableCell>
                                    <div className="space-y-1">
                                        <p className="text-sm">{format(booking.checkIn, "MMM dd, yyyy")}</p>
                                        <p className="text-xs text-muted-foreground">2:00 PM</p>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="space-y-1">
                                        <p className="text-sm">{format(booking.checkOut, "MMM dd, yyyy")}</p>
                                        <p className="text-xs text-muted-foreground">12:00 PM</p>
                                    </div>
                                </TableCell>
                                <TableCell>{booking.guests} guests</TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Footer */}
            <footer className="border-t pt-6">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                        <span>Copyright © 2024 Lodgify</span>
                        <span>Privacy Policy</span>
                        <span>Terms and Conditions</span>
                        <span>Contact</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon">
                            <ExternalLink className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </footer>
        </div>
    )
}