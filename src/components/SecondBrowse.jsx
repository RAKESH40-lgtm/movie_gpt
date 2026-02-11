import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const SecondBrowse = () => {
    const movies = useSelector(state => state.movieData)
    return (
        <>


            {movies.nowPlayingMovies && (
                <div className="bg-black">
                    <div className="mt-0 sm:-mt-32 md:-mt-44 lg:-mt-52 pl-4 sm:pl-6 md:pl-8 lg:pl-12 relative z-20">
                        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                        <MoviesList title={"Trending"} movies={movies.nowPlayingMovies} />
                        <MoviesList title={"Popular"} movies={movies.nowPlayingMovies} />
                        <MoviesList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
                        <MoviesList title={"Horror"} movies={movies.nowPlayingMovies} />
                    </div>
                </div>)}
        </>
    )
}

export default SecondBrowse