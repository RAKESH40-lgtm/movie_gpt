import React , { useEffect }from 'react'
import { nowPlaying, options } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/moviesSLice'
import { useDispatch } from 'react-redux'
const useNowPlaing = () => {
    const dispatch =useDispatch()
    const getNowPlaying = async () => {

        const fetchData = await fetch(nowPlaying, options)
        const data = await fetchData.json()
        dispatch(addNowPlayingMovies(data?.results))
      
    }
    useEffect(() => {
       getNowPlaying()
       
    }, [])
  
}

export default useNowPlaing