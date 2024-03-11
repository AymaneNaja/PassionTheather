import Link from "next/link";
import React, { useState } from "react";
export function SeasonCard({ name, id, air_date, episode_count, poster_path, number, TvShow_id, backdrop_path }: { name: string, id: number, air_date: string | number, episode_count: number | string, poster_path: string, number: string | number, TvShow_id: string | number, backdrop_path: string }) {
    const [hover, setHover] = useState<boolean>(false)
    const [loaded, setLoaded] = useState<boolean>(false)
    return <>
        <Link key={id} href={`${TvShow_id}/season/${id}/${number}/${backdrop_path}`}>
            <div className="grid justify-start items-center hover:cursor-pointer w-full  " onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
            >
                <img onLoad={() => setLoaded(true)} alt={'no image found'} title='season' width={300} className={`rounded-xl ${hover ? 'border  border-purple-400' : ''} ${loaded ? 'block' : 'hidden'}`} src={`https://image.tmdb.org/t/p/original/${poster_path}`}>

                </img>
                {!loaded ? <div className="skeleton w-40 h-[250px]"></div> : null}
                <p className="text-slate-700 font-bold lg:text-lg md:text-lg sm:text-base mx-0.5">{name}</p>
                <div className="flex justify-between items-center mx-0.5 text-slate-400 text-sm md:text-base lg:text-base font-semibold ">
                    <p>{air_date}</p>
                    <p>{episode_count}E</p>
                </div>

            </div>
        </Link>
    </>;
}
