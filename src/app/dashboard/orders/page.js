"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { databases } from '@/appwrite/appwrite'


function page() {
    const [data, setData] = useState(null)
    useEffect(() => {
        (async () => {
            const promise = await databases.listDocuments(
                process.env.NEXT_PUBLIC_DATABASE_ID,
                process.env.NEXT_PUBLIC_ORDER_COLLECTION_ID,
            )
            console.log(promise)
            setData(promise.documents)
        })()
    }, [])
    return (
        <div>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <h2 className='text-xl font-bold'>Orders</h2>
            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                {data && data.map((seg) => (
                    <>
                    {seg.orderStatus === "pending"? 
                     <div className="aspect-square rounded-xl bg-muted/50">
                     <Card>
                         <CardHeader>
                             <CardTitle>Order {seg.$createdAt.split("T")[0]}</CardTitle>
                             <CardDescription>Card Description</CardDescription>
                         </CardHeader>
                         <CardContent>
                            <Badge className={"bg-red-700"}>Pending</Badge>
                         </CardContent>
                         <CardFooter className="flex gap-2">
                             <Dialog>
                                 <DialogTrigger><Button className="text-xs bg-sky-600">View Info</Button></DialogTrigger>
                                 <DialogContent>
                                     <DialogHeader>
                                         <DialogTitle>Order Information</DialogTitle>
                                         <DialogDescription>
                                             This action cannot be undone. This will permanently delete your account
                                             and remove your data from our servers.
                                         </DialogDescription>
                                     </DialogHeader>
                                 </DialogContent>
                             </Dialog>
                             <Dialog>
                                
                                 <DialogTrigger><Button className="text-xs bg-green-500">Accept</Button></DialogTrigger>
                                 <DialogContent>
                                     <DialogHeader>
                                         <DialogTitle>Order Information</DialogTitle>
                                         <DialogDescription>
                                             This action cannot be undone. This will permanently delete your account
                                             and remove your data from our servers.
                                         </DialogDescription>
                                         <DialogDescription>
                                             <Button className="gap-3">Accept</Button>
                                         </DialogDescription>
                                     </DialogHeader>
                                 </DialogContent>
                             </Dialog>
                         </CardFooter>
                     </Card>
                 </div>: ""}</>
                ))}
                   
            </div>
        </div></div>
    )
}

export default page