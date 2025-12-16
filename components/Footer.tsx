
import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full  bg-[#1c1c1c] text-white py-20 px-4 md:px-20 border-t border-neutral-600 "> {/* Added border-t transparent to prevent whitespace issues if any */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Sections Column */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-normal mb-2">sections</h3>
                    <ul className="flex flex-col gap-1 text-gray-300 font-light">
                        <li>Home</li>
                        <li>Places</li>
                        <li>Stuff</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-normal mb-2">Contact</h3>
                    <ul className="flex flex-col gap-1 text-gray-300 font-light">
                        <li>99999-99999</li>
                        <li>Streen no 9</li>
                        <li>sanfransisco</li>
                    </ul>
                </div>

                {/* Book Column */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-normal mb-2">Book</h3>
                    <p className="text-gray-300 font-light max-w-xs">
                        Book now and enjoy eith your family
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
