import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"


export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen gap-4">
    <Button><Link href={"/login"}>Login</Link></Button>
    <Button><Link href={"/register"}>Register</Link></Button>
    </div>
  )
}
