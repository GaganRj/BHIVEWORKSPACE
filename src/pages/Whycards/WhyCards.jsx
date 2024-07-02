import img1 from '../../../public/images/icons/1.png'
import img2 from '../../../public/images/icons/2.png'
import img3 from '../../../public/images/icons/3.png'
import img4 from '../../../public/images/icons/4.png'
import img5 from '../../../public/images/icons/5.png'
import img6 from '../../../public/images/icons/6.png'
import img7 from '../../../public/images/icons/7.png'
import img8 from '../../../public/images/icons/8.png'

import Style from './whycards.module.css'


const WhyCards = () => {

  const data = [
    { id: "1", title: "Community Events", icon: img1 },
    { id: "2", title: "Gym Facilites", icon: img2 },
    { id: "3", title: "HightSpeed Wifi", icon: img3 },
    { id: "4", title: "Cafe & Tea Bar", icon: img4 },
    { id: "5", title: "Affordable", icon: img5 },
    { id: "6", title: "Comfort Lounges", icon: img6 },
    { id: "7", title: "Quick Booking", icon: img7 },
    { id: "8", title: "Sports Area", icon: img8 },
  ]

  return (
    <div className={Style.container}>
      <div className={Style.text}>Why Choose Us?</div>
      <div className={Style.boxcontainer}>
        {data.map((item) => (
          <div key={item.id} className={Style.boxes}>
            <img src={item.icon} alt={item.title} />
            <div className={Style.boxtext}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyCards
