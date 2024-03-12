'use client'
import Tvshow from '@/Components/Tv/Tvshow'
import React from 'react'

type Props = {}

const tv = ({ params }: { params: { Tvid: string } }) => {
    return (
        <><Tvshow id={params.Tvid} />
        </>
    )
}

export default tv