import { menskurta } from "../../../data/menskurta"
import './flexContainer.css'

function FlexContainer() {
  return (
    <div className='flex-container'>
        <div>
         <img src="https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg" className="flex-img" alt="no" />
        </div>
        <div className="flex-text">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
        <div>
        <img src="https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg" className="flex-img2" alt="no" />
        </div>
    </div>
  )
}

export default  FlexContainer