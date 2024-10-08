import React from 'react'
import BrowseLayout from '@layouts/BrowseLayout'
import Jumbotron from '@mods/BrowsePage/Jumbotron'
import MovieList from '@mods/BrowsePage/MovieList'
import Modal from '@mods/BrowsePage/Modal'

const Browse = () => {
  return (
    <BrowseLayout>
      <Jumbotron/>
      <MovieList title={"Popular Movie"}/>
      <MovieList title={"Top Rated Movie"}/>
      <MovieList title={"Upcoming Movie"}/>
      <Modal/>
    </BrowseLayout>
  )
}

export default Browse