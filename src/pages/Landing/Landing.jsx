import Style from './landing.module.css';
import video from '../../../public/images/landingvideo.mp4';

const Landing = () => {
    return (
        <div className={Style.container}>
            <div className={Style.vector}></div>
                <div className={Style.text}>Host your meeting with world-class amenities. Starting at <span style={{color:"#F2B304"}}>₹199/-!</span></div>
                <div className={Style.videoContainer}>
                    <video className={Style.video} autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
        </div>
    );
}

export default Landing;
