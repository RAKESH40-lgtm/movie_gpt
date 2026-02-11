import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className="w-24 sm:w-32 md:w-40 lg:w-48 pr-2 sm:pr-3 md:pr-4">
            <img
                alt="Movie Card"
                src={IMG_CDN_URL + posterPath}
                className="w-full h-auto"
            />
        </div>
    )
}

export default MovieCard