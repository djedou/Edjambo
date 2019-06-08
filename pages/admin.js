import React, {Component} from "react";
import ReduxToPages from "../src/reduxToPages/ReduxToPages";
import OptionContainer from "../src/components/admin/options/OptionContainer";
import BodyContainer from "../src/components/admin/body/BodyContainer";
import SmartBodyContainer from "../src/components/admin/body/SmartBodyContainer";
import Head from 'next/head';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();


class AdminPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {admin,showOption} = this.props;
        let adminSmartArray = Object.values(admin);
        return(
            <div className="adminContainer"> 
                <Head>
                    <script 
                        defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js" 
                        integrity="sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP" 
                        crossOrigin="anonymous">
                    </script>
                </Head>
                <header className="headleft">
                    login profile
                </header>
                <header className="headright">
                    <h1>Edjambo Notre Bien Commun</h1>
                </header>
                <aside className="bodyleft">
                    <span className="optionHeader">Options</span>
                    <OptionContainer 
                        admin = {admin}
                        showOption = {showOption}
                        />
                </aside>
                <BodyContainer 
                    admin = {admin}                
                />
                {/* smartphones start here */}                
                <header className="smartheadleft">
                    <img className="menuImg" src="../static/images/menu.png" alt="logo"/>
                    <ul className="tabList">
                        {adminSmartArray.map(item => {
                            this.showFromSmartMenu = (e) => {
                                e.preventDefault();
                                let {name} = item;
                                showOption(name);
                            };
                            return  <li 
                                        key={item.id}
                                        className="subTab"
                                        onClick = {this.showFromSmartMenu}
                                    >
                                    {item.title}
                                    </li>
                        })}    
                    </ul>

                </header>
                <header className="smartheadright">
                    <h2>Edjambo Notre Bien Commun</h2>
                    <span className="smartprofile">login profile</span>
                </header>
                <SmartBodyContainer 
                    admin = {admin}
                />
                <style jsx>{`
                    .headleft{
                        background-color: white;
                        line-height: 60px;
                        text-align: center;
                    }
                    .headright{
                        background-color: green;
                        line-height: 45px;
                        text-align: center;
                    }
                    .bodyleft{
                        background-color: green;
                        text-align: center;
                        padding-top: 5px;
                        overflow: auto;
                    }
                    .optionHeader{
                        color: black;
                        font-size: 19px;
                        text-decoration: underline;
                    }
                    h1{
                        font-size: 20px;
                    }
                    h2{
                        font-size: 10px;
                        color: black;
                        float: left;
                        padding: 5px;
                        border: 1px solid #0f0;
                    }
                    .smartprofile{
                        border: 1px solid #0f0;
                        float: right;
                    }
                    .menuImg{
                        width: 8vh;
                        height: 8vh;
                        border-radius: 50%;
                        background-color: green;
                    }
                    .tabList{
                        padding: 0px;
                        margin-left: -10px;
                        display: block;
                        position: relative;
                        z-index: 10;
                        left: 12px;
                        top: -15px;
                        width: 90px;
                    }
                    .subTab{
                        display:none;
                        list-style: none;
                        text-align: center;
                        background-color: green;
                        height: 30px;
                        color: white;
                        line-height: 30px;
                        font-size: 13px;
                    }
                    .subTab:hover{
                        background-color: blue;
                        cursor: pointer;
                    }
                    .smartheadleft:hover .subTab{
                        display: block;
                    }
                    .smartheadleft{
                        background-color: white;
                        line-height: 20px;
                        text-align: center;
                        font-size: 10px;
                    }
                    .smartheadright{
                        background-color: green;
                        line-height: 10px;
                        text-align: center;
                        font-size: 10px;
                        border: 1px solid #0f0;
                    }
                    @media (max-height: 600px){
                        .headleft{
                            line-height: 8vh;  
                            height: 35vh;
                        }
                        .headright{
                            line-height: 2vh;
                            height: 25vh;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default ReduxToPages(AdminPage);
