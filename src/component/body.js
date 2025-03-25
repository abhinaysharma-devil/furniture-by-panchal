
import React from 'react';
import { useState, useEffect } from 'react';
import homePageImg1 from '../assests/images/home_img_1.JPEG';
import homePageImg2 from '../assests/images/home_img_2.JPEG';
import homePageImg3 from '../assests/images/home_img_3.JPEG';
import clock from '../assests/images/clock.png';
import thumb_up_finger from '../assests/images/thumb_up_finger.png';
import Indian_rupee_logo from '../assests/images/Indian_rupee_logo.png';
import thumb_up_map from '../assests/images/thumb_up_map.png';
import { useNavigate } from 'react-router-dom';
import { serviceDetails } from '../../src/data/dataset';
import '../assests/css/common.css'

import only_sofa from '../assests/images/sofa_png.png';
import wood_storage_1 from '../assests/images/wood_storage_1.png';
import bed_1 from '../assests/images/bed-1.png';
import table_1 from '../assests/images/table_1.png';

export const Body = () => {

    const [serviceState] = useState(serviceDetails)

    const navigate = useNavigate()

    function gotoServices(item) {
        navigate("/services" + `/${item.service_title}`, { state: { data: item } })
    }


    const images = [
        {
            src: homePageImg1,
            alt: 'Image 1'
        },
        {
            src: homePageImg2,
            alt: 'Image 2'
        },
        {
            src: homePageImg3,
            alt: 'Image 3'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Set up automatic slide change every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide(); // Automatically go to next slide
        }, 3000); // 10 seconds interval

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <>
            <div className="root-body">
                <div className='top-slider'>
                    <span className='top-slider-mail' style={{ marginLeft: "5vw" }} >panchalabhinay@gmail.com / +918358985420</span>
                    {/* <span className='top-slider-phone'>+918358985420</span> */}
                </div>
                {/* <img src={taxImg} style={{ width: "100%", padding: "0px 4px", objectFit: "cover" }} /> */}

                <div className="slider-container">
                    <div className="slider">
                        <button className="prev" onClick={prevSlide}>
                            &#10094;
                        </button>
                        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="slider-image" />
                        <button className="next" onClick={nextSlide}>
                            &#10095;
                        </button>
                    </div>
                    <div className="dots-container">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>

                </div>

                <div className='categories-type-div-class' >
                    <h1 id='categories-title'>Categories</h1>
                    <div style={{ display: "flex" }}>
                        <span className='categories-type-class'>
                            <div style={{ width: "300px", height: "300px" }} >
                                <img className='categories-img' src={only_sofa} alt="" style={{ width: "300px", objectFit: "cover", paddingTop: "40px" }} />
                            </div>
                            <p>Grab your best sofa</p>
                            <h5>From 2999/-</h5>
                        </span>
                        <span className='categories-type-class'>
                            <div style={{ width: "300px", height: "300px" }} >
                                <img className='categories-img' src={bed_1} alt="" style={{ width: "380px", objectFit: "cover", paddingRight: "60px", paddingTop: "20px" }} />
                            </div>
                            <p>Best bed</p>
                            <h5>From 2999/-</h5>
                        </span>
                        <span className='categories-type-class'>
                            <div style={{ width: "300px", height: "300px" }} >
                                <img className='categories-img' src={wood_storage_1} alt="" style={{ width: "200px", objectFit: "cover", paddingTop: "40px" }} />
                            </div>
                            <p>Wooden Storage</p>
                            <h5>From 2999/-</h5>
                        </span>
                        <span className='categories-type-class'>
                            <div style={{ width: "300px", height: "300px" }} >
                                <img className='categories-img' src={table_1} alt="" style={{ width: "250px", objectFit: "cover", paddingTop: "50px" }} />
                            </div>
                            <p>Wooden Storage</p>
                            <h5>From 2999/-</h5>
                        </span>
                    </div>
                </div>

                <div style={{ width: "62%", margin: "auto" }}>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 m-2">
                        {serviceState.map((item, index) => {
                            return (
                                <>
                                    <div className="card-items" key={item.service_title} onClick={() => { gotoServices(item) }} >
                                        <img src={item.img_name} key={item.service_title} style={{ width: "300px", height: "300px", borderRadius: "10px 10px 0 0", display: "grid" }} />
                                        <div className="card-title bg-dark" key={index} >{item.service_title}</div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="first-add" style={{ height: "228px", marginTop: "70px", display: "flex" }}>
                    <img src={thumb_up_map} alt="" width={"300px"} style={{ marginLeft: "15%", marginTop: "-70px" }} />
                    <div style={{ margin: "auto 40px", color: "#f8faf7" }} className='font-family-class'>
                        <h1>Fill Your ITR</h1>
                        <p>At Taxify, we take care of Accounting, Business, Compliance, and handle end-to-end solutions.</p>
                        {/* <button className='' style={{ width: "150px", height: "40px", border: "none", borderRadius: "10px", color: "#f8faf7", backgroundColor: "#fd721c" }}>Get Started</button> */}
                    </div>
                </div>
                <div style={{ margin: "5% 15%", display: "block" }}>
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", marginTop: "20px", marginRight: "160px" }}>
                            <div style={{ border: "3px solid #0e8201", width: "80px", height: "80px", borderRadius: "50%", marginRight: "10px" }}>
                                <img src={clock} width={"30px"} height={"30px"} style={{ position: "relative", left: "23px", top: "21px" }} />
                            </div>
                            <div className='font-family-class' style={{ margin: "auto 0" }}>
                                <h4>Quick Customer Support</h4>
                                <p>Queries are responded within 24 hours</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "20px" }}>
                            <div style={{ border: "3px solid #0e8201", width: "80px", height: "80px", borderRadius: "50%", marginRight: "10px" }}>
                                <img src={thumb_up_finger} width={"30px"} height={"30px"} style={{ position: "relative", left: "23px", top: "21px" }} />
                            </div>
                            <div className='font-family-class' style={{ margin: "auto 0" }}>
                                <h4>Easy-to-use dashboard</h4>
                                <p>Streamlined navigation for service requests and tracking.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", marginTop: "20px", marginRight: "40px" }}>
                            <div style={{ border: "3px solid #0e8201", width: "80px", height: "80px", borderRadius: "50%", marginRight: "10px" }}>
                                <img src={Indian_rupee_logo} width={"30px"} height={"30px"} style={{ position: "relative", left: "23px", top: "21px" }} />
                            </div>
                            <div className='font-family-class' style={{ margin: "auto 0" }}>
                                <h4>Affordable Professional Services</h4>
                                <p>Proven legal and financial solutions with senior experts.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "20px" }}>
                            <div style={{ border: "3px solid #0e8201", width: "80px", height: "80px", borderRadius: "50%", marginRight: "10px" }}>
                                <img src={Indian_rupee_logo} width={"30px"} height={"30px"} style={{ position: "relative", left: "23px", top: "21px" }} />
                            </div>
                            <div className='font-family-class' style={{ margin: "auto 0" }}>
                                <h4>Affordable Professional Services</h4>
                                <p>Proven legal and financial solutions with senior experts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};