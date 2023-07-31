import Link from 'next/link'
import React from 'react'

const Button = () => {

    const data = [
        {
            letter:"C",
            title: "Chair",
            link: "/chair"
        },{
            letter:"M",
            title: "Monster",
            link: "/monster"
        },{
            letter:"MA",
            title: "Monster Ar",
            link: "/monsterAr"
        },{
            letter:"P",
            title: "Puppy",
            link: "/"
        },
    ]


    return (
        <div className="fixed right-6 bottom-6 group z-20">
            <div id="speed-dial-menu-default" className="flex flex-col items-center visible mb-4 space-y-2">
                {
                    data.map((e, i) => (
                        <div key={i} className='drop-shadow-md'>
                            <Link href={e.link} data-tooltip-target={`tooltip-${e.title}`} data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none">
                                {e.letter}
                                <span className="sr-only">Chair</span>
                            </Link>
                            <div id={`tooltip-${e.title}`} role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                {e.title}
                                <div className="tooltip-arrow" data-popper-arrow></div>
                            </div>
                        </div>
                    ))
                }

            </div>
            {/* <button type="button" data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <svg className="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg>
                <span className="sr-only">Open actions menu</span>
            </button> */}
        </div>
    )
}

export default Button