'use client'

import * as React from "react"
import Image from "next/image"
import { BedDouble, Coffee, Search, Settings, ShowerHead, Square, Users, Wifi } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"
import { Separator } from "~/components/ui/separator"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "~/components/ui/tooltip"
import { AdminSidebar } from "~/components/sidebar"

interface RoomType {
    id: string
    type: string
    size: number
    bedType: string
    guests: number
    description: string
    availability: string
    totalRooms: number
    availableRooms: number
    price: number
    status: 'available' | 'occupied'
    image: string
}

const rooms: RoomType[]  = [
    {
        id: "1",
        type: "Standard",
        size: 25,
        bedType: "Queen Bed",
        guests: 2,
        description: "Comfortable, affordable stay for solo travelers or couples. Queen bed, en-suite bathroom, work desk, essential amenities.",
        availability: "22/30 Rooms",
        totalRooms: 30,
        availableRooms: 22,
        price: 100,
        status: "occupied",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pDVt1ACuQJsCFradKxNO1WeK6P9G3P.png"
    },
    {
        id: "2",
        type: "Deluxe",
        size: 35,
        bedType: "King Bed",
        guests: 2,
        description: "More space and luxury. King bed, separate seating, larger desk, 55-inch TV. En-suite bathroom with bathtub and shower.",
        availability: "18/25 Rooms",
        totalRooms: 25,
        availableRooms: 18,
        price: 150,
        status: "available",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pDVt1ACuQJsCFradKxNO1WeK6P9G3P.png"
    },
    {
        id: "3",
        type: "Suite",
        size: 50,
        bedType: "King Bed",
        guests: 3,
        description: "Spacious and private with separate living and sleeping areas. King bed, furnished living room, kitchenette - ideal for extended stays.",
        availability: "8/10 Rooms",
        totalRooms: 10,
        availableRooms: 8,
        price: 250,
        status: "available",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pDVt1ACuQJsCFradKxNO1WeK6P9G3P.png"
    },
    {
        id: "4",
        type: "Family",
        size: 45,
        bedType: "2 Queen Beds",
        guests: 4,
        description: "Designed for comfort and practicality. Two queen beds, bunk beds accommodate up to 4 guests. En-suite bathroom, seating area, 55-inch TV.",
        availability: "12/15 Rooms",
        totalRooms: 15,
        availableRooms: 12,
        price: 200,
        status: "occupied",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pDVt1ACuQJsCFradKxNO1WeK6P9G3P.png"
    },
    {
        id: "5",
        type: "Single",
        size: 20,
        bedType: "Single Bed",
        guests: 1,
        description: "Features a single bed, en-suite bathroom, work desk, and essential amenities for a practical and functional stay.",
        availability: "17/20 Rooms",
        totalRooms: 20,
        availableRooms: 17,
        price: 70,
        status: "available",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pDVt1ACuQJsCFradKxNO1WeK6P9G3P.png"
    },
    {
        id: "6",
        type: "Single",
        size: 20,
        bedType: "Single Bed",
        guests: 1,
        description: "Features a single bed, en-suite bathroom, work desk, and essential amenities for a practical and functional stay.",
        availability: "17/20 Rooms",
        totalRooms: 20,
        availableRooms: 17,
        price: 70,
        status: "available",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pDVt1ACuQJsCFradKxNO1WeK6P9G3P.png"
    }
]

const features = [
    { icon: Users, label: "Private balcony (where applicable)" },
    { icon: Square, label: "Spacious layout with a modern design" },
    { icon: BedDouble, label: "Large windows offering city or garden views" },
    { icon: ShowerHead, label: "Work desk with ergonomic chair" }
]

const facilities = [
    { icon: Wifi, label: "High-speed Wi-Fi" },
    { icon: Coffee, label: "Coffee/tea maker" },
    { icon: ShowerHead, label: "Air conditioning" },
    { icon: Square, label: "In-room safe" },
    { icon: Coffee, label: "Mini-fridge" },
    { icon: ShowerHead, label: "Flat-screen TV" }
]

const amenities = [
    "Complimentary bottled water",
    "Coffee and tea making facilities",
    "Premium bedding and linens",
    "Ensuite bathroom with shower and bathtub",
    "Luxury toiletries",
    "Hairdryer",
    "Bathrobe and slippers",
    "24-hour room service"
]

