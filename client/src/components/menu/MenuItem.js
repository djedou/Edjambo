import React, {Component} from "react";
import Link from 'next/link';

class MenuItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {submenu} = this.props;
        let menuArray = Object.values(submenu); 
        return(
            <li className="submenuItems">
                <Link href={this.props.url}>
                    <a 
                        className="linkStyle" 
                    >
                        {this.props.title}
                    </a>
                </Link>
                <ul className="sbmenuUl">
                    {menuArray.map(item => (
                        <li 
                            key={item.id} 
                            className="SubmenuList">
                                <Link href={item.url}>
                                    <a 
                                        className="sublinkStyle">
                                        {item.title}
                                    </a>
                                </Link>
                        </li>
                    ))}
                </ul>
                <style jsx>{`
                    .submenuItems{
                        float: left;
                        width: 100px;
                        height: 45px;
                        opacity: 1;
                        line-height: 40px;
                        text-align: center;
                        font-size: 16px;
                    }
                    .linkStyle{
                        text-decoration: none; 
                        font-family: 'Times New Roman', Times, serif;
                        display: block;
                        color: white;
                        font-weight: bold;
                    }
                    .linkStyle:hover{
                        background-color: green;
                    }
                    .SubmenuList{
                        display:none;
                        list-style: none;
                        text-align: center;
                        background-color: black;
                        height: 40px;
                    } 
                    .SubmenuList:hover{
                        background-color: green;
                    }
                    .submenuItems:hover .SubmenuList{
                        display: block;
                    }
                    .sbmenuUl{
                        background-color: black;
                        padding-left: 0px;
                        position: absolute;
                        z-index: 10;
                        display: block;
                        opacity: 0.9;
                        width: 150px;
                    }
                    .sublinkStyle{
                        text-decoration: none;
                        width: 150px; 
                        color: white;
                        font-family: 'Times New Roman', Times, serif;
                        font-size: 15px;
                        font-weight: bold;
                        display: block;
                    }
                `}</style>
            </li>
        );
    }
}

export default MenuItem;

