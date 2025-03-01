'use client'
import { Button } from '@/components/ui/button'
import { Accordion } from '@/components/ui-old/accordion'

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="space-y-2">
        <Button>Button</Button>
        <Accordion.Root
          type="single"
          collapsible
        >
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It adheres to the WAI-ARIA design pattern.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  )
}
