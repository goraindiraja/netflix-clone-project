import React from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import Jumbotron from '../../components/modules/Jumbotron'
import SectionEnjoy from '../../components/modules/SectionContents/SectionEnjoy'

const Landing = () => {
  return (
    <DefaultLayout>
        <Jumbotron/>
        <SectionEnjoy/>
    </DefaultLayout>
  )
}

export default Landing