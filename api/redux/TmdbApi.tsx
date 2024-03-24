import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Props = {}
type paramTypes = {
    page: number | string,
    genre: string | number,
    sort: string
}


const TmdbApi = createApi({
    reducerPath: 'tmdb-api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/', prepareHeaders: async (headers) => {
            const res = (await fetch('/api/key'))
            const token = await res.json()
            if (token) {
                return headers.set('Authorization', `Bearer ${token.key}`)
            }
        },
    }),

    endpoints: (builder) => ({
        // user
        getPopular: builder.query({
            query: (type) => `https://api.themoviedb.org/3/${type}/popular`
        }),

        getMovie: builder.query({
            query: (id) => `/movie/${id}`
        })
        ,
        getTvshow: builder.query({
            query: (id) => `tv/${id}`
        })
        ,
        getTvshowSeason: builder.query({
            query: ({ id, number }: any) => `tv/${id}/season/${number}`
        })
        ,
        getById: builder.query({
            query: (id) => `find/${id}?external_source=imdb_id`
        })
        ,
        getTvByParams: builder.query({
            query: ({ page, genre, sort }: paramTypes) => `discover/tv?language=en-US&page=${page}&sort_by=${sort}&with_genres=${genre}`
        })
        ,
        getMovieByParams: builder.query({
            query: ({ page, genre, sort }: paramTypes) => `discover/movie?language=en-US&page=${page}&sort_by=${sort}&with_genres=${genre}`
        })
        ,
        getCredits: builder.query({
            query: ({ id, type }) => `/${type}/${id}/credits`
        }),

        getVideos: builder.query({
            query: ({ type, id }) => `${type}/${id}/videos`
        }),
        // genre
        getGenreList: builder.query({
            query: (type: string) => `/genre/${type}/list`
        }),
        // types
        getSimilar: builder.query({
            query: ({ type, id }: { type: string, id: string | number }) => `${type}/${id}/similar`
        }),
        getRecommendation: builder.query({
            query: ({ type, id }: { type: string, id: string | number }) => `${type}/${id}/recommendations`
        }),
        getCollection: builder.query({
            query: (id: number | string) => `/collection/${id}?language=en-US`
        }),
        // person
        getPersonDetails: builder.query({
            query: (id: number | string) => `person/${id}?language=en-US`
        }),
        getPersonMovieCredits: builder.query({
            query: (id: number | string) => `/person/${id}/movie_credits`
        }),
        getPersonTvCredits: builder.query({
            query: (id: number | string) => `person/${id}/tv_credits`
        }),
        // search
        getMultiSearch: builder.query({
            query: ({ query, page }: { page: number, query: string }) => `search/multi?query=${query}&include_adult=true&language=en-US&page=${page} `
        }),
        getSearchMovie: builder.query({
            query: ({ query, page }: { page: number, query: string }) => `search/movie?query=${query}&include_adult=true&language=en-US&page=${page} `
        }),
        getSearchTv: builder.query({
            query: ({ query, page }: { page: number, query: string }) => `search/tv?query=${query}&include_adult=true&language=en-US&page=${page} `
        }),
        getSearchPerson: builder.query({
            query: ({ query, page }: { page: number, query: string }) => `search/person?query=${query}&include_adult=true&language=en-US&page=${page} `
        }),
        getSearchcompany: builder.query({
            query: ({ query, page }: { page: number, query: string }) => `search/company?query=${query}&include_adult=true&language=en-US&page=${page} `
        }),
        getSearchCollection: builder.query({
            query: ({ query, page }: { page: number, query: string }) => `search/collection?query=${query}&include_adult=true&language=en-US&page=${page} `
        }),
        // discovery
        getAllTrending: builder.query({
            query: (time_window: string) => `/trending/all/${time_window} `
        }),
        getTrendingMovies: builder.query({
            query: (time_window: string) => `/trending/movie/${time_window} `
        }),
        getTrendingtvShows: builder.query({
            query: (time_window: string) => `/trending/tv/${time_window} `
        }),
        getTrendingPeople: builder.query({
            query: () => `/person/popular `
        }),
        getIntheaters: builder.query({
            query: (type: string) => `/${type}/now_playing `
        }),
        getTopRated: builder.query({
            query: (type: string) => `/${type}/top_rated`
        }),
        getUpcomingMovies: builder.query({
            query: () => '/movie/upcoming'
        }),
        getAiringToday: builder.query({
            query: () => 'tv/airing_today'
        }),
        getOnTheAir: builder.query({
            query: () => 'tv/on_the_air'
        }),
        getPopularShows: builder.query({
            query: () => '/tv/popular'
        }),
        getTopRatedShows: builder.query({
            query: () => 'tv/top_rated'
        }),
    })
})
export const {
    useGetPopularShowsQuery,
    useGetTopRatedShowsQuery,
    useGetMovieByParamsQuery,
    useGetOnTheAirQuery,
    useGetTvByParamsQuery,
    useGetAiringTodayQuery,
    useGetIntheatersQuery,
    useGetTopRatedQuery,
    useGetUpcomingMoviesQuery,
    useGetTrendingMoviesQuery,
    useGetTrendingPeopleQuery,
    useGetTrendingtvShowsQuery,
    useGetAllTrendingQuery,
    useGetVideosQuery,
    useGetByIdQuery,
    useGetTvshowQuery,
    useGetTvshowSeasonQuery,
    useGetMovieQuery,
    useGetCreditsQuery,
    useGetGenreListQuery,
    useGetSimilarQuery,
    useGetRecommendationQuery,
    useGetCollectionQuery,
    useGetPersonDetailsQuery,
    useGetPersonTvCreditsQuery,
    useGetPersonMovieCreditsQuery,
    useGetMultiSearchQuery,
    useGetPopularQuery,
    useGetSearchCollectionQuery,
    useGetSearchMovieQuery,
    useGetSearchPersonQuery,
    useGetSearchTvQuery,
    useGetSearchcompanyQuery,

} = TmdbApi
export default TmdbApi