'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Places = () => {
    const container = useRef(null)
    const cornersRef = useRef<(HTMLDivElement | null)[]>([])
    const imagesRef = useRef<(HTMLDivElement | null)[]>([])
    const titleRef = useRef(null)

    const addToRefs = (el: HTMLDivElement | null, ref: React.MutableRefObject<(HTMLDivElement | null)[]>) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el)
        }
    }

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 60%',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse'
            }
        })

        // Animate corners
        tl.from(cornersRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        })

        // Animate images
        tl.from(imagesRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=0.5')

        // Animate Title
        tl.from(titleRef.current, {
            scale: 2,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        }, '-=1')

    }, { scope: container })

    return (
        <section ref={container} id="places" className="relative min-h-screen w-full bg-[#1c1c1c] text-white flex flex-col items-center justify-center p-4 md:p-20 overflow-hidden">
            {/* Corner Text Elements */}
            <div ref={(el) => addToRefs(el, cornersRef)} className="absolute top-10 left-10 md:top-20 md:left-20">
                <p className="text-lg md:text-xl">Never stop exploring</p>
            </div>
            <div ref={(el) => addToRefs(el, cornersRef)} className="absolute top-10 right-10 md:top-20 md:right-20">
                <p className="text-lg md:text-xl">No Limits</p>
            </div>
            <div ref={(el) => addToRefs(el, cornersRef)} className="absolute bottom-10 left-10 md:bottom-20 md:left-20">
                <p className="text-lg md:text-xl">Make your move</p>
            </div>
            <div ref={(el) => addToRefs(el, cornersRef)} className="absolute bottom-10 right-10 md:bottom-20 md:right-20">
                <p className="text-lg md:text-xl text-right">Places are like paradise</p>
            </div>


            {/* Main Content */}
            <div className="relative w-full max-w-6xl flex justify-center items-center gap-4 md:gap-8 z-10">
                {/* Images */}
                <div ref={(el) => addToRefs(el, imagesRef)} className="relative w-1/3 aspect-3/4 md:aspect-2/3 transform translate-y-10 md:translate-y-20 overflow-hidden">
                    <Image src="/place-1.jpeg" alt="Place 1" fill className="object-cover hover:scale-105 transition-all duration-300" />
                </div>
                <div ref={(el) => addToRefs(el, imagesRef)} className="relative w-1/3 aspect-3/4 md:aspect-2/3 transform -translate-y-4 md:-translate-y-10 z-10 scale-110 overflow-hidden   ">
                    <Image src="/place-2.jpeg" alt="Place 2" fill className="object-cover hover:scale-105 transition-all duration-300" />
                </div>
                <div ref={(el) => addToRefs(el, imagesRef)} className="relative w-1/3 aspect-3/4 md:aspect-2/3 transform translate-y-10 md:translate-y-20 overflow-hidden">
                    <Image src="/place-3.jpeg" alt="Place 3" fill className="object-cover hover:scale-105 transition-all duration-300" />
                </div>

                {/* Overlay Text */}
                <h2 ref={titleRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] md:text-[8rem] font-bold leading-none tracking-tighter text-white z-20 whitespace-nowrap drop-shadow-lg">
                    UNLIMITED PLACES
                </h2>
            </div>

        </section>
    )
}

export default Places

