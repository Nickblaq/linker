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
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
          Suspendisse lectus tortor, dignissim sit amet, 
          adipiscing nec, ultricies sed, dolor. 
          Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. 
          Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. 
          Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. 
          Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. 
          Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. 
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
          </p>
        </div>

        </>
    )
}
