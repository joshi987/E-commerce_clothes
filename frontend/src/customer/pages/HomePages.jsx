import { menskurta } from '../../data/menskurta'
import MainCarosel from '../components/HomeComponents/MainCarosel'
import HomeSectionCarosel from '../components/HomeSectionCarosel/HomeSectionCarosel'
import CustomImageList from '../components/customizeimage/CustomImageList'
// import Footer from '../components/footer/Footer'
// import Addcart from '../components/addcart/Addcart'
import FlexContainer from '../components/grid/FlexContainer'
import Brand from '../components/footer/brandlog/Brand'
import LatestBrand from '../components/HomeSectionCarosel/heading/LatestBrand'
import { useEffect,useState } from 'react'
import { getLoginStatus } from '../../services/authServices'
import Sign from '../components/signin/Sign'




function HomePages() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{ 
    const fetchLoginStatus = async ()=>{
      try{
        const loggedin = await getLoginStatus();
        setIsLoggedIn(loggedin)
      }catch(error){
        console.error("Error checking login status:", error);

      }
      finally {
        setIsLoading(false);
      }
    }
    fetchLoginStatus();
  },[])
  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <div>
      <>
        <MainCarosel />
        <LatestBrand />
        <div className='space-y-10 py-20 flex flex-col justify-center '>
          <HomeSectionCarosel data={menskurta} />
          <HomeSectionCarosel data={menskurta} />
        </div>
        <FlexContainer />
        <div className="image-List">
          <CustomImageList />
        
        </div>
        <br/><br/><br/><br/>
        <Brand/>
      </>
   
  </div>
  )
}

export default HomePages