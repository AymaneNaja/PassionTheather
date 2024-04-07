
import Favorites from '../../Components/Favorites/Favorites'
import { useSession } from 'next-auth/react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Favorites />
        </div>
    )
}

export default page