import React from "react";
import { nanoid } from '@reduxjs/toolkit';

export function Detail({
    production_companies,
    production_countries,
    release_date,
    budget,
    revenue
}: { production_companies: any, production_countries: any, release_date: string, budget: number | string, revenue: number | string }) {
    return <div className='py-4 flex flex-wrap justify-start items-center font-semibold gap-1  text-slate-900  '>
        Released on {new Date(release_date).toDateString()} produced by
        {production_companies.map((company: any) => {
            return <p className='bg-gradient-to-r bg-clip-text from-red-500 to-red-600 cursor-pointer ' key={company.id}>{company.name}</p>;
        })} in {production_countries.map((country: any) => {
            return <p className='bg-gradient-to-r bg-clip-text 
                            cursor-pointer from-indigo-400 to-indigo-700 text' key={nanoid()}>
                {country.name}
            </p>;
        })}
        with a budget of
        <p className='
                        cursor-pointer 
                        bg-gradient-to-t text-transparent  from-emerald-600 to-emerald-700 bg-clip-text
                        '> ${budget.toLocaleString()}</p>,
        estimated revenue <p className='
                        cursor-pointer 
                        bg-gradient-to-t text-transparent  from-emerald-600 to-emerald-700 bg-clip-text
                        '> ${revenue.toLocaleString()}</p>.
    </div>;
}
