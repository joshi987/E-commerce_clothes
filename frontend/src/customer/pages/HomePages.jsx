import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { menskurta } from '../../data/menskurta'
import MainCarosel from '../components/HomeComponents/MainCarosel'
import HomeSectionCarosel from '../components/HomeSectionCarosel/HomeSectionCarosel'
import CustomImageList from '../components/customizeimage/CustomImageList'
import Footer from '../components/footer/Footer'
import Addcart from '../components/addcart/Addcart'
import FlexContainer from '../components/grid/FlexContainer'
import Brand from '../components/footer/brandlog/Brand'
import LatestBrand from '../components/HomeSectionCarosel/heading/LatestBrand'



function HomePages() {
  return (
    <div>
    <MainCarosel/>
    <LatestBrand/>
    <div className='space-y-10 py-20 flex flex-col justify-center '>
    <HomeSectionCarosel data={menskurta}/>
    <HomeSectionCarosel data={menskurta}/>
    </div>
    <FlexContainer/>
    <div className="image-List">
    <CustomImageList/>
    
    </div><br/> <br/><br/><br/>
  {/* <div className="footer">
    <Footer/>
  </div> */}
    {/* <Addcart/> */
    }
    <Brand/>
    </div>
  )
}

export default HomePages