import MovieCard from "./MovieCard"

const MoviesList = ({ title, movies }) => {
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-12">
            <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl py-3 md:py-4 text-white font-semibold">
                {title}
            </h1>
            <div className="flex overflow-x-scroll scrollbar-hide -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="flex gap-2 sm:gap-3 md:gap-4">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default MoviesList