import React from 'react'
import BrowseLayout from '@layouts/BrowseLayout'
import Jumbotron from '@mods/BrowsePage/Jumbotron'
import MovieList from '@/components/modules/BrowsePage/MovieList'

const Browse = () => {
  return (
    <BrowseLayout>
      <Jumbotron/>
      <MovieList title={"Popular Movie"}/>
      <MovieList title={"Top Rated Movie"}/>
      <MovieList title={"Upcoming Movie"}/>
    </BrowseLayout>
  )
}

export default Browse