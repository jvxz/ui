const interactiveStyles = {
  base: [
    'rounded text-primary-foreground outline-none transition-all duration-100',
    'focus-visible:ring-[3px] focus-visible:ring-ring/30 focus-visible:border-ring/50',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
  ],
  variant: {
    primary: [
      'bg-primary border text-primary-foreground shadow',
      'hover:border-primary-foreground/20',
      'active:bg-primary/90 active:border-border',
    ],
    outline: [
      'bg-transparent border text-foreground shadow',
      'hover:bg-accent hover:border-primary-foreground/20',
      'active:bg-accent/80 border-border',
    ],
    ghost: [
      'bg-transparent border-transparent text-foreground',
      'hover:bg-accent hover:text-accent-foreground',
      'active:bg-accent/80',
    ],
    destructive: [
      'bg-destructive/90 text-destructive-foreground shadow',
      'hover:bg-destructive',
      'active:bg-destructive/90',
    ],
  },
  size: {
    default: 'h-8 px-3 text-base py-2 has-[>svg]:px-3',
    sm: 'h-6 text-sm gap-1.5 px-2 has-[>svg]:px-2.5',
    lg: 'h-10 text-md px-6 has-[>svg]:px-4',
    icon: 'size-9',
  },
}

const staticStyles = {
  base: [
    'rounded bg-card text-card-foreground transition-all outline-none shadow duration-100',
  ],
  variant: {
    default: 'bg-card border',
    outline: 'bg-transparent border',
    ghost: 'bg-transparent border-transparent',
    destructive: 'bg-destructive border',
  },
}
export { interactiveStyles, staticStyles }
