'use client'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Preloader = () => {
    const container = useRef(null)
    const textRef = useRef(null)
    const counterRef = useRef(null)
    const [counter, setCounter] = useState(0)

    useGSAP(() => {
        const tl = gsap.timeline()

        // Counter Animation
        tl.to(counterRef.current, {
            textContent: "100",
            duration: 0.6,
            roundProps: "textContent",
            onUpdate: function () {
                setCounter(Math.ceil(this.progress() * 100))
            },
            ease: "power2.inOut"
        })

        // Text Scale/Reveal
        tl.from(textRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=1.5")


        // Exit Animation
        tl.to(container.current, {
            y: '-100%',
            duration: 0.6,
            ease: 'power4.inOut',
            delay: 0
        })

    }, { scope: container })

    return (
        <div ref={container} className="fixed inset-0 z-100 w-full h-screen bg-[#1c1c1c] text-white flex flex-col justify-between p-10 select-none">

            {/* Top Counter */}
            <div className="flex justify-end">
                <h1 ref={counterRef} className="text-[10vw] md:text-[80px] font-bold leading-none">
                    {counter}%
                </h1>
            </div>

            {/* Center Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                <h2 ref={textRef} className="text-[5vw] md:text-[60px] font-light tracking-widest uppercase">
                    Tourist Camps
                </h2>
            </div>

            {/* Bottom Text */}
            <div className="flex justify-between items-end">
                <p className="text-sm md:text-lg font-light text-gray-400">Loading experience...</p>
                <p className="text-sm md:text-lg font-light text-gray-400">2025</p>
            </div>

        </div>
    )
}

export default Preloader
