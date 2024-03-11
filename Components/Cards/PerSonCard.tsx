
import Link from "next/link";
import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
export function PersonCard({ person }: any) {
    return <><Link href={`/Person/${person.id}`} key={person.id}>
        <div className={'w-full grid justify-center items-center gap-2 text-center row-span-1 shadow-lg rounded-lg p-1 hover:border-purple-700 hover:border-2 border border-transparent cursor-pointer transition-all pt-2 '}>
            {
                /* avatar */
            }
            <div style={{
                backgroundImage: `${person.profile_path != null ? `url(${`https://image.tmdb.org/t/p/original/` + person.profile_path})` : 'https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png'}`
            }} className={' w-44 h-44 bg-black rounded-full bg-cover bg-center'} />
            {
                /* info */
            }
            <div className={'w-full  '}>
                <p className='text-slate-700 font-semibold text-lg'>{person.name}</p>
                {person.character ? <p className=' text-base text-slate-500'>as {person.character}</p> : null}
                {person.popularity ? <span className={'flex gap-2 justify-center items-center text-rose-500'}>
                    <AiTwotoneHeart />
                    <p className='text-md font-semibold '>{person.popularity}</p>
                </span> : null}

            </div>
        </div>
    </Link></>;
}
