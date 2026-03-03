"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const SLIDES = [
  {
    src: "/images/collov-home-design--aDGbdTsBZg-unsplash.jpg",
    eyebrow: "MIC. Premium Cabinets",
    title: "Modern cabinetry for warm, livable kitchens.",
  },
  {
    src: "/images/jason-briscoe-GliaHAJ3_5A-unsplash.jpg",
    eyebrow: "Designed for daily life",
    title: "Cabinetry that frames the way you cook.",
  },
  {
    src: "/images/christian-mackie-cc0Gg3BegjE-unsplash.jpg",
    eyebrow: "Custom joinery, end‑to‑end",
    title: "Calm, timeless kitchens for modern homes.",
  },
];

const AUTOPLAY_MS = 5000;

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(scrollNext, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [api, scrollNext]);

  return (
    <Carousel
      setApi={setApi}
      className="relative w-full overflow-hidden bg-muted"
      opts={{ loop: true }}
    >
      <CarouselContent className="ml-0">
        {SLIDES.map((slide) => (
          <CarouselItem key={slide.src} className="basis-full pl-0">
            <div className="relative min-h-[70vh] w-full md:min-h-[85vh]">
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-background/5" />
              <div className="absolute inset-x-4 bottom-6 flex flex-col gap-3 sm:bottom-8 sm:gap-4 md:inset-x-12 md:bottom-16 md:max-w-xl lg:inset-x-20">
                <span className="inline-block w-fit rounded-full bg-background/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur-sm sm:text-sm">
                  {slide.eyebrow}
                </span>
                <h1 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="#contact">Book a design consult</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="#gallery">View kitchens</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 sm:left-4 md:left-8" />
      <CarouselNext className="right-2 top-1/2 -translate-y-1/2 sm:right-4 md:right-8" />
    </Carousel>
  );
}
