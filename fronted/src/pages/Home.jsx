import { HomePost } from "../components/HomePosts"
import {Navbar} from "../components/Navbar"
import { Footer } from "../components/Footer"

export const Home = () => {
  return (
    <>
          <Navbar />
    <div>
      {/* component is exported as HomePost, not HomePosts */}
      <HomePost/>
      <HomePost/>
      <HomePost/>
      <HomePost/>
      <HomePost/>
    </div>
     <Footer />
    </>
  )
}
