'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Exiting = () => {
    const container = useRef(null)
    const titleRef = useRef(null)
    const imageRef = useRef(null)
    const descRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 60%',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse'
            }
        })

        tl.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
            .from(imageRef.current, {
                scale: 0.5,
                opacity: 0,
                rotate: 45,
                duration: 1.2,
                ease: 'back.out(1.7)'
            }, '-=0.8')
            .from(descRef.current, {
                x: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.5')

        // Parallax for image
        gsap.to(imageRef.current, {
            scrollTrigger: {
                trigger: container.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5
            },
            y: -100,
            rotate: -12 // End rotation
        })

    }, { scope: container })

    return (
        <section ref={container} id="exiting" className=" border-y border-neutral-600 relative min-h-screen w-full bg-[#1c1c1c] text-white overflow-hidden flex flex-col justify-center p-4 md:p-20">
            <div className="relative w-full max-w-7xl mx-auto h-[80vh]">

                {/* Title - Behind Image */}
                <h2 ref={titleRef} className="absolute top-[10%] left-[5%] text-[12vw] md:text-[140px] font-bold leading-none tracking-tighter z-0 uppercase">
                    EXCITING STUFF
                </h2>

                {/* Central Image - Overlapping Title */}
                <div ref={imageRef} className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[80%] md:w-[600px] h-[50%] md:h-[600px] z-10 transform -rotate-12">
                    <Image
                        src="/exiting-stuff.png"
                        alt="Paragliding"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Description Text - Bottom Right */}
                <div ref={descRef} className="absolute bottom-0 right-0 max-w-md text-right z-20">
                    <p className="text-lg md:text-2xl font-normal leading-relaxed text-gray-200">
                        You can do once in a life time exciting stuff we make you to do that feels so tense.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Exiting
