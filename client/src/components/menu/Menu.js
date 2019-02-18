import React, {Component} from "react";
import MenuList from "./MenuList";
import img from "../../../static/img/bg.jpeg"

class Menu extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <nav className="menu">
                <MenuList 
                    menu={this.props.menu}
                /> 
                <ul className="profilMenu">
                    <li className="profList">
                        <img className="proflinkStyle" src={img} >
                        </img>
                        <ul className="subProfilMenu">
                            <li className="profSubmenuList"><a className="profLinkStyle" href="#">Profil</a></li>
                            <li className="profSubmenuList"><a className="profLinkStyle" href="#">Connexion</a></li>
                            <li className="profSubmenuList"><a className="profLinkStyle" href="#">Déconnexion</a></li>
                        </ul>
                    </li>
                </ul> 
                <style jsx>{`
                    .menu{
                        margin: 0px;
                        padding: 0;
                        background-color: black;
                        height: 40px;
                        opacity: 0.7;
                    }
                    .profilMenu{
                        margin: 0px;
                        padding: 0px;
                        list-style: none;
                    }
                    .profList{
                        height: 45px;
                        opacity: 1;
                        line-height: 40px;
                        text-align: center;
                        font-size: 16px;
                    }
                    .profList:hover .profSubmenuList{
                        display: block;
                    }
                    .proflinkStyle{
                        text-decoration: none; 
                        font-family: 'Times New Roman', Times, serif;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                    }
                    .proflinkStyle:hover{
                        background-color: green;
                    }
                    .subProfilMenu{
                        background-color: black;
                        padding-left: 0px;
                        position: relative;
                        top: -15px;
                        right: 70px;
                        z-index: 10;
                        opacity: 0.9;
                        width: 115px;
                    }
                    .profSubmenuList{
                        display: none;
                        list-style: none;
                        text-align: center;
                        background-color: black;
                        height: 40px;
                    }
                    .profSubmenuList:hover{
                        background-color: green;
                    }
                    .profLinkStyle{
                        text-decoration: none;
                        color: white;
                        font-family: 'Times New Roman', Times, serif;
                        font-size: 15px;
                        font-weight: bold;
                        display: block;
                    }

                `}</style>
            </nav>
        );
    }

}

export default Menu;