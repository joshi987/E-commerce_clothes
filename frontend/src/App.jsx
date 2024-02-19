import './App.css'
import LatestBrand from './customer/components/HomeSectionCarosel/heading/LatestBrand'
import Navigation from './customer/components/Navigation'
import HomePages from './customer/pages/HomePages'




function App() {

  return (
    <>
    <div className="app">
    <Navigation/>
    <div>
      <HomePages/>
    </div>
    </div>
    </>
  )
}

export default App
