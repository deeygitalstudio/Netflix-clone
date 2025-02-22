import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import banner from '../../assets/hero_banner.jpg'
import bannerText from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import TitleCard from '../../Components/Title_Cards/TitleCard'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
     <Navbar/>
     <div className="hero">
     <img src={banner} alt="" className='bannerImg' />
     <div className="herocap">
      <img src={bannerText} alt="" className='captionImg' />
      <p>Discovering his ties to a secret ancient order, a young man living in modern instabul emabarks on a quest to save the city from an immortal enemy</p>

      <div className="heroBtns --mt">
      <button className='btn btn-dark'><img src={play} alt="" />Play</button>
      <button className='btn'><img src={info} alt="" />Info</button>
      </div>
      <TitleCard />
     </div>
     </div>
     <div className="moreCards">
     <TitleCard title={"Blockbuster Movies"} category={'top_rated'} />
     <TitleCard title={"Only on Netflix"} category={'popular'}/>
     <TitleCard title={'Upcoming'} category={'upcoming'}/>
     <TitleCard title={'Top picks for you'} category={'now_playing'}/>
     </div>
     <Footer />
    </div>
  )
}

export default Home