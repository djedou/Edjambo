import React, {Component} from "react";
import SmartMenuItem from "./SmartMenuItem";
import smartImg from "../../../static/img/menu.png";

class SmartMenuList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {menu} = this.props;
        let {submenu} = menu;
        let submenuItem;
        return(
            <li className="tab">       
                <img className="menuImg" src={smartImg} >
                </img>
                <ul className="tabList">
                    {menu.map(item => (
                        <li 
                            key={item.id}
                            className="subTab"
                        >
                            <a 
                                className="sublinkStyle" 
                                href="#"
                            >
                                {item.title}
                            </a>
                            <ul className="TabSubUl">
                                <li className="TabSublinkStyle"> 
                                    <SmartMenuItem 
                                        submenu={item.submenu}
                                    />
                                </li>
                            </ul>
                        </li>
                    ))}    
                </ul>
                <style jsx>{`
                    .tab{
                        width: 30px;
                        list-style: none;
                    }
                    .menuImg{
                        width: 30px;
                        height: 30px;
                    
                    }
                    .tabList{
                        background-color: black;
                        padding: 0px;
                        margin-left: -10px;
                       /*  position: absolute;
                        z-index: 10; */
                        display: block;
                        opacity: 1;
                        width: 100px;
                    }
                    .subTab{
                        display:none;
                        list-style: none;
                        text-align: center;
                        background-color: black;
                        height: 35px;
                       
                    }
                    .subTab:hover{
                        background-color: green;
                    }
                    .tab:hover .subTab{
                        display: block;
                    }
                    .sublinkStyle{
                        text-decoration: none;
                        color: white;
                        font-family: 'Times New Roman', Times, serif;
                        font-size: 15px;
                        font-weight: bold;
                        display: block;
                        height: 30px;
                        line-height: 30px;
                    }
                    .TabSubUl{
                        display: block;
                        width: 100px;
                        background-color: green;
                        padding-left: 0px;
                        position: relative;
                        left: 100px;
                        top: -50px;
                    }
                    .TabSubmenuList{
                        color: white;
                    }
                    .TabSublinkStyle{
                        display: none;
                    }
                    .subTab:hover .TabSublinkStyle{
                        display: block;
                    }
                `}</style>
            </li> 
        );
    }
}

export default SmartMenuList;


/* 


*/