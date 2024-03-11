'use client'
import { SingleCard } from './SingleCard';
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';


type Props = {
    hidePagnation?: boolean,
    total_pages?: any,
    list_title: string,
    data: any,
    type?: string,
    pagnation?: boolean
    page?: any,
    setPage?: React.Dispatch<React.SetStateAction<any>>,
};

const ListCard = ({
    total_pages,
    data,
    list_title,
    type,
    pagnation,
    page,
    setPage,
    hidePagnation

}: Props) => {

    const handlePagnation = (event: React.ChangeEvent<unknown>, value: number) => {
        window.scrollTo(0, 0)
        if (setPage) {
            return setPage(value);
        }

    };
    const [showMore, setShowMore] = useState<boolean>(false)
    const [cardNumber, setcardNumber] = useState<number>(1)
    return <div className={`grid   animate-Card  overflow-hidden transition-all max-w-[1860px]   w-full lg:w-10/12 m-auto  ${pagnation ? 'mb-10' : ''}     `}>
        <div className='w-full flex justify-between items-baseline  mx-auto px-2 pb-2 '>
            <h1 className='text-5xl  bg-gradient-to-r text-transparent bg-clip-text from-indigo-400 to-violet-800 font-extrabold animate-text  transition ease-in mb-2  '>{decodeURI(list_title).replace('%26', '&')}</h1>
            {pagnation === false && data.length >= 4 ? <button title={'show more'}
                onClick={() => setShowMore(prev => !prev)}
                className='font-bold text-slate-400 text-2xl hover:text-slate-600 transition-all '>{showMore ? 'show less' : 'show more'}</button> : <div />}
        </div>
        <div className={` mx-auto px-3  w-full   relative grid gap-3   max-[500px]:grid-cols-2 grid-cols-3 py-1 2xl:grid-cols-6 xl:grid-cols-6  lg:grid-cols-5 sm:grid-cols-4 md:grid-cols-5 sm:px-2 
        ${!showMore && !pagnation ? 'lg:h-[30rem] min-[1400px]:h-[34rem] h-[32rem] sm:h-[28rem] overflow-hidden' : ' h-fit'} ${pagnation ? 'h-fit' : ''}  `}>

            {data.map((item: any) => {
                return <SingleCard
                    pagnation={pagnation}
                    type={type}
                    showMore={showMore}
                    key={item.id}
                    adult={item.adult}
                    media_type={item.media_type}
                    id={item.id}
                    title={item.title ? item.title : item.name}
                    poster_path={item.poster_path}
                    original_language={item.original_language}
                    overview={item.overview}
                    vote_average={item.vote_average}
                />
            })}
        </div>
        {pagnation && !hidePagnation ?
            <div className='grid justify-center items-center w-full py-3'>
                <Pagination
                    count={total_pages}
                    page={page}
                    size="large"
                    color="secondary"
                    shape="rounded"
                    onChange={handlePagnation}
                />
            </div>
            : null}

    </div>
};

export default ListCard
