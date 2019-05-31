import React, {Component} from "react";


class Gallerie extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="gallerieContainer">
                <div className="slideContainer">
                    <figure>
                        <img className="image" src="../../../../../../static/images/bg_tablette.png" alt="photo1"/>
                        <img className="image" src="../../../../../../static/images/edj7_tablette.png" alt="photo2"/>
                        <img className="image" src="../../../../../../static/images/edj9_tablette.png" alt="photo3"/>
                        <img className="image" src="../../../../../../static/images/edj10_tablette.png" alt="photo4"/> 
                        <img className="image" src="../../../../../../static/images/edj8_tablette.png" alt="photo5"/> 
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