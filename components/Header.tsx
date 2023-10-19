import Image from 'next/image'
import React from 'react'
import { CeraPro, CeraCompact } from '@/components/fonts'
import { Montserrat } from 'next/font/google'

const Monst = Montserrat({
    weight: ['400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
})

function Header() {
    return (
        <header className="bg-white flex justify-center min-w-full border-b-2">
            <div className="flex items-center justify-between py-3 w-full max-w-[80rem] h-24 px-5 md:py-8 bg-white  ">
                {/* <!-- logo - start --> */}
                <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                    <Image width={180} height={300} alt="Array Real Estate Logo" src="/static/images/logo_horizontal.png" />
                </a>
                {/* <!-- logo - end --> */}

                {/* <!-- nav - start --> */}
                {/* <nav className="hidden gap-12 lg:flex">
                    <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Home</a>
                    <a href="#" className="inline-flex items-center gap-1 text-lg font-semibold text-indigo-500">
                        Features

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a>
                    <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</a>
                </nav> */}
                {/* <!-- nav - end --> */}

                {/* <!-- buttons - start --> */}
                <div className="-ml-8 hidden flex-col gap-2.5 px-6  sm:flex-row sm:justify-center lg:flex lg:justify-start">
                    <a href="#" className={`${Monst.className}  tracking-wide inline-block  px-2  pt-2 text-center text-sm font-regular text-gray-500 outline-none transition duration-300 hover:text-gray-800  active:text-[#1b6ec896] md:text-base`}>Home</a>

                    <a href="#" className={`${Monst.className}  tracking-wide inline-block  px-2  pt-2 text-center text-sm font-regular text-gray-500 outline-none transition duration-300 hover:text-gray-800  active:text-[#1b6ec896] md:text-base`}>About</a>

                    <a href="#" className={`${Monst.className}  tracking-wide inline-block  px-2 pr-6 pt-2 text-center text-sm font-regular text-gray-500 outline-none transition duration-300 hover:text-gray-800  active:text-[#1b6ec896] md:text-base`}>Services</a>

                    <a href="#" className={`${Monst.className} uppercase tracking-widest inline-block w-44  bg-[#1b6ec8] px-4 py-3 text-center text-xs font-medium text-white outline-none transition duration-400 hover:bg-[#1b6ec896] md:text-xs`}>Contact us</a>
                </div>

                <button type="button" className="inline-flex items-center gap-2  bg-[#1b6ec8] px-3 py-3 text-sm  font-semibold focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>

                </button>
                {/* <!-- buttons - end --> */}
            </div>

        </header>
    )
}

export default Header