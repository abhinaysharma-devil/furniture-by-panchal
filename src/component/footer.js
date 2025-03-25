import { Link } from 'react-router-dom';
import twitter_img from '../assests/images/bird.png';
import fb_img from '../assests/images/fb.png';
import insta_img from '../assests/images/insta.png';
import '../assests/css/footer.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { serviceDetails } from '../../src/data/dataset';


export const Footer = () => {
    const [serviceState] = useState(serviceDetails)
    const navigate = useNavigate()

    function gotoServices(item) {
        navigate("/services/x", { state: { data: item } })
    }
    return (
        <>
            <div className="bg-dark text-light footer-main-div">
                <footer
                    className="text-center text-lg-start text-white">
                    <div className="container p-4 pb-0">
                        <section className="">
                            <div className="row">
                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Quick Links</h6>
                                    <p>
                                        <a className="text-white">Home</a>
                                    </p>
                                    <p>
                                        <a className="text-white">Contact US</a>
                                    </p>
                                    <p>
                                        <a className="text-white">About US</a>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="mx-auto mt-3 ml-5">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href='https://incometaxindia.gov.in/Pages/default.aspx' target="__blank" className="btn-class">Income tax Dept.</a>
                                    </p>
                                    <p>
                                        <a href="https://www.cbic.gov.in/" target="__blank" className="btn-class">Central Board of Excise & Customs</a>
                                    </p>
                                    <p>
                                        <a href="https://www.incometax.gov.in/iec/foportal/" target="__blank" className="btn-class">E-Tax Information Network</a>
                                    </p>
                                    <p>
                                        <a href="https://www.mca.gov.in/content/mca/global/en/home.html" target="__blank" className="btn-class">Ministry of Company Affairs</a>
                                    </p>
                                    <p>
                                        <a href="https://www.epfindia.gov.in/site_en/index.php" target="__blank" className="btn-class">Employees Provident Fund</a>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />
                                <div className="mx-auto mt-3 ml-5">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Services
                                    </h6>
                                    {serviceState.map((item, index) => {
                                        return (
                                            <>
                                                <p >
                                                    <a href='' className="btn-class" key={index} onClick={() => { gotoServices(item) }}>{item.service_title}</a>
                                                </p>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </section>

                        <hr className="my-3" />

                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-7 col-lg-8 text-center text-md-start">
                                    <div className="p-3">
                                        All Rights &copy; Reserve 2025-26
                                        <a className="text-white" href="https://mdbootstrap.com/"> furniturebypanchal.com</a>
                                    </div>
                                </div>

                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                    <a className="btn btn-floating m-1 text-white" role="button"><img src={twitter_img} alt="" width="20px" /></a>
                                    <a className="btn btn-floating m-1 text-white" role="button"><img src={fb_img} alt="" width="20px" /></a>
                                    <a className="btn btn-floating m-1 text-white" role="button"><img src={insta_img} alt="" width="20px" /></a>
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
        </>
    )
};