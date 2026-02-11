import { useSelector } from 'react-redux'

import useBackgroundTrailer from '../utils/useBackgroundTrailer'

const BackgroundVideo = ({ id }) => {
    const trailerVideo = useSelector(state => state.movieData.trailer)
   useBackgroundTrailer(id)
    return (
        <div className=" w-screen">
            <iframe
                className="w-screen aspect-video"
                src={
                    "https://www.youtube.com/embed/" +
                    trailerVideo?.key +
                    "?&autoplay=1&mute=1"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
            ></iframe>
        </div>

    )
}

export default BackgroundVideo