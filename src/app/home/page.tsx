import * as React from "react"
import { Heart, Search, Star, Bed, Bath, ArrowRight, AlignJustify } from 'lucide-react'
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "~/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import Image from "next/image"

interface Property {
    id: string
    title: string
    image: string
    rating?: number
    beds: number
    baths: number
    price: string
}

const latestProperties: Property[] = [
    {
        id: "1",
        title: "Modern Apartment",
        image: "",
        beds: 2,
        baths: 1,
        price: "$1,200/mo"
    },
    {
        id: "2",
        title: "Cozy Studio",
        image: "",
        beds: 1,
        baths: 1,
        price: "$800/mo"
    },
    {
        id: "3",
        title: "Family Home",
        image: "",
        beds: 3,
        baths: 2,
        price: "$2,000/mo"
    },
    {
        id: "4",
        title: "Luxury Condo",
        image: "",
        beds: 2,
        baths: 2,
        price: "$1,800/mo"
    },
]

const topRatedProperties: Property[] = latestProperties.map(prop => ({
    ...prop,
    rating: 5
}))

const featuredProperties: Property[] = Array(6).fill(null).map((_, i) => ({
    id: `featured-${i}`,
    title: "Featured Property",
    image: "",
    beds: 2,
    baths: 2,
    price: "$1,500/mo"
}))

