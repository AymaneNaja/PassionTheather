import React from 'react'
import LoadingCard from './LoadingCard'

type Props = { style?: string, pagnation?: boolean }

function LoadingListCard({ style, pagnation }: Props) {
    return (
        <div className='w-full lg:w-10/12 mx-auto my-10 flex flex-col overflow-hidden '>
            <div className="flex justify-between items-center mb-10 mx-2">
                <div className="skeleton w-36 h-6 "></div>
                <div className="skeleton  w-24 h-6"></div>
            </div>
            <div className=' mx-auto px-3 grid w-full  row-span-1  gap-3  overflow-hidden  grid-cols-2 py-1 2xl:grid-cols-6 xl:grid-cols-6  lg:grid-cols-5 sm:grid-cols-4 md:grid-cols-5 sm:px-2 '>
                <LoadingCard style={'flex'} />
                <LoadingCard style='flex' />
                <LoadingCard style={'hidden sm:flex md:flex lg:flex xl:flex'} />
                <LoadingCard style={'hidden sm:flex md:flex lg:flex xl:flex '} />
                <LoadingCard style={'hidden sm:hid md:flex lg:flex xl:flex'} />
                <LoadingCard style={'hidden sm:hidden md:hidden lg:flex xl:flex'} />
                {pagnation ? <> <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} />
                    <LoadingCard style={'flex'} /></>
                    : null}
            </div>
        </div>
    )
}

export default LoadingListCard