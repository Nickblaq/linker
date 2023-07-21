import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, buttonVariants } from "@/components/ui/button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Container from "./container";
export default async function Home() {

  return (
    <>
   <div className="container min-h-">
    <div className="flex flex-col h-screen justify-center max-w-2xl ">
    <div className="border w-full h-full my-16 rounded-2xl md:h-3/4 border-gray-400  px-4">
    <div className="flex flex-col justify-center items-center h-[80%] gap-y-8">
      <Input placeholder="email" className="rounded-xl py-8" />
      <Input placeholder="email" className="rounded-xl py-8" />
  
    <Button variant="outline" className="w-full rounded-xl py-8 text-base">Sign up</Button>
    </div>
    </div>
    </div>
   </div>
    </>
  )
}
