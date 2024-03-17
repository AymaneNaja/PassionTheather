/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import ExplicitIcon from '@mui/icons-material/Explicit';

type props = {
    backdropPath: string,
    posterPath: string,
    adult?: boolean
}
export function ImageIntroduction({
    backdropPath,
    posterPath,
    adult
}: props) {
    return <div className={`relative w-full  `}>
        <img className={' w-full'} title='backdrop' src={`https://image.tmdb.org/t/p/original/${backdropPath}`} />
        <span className={`absolute -bottom-0 translate-y-16 left-10  w-4/12 sm:w-1/4 md:w-1/4 lg:w-3/12 xl:w-3/12`}>
            <img title='poster' className='w-full rounded-xl shadow-xl relative' src={`https://image.tmdb.org/t/p/original/${posterPath}`} />
            {adult ? <p className='absolute bottom-2 right-2 text-white '><ExplicitIcon /></p> : null}

        </span>
    </div>;
}
