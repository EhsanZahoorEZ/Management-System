import HeroSection from '@/app/Components/HeroSection/HeroSection'
import PageSearch from '../Components/PageSearch/PageSearch';
import Gallery from '../Components/Gallery/Gallery';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import FeaturedRoom from '../Components/FeaturedRoom/FeaturedRoom';
import { getFeaturedRoom } from '../libs/apis';

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();
  
  

  return (
    <>
      <HeroSection/> 
      <PageSearch/> 
      <FeaturedRoom  featuredRoom={featuredRoom}/>
      <Gallery/>
      <NewsLetter/>
    </>
  );  
};


export default Home;
