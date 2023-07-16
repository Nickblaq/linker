import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, buttonVariants } from "@/components/ui/button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export default async function Home() {

  return (
    <>
      <section className="h-screen container text-sm font-medium">
      <section className="  grid items-start gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-8">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      

     
      <div className="flex flex-1 mt-10 flex-col justify-center gap-8">
      <Input />
      <Input />

      <div>
      <p className="text-sm font-medium text-center pb-4">OR</p>
      <Input />
      </div>
      </div>
      
    </section>
      
      </section>
    </>
  )
}
