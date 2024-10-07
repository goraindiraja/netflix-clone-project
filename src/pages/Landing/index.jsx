import React from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import Jumbotron from '../../components/modules/Jumbotron'
import SectionEnjoy from '../../components/modules/SectionContents/SectionEnjoy'
import SectionDownload from '../../components/modules/SectionContents/SectionDownload'
import SectionWatch from '../../components/modules/SectionContents/SectionWatch'
import SectionProfile from '../../components/modules/SectionContents/SectionProfile'

const Landing = () => {
  return (
    <DefaultLayout>
        <Jumbotron/>
        <SectionEnjoy/>
        <SectionDownload/>
        <SectionWatch/>
        <SectionProfile/>
    </DefaultLayout>
  )
}

export default Landing