const guides = [
    {
        title: "Choose the right property",
        image: "",
    },
    {
        title: "Best environment for rental",
        image: "",
    },
    {
        title: "Steps toward apartment",
        image: "",
    },
]

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b">
                <div className="container mx-auto px-4 py-4">

                    <div className="flex items-center justify-between h-4">
                        <Image src="https://res.cloudinary.com/dbjtncfmz/image/upload/v1738233499/Grit_Resort_2__processed_patzao.png"
                            alt="Logo"
                            width={120}
                            height={30}
                            className="mt-3"
                        />
                        <Button variant="ghost" className="text-black font-light">Find a property</Button>
                        <Button variant="ghost" className="text-black font-light">Share Stories</Button>
                        <Button variant="ghost" className="text-black font-light">Rental guides</Button>
                        <Button variant="ghost" className="text-black font-light">Download Mobile App</Button>
                        <Button variant="default" className="font-light text-black bg-gray-200 hover:bg-gray-200 hover:text-black rounded-full">Become a host</Button>
                        <Button variant="default" className="font-light text-black bg-gray-200 hover:bg-gray-200 hover:text-black rounded-full ">
                            <AlignJustify className="h-7 w-7" />
                            <Avatar className="h-7 w-7">
                                <AvatarImage src="/placeholder.svg" />
                                <AvatarFallback></AvatarFallback>
                            </Avatar>
                        </Button>

                    </div>
                </div>
            </header>

            {/* Hero Search */}
            <section className="bg-muted  h-[500px]"
                style={{
                    backgroundImage: `url('https://res.cloudinary.com/dbjtncfmz/image/upload/v1737979396/a_nice_hotel_room_v1hgij.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                 
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex gap-4 p-4 bg-sticky rounded-lg shadow-lg">
                            <Select defaultValue="all">
                                <SelectTrigger className="w-[180px] bg-white text-gray-500 font-light">
                                    <SelectValue placeholder="Property Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Properties</SelectItem>
                                    <SelectItem value="house">Houses</SelectItem>
                                    <SelectItem value="apartment">Apartments</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input placeholder="Search properties..." className="flex-1 bg-sticky font-light" />
                            <Button size="icon" className="bg-sticky border-white border-2 hover:bg-[#c89361]">
                                <Search className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Properties */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6">Latest on the Property Listing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {latestProperties.map((property) => (
                            <Card key={property.id} className="group">
                                <CardHeader className="p-0">
                                    <div className="relative aspect-square">
                                        <img
                                            src={property.image || "/placeholder.svg"}
                                            alt={property.title}
                                            className="object-cover w-full h-full rounded-t-lg"
                                        />
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <CardTitle className="text-lg mb-2">{property.title}</CardTitle>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Bed className="h-4 w-4" />
                                            <span>{property.beds}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Bath className="h-4 w-4" />
                                            <span>{property.baths}</span>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <p className="font-bold">{property.price}</p>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nearby Properties */}
            <section className="py-12 bg-muted">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Nearby Listed Properties</h2>
                        <Button variant="link">View All Properties</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {latestProperties.map((property) => (
                            <Card key={property.id} className="group">
                                <CardHeader className="p-0">
                                    <div className="relative aspect-square">
                                        <img
                                            src={property.image || "/placeholder.svg"}
                                            alt={property.title}
                                            className="object-cover w-full h-full rounded-t-lg"
                                        />
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <CardTitle className="text-lg mb-2">{property.title}</CardTitle>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Bed className="h-4 w-4" />
                                            <span>{property.beds}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Bath className="h-4 w-4" />
                                            <span>{property.baths}</span>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <p className="font-bold">{property.price}</p>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Rated Properties */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6">Top Rated Properties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {topRatedProperties.map((property) => (
                            <Card key={property.id} className="group">
                                <CardHeader className="p-0">
                                    <div className="relative aspect-square">
                                        <img
                                            src={property.image || "/placeholder.svg"}
                                            alt={property.title}
                                            className="object-cover w-full h-full rounded-t-lg"
                                        />
                                        <div className="absolute top-2 left-2 flex items-center gap-1 bg-background/80 rounded-full px-2 py-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-medium">{property.rating}</span>
                                        </div>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <CardTitle className="text-lg mb-2">{property.title}</CardTitle>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Bed className="h-4 w-4" />
                                            <span>{property.beds}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Bath className="h-4 w-4" />
                                            <span>{property.baths}</span>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <p className="font-bold">{property.price}</p>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Try Hosting */}
            <section className="py-12 bg-muted">
                <div className="container mx-auto px-4">
                    <div className="max-w-lg">
                        <h2 className="text-2xl font-bold mb-4">Try Hosting With Us</h2>
                        <p className="text-muted-foreground mb-6">
                            List your property and reach millions of potential tenants.
                        </p>
                        <Button>Learn More</Button>
                    </div>
                </div>
            </section>

            {/* Featured Properties */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6">Featured Properties on our Listing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProperties.map((property) => (
                            <Card key={property.id} className="group">
                                <CardHeader className="p-0">
                                    <div className="relative aspect-square">
                                        <img
                                            src={property.image || "/placeholder.svg"}
                                            alt={property.title}
                                            className="object-cover w-full h-full rounded-t-lg"
                                        />
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <CardTitle className="text-lg mb-2">{property.title}</CardTitle>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Bed className="h-4 w-4" />
                                            <span>{property.beds}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Bath className="h-4 w-4" />
                                            <span>{property.baths}</span>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <p className="font-bold">{property.price}</p>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Property Guides */}
            <section className="py-12 bg-muted">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6">Property Rental Guides & Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {guides.map((guide, index) => (
                            <Card key={index} className="group">
                                <CardHeader className="p-0">
                                    <div className="relative aspect-video">
                                        <img
                                            src={guide.image || "/placeholder.svg"}
                                            alt={guide.title}
                                            className="object-cover w-full h-full rounded-t-lg"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button variant="outline">View All Guides</Button>
                    </div>
                </div>
            </section>

            {/* Mobile App */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-4">Download Our Mobile App</h2>
                            <p className="text-muted-foreground mb-6">
                                Get the full experience on your mobile device.
                            </p>
                            <div className="flex gap-4">
                                <Button variant="outline">
                                    App Store
                                </Button>
                                <Button variant="outline">
                                    Google Play
                                </Button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="aspect-square bg-muted rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-12 bg-muted">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 max-w-xl mx-auto">
                        <Input placeholder="Enter your email" type="email" />
                        <Button>
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold mb-4">LOGO</h3>
                            <p className="text-sm text-muted-foreground">
                                Find your perfect rental property with us.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>About Us</li>
                                <li>Contact</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Help Center</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>FAQs</li>
                                <li>Support</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Contact Info</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>info@example.com</li>
                                <li>+1 234 567 890</li>
                                <li>123 Street, City, Country</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                        <p>© 2024 All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}