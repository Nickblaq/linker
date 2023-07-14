'use client'

import { cn } from "@/lib/utils"

interface HeaderColProps {
    heading: string
    text?: string
    className?: string
    children?: React.ReactNode
  }
  

  /**
   * Renders a header column in a flex column container with heading, text, and optional children.
   *
   * @param {HeaderColProps} heading - the main heading for the column.
   * @param {HeaderColProps} text - the text to display beneath the heading.
   * @param {HeaderColProps} children - optional: any children to render below the text.
   * @return {JSX.Element} - the rendered header column.
   */
  export function HeaderColHeader({
    heading,
    text,
    className,
    children,
  }: HeaderColProps) {
    return (
      <div className={cn("flex flex-col px-2", className)}>
        <div className="grid gap-1">
          <h1 className="font-heading text-3xl md:text-4xl">{heading}</h1>
          {text && <p className="text-lg text-muted-foreground">{text}</p>}
        </div>
        {children}
      </div>
    )
  }