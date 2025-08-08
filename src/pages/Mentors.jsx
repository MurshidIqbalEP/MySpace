import MentorsFooter from "../compononts/MentorsFooter"
import MentorsHero from "../compononts/MentorsHero"
import MentorsLst from "../compononts/MentorsLst"
import MentorsMousecatcher from "../compononts/MentorsMousecatcher"
import MentorsNav from "../compononts/MentorsNav"
import MentorsSection from "../compononts/MentorsSection"
import MentorsSubHero from "../compononts/MentorsSubHero"

const Mentors = () => {
  return (
    <div className="w-full h-screen bg-white">
       {/* < MentorsMousecatcher /> */}
        <MentorsNav/>
        <MentorsHero />
        <MentorsSubHero />
        <MentorsSection />
        <MentorsLst />
        <MentorsFooter />
    </div>
  )
}

export default Mentors