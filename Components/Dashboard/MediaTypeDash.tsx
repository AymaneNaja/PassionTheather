import { Button } from '@mui/material'
import React from 'react'

type Props = {
    mediaType: any,
    setMediaType: React.Dispatch<React.SetStateAction<{
        title: string;
        type: string;
        active: boolean;
        id: number;
    }[]>>,
    changeGenre: (id: number | string) => void
}

function MediaTypeDash({ mediaType, setMediaType, changeGenre }: Props) {
    return (
        <div className='flex justify-center items-center gap-3 py-8 '>
            {mediaType.map((type: any) => {
                return (
                    <button onClick={() =>
                        changeGenre(type.id)} key={type.id} className={`font-extrabold text-xl bg-gradient-to-tr lg:text-2xl transition-all hover:border-2 border-purple-500 hover:py-0   text-transparent py-1 px-2  from-purple-500 to-purple-800
                     rounded-xl ${type.active ? 'text-white hover:text-purple-800 hover:from-purple-100 hover:to-purple-300 bg-gradient-to-tr ' : 'text-transparent bg-clip-text '} `} >
                        {type.title}
                    </button>

                )
            })}


        </div>
    )
}

export default MediaTypeDash