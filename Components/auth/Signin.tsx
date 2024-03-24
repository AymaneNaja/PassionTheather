'use client'
import logo from '../../photos/For Web/png/Color logo - no background.png'
import logoWhite from '../../photos/For Web/png/White logo - no background.png'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
function Signin() {
    const [email, setEmail] = useState<string>('')
    const [err, setErr] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [password, setPassword] = useState<string>('')
    const router = useRouter()


    async function handleSignin() {
        if (email && password) {
            setLoading(true)
            setErr('')
            const userSignin = await signIn('credentials', { email: email, password: password, redirect: false })
            if (userSignin?.ok) {

                return router.back()
            }
            else if (userSignin?.error) {
                setErr('something went wrong with your credentials and password combination - please try again.... ')
            }
            setLoading(false)
        }
    }
    return (
        <div className="min-h-screen  text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white  sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img src={logo.src} alt={'...'}
                            className=" w-44 mx-auto" />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Sign in
                        </h1>
                        <div className="w-full flex-1 mt-8">

                            <div className="flex flex-col items-center">
                                {err.length >= 1 ? <div className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-rose-500 text-white flex items-center justify-center transition-all duration-300 my-5 text-center'>{err}</div> : null}
                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4" />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853" />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04" />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335" />
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Sign in with Google
                                    </span>
                                </button>

                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                    <div className="bg-white p-1 rounded-full">
                                        <svg className="w-6" viewBox="0 0 32 32">
                                            <path fill-rule="evenodd"
                                                d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Sign in with GitHub
                                    </span>
                                </button>
                            </div>

                            <div className="my-12 border-b text-center">
                                <div
                                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or sign in with e-mail
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 mt-5 focus:bg-white"
                                    type={'email'} placeholder={'Email'} />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password" placeholder="Password" />

                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSignin()
                                    }}
                                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ">
                                    {loading ? <div className='loading loading-spinner text-white '></div> : null}
                                    <span className="ml-3">
                                        Sign Up
                                    </span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    {`I agree to abide by passion theatre`}
                                    <a href="#" className="border-b border-gray-500 border-dotted px-0.5">
                                        Terms of Service
                                    </a>
                                    and its
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1  text-center hidden lg:flex">
                    <div className="w-10/12  bg-cover bg-center bg-no-repeat  bg-opacity-30 rounded-xl  flex flex-col justify-center items-center  mx-auto gap-10 bg-black "
                        style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/7476604/pexels-photo-7476604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") `, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "cover" }}>
                        <img src={logoWhite.src} alt={'...'}
                            className=" w-2/4 mx-auto" />
                        <p className='font-semibold text-white text-opacity-90 w-10/12 text-lg'>{`Passion Theater is not just another movie and TV show app; it's a cinematic sanctuary meticulously crafted for fervent cinephiles and television aficionados alike. Seamlessly blending innovation with a deep reverence for storytelling, Passion Theater is your ultimate destination for immersive entertainment experiences.

At the heart of Passion Theater lies an expansive library that spans genres, eras, and cultures, offering an unparalleled selection of movies and TV shows from around the globe. Whether you're in the mood for gripping dramas, heart-pounding thrillers, side-splitting comedies, or soul-stirring documentaries, Passion Theater has something to captivate every discerning viewer.

But Passion Theater isn't just about content; it's about curating unforgettable journeys through the world of cinema. Our intuitive interface invites users to embark on personalized voyages of discovery, effortlessly navigating through curated collections, personalized recommendations, and thematic playlists tailored to individual tastes and preferences.

With Passion Theater, the movie-watching experience transcends the confines of a mere screen. Our state-of-the-art streaming technology ensures seamless playback in stunning high definition, delivering crystal-clear visuals and immersive sound that transport viewers to the heart of the action, no matter where they are.`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin