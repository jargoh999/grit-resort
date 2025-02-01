"use client"
import * as React from 'react'
import { Input } from "~/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar"

interface DashboardHeaderProps {
    title: string
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
    return (
        <header className="sticky top-0 z-20 flex h-16 items-center border-b bg-background px-6">
            <div className="flex flex-1 items-center space-x-4">
                <h1 className="text-xl font-semilight">{title}</h1>
            </div>
            <div className="flex items-center space-x-4">
                <Input
                    placeholder="Search room, guest, book id..."
                    className="w-64"
                />
                <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}