export default function RoomsPage() {
    const [selectedRoom, setSelectedRoom] = React.useState<RoomType>(rooms[1]) // Default to Deluxe
    const [activeImage, setActiveImage] = React.useState(0)

    return (
        <div className="min-h-screen bg-background flex">
            <AdminSidebar />
            <main className="flex-1 ml-64 ">
            <div className="border-b">
                <div className="container flex h-16 items-center justify-between">
                    <h1 className="text-xl font-light ml-1">Rooms</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <Settings className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder.svg" alt="Jaylon Dorwart" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="mr-3">
                                <p className="text-sm font-medium">Jaylon Dorwart</p>
                                <p className="text-xs text-muted-foreground">Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-6">
                <div className="grid gap-6 md:grid-cols-[1fr_400px]">
                    {/* Room List */}
                    <div className="space-y-6">
                        <div className="ml-1 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Search room type, number, etc" className="pl-9" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">Sort by:</span>
                                <Select defaultValue="popular">
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue placeholder="Sort by" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="popular">Popular</SelectItem>
                                        <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                        <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue placeholder="All Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Type</SelectItem>
                                        <SelectItem value="standard">Standard</SelectItem>
                                        <SelectItem value="deluxe">Deluxe</SelectItem>
                                        <SelectItem value="suite">Suite</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Button className="bg-[#E7F8E9] text-[#84D187] hover:bg-[#d5ecd7] hover:text-[#6bb36e]">
                                    Add Room
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {rooms.map((room) => (
                                <Card
                                    key={room.id}
                                    className="cursor-pointer hover:bg-accent"
                                    onClick={() => setSelectedRoom(room)}
                                >
                                    <CardContent className="flex gap-4 p-4">
                                        <div className="relative h-32 w-48 overflow-hidden rounded-lg">
                                            <Image
                                                src={room.image || "/placeholder.svg"}
                                                alt={room.type}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col">
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <h3 className="font-semibold">{room.type}</h3>
                                                    <Badge variant={room.status === 'available' ? 'secondary' : 'outline'}>
                                                        {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Square className="h-4 w-4" />
                                                    {room.size} m²
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <BedDouble className="h-4 w-4" />
                                                    {room.bedType}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Users className="h-4 w-4" />
                                                    {room.guests} guests
                                                </div>
                                            </div>
                                            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                                                {room.description}
                                            </p>
                                            <div className="mt-4 flex items-center justify-between">
                                                <p className="text-sm text-muted-foreground">
                                                    Availability: {room.availability}
                                                </p>
                                                <p className="font-semibold">
                                                    ${room.price}
                                                    <span className="text-sm text-muted-foreground">/night</span>
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Room Detail */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Room Detail</h2>
                            <Button variant="outline" size="sm">
                                Edit
                            </Button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">{selectedRoom.type} Room</h3>
                                    <Badge variant={selectedRoom.status === 'available' ? 'secondary' : 'outline'}>
                                        {selectedRoom.status.charAt(0).toUpperCase() + selectedRoom.status.slice(1)}
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Occupied: {selectedRoom.totalRooms - selectedRoom.availableRooms}/{selectedRoom.totalRooms} Rooms
                                </p>
                            </div>

                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                                <Image
                                    src={selectedRoom.image || "/placeholder.svg"}
                                    alt={selectedRoom.type}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex gap-2 overflow-auto pb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Button
                                        key={i}
                                        className={`relative h-16 w-24 overflow-hidden rounded-lg border-2 ${activeImage === i ? 'border-primary' : 'border-transparent'
                                            }`}
                                        onClick={() => setActiveImage(i)}
                                    >
                                        <Image
                                            src={selectedRoom.image || "/placeholder.svg"}
                                            alt={`Room view ${i + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </Button>
                                ))}
                            </div>

                            <div className="flex gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                    <Square className="h-4 w-4" />
                                    {selectedRoom.size} m²
                                </div>
                                <div className="flex items-center gap-1">
                                    <BedDouble className="h-4 w-4" />
                                    {selectedRoom.bedType}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    {selectedRoom.guests} guests
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground">
                                {selectedRoom.description}
                            </p>

                            <div className="space-y-4">
                                <h4 className="font-medium">Features</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm">
                                            <feature.icon className="h-4 w-4 text-primary" />
                                            <span>{feature.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-4">
                                <h4 className="font-medium">Facilities</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {facilities.map((facility, i) => (
                                        <TooltipProvider key={i}>
                                            <Tooltip>
                                                <TooltipTrigger className="flex items-center gap-2 text-sm">
                                                    <facility.icon className="h-4 w-4 text-muted-foreground" />
                                                    <span>{facility.label}</span>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{facility.label}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ))}
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-4">
                                <h4 className="font-medium">Amenities</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {amenities.map((amenity, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm">
                                            <svg
                                                className="h-4 w-4 text-primary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span>{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                </div>
            </main>    
        </div>
    )
}