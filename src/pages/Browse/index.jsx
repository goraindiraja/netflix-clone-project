import React from 'react'
import BrowseLayout from '@layouts/BrowseLayout'
import Jumbotron from '@mods/BrowsePage/Jumbotron'
import MovieList from '@mods/BrowsePage/MovieList'
import Modal from '@mods/BrowsePage/Modal'

const Browse = () => {
  return (
    <BrowseLayout>
      <Jumbotron/>
      <MovieList title={"Now Playing"} moviesType={'now_playing'}/>
      <MovieList title={"Popular Movie"} moviesType={'popular'}/>
      <MovieList title={"Top Rated Movie"} moviesType={'top_rated'}/>
      {/* <MovieList title={"Upcoming Movie"} moviesType={'upcoming'}/> */}
      <Modal/>
    </BrowseLayout>
  )
}

export default Browse