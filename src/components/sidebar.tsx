"use client"
import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard,
    ClipboardList,
    Hotel,
    MessageSquare,
    Package,
    Home,
    Calendar,
    CircleDollarSign,
    Star,
    Settings
} from 'lucide-react'
import { Button } from "~/components/ui/button"

export function AdminSidebar() {
    const pathname = usePathname()

    const sidebarItems = [
        {
            icon: LayoutDashboard,
            title: 'Dashboard',
            href: '/admin-dashboard',
            isActive: pathname === '/admin-dashboard'
        },
        {
            icon: ClipboardList,
            title: 'Reservation',
            href: '/admin-dashboard/reservations',
            isActive: pathname === '/admin-dashboard/reservations'
        },
        {
            icon: Hotel,
            title: 'Rooms',
            href: '/admin-dashboard/room',
            isActive: pathname === '/admin-dashboard/room'
        },
        {
            icon: MessageSquare,
            title: 'Messages',
            href: '/admin-dashboard/messages',
            isActive: pathname === '/admin-dashboard/messages'
        },
        {
            icon: Package,
            title: 'Housekeeping',
            href: '/admin-dashboard/housekeeping',
            isActive: pathname === '/admin-dashboard/housekeeping'
        },
        {
            icon: Home,
            title: 'Inventory',
            href: '#',
            isActive: false
        },
        {
            icon: Calendar,
            title: 'Calendar',
            href: '#',
            isActive: false
        },
        {
            icon: CircleDollarSign,
            title: 'Financials',
            href: '#',
            isActive: false
        },
        {
            icon: Star,
            title: 'Reviews',
            href: '#',
            isActive: false
        },
        {
            icon: Settings,
            title: 'Settings',
            href: '#',
            isActive: false
        }
    ]

    return (
        <aside className="fixed left-0 top-0 z-30 h-screen w-64 border-r bg-background">
            <div className="flex h-16 items-center border-b px-6 ">
                <Image src="https://res.cloudinary.com/dbjtncfmz/image/upload/v1738233499/Grit_Resort_2__processed_patzao.png"
                    alt="Logo"
                    width={130}
                    height={30}
                    className="mt-3"
                />
            </div>
            <div className="space-y-4 py-4">
                <div className="px-3 py-3">
                    <div className="space-y-4">
                        {sidebarItems.map((item) => (
                            <Link key={item.title} href={item.href}>
                                <Button
                                    variant={item.isActive ? 'secondary' : 'ghost'}
                                    className="w-full justify-start m-2 text-md"
                                    size="lg"
                                >
                                    <item.icon className="mr-2 h-4 w-4" />
                                    {item.title}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}