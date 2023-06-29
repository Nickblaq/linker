'use client'
import * as React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
export default function HomePage() {
    const [aspectRatio, setAspectRatio] = React.useState(1)
    const ref = React.useRef<HTMLDivElement>(null);
console.log(ref)
    React.useEffect(() => {
        if (ref.current) {
        }
      }, []);
    return (
        <>
        <div className=" flex flex-col gap-10 pt-14 max-w-3xl mx-auto">
        <AspectRatio ratio={16 / 9} className="bg-muted  animate-in slide-in-from-bottom-16 delay-150">
      <Image
        src="/h.jpg"
        alt="Photo"
        fill
        className="rounded-md object-cover bg-slate-800"
      />
    </AspectRatio>
    <div className=" animate-in slide-in-from-bottom-9 delay-150 text-center">
        <h1 ref={ref} className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
      Polished UI
    </h1>
    <p className="leading-7 mt-10">
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </p>
    </div>
        </div>

        </>
    )
}

const ThemeTune = ({clx, name}) => {
    return (
        <>
        <div className='flex items-center justify-around'>
        <Badge variant={clx}>{name}</Badge>
        </div>
        </>
    )
}
