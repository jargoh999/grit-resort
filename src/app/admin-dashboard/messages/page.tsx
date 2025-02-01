'use client'

import * as React from "react"
import { format } from "date-fns"
import { Bell, MoreHorizontal, Phone, Search, Settings, Star, Video } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Card } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Separator } from "~/components/ui/separator"
import { AdminSidebar } from "~/components/sidebar"

interface Message {
    id: string
    content: string
    timestamp: Date
    sender?: User
    unread?: boolean
}

interface User {
    id: string
    name: string
    avatar: string
    role?: string
    online?: boolean
    lastSeen?: Date
}

interface Conversation {
    id: string
    messages: Message[]
    participant?: User
    unreadCount?: number
}

const users: User[] = [
    {
        id: "1",
        name: "Alice Johnson",
        avatar: "https://res.cloudinary.com/dbjtncfmz/image/upload/v1738072526/1a770a6ccd6843a2a7ea12e30a30c4a3_k5lmqt.jpg",
        role: "Guest",
        online: true
    },
    {
        id: "2",
        name: "Michael Brown",
        avatar: "https://res.cloudinary.com/dbjtncfmz/image/upload/v1732361825/tocuuotrjszpcgfhrlvx.jpg",
        online: true
    },
    {
        id: "3",
        name: "Emily Davis",
        avatar: "/placeholder.svg",
        lastSeen: new Date()
    },
    {
        id: "4",
        name: "John Doe",
        avatar: "/placeholder.svg",
        online: false
    }
]

const conversations: Conversation[] = [
    {
        id: "1",
        participant: users[0],
        messages: [
            {
                id: "1",
                content: "Can I request a late check-out for Room 305?",
                timestamp: new Date("2024-01-27T10:23:00"),
                sender: users[0]
            },
            {
                id: "2",
                content: "Hi Alice, we can accommodate a late check-out for this time but would you like to extend your stay instead?",
                timestamp: new Date("2024-01-27T10:25:00"),
                sender: { id: "admin", name: "Jaylon Dorwart", avatar: "/placeholder.svg" }
            },
            {
                id: "3",
                content: "I was hoping to stay until 2 PM is that possible?",
                timestamp: new Date("2024-01-27T10:26:00"),
                sender: users[0]
            }
        ],
        unreadCount: 1
    },
    {
        id: "2",
        participant: users[1],
        messages: [
            {
                id: "4",
                content: "I'm still waiting in my room for the...",
                timestamp: new Date("2024-01-27T09:30:00"),
                sender: users[1]
            }
        ],
        unreadCount: 2
    }
]

export default function MessagesPage() {
    const [selectedConversation, setSelectedConversation] = React.useState<Conversation>(conversations[0])

    return (
        <div className="min-h-screen bg-background flex">
            <AdminSidebar />
            <div className="h-screen flex flex-1 ml-64">
        <div className="h-screen flex">
            {/* Left Sidebar - Conversations List */}
            <div className="w-80 border-r flex flex-col">
                <div className="p-4 border-b">
                    <h1 className="text-xl font-semibold mb-4">Messages</h1>
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search users, chats, etc" className="pl-9" />
                    </div>
                </div>
                <ScrollArea className="flex-1">
                    {conversations.map((conversation) => (
                        <button
                            key={conversation.id}
                            onClick={() => setSelectedConversation(conversation)}
                            className={`w-full p-4 flex items-start gap-3 hover:bg-accent ${selectedConversation.id === conversation.id ? "bg-accent" : ""
                                }`}
                        >
                            <div className="relative">
                                <Avatar>
                                    <AvatarImage src={conversation?.participant?.avatar} />
                                    <AvatarFallback>{conversation?.participant?.name[0]}</AvatarFallback>
                                </Avatar>
                                {conversation?.participant?.online && (
                                    <span className="absolute bottom-0 right-0 w-3 h-3 border-2 border-background rounded-full bg-[#84D187]" />
                                )}
                            </div>
                            <div className="flex-1 text-left">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium">{conversation?.participant?.name}</span>
                                    <span className="text-xs text-muted-foreground">
                                        {format(conversation.messages[conversation.messages.length - 1]?.timestamp, "HH:mm")}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground truncate">
                                    {conversation.messages[conversation.messages.length - 1].content.substring(0, 10)+'...'}
                                </p>
                            </div>
                            {conversation.unreadCount && (
                                <Badge variant="secondary" className="bg-[#84D187] text-white">
                                    {conversation.unreadCount}
                                </Badge>
                            )}
                        </button>
                    ))}
                </ScrollArea>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={selectedConversation?.participant?.avatar} />
                            <AvatarFallback>{selectedConversation?.participant?.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="font-medium">{selectedConversation?.participant?.name}</h2>
                            <p className="text-sm text-muted-foreground">
                                {selectedConversation?.participant?.online ? "Online" : "Offline"}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                            <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Video className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Star className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                        {selectedConversation.messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex items-start gap-3 ${message?.sender?.id === "admin" ? "flex-row-reverse" : ""
                                    }`}
                            >
                                <Avatar>
                                    <AvatarImage src={message?.sender?.avatar} />
                                    <AvatarFallback>{message?.sender?.name[0]}</AvatarFallback>
                                </Avatar>
                                <div
                                    className={`rounded-lg p-3 max-w-[70%] ${message?.sender?.id === "admin"
                                            ? "bg-[#84D187] text-white"
                                            : "bg-accent"
                                        }`}
                                >
                                    <p>{message.content}</p>
                                    <p className="text-xs mt-1 opacity-70">
                                        {format(message.timestamp, "HH:mm")}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
                <div className="p-4 border-t">
                    <div className="flex gap-2">
                        <Input placeholder="Type a message..." className="flex-1" />
                        <Button className="bg-[#84D187] text-white hover:bg-[#76bc79]">Send</Button>
                    </div>
                </div>
            </div>

            {/* Right Sidebar - Profile */}
            <div className="w-80 border-l">
                <div className="p-4 flex flex-col items-center text-center border-b">
                    <div className="relative mb-3">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={selectedConversation?.participant?.avatar} />
                            <AvatarFallback>{selectedConversation?.participant?.name[0]}</AvatarFallback>
                        </Avatar>
                        {selectedConversation?.participant?.online && (
                            <span className="absolute bottom-0 right-0 w-4 h-4 border-2 border-background rounded-full bg-[#84D187]" />
                        )}
                    </div>
                    <h2 className="font-medium">{selectedConversation?.participant?.name}</h2>
                    <Badge variant="secondary" className="mt-1">
                        {selectedConversation?.participant?.role || "Guest"}
                    </Badge>
                    <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                            View All
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                            Popular
                        </Button>
                    </div>
                </div>
                <ScrollArea className="h-[calc(100vh-200px)] p-4">
                    <div className="space-y-4">
                        <Card className="p-4">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gfTIY7Tw7Rkn1aiBp25xXXSwWCdkg0.png"
                                alt="Room Preview"
                                className="w-full h-24 object-cover rounded-lg mb-2"
                            />
                            <h3 className="font-medium">Room 305</h3>
                            <p className="text-sm text-muted-foreground">Deluxe King Room</p>
                        </Card>
                        <Card className="p-4">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gfTIY7Tw7Rkn1aiBp25xXXSwWCdkg0.png"
                                alt="Room Service"
                                className="w-full h-24 object-cover rounded-lg mb-2"
                            />
                            <h3 className="font-medium">Room Service</h3>
                            <p className="text-sm text-muted-foreground">Breakfast Menu</p>
                        </Card>
                    </div>
                </ScrollArea>
            </div>
                </div>
            </div>
            </div>
    )
}