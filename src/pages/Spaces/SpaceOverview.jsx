
import { ChevronsRight, MoveRight, Navigation } from 'lucide-react';
import Style from './spaceoverview.module.css';
import img1 from '../../../public/images/offices/img1.png';
import { officeData } from '../../components/data/data';

const SpaceOverview = () => {

    const openGoogleMaps = (location) => {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        window.location.href = mapsUrl; // Redirects to Google Maps in the same tab
    };

    return (
        <div className={Style.container}>
            <div className={Style.arr}>
                <div className={Style.heading}>
                    Our Space<span className={Style.s}>s</span> <span className={Style.overview}>Overview</span>
                </div>
                <div className={Style.arrowicon}><MoveRight color="#FFCF4B" size={34} strokeWidth={1.25} /></div>
            </div>
            <div className={Style.offimaincon}>
                {
                    officeData.map((data) => (
                        <div className={Style.cards} key={data.id}>
                            <div className={Style.headboxcon}>
                                <div className={Style.cardheading}>{data.name}</div>
                                <div className={Style.smbox}>
                                    <a href="#" onClick={() => openGoogleMaps(data.google_maps_url)}>
                                        <div>
                                            <Navigation size={22} color="#000000" strokeWidth={0.95} />
                                        </div>
                                        <div className={Style.km}>6km</div>
                                    </a>
                                </div>
                            </div>
                            <br />
                            <div className={Style.imageContainer}>
                                <span className={Style.workspace}>{data.description}</span>
                                <img src={img1} alt="Workspace" className={Style.image} />
                            </div>
                            <br />
                            <div className={Style.butcon}>
                                <div className={Style.button1}>
                                    <div>
                                        <div className={Style.pass}>Day pass</div>
                                        <div className={Style.amount}>₹ {data.day_pass_price}<span className={Style.day}>/Day</span></div>
                                    </div>
                                    <div><ChevronsRight size={28} color="#000000" strokeWidth={1} /></div>
                                </div>
                                <div className={Style.button2con}>
                                    <div className={Style.button2}>
                                        <span className={Style.dicount}>{data.day_pass_discounts_percentage[10].value}% discount</span>
                                        <div>
                                            <div className={Style.pass}>Day pass</div>
                                            <div className={Style.amount}>₹ {Math.floor(data.day_pass_price * 10 * (1 - data.day_pass_discounts_percentage[10].value / 100))}
                                                <span className={Style.day}>/10 Days</span>
                                            </div>
                                        </div>
                                        <div><ChevronsRight size={28} color="#000000" strokeWidth={1} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SpaceOverview;
