import React from 'react'

type Props = {}

function loading({ }: Props) {
    return (
        <div className={'h-screen w-full bg-white bg-opacity-60 flex justify-center items-center '}>
            <span className="loading loading-spinner text-primary scale-150"></span>
        </div>
    )
}

export default loading