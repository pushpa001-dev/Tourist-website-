'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const container = useRef(null)
    const titleRef = useRef(null)
    const leftInfoRef = useRef(null)
    const rightInfoRef = useRef(null)
    const bottomInfoRef = useRef(null)

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
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.7)'
        })
            .from([leftInfoRef.current, rightInfoRef.current, bottomInfoRef.current], {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            }, '-=0.5')

    }, { scope: container })

    return (
        <section ref={container} id="contact" className="relative h-full w-full bg-[#1c1c1c] text-white flex flex-col items-center justify-center p-4 md:p-20 overflow-hidden">

            {/* Top Left Contact Info */}
            <div ref={leftInfoRef} className="absolute top-10 left-10 md:top-20 md:left-20 flex flex-col gap-2 text-lg md:text-xl font-light">
                <p>99999-99999</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>x</p>
            </div>

            {/* Center Text */}
            <div ref={titleRef} className="z-10 h-[50vh] flex items-center justify-center">
                <h2 className="text-[12vw] md:text-[160px] font-bold leading-none tracking-tighter uppercase text-center">
                    CONTACT US
                </h2>
            </div>

            {/* Bottom Right Call to Action */}
            <div ref={rightInfoRef} className="absolute bottom-10 right-10 md:bottom-20 md:right-20 max-w-xs text-right">
                <p className="text-lg md:text-2xl font-normal leading-relaxed text-gray-200">
                    Book your tickets now and enjoy with your family.
                </p>
            </div>

            {/* Bottom Left Location Footer */}
            <div ref={bottomInfoRef} className="absolute bottom-10 left-10 md:bottom-20 md:left-20 flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full" />
                <p className="text-[10px] uppercase tracking-widest text-gray-400">
                    Maldives . Baali . Thailand.
                </p>
            </div>

        </section>
    )
}

export default Contact
