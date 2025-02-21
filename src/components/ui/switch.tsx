import * as SwitchPrimitive from '@radix-ui/react-switch'

function Switch() {
  return (
    <SwitchPrimitive.Root className="inline-flex relative justify-center items-center bg-input radix-state-checked:bg-primary/60 shadow-lg rounded-2xl outline-0 focus-visible:ring-2 w-14 h-8 max-h-8 transition-all cursor-pointer">
      <SwitchPrimitive.Thumb className="block bg-foreground shadow-lg rounded-full size-6 transition-all -translate-x-3 radix-state-checked:translate-x-3 duration-100" />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
