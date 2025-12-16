
'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hike = () => {
    const container = useRef(null)
    const imageRef = useRef(null)
    const textRef = useRef(null)
    const verticalTextRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 60%',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse'
            }
        })

        tl.from(imageRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
            .from(textRef.current, {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.8')
            .from(verticalTextRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.8')

    }, { scope: container })

    return (
        <section ref={container} id="hike" className="relative border-y border-neutral-600 w-full bg-[#1c1c1c] text-white flex items-center justify-center p-4 md:p-20 overflow-hidden">
            <div className="flex flex-col md:flex-row items-start  w-full relative">

                {/* Left Image Section */}
                <div ref={imageRef} className="w-full md:w-1/2 flex relative z-10">
                    <div className="relative w-full h-[50vh] md:h-[80vh]">
                        <Image
                            src="/hike.jpeg"
                            alt="Hiker"
                            fill
                            className="object-cover  transition-all duration-500"
                        />
                    </div>
                </div>


                {/* Vertical Text */}
                <div ref={verticalTextRef} className=" absolute hidden md:flex  justify-start items-center bottom-[45%] left-[15%]"> {/* Match height of image */}
                    <h2 className="text-[10vh] font-bold leading-none tracking-wider uppercase -rotate-90 whitespace-nowrap ">
                        HIKE IN HILLS
                    </h2>
                </div>
                {/* Mobile Vertical Text Alternative or stacked */}
                {/* This section was removed as per the instruction */}


                {/* Right Text Section */}
                <div ref={textRef} className="w-full md:w-full flex flex-col justify-between h-[80vh] md:pl-20 py-10">
                    {/* Empty top space to align text to top-right similar to image? 
                     Actually image shows text at top right. */}

                    <div className="flex w-full flex-col items-end text-right">
                        <p className="text-lg md:text-2xl font-normal leading-relaxed text-gray-200 max-w-md">
                            Hike in the hills is the new concept of our own there are no limits so you can go into deep hills with pre secure safty measures.
                        </p>
                    </div>

                    {/* Small Location Footer in Text Column */}
                    <div className="flex items-center gap-2 self-end">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <p className="text-xs uppercase tracking-widest text-gray-400">
                            Maldives . Baali . Thailand.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hike
