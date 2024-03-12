'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
type Props = {}

const Search = (props: Props) => {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState<string>('')
    return (
        <div className='h-screen '>
            <div className='grid justify-center items-start pt-10 mx-auto overflow-visible  text-clip  w-9/12 sm:w-2/4 md:w-2/4 lg:w-1/4 text-center '>
                <h1 className='h-fit animate-text font-extrabold text-7xl text-center bg-gradient-to-tr bg-clip-text  text-transparent   from-fuchsia-400 to-purple-700 py-6 '>
                    All at your fingertips
                </h1>
                <h3 className='text-transparent  w-full text-center font-semibold bg-clip-text bg-gradient-to-tr from-slate-500 to-slate-600 text-base'>{`select from a wide variety of movies or tv shows,you can also find  you're favorite actors that you like watching the most and more...`}</h3>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()
                router.push(`/Find/${searchQuery}`,)
            }} className={' bg-slate-200 rounded-lg w-3/4 sm:w-3/4 md:w-2/4 lg:w-2/4 mx-auto py-3 pl-2 pr-1  mt-10 flex justify-start items-center '}>
                <BiSearchAlt size={23} className={'text-purple-700   '} />
                <input
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={'search for movies tv shows...'}
                    className='  outline-none bg-slate-200  text-xl w-full pl-1 font-bold'
                ></input>

            </form>

        </div>
    )
}

export default Search