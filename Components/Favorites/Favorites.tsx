'use client'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import FavMovies from './FavMovies';
import FavShows from './FavShows';

type Props = {}

function Favorites({ }: Props) {
    const { data: session, }: any = useSession()

    return (
        <div>
            <h1 className='md:text-7xl text-4xl  bg-gradient-to-r text-transparent bg-clip-text from-indigo-400 to-violet-800 font-extrabold animate-text  transition ease-in  py-2  text-center mb-20'>My Favorites</h1>
            <FavMovies id={session?.user?.id} />
            <FavShows id={session?.user?.id} />

        </div>
    )
}

export default Favorites