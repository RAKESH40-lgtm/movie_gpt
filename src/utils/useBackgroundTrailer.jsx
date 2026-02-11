import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { options, videoPlay } from './constants'
import { addTrailerVideoDetails } from './moviesSLice'

const useBackgroundTrailer = (id) => {
    const dispatch = useDispatch()
    const getTrailerVideo = async () => {
        const trialerdata = await fetch(videoPlay(id), options)
        const data = await trialerdata.json()
        const findTrailer = data.results.find(item => item.type === "Trailer")
        console.log(findTrailer)
        dispatch(addTrailerVideoDetails(findTrailer))
    }
    useEffect(() => {
        getTrailerVideo()
    },[])
  return (
    <div>useBackgroundTrailer</div>
  )
}

export default useBackgroundTrailer