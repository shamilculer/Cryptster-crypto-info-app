import {Crypto, CryptoCurrecies, Home, News, PageNotfound} from "../Pages"

const routes = [
    {
        path : '/',
        element : <Home />
    },
    {
        path : '/cryptocurrencies',
        element : <CryptoCurrecies/>
    },
    {
        path : "/crypto/:coinId",
        element : <Crypto />
    },
    {
        path : '/news',
        element : <News />
    },
    {
        path : '*',
        element : <PageNotfound />
    }
]

export default routes