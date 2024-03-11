import React from 'react'

type Props = {
    style?: string
}

function LoadingCard({ style }: Props) {
    return (
        <div className={`w-full  bg-white shadow  rounded-lg flex-col gap-2  ${style}`}>
            <div className='skeleton w-full flex h-80 sm:h-52 transition-all md:h-64  lg:h-96 xl:h-[370px] rounded-b-none'></div>
            <div className='flex flex-col gap-3 w-full p-3'>
                <div className="skeleton w-11/12 h-4 "></div>
                <div className="skeleton w-6/12 h-4"></div>
                <div className="skeleton w-4/12 h-4"></div>
            </div>
        </div>
    )
}

export default LoadingCard