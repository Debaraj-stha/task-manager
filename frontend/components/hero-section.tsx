'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Container from './coontainer'


const HeroSection = () => {
    return (
        <section className="text-white py-24 w-full">
            <Container extraClasses='flex justify-between flex-col-reverse md:flex-row items-center'>

                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary">
                        Manage Your Tasks <br />
                        <span className="text-[var(--secondary)]">Efficiently</span>
                    </h1>
                    <p className="text-lg text-[var(--secondary-foreground)] max-w-md">
                        Stay organized and productive. Plan, track, and complete your tasks effortlessly with our smart task manager.
                    </p>

                    <div className="flex gap-4">
                        <Button size="lg" variant={"outline"} className="text-[var(--primary)]">Get Started</Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className=" border bg-[var(--secondary)] text-[var(--secondary-foreground)] transition-colors  hover:bg-[var(--secondary-hover)]  hover:text-[var(--primary)]">
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Right Image / Mockup */}
                <div className="flex-1">
                    <div className="relative w-full max-4xl mx-auto">
                        <Image
                            src="/images/mockup-image.png"
                            width={500}
                            height={500}
                            alt="task app mockup"
                            className="rounded-xl shadow-2xl h-full w-full"
                        />
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default HeroSection
