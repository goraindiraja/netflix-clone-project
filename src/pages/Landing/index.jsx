import DefaultLayout from "@layouts/DefaultLayout"
import Footer from "@mods/LandingPage/Footer"
import Jumbotron from "@mods/LandingPage/Jumbotron"
import SectionDownload from "@mods/LandingPage/SectionContents/SectionDownload"
import SectionEnjoy from "@mods/LandingPage/SectionContents/SectionEnjoy"
import SectionFAQ from "@mods/LandingPage/SectionContents/SectionFAQ"
import SectionProfile from "@mods/LandingPage/SectionContents/SectionProfile"
import SectionWatch from "@mods/LandingPage/SectionContents/SectionWatch"

const Landing = () => {
  return (
    <DefaultLayout>
        <Jumbotron/>
        <SectionEnjoy/>
        <SectionDownload/>
        <SectionWatch/>
        <SectionProfile/>
        <SectionFAQ/>
        <Footer/>
    </DefaultLayout>
  )
}

export default Landing