import * as React from "react"

const Carousel = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`relative w-full overflow-hidden ${className}`}
    {...props}
  />
))
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex snap-x snap-mandatory overflow-x-auto ${className}`}
    {...props}
  />
))
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex-none snap-start ${className}`}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white ${className}`}
    {...props}
  >
    ←
  </button>
))
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white ${className}`}
    {...props}
  >
    →
  </button>
))
CarouselNext.displayName = "CarouselNext"

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }