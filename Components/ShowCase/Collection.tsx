import Link from "next/link";
import React from "react";
export function Collection({ belongs_to_collection, type }: { belongs_to_collection: any, type: string | number }) {
    console.log(belongs_to_collection)
    return <Link href={`/Collection/${type}/${belongs_to_collection.id}`}><div className="my-6"><h1 className='text-5xl bg-gradient-to-r text-transparent bg-clip-text from-indigo-400 to-violet-800 font-extrabold animate-text transition ease-in my-2  cursor-pointer '>included in </h1>
        <div className='w-4/6 sm:w-2/4 md:w-2/4 lg:w-5/12 relative shadow-lg sm:text-lg 
                    '>

            <div className='
                         absolute 
                          animate-pulse
                          transition-all
                         hover:-translate-x-2
                         hover:translate-y-2 z-0 bg-gradient-to-tr from-purple-500 to-purple-800 pulse w-full h-full rounded-xl' />
            <div className=' transition-all
                    hover:translate-x-2 hover:-translate-y-2 z-20'>

                {belongs_to_collection.backdrop_path !== null ? <img className='w-full rounded-xl  brightness-75' title='collection' src={'https://image.tmdb.org/t/p/original/' + belongs_to_collection.backdrop_path} /> : null}
                <p className='absolute bottom-2 left-2  font-bold text-lg line-clamp-2 
                        drop-shadow-sm   
                        overflow-hidden text-ellipsis text-white '> {belongs_to_collection.name}</p>
            </div>
        </div></div></Link>;
}
