import React, {Component} from "react";

import image1 from "../../../../../../static/img/tablette/bg_tablette.png";
import image2 from "../../../../../../static/img/tablette/edj7_tablette.png";
import image3 from "../../../../../../static/img/tablette/edj9_tablette.png";
import image4 from "../../../../../../static/img/tablette/edj10_tablette.png";
import image5 from "../../../../../../static/img/tablette/edj8_tablette.png";

class Gallerie extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="gallerieContainer">
                <div className="slideContainer">
                    <figure>
                        <img className="image" src={image1} alt="photo1"/>
                        <img className="image" src={image2} alt="photo2"/>
                        <img className="image" src={image3} alt="photo3"/>
                        <img className="image" src={image4} alt="photo4"/> 
                        <img className="image" src={image5} alt="photo5"/> 
                    </figure>
                </div>
                <style jsx>{`
                   .gallerieContainer {
                        height: 70vh;
                        width: 95vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .slideContainer{
                        height: 68vh;
                        width: 70vw;
                        overflow: hidden;
                    }
                    .slideContainer figure{
                        position: relative;
                        width: 350vw;
                        height: 68vh;
                        margin:0;
                        left: 0;
                        animation: 20s slider infinite;
                    }
                    .slideContainer figure img {
                        height: 68vh;
                        width: 70vw;
                    }
                    @media (max-width: 768px){
                        .gallerieContainer {
                            height: 60vh;
                            width: 95vw;
                        }
                        .slideContainer{
                            height: 58vh;
                            width: 90vw;
                        }
                        .slideContainer figure{
                            width: 450vw;
                            height: 58vh;
                        }
                        .slideContainer figure img {
                            height: 58vh;
                            width: 90vw;
                        }
                    }
                    @keyframes slider {
                        0%{
                            left: 0;
                        }
                        15%{
                            left: 0%;
                        }
                        25%{
                            left: -100%;
                        }
                        40%{
                            left: -100%;
                        }
                        50%{
                            left: -200%;
                        }
                        65%{
                            left: -200%;
                        }
                        75%{
                            left: -300%;
                        }
                        85%{
                            left: -300%;
                        }
                        100%{
                            left: -400%;
                        }
                    }
                    
                `}</style>
            </div>
        )
    }
}

export default Gallerie;