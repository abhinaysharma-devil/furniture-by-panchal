import location_logo from '../assests/images/location_logo.png';
import '../assests/css/common.css'

export const ContactUs = () => {
    
    return (
        <>
            <div className="">
                <h4>Contact US</h4>
                <hr style={{ margin: "auto", padding: "10px" }} />
                <div className="contact-us-div">
                    <div className="contact-items-location">
                        <div style={{display: "flex"}}>
                            <img src={location_logo} className='contact-icons'/>
                            <h4>Address : Office</h4>
                        </div>
                        <p className='item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tenetur ab? Voluptatem .</p>
                    </div>
                    <div className="contact-items-location">
                        <div style={{display: "flex"}}>
                            <img src={location_logo} className='contact-icons'/>
                            <h4>Contact</h4>
                        </div>
                        <p className='item-text'>Lorem ipsum dolor sit amet consectetu.</p>
                    </div>
                    <div className="contact-items-location">
                        <div style={{display: "flex"}}>
                            <img src={location_logo} className='contact-icons'/>
                            <h4>Other Contact</h4>
                        </div>
                        <p className='item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tenetur ab? Voluptatem .</p>
                    </div>
                    <div className="contact-items-location">
                        <div style={{display: "flex"}}>
                            <img src={location_logo} className='contact-icons'/>
                            <h4>Mail</h4>
                        </div>
                        <p className='item-text'>Lorem ipsum dolor sit amet consectetu.</p>
                    </div>
                </div>
            </div>
        </>
    )
};