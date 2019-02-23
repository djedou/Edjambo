import React, {Component} from "react";
import Menu from "../menu/Menu";
/* import AcceuilBody from "../body/AccueilBody"; */

class GalleriePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let menuArray = Object.values(this.props.menu);
        return(
            <div className="container">
                <header className="head">
                   <h1>Edjambo Notre Bien Commun</h1> 
                </header>
                <Menu 
                    menu={menuArray}
                    activateMenu={this.props.activateMenu}
                    hideFunction={this.props.hideFunction}
                />
                <style jsx>{`
                    .container{
                        margin: 0;
                        padding: 0;
                    }
                    h1{
                        font-size: 20px;
                        color: black;
                    }
                    @media (max-width: 600px){
                        h1{
                            font-size: 15px;
                            color: black;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default GalleriePage;
