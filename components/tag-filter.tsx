"use client"

import * as React from "react"
import { Toggle } from "@base-ui/react/toggle"
import { ToggleGroup } from "@base-ui/react/toggle-group"

import { cn } from "@/lib/utils"

/**
 * Filtres par tag en chips : le pattern des filtres de projets du portfolio,
 * partagé entre les projets. Sélection simple par défaut, multiple via la prop
 * multiple. Autosuffisant sur le ToggleGroup de Base UI.
 */
function TagFilterGroup({
  className,
  ...props
}: React.ComponentProps<typeof ToggleGroup>) {
  return (
    <ToggleGroup
      className={cn("flex flex-wrap gap-2", className)}
      {...props}
    />
  )
}

function TagFilterItem({
  className,
  ...props
}: React.ComponentProps<typeof Toggle>) {
  return (
    <Toggle
      className={cn(
        "inline-flex h-6 min-w-0 items-center justify-center rounded-full border border-border bg-transparent px-2.5 font-mono text-xs font-normal whitespace-nowrap text-muted-foreground transition-colors outline-none hover:bg-secondary hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground aria-pressed:hover:bg-primary aria-pressed:hover:text-primary-foreground",
        className,
      )}
      {...props}
    />
  )
}

export { TagFilterGroup, TagFilterItem }
