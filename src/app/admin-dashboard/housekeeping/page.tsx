'use client'

import * as React from "react"
import { ChevronLeft, ChevronRight, Settings, MoreHorizontal, CheckCircle2, AlertCircle, Clock } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
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
import { AdminSidebar } from "~/components/sidebar"

interface Room {
  id: string
  number: string
  type: 'Standard' | 'Deluxe' | 'Suite'
  status: 'ready' | 'cleaning-in-progress' | 'needs-cleaning' | 'needs-inspection'
  priority: 'high' | 'medium' | 'low'
  floor: string
  supervisionStatus: 'checked-in' | 'checked-out' | 'reserved'
  notes: string
}

const rooms: Room[] = [
  {
    id: "101",
    number: "101",
    type: "Deluxe",
    status: "cleaning-in-progress",
    priority: "high",
    floor: "1st",
    supervisionStatus: "checked-in",
    notes: "Guest requested extra towels and pillows."
  },
  {
    id: "102",
    number: "102",
    type: "Standard",
    status: "ready",
    priority: "low",
    floor: "1st",
    supervisionStatus: "reserved",
    notes: "Ensure room is stocked with amenities."
  },
  {
    id: "103",
    number: "103",
    type: "Suite",
    status: "needs-cleaning",
    priority: "high",
    floor: "2nd",
    supervisionStatus: "checked-out",
    notes: "Deep clean due to extended stay."
    },
    {
        id: "104",
        number: "104",
        type: "Suite",
        status: "needs-cleaning",
        priority: "high",
        floor: "2nd",
        supervisionStatus: "checked-out",
        notes: "Deep clean due to extended stay."
    },
    {
        id: "105",
        number: "105",
        type: "Suite",
        status: "needs-cleaning",
        priority: "medium",
        floor: "2nd",
        supervisionStatus: "checked-out",
        notes: "Deep clean due to extended stay."
    },

    {
        id: "109",
        number: "109",
        type: "Suite",
        status: "needs-cleaning",
        priority: "high",
        floor: "29th",
        supervisionStatus: "checked-out",
        notes: "Deep clean due to extended stay."
    }

  // Add more rooms as needed...
]

export default function HousekeepingPage() {
  const [selectedRooms, setSelectedRooms] = React.useState<string[]>([])
  const [currentPage, setCurrentPage] = React.useState(1)

  const getStatusBadge = (status: Room['status']) => {
    switch (status) {
      case 'ready':
        return <Badge className="bg-[#E8F5D3] text-[#84D187] hover:bg-[#E8F5D3]/80">Ready</Badge>
      case 'cleaning-in-progress':
        return <Badge variant="outline" className="border-yellow-500 text-yellow-500">Cleaning in Progress</Badge>
      case 'needs-cleaning':
        return <Badge variant="outline" className="border-red-500 text-red-500">Needs Cleaning</Badge>
      case 'needs-inspection':
        return <Badge variant="outline" className="border-orange-500 text-orange-500">Needs Inspection</Badge>
    }
  }

  const getPriorityBadge = (priority: Room['priority']) => {
    switch (priority) {
      case 'high':
        return <Badge variant="outline" className="border-red-500 text-red-500">High</Badge>
      case 'medium':
        return <Badge variant="outline" className="border-yellow-500 text-yellow-500">Medium</Badge>
      case 'low':
        return <Badge variant="outline" className="border-green-500 text-green-500">Low</Badge>
    }
  }

    return (

    <div className="min-h-screen bg-background flex">
      <AdminSidebar />
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex ml-64">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-light tracking-tight">Housekeeping</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Avatar>
                <AvatarImage src="https://res.cloudinary.com/dbjtncfmz/image/upload/v1738072526/1a770a6ccd6843a2a7ea12e30a30c4a3_k5lmqt.jpg" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="ml-2">
            <p className="text-sm font-medium">Jaylon Dorwart</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Select defaultValue="all-rooms">
          <SelectTrigger className="w-[130px] bg-[#E8F5D3] text-[#84D187] border-0">
            <SelectValue  className="placeholder:text-black"placeholder="All Rooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-rooms">All Rooms</SelectItem>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="deluxe">Deluxe</SelectItem>
            <SelectItem value="suite">Suite</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all-status">
          <SelectTrigger className="w-[130px] bg-[#E8F5D3] text-[#84D187] border-0">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-status">All Status</SelectItem>
            <SelectItem value="ready">Ready</SelectItem>
            <SelectItem value="cleaning">Cleaning</SelectItem>
            <SelectItem value="needs-cleaning">Needs Cleaning</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all-priority">
          <SelectTrigger className="w-[130px] bg-[#E8F5D3] text-[#84D187] border-0">
            <SelectValue placeholder="All Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-priority">All Priority</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedRooms.length === rooms.length}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedRooms(rooms.map(room => room.id))
                    } else {
                      setSelectedRooms([])
                    }
                  }}
                />
              </TableHead>
              <TableHead>Room Number</TableHead>
              <TableHead>Room Type</TableHead>
              <TableHead>Housekeeping Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Floor</TableHead>
              <TableHead>Supervision Notes</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedRooms.includes(room.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedRooms([...selectedRooms, room.id])
                      } else {
                        setSelectedRooms(selectedRooms.filter(id => id !== room.id))
                      }
                    }}
                  />
                </TableCell>
                <TableCell>Room {room.number}</TableCell>
                <TableCell>{room.type}</TableCell>
                <TableCell>{getStatusBadge(room.status)}</TableCell>
                <TableCell>{getPriorityBadge(room.priority)}</TableCell>
                <TableCell>{room.floor}</TableCell>
                <TableCell>{room.supervisionStatus}</TableCell>
                <TableCell className="max-w-[300px] truncate">{room.notes}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Update status</DropdownMenuItem>
                      <DropdownMenuItem>Assign staff</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing 1 to 10 of 100 entries
        </p>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {[1, 2, 3, 4, 5].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              className="text-black"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
                </div>
                </div>
    </div>
  )
}