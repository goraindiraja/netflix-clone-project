import React from 'react'
import BrowseLayout from '@layouts/BrowseLayout'
import Jumbotron from '@mods/BrowsePage/Jumbotron'
import MovieList from '@mods/BrowsePage/MovieList'
import Modal from '@mods/BrowsePage/Modal'
import SearchMovies from '@mods/BrowsePage/SearchMovies'

import { useAtom } from 'jotai'
import { searchMoviesAtom } from '@/jotai/atoms'

const Browse = () => {
  const [searchQuery] = useAtom(searchMoviesAtom)

  return (
    <BrowseLayout>
    {searchQuery ? (
      <SearchMovies/>
    ) : (
      <>
        <Jumbotron/>
        <MovieList title={"Now Playing"} moviesType={'now_playing'}/>
        <MovieList title={"Popular Movie"} moviesType={'popular'}/>
        <MovieList title={"Top Rated Movie"} moviesType={'top_rated'}/>
      </>
    )}
      <Modal/>
    </BrowseLayout>
  )
}

export default Browse