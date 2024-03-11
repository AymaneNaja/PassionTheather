import React from "react";
export function Producers({ company: { name, logo_path } }: { company: { logo_path: string, name: string } }) {
    return <div className='w-1/4 sm:w-1/4 md:w-1/4 lg:w-2/6 relative sm:text-lg cursor-pointer  
    z-10 text-transparent hover:text-slate-600'>
        <div className='transition-all hover:-translate-y-4  z-20 '>
            <img className='w-full rounded-lg x' title='production company' src={'https://image.tmdb.org/t/p/original/' + logo_path} />
        </div>
        <p className='absolute
                         translate-y-2
                        bottom-0 left-2
                        font-bold
                        text-lg line-clamp-2 
                        drop-shadow-sm   
                        overflow-hidden text-ellipsis  '>{name}
        </p>
    </div>;
}
