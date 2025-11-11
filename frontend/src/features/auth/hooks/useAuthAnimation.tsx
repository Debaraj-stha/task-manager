import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import  { type RefObject } from 'react'

const useAuthAnimation = (ref: RefObject<HTMLDivElement|null>, id = "login") => {
    useGSAP(() => {
        if (!ref.current) return
        const t = gsap.timeline({id})
        t.from(
            ref.current.querySelector("h2"),
            {
                opacity: 0,
                y: 40,
                duration: 0.2,
                ease: "power1"
            }
        )
        t.from(
            ref.current.querySelector("p"),
            {
                opacity: 0,
                y: 40,
                duration: 0.2,
                ease: "power1"
            },
            "-=0.1"
        )

        t.from(ref.current.querySelectorAll(".input-card"), {
            opacity: 0,
            y: 40,
            stagger: 0.1,
            delay: Math.min(Math.random(), 0.1),
            ease: "power1"
        }, "-=0.2")

        t.from(ref.current.querySelector(".separator-card"), {
            opacity: 0,
            y: 40,
        })
        t.from(ref.current.querySelector(".signup-card"), {
            opacity: 0,
            y: 40
        }, "-=0.1")

        gsap.to(ref.current.querySelectorAll("button"),
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                delay: 0.1
            })


    }, { scope: ref })
}

export default useAuthAnimation