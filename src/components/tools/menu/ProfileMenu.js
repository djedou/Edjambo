import React, {Component} from "react";
import Link from 'next/link';
import smartImg from '../../../../static/images/bg.png'

class ProfileMenu extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <ul className="profilMenu">
                    <li className="profList">
                        <img className="proflinkStyle" src={smartImg} >
                        </img>
                        <ul className="subProfilMenu">
                            <li className="profSubmenuList"><Link prefetch href="profil" ><a className="profLinkStyle">Profil</a></Link></li>
                            <li className="profSubmenuList"><Link prefetch href="connexion" ><a className="profLinkStyle">Connexion</a></Link></li>
                            <li className="profSubmenuList"><Link prefetch href="deconnexion" ><a className="profLinkStyle">Déconnexion</a></Link></li>
                            <li className="profSubmenuList"><Link prefetch href="admin" ><a className="profLinkStyle" target="_blank">Admin</a></Link></li>
                        </ul>
                    </li>
                
                    <style jsx>{`
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
                            opacity: 1;
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
                </ul>
            </div>
        );
    }

}

export default ProfileMenu;