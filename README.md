# Design philosophy

<!-- - Background: `--background`
- Foreground: `--foreground`
- Primary: `--primary`
- Primary foreground: `--primary-foreground`
- Secondary: `--secondary`
- Secondary foreground: `--secondary-foreground`
- Muted: `--muted`
- Muted foreground: `--muted-foreground`
- Accent: `--accent`
- Accent foreground: `--accent-foreground`
- Destructive: `--destructive`
- Destructive foreground: `--destructive-foreground`
- Border: `--border`
- Input: `--input`
- Ring: `--ring` -->

| Name | Background | Foreground |
|------|------------|------------|
| Background | `bg-background` | `text-foreground` |
| Card | `bg-card` | `text-card-foreground` |
| Popover | `bg-popover` | `text-popover-foreground` |
| Primary | `bg-primary` | `text-primary-foreground` |
| Secondary | `bg-secondary` | `text-secondary-foreground` |
| Muted | `bg-muted` | `text-muted-foreground` |
| Accent | `bg-accent` | `text-accent-foreground` |
| Destructive | `bg-destructive` | `text-destructive-foreground` |

## Element traits

- __Shadows__ should only be applied with the `shadow` class
- __Borders__ should only be applied with the `border` class

## States

- __Hover__: Elements change border or background color to indicate interactivity
- __Active__: Background opacity reduced to 80% of the default state
- __Disabled__: Element has reduced opacity (50%) and no pointer events

## Interactive elements

### Default
| State | Background | Border | Text |
|-------|------------|--------|------|
| Default | `bg-primary` | `border` | `text-primary-foreground` |
| Hover | `bg-primary` | `border-primary-foreground/25` | `text-primary-foreground` |
| Active | `bg-primary/80` | `border-border` | `text-primary-foreground` |
| Disabled | `disabled:opacity-50` | `border` | `text-primary-foreground` |

### Destructive
| State | Background | Border | Text |
|-------|------------|--------|------|
| Default | `bg-destructive/90` | - | `text-destructive-foreground` |
| Hover | `bg-destructive` | - | `text-destructive-foreground` |
| Active | `bg-destructive/80` | - | `text-destructive-foreground` |
| Disabled | `disabled:opacity-50` | - | `text-destructive-foreground` |

### Outline
| State | Background | Border | Text |
|-------|------------|--------|------|
| Default | - | `border` | `text-foreground` |
| Hover | `bg-accent` | `border-primary-foreground/25` | `text-accent-foreground` |
| Active | - | `border-border` | `text-foreground` |
| Disabled | `disabled:opacity-50` | `border` | `text-foreground` |

### Ghost
| State | Background | Border | Text |
|-------|------------|--------|------|
| Default | - | - | `text-foreground` |
| Hover | `bg-accent` | - | `text-accent-foreground` |
| Active | `bg-accent/80` | - | `text-accent-foreground` |
| Disabled | `disabled:opacity-50` | - | `text-foreground` |

## Non-interactive elements

| Background | Border | Text |
|------------|--------|------|
`bg-card` | `border-border` | `text-card-foreground` |

## Focus states

- `focus-visible:border-ring`
- `focus-visible:ring-ring/50`
- `focus-visible:ring-[3px]`

