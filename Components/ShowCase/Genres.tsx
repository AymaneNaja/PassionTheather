import React from "react";
export function Genres({
    genres
}: any) {
    return <div className='flex justify-start items-center gap-1 text-slate-800 '>
        {genres.map((genre: any) => {
            return <p key={genre.id} className={`
                             cursor-pointer
                             no-underline  hover:font-bold transition-all
                             hover:underline
                              decoration-indigo-500
                            font-semibold  bg-gradient-to-r text-transparent bg-clip-text from-violet-600 to-purple-900  `}>{genre.name}
            </p>;
        })}
    </div>;
}
