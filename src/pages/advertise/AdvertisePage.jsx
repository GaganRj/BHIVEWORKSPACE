import Style from './advertise.module.css'
import img1 from '../../../public/images/advertise.png'
import play from '../../../public/images/playstore.png'
import apple from '../../../public/images/applestore.png'


const AdvertisePage = () => {
    return (
        <div className={Style.container}>
            <div className={Style.heading}>Download our app now</div>
            <br/>
            <div className={Style.maskconatiner}>
                <div className={Style.boxcontainer}>
                   <div> <div className={Style.imgcont}>
                        <img src={img1} className={Style.adimgclass}/>
                    </div></div>
                    <div className={Style.contentcon}>
                        <div className={Style.contentcontext}>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</div>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"start",gap:"10px",paddingTop:"10px"}}>
                            <div><img src={play} alt='logo' className={Style.imgclass}  /></div>
                            <div><img src={apple} alt='logo' className={Style.imgclass}  /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvertisePage
