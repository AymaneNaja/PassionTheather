'use client'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import logo from '../../photos/For Web/png/Color logo - no background.png'

type Props = {}

function Signout({ }: Props) {
    const { data, status } = useSession()
    const router = useRouter()

    return (
        <div className="modal modal-open " role="dialog" id="my_modal_8">
            <div className="modal-box">
                <img src={logo.src} alt={'...'}
                    className=" w-44 mx-auto" />
                <p className="py-4 first-letter:uppercase text-center font-semibold">{data?.user?.name} are you sure you want to sign out?</p>
                <div className="modal-action">
                    <button onClick={() => router.back()} className="btn font-bold">No,Cancel</button>
                    <button onClick={async () => {
                        await signOut()
                        router.back()
                        router.refresh()
                    }} className=" p-2 rounded-lg text-center hover:bg-white hover:ring-rose-500 ring-2 transition-all hover:text-rose-500 ring-transparent bg-rose-500 text-white font-bold ">Yes,sign out</button>
                </div>
            </div>
        </div>
    )
}

export default Signout