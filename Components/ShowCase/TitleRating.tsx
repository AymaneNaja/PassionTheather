import React from "react";
import { Rating } from '@mui/material';

export function TitleRating({
    vote_average, title, rating, air_date, extrastyle
}: { vote_average?: number, title: string, rating?: boolean, air_date?: string, extrastyle?: string }) {

    return <div className={`flex justify-start items-center gap-2  text-2xl
                sm:text-3xl
                md:text-3xl
                lg:text-5xl`}>

        {
            /* title */
        }
        <h1 className={!extrastyle ? `
                bg-gradient-to-r text-transparent bg-clip-text from-violet-600 to-purple-900 font-extrabold py-2 `: extrastyle}>
            {title}
        </h1>
        {
            /* rating */
        }
        {rating && vote_average ? <Rating size={'medium'} readOnly defaultValue={2.5} value={vote_average / 2} /> : null}
        {air_date ? <p className="text-slate-400 font-semibold text-base">{air_date}</p> : null}
    </div>;
}
