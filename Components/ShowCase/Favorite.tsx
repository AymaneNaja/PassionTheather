'use client '


import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { useGetUserFavsQuery, useDeleteUserFavsMutation, usePostUserFavsMutation } from '../../api/redux/UserApi'
import { useSession } from 'next-auth/react';
type Props = {}

function Favorite({ id, type }: { id: string, type: string }) {
    const [err, setErr] = useState('')
    const { data: session } = useSession()
    const { data, isLoading, isSuccess, isError } = useGetUserFavsQuery({ id: session?.user?.id })
    const [PostFav] = usePostUserFavsMutation()
    const [DeleteFav] = useDeleteUserFavsMutation()
    function handleFavorites() {

        if (data.some((f: any) => f.id == id)) {
            return DeleteFav({ id: id.toString(), user_id: session?.user?.id })
        }
        return PostFav({ id: id.toString(), user_id: session?.user?.id, type: type })
    }
    return (
        <div>
            {isLoading ? <div className={'w-12 h-12 rounded-full skeleton'} /> : null}
            {isSuccess ?
                <div onClick={() => handleFavorites()}>
                    <label className="swap swap-flip text-9xl">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" />

                        <div className={` rounded-full ring-rose-500 ring-2 p-2 bg-rose-50 text-rose-500  ${data?.some((i: any) => i.id === id) ? `swap-on` : 'swap-off'}`}>                <FaHeart size={24} />
                        </div>
                        <div className={` rounded-full ring-rose-500 ring-2 p-2 bg-rose-500 text-white ${!data?.some((i: any) => i.id === id) ? `swap-on` : 'swap-off'}`}>                <FaHeart size={24} />
                        </div>
                    </label> </div> : null}
        </div>
    )
}

export default Favorite