import React from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import Jumbotron from '../../components/modules/Jumbotron'
import SectionEnjoy from '../../components/modules/SectionContents/SectionEnjoy'
import SectionDownload from '../../components/modules/SectionContents/SectionDownload'

const Landing = () => {
  return (
    <DefaultLayout>
        <Jumbotron/>
        <SectionEnjoy/>
        <SectionDownload/>
    </DefaultLayout>
  )
}

export default Landing