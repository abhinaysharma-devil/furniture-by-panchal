import '../assests/css/common.css'
import { useLocation } from 'react-router-dom';

export const ServiceDetail = () => {
    const location = useLocation();
    var p = "../"
    return (
        <>
            <div className="service-detail-v1" >
                <h1>{location.state.data.service_title}</h1> 
                <hr style={{ margin: "auto", padding: "10px" }} />
                <div className="service-div">
                    <img src={p+location.state.data.img_name} style={{ width: "500px" }} />
                    <div className="text-item">
                        <h2>{location.state.data.service_sub_title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: location.state.data.detail }}></div>
                        <h2>What we do?</h2>
                        <ul>
                            {location.state.data.what_we_do?.map((item)=>{
                                return (
                                    <>
                                    <li key={item.id} >{item.title}</li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};