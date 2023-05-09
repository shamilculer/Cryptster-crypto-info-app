import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeader = {
    'X-RapidAPI-Key': 'a5a127b871msh738be9b5e986615p1c8934jsncdcfbb1d83b8',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com/"

const createRequest = (url) => ({ url, headers: cryptoApiHeader })

export const cryptoApi = createApi({
    reducerPath : "cryptoApi",
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails : builder.query({
            query : (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory : builder.query({
            query : ({coinId , timePeriod}) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`)
        })
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi
