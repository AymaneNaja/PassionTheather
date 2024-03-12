import React from "react";
export function Overview({ overview, extrastyle }: string | any) {
    return <div className='text-lg
                     sm:text-lg 
                     md:text-xl
                     lg:text-xl 
                     bg-gradient-to-tr bg-clip-text from-slate-500 to-slate-700  '>
        <p title='description' className={!extrastyle ? `` : extrastyle}>{overview}</p>
    </div>;
}
