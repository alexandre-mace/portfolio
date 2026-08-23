"use client"

import {
  ToggleButton,
  ToggleButtonGroup,
  type ToggleButtonGroupProps,
  type ToggleButtonProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

/**
 * Filtres par tag en chips : le pattern des filtres de projets du portfolio,
 * partagé entre les projets. Sélection simple ou multiple via selectionMode.
 * Autosuffisant sur react-aria ToggleButtonGroup.
 */
function TagFilterGroup({
  className,
  selectionMode = "single",
  ...props
}: ToggleButtonGroupProps & { className?: string }) {
  return (
    <ToggleButtonGroup
      selectionMode={selectionMode}
      className={cn("flex flex-wrap gap-2", className)}
      {...props}
    />
  )
}

function TagFilterItem({
  className,
  ...props
}: ToggleButtonProps & { className?: string }) {
  return (
    <ToggleButton
      className={cn(
        "inline-flex h-6 min-w-0 items-center justify-center rounded-full border border-border bg-transparent px-2.5 font-mono text-xs font-normal whitespace-nowrap text-muted-foreground transition-colors outline-none hover:bg-secondary hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 data-selected:border-primary data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary data-selected:hover:text-primary-foreground",
        className,
      )}
      {...props}
    />
  )
}

export { TagFilterGroup, TagFilterItem }
