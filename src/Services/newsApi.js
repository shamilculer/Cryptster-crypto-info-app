import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const headers = {
    'content-type': 'application/octet-stream',
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'a5a127b871msh738be9b5e986615p1c8934jsncdcfbb1d83b8',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news"

const createRequest = (url) => ({url, headers : headers})

export const newsApi = createApi({
    reducerPath : "newsApi",
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getNews : builder.query({
            query : ({newsCategory, count}) => createRequest(`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {
    useGetNewsQuery
} = newsApi