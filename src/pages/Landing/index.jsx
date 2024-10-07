import DefaultLayout from "@layouts/DefaultLayout"
import Footer from "@mods/Footer"
import Jumbotron from "@mods/Jumbotron"
import SectionDownload from "@mods/SectionContents/SectionDownload"
import SectionEnjoy from "@mods/SectionContents/SectionEnjoy"
import SectionFAQ from "@mods/SectionContents/SectionFAQ"
import SectionProfile from "@mods/SectionContents/SectionProfile"
import SectionWatch from "@mods/SectionContents/SectionWatch"

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