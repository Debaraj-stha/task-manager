'use client'

import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../constants/content/home";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardTitle } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="container mx-auto py-24 bg-white text-gray-900">
      <div className="text-center mb-10">
        <SectionTitle title="What People Say" />
      </div>

      <Carousel
        setApi={setApi}
        plugins={[autoplay.current]}
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
      >

        <CarouselContent>
          {TESTIMONIALS.map((t, index) => (
            <CarouselItem key={index} className="space-x-2 md:basis-1/2 lg:basis-1/3">
              <Card className={`border border-gray-200 bg-gray-50 flex flex-col justify-center items-center p-6 rounded-xl shadow-lg hover:shadow-xl
               hover:-translate-y-1 transition-all`}>
                <Avatar className="mb-4 size-16">
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback>
                    {t.name.split(" ").map((w) => w[0].toUpperCase()).join("")}
                  </AvatarFallback>
                </Avatar>

                <p className="text-gray-700 mb-4 leading-relaxed">"{t.feedback}"</p>
                <CardTitle>{t.name}</CardTitle>
                <p className="text-sm text-gray-500">{t.role}</p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
        {/* dots indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-all 
          ${current === index ? "bg-gray-900 w-6" : "bg-gray-300"}`}
            />
          ))}
        </div>

      </Carousel>
    </section>
  );
};

export default Testimonials;
