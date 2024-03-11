import { LoadingCastCards } from './LoadingCastCards';
import React from 'react'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {}

function ShowCaseLoading({ }: Props) {
    return (
        <>
            <div className='w-full lg:w-9/12 xl:w-9/12 m-auto min-h-screen'>
                {/* images */}
                <div className='m-auto w-full'>
                    <div className='skeleton relative w-full h-[300px] rounded-none' >
                        <span className={` skeleton absolute -bottom-0 translate-y-16 left-10  w-2/6 sm:w-1/4 md:w-1/4 lg:w-3/12 xl:w-2/12  h-56 md:h-72 lg:h-80 xl:h-[300px]`}>
                        </span>
                    </div>
                </div>
                {/* title and description */}
                <div className='flex w-full mx-auto pl-10 flex-col justify-start items-start gap-2'>
                    <div className='skeleton h-6 w-4/12 mt-20 mb-8'></div>
                    <div className='skeleton h-4 w-9/12 '></div>
                    <div className='skeleton h-4 w-9/12'></div>
                    <div className='skeleton h-4 w-6/12 '></div>
                </div>
                {/* case */}
                <div className='w-full mt-10 pl-10'>
                    <div className={'skeleton  h-6 w-32 rounded-full  '}></div>
                    {/* cast card */}
                    <LoadingCastCards />

                </div>
                {/* trailers */}
                <div className='w-full mt-10 pl-10'>
                    <div className={'skeleton  h-6 w-32 rounded-full  '}></div>
                    {/* video card */}
                    <div className={' flex justify-start items-center flex-nowrap overflow-hidden mt-10  gap-2  '}>
                        <div className='skeleton w-48 h-36'></div>
                        <div className='skeleton w-48 h-36'></div>
                        <div className='skeleton w-48 h-36'></div>
                        <div className='skeleton w-48 h-36'></div>
                        <div className='skeleton w-48 h-36'></div>
                    </div>
                </div>


            </div>
            <div className={'w-full pl-10 lg:pl-0 xl:w-10/12 mx-auto '}>
                <LoadingListCard />
                <LoadingListCard />

            </div>
        </>
    )
}

export default ShowCaseLoading