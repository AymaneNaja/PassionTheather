import React from "react";
export function Tagline({ tagline }: string | any) {
    return <blockquote className='mb-2 italic font-semibold text-slate-600' color='purple'>
        {tagline.length >= 1 ? '"' + tagline + '"' : null}
    </blockquote>;
}
