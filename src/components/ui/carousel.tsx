import { cva } from 'class-variance-authority'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import { ComponentPropsWithoutRef, createContext, HTMLAttributes, use, useCallback, useEffect, useMemo, useState } from 'react'

import { cn } from '@/lib/utils'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  orientation: 'horizontal' | 'vertical'
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & RootProps

const CarouselContext = createContext<CarouselContextProps | null>(null)

const useCarousel = () => {
  const context = use(CarouselContext)
  if (!context) {
    throw new Error('This hook must be used inside <Carousel.Root />')
  }
  return context
}

type RootProps = {
  CarouselContent?: typeof Carousel.Root
  CarouselHandler?: typeof Carousel.Container
  CarouselItem?: typeof Carousel.Slide
  // CarouselButton?: typeof Carousel.Button
}

interface CarouselRootProps extends HTMLAttributes<HTMLDivElement>, RootProps {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
  size?: 'sm' | 'md' | 'lg'
}

const rootVariants = cva('overflow-hidden', {
  variants: {
    size: {
      sm: 'size-48',
      md: 'size-64',
      lg: 'size-96',
    },
    orientation: {
      horizontal: 'px-1 py-2',
      vertical: 'px-2',
    },
  },
})
function Root({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  size = 'md',
  className,
  ...props
}: CarouselRootProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return

    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setCanScrollPrev(api.canScrollPrev())
    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      }
      else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  useEffect(() => {
    if (!api || !setApi) return

    setApi(api)
  }, [api, setApi])

  useEffect(() => {
    if (!api) return

    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  const contextValue = useMemo(() => ({
    carouselRef,
    api,
    opts,
    orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
  }), [carouselRef, api, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext])

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        onKeyDownCapture={handleKeyDown}
        id="embla-viewport"
        className={cn(rootVariants({
          size,
          orientation,
        }), className)}
        ref={carouselRef}
        {...props}
      />
    </CarouselContext.Provider>

  )
}

const containerVariants = cva('flex -ml-2 h-full touch-pan-y touch-pinch-zoom', {
  variants: {
    orientation: {
      vertical: '-mt-1 flex-col',
      horizontal: '-ml-2',
    },
  },
})
function Container({ ...props }: ComponentPropsWithoutRef<'div'>) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      id="embla-container"
      className={cn(
        containerVariants({
          orientation,
        }),
        props.className,
      )}
      {...props}
    />
  )
}

const slideVariants = cva('group relative pl-2 data-focus-visible:outline-hidden data-focused:outline-hidden grow-0 min-w-0 shrink-0 basis-full', {
  variants: {
    orientation: {
      vertical: 'pt-2',
      horizontal: 'pl-2',
    },
  },
})
function Slide({ ...props }: ComponentPropsWithoutRef<'div'>) {
  const { orientation } = useCarousel()

  return (
    <div
      id="embla-slide"
      className={cn(
        slideVariants({
          orientation,
        }),
      )}
    >
      <div
        {...props}
        className="place-items-center grid shadow border rounded size-full"
      />
    </div>
  )
}

export const Carousel = {
  Root,
  Container,
  Slide,
}
