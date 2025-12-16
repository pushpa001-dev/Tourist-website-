'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const container = useRef(null)
  const imageRef = useRef(null)
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([])
  const cornerRefs = useRef<(HTMLDivElement | null)[]>([])

  const addToCornerRefs = (el: HTMLDivElement | null) => {
    if (el && !cornerRefs.current.includes(el)) {
      cornerRefs.current.push(el)
    }
  }

  const addToTextRefs = (el: HTMLHeadingElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el)
    }
  }

  useGSAP(() => {
    const tl = gsap.timeline()

    // Initial load animation
    tl.from(textRefs.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      delay: 0.7,
      ease: 'power4.out',
      stagger: 0.1
    })
      .from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
      }, '-=1.2')
      .from(cornerRefs.current, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
      }, '-=1')

    // Scroll animation
    gsap.to(textRefs.current, {
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 1,
    })
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 100,
    })

  }, { scope: container })

  return (
    <section ref={container} id="hero" className="relative min-h-screen w-full bg-[#1c1c1c] text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Top Left Dot */}
      <div ref={addToCornerRefs} className="absolute top-10 left-10 w-3 h-3 bg-gray-400 rounded-full" />

      {/* Top Right Dot */}
      <div ref={addToCornerRefs} className="absolute top-10 right-10 w-3 h-3 bg-gray-400 rounded-full" />

      {/* Right Side Vertical Text */}
      <div ref={addToCornerRefs} className="absolute top-40 right-[-10] hidden md:block">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 writing-vertical-rl rotate-90">
          Maldives . Baali . Thailand.
        </p>
      </div>

      {/* Left Side Text */}
      <div ref={addToCornerRefs} className="absolute bottom-40 left-10 md:left-20 z-10">
        <p className="text-xs md:text-sm text-gray-300">Many places in a single go.</p>
      </div>

      {/* 2025 Text */}
      <div ref={addToCornerRefs} className="absolute bottom-40 right-10 md:right-40 z-10">
        <p className="text-xl md:text-2xl font-medium">2025</p>
      </div>


      {/* Main Content */}
      <div className="relative flex items-center justify-center z-0 w-full max-w-7xl">

        {/* Central Image Circle Background */}
        <div className="absolute bottom-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] 2xl:w-[800px] 2xl:h-[800px] bg-[#0f1115] rounded-full -z-10" />

        {/* Layer 1: Back Text (Solid 'Tourist', Transparent 'Camps') */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-0 select-none pointer-events-none flex justify-center">
          <h1 ref={addToTextRefs} className="text-[12vw] md:text-[160px] 2xl:text-[200px] font-bold leading-none tracking-tighter text-center text-white">
            Tourist Camps
          </h1>
        </div>

        {/* Layer 2: Hero Image */}
        <div ref={imageRef} className="relative z-10 mt-10 md:mt-0">
          <Image
            src="/hero.png"
            alt="Tourist Hero"
            width={600}
            height={800}
            className="object-contain h-[50vh] md:h-[80vh] 2xl:h-[100vh] w-auto grayscale contrast-125 brightness-110"
            priority
          />
        </div>

        {/* Layer 3: Front Text (All Outlined) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-20 select-none pointer-events-none flex justify-center">
          <h1 ref={addToTextRefs} className="text-[12vw] md:text-[160px] 2xl:text-[200px] font-bold leading-none tracking-tighter text-center text-transparent [-webkit-text-stroke:1px_white]">
            Tourist Camps
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
