import { useSelector } from "react-redux"
import useNowPlaing from "../utils/useNowPlaing"
import Title from "./Title"
import BackgroundVideo from "./BackgroundVideo"


const MainBrowse = () => {
    useNowPlaing()
    const nowPlayingMovieList = useSelector(state => state.movieData.nowPlayingMovies)
    if (nowPlayingMovieList === null) return
    const { title, overview, id } = nowPlayingMovieList[0]
    return (
        <div className="relative bg-black pt-[56.25%] sm:pt-[40%] md:pt-0">
            <Title title={title} overview={overview} />
            <BackgroundVideo id={id} />
        </div>
    )
}

export default MainBrowse