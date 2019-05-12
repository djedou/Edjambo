import React, {Component} from "react";
import Head from 'next/head';
import {connect, Provider } from 'react-redux';
/* import "../../static/css/style.css"; */
import adminActionsCreator from "../../src/utils/redux/actions/adminActionsCreator"
import Store from "../../src/utils/redux/store"
/* import bg from "../../static/img/bg.png" */

const mapStateToProps = (state) => {
    return {
        menu:state.menu,
        admin:state.admin 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showOption: (optionName) => dispatch(adminActionsCreator.showAdminOption(optionName))
    }
} 

const ReduxToPages = (Page) => {
    const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page);
    return(
        class Edjambo extends Component{
            render(){
                return(
                    <Provider store={Store}>
                        <Head>
                            <title>Edjambo Notre Bien Commun</title>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        </Head>
                        <PageContainer />
                        <style jsx global>{`
                            body{
                                margin: 0;
                                padding: 0;
                                background: url("../../static/img/bg.png") no-repeat center fixed;
                                background-size: cover;
                                -webkit-background-size: cover;
                                -moz-background-size: cover;
                                -o-background-size: cover; 
                            }
                            @media (max-width: 720px){
                                body{
                                    background: url("../../static/img/tablette/bg_tablette.png") repeat;
                                }   
                            } 
                            .container{
                                display: grid;
                                grid-template-columns: 98.7vw;
                                grid-template-rows: 60px 35px auto;
                                grid-template-areas:"head"
                                                    "menu"
                                                    "main";
                                align-items: center;
                                grid-column-gap: 0px;
                                grid-row-gap: 3px;
                            }
                            
                            
                            .head{
                                grid-area: head;
                                display: flex;
                                height: 57px;
                                line-height: 57px;
                                justify-content: center;
                            }
                            .menu{
                                grid-area: menu;
                                display: grid;
                                grid-template-columns: 90vw 8.7vw;
                                grid-template-rows: 45px;
                                grid-template-areas: "mainMenu profilMenu";
                                position: sticky;
                                top: 0px;
                                z-index: 10;
                            }
                            @media (max-width: 768px){
                                .menu{
                                    grid-template-columns: 84vw 14.7vw;
                                }
                            }
                            .main{
                                grid-area: main;
                                display: flex;
                                flex-flow: column;
                                justify-content: center;
                            }
                            .mainMenu{
                                grid-area: mainMenu;
                            }
                            .profilMenu{
                                grid-area: profilMenu;
                            }
                            .menuList{
                                display: flex;
                                justify-items: center;
                            }
                            
                            
                            /* Debut de CSS pour la page Admin */
                            
                            .adminContainer{
                                display: grid;
                                grid-template-columns: 20vw 80vw;
                                grid-template-rows: 10vh 90vh;
                                grid-template-areas:"headleft headright" 
                                                    "bodyleft bodyright";
                                grid-column-gap: 0px;
                                grid-row-gap: 0px;
                            }
                            .headleft{
                                grid-area: headleft;
                                border: 2px solid #000;
                                
                            }
                            .headright{
                                grid-area: headright;
                                border: 2px solid #000;
                            }
                            .bodyleft{
                                grid-area: bodyleft;
                                border: 2px solid #000;
                            }
                            .bodyright{
                                grid-area: bodyright;
                                border: 2px solid #000; 
                            }
                            
                            @media (max-width: 769px){
                               .adminContainer{
                                    display: grid;
                                    grid-template-columns: 20vw 80vw;
                                    grid-template-rows: 9vh 91vh;
                                    grid-template-areas:"smartheadleft smartheadright" 
                                                        "smartbody smartbody";
                                    grid-column-gap: 0px;
                                    grid-row-gap: 0px;
                                } 
                                .smartheadleft{
                                    grid-area: smartheadleft;
                                    border: 2px solid #000;
                                }
                                .smartheadright{
                                    grid-area: smartheadright;
                                    border: 2px solid #000;
                                }
                                .smartbody{
                                    grid-area: smartbody;
                                    border: 2px solid #000;
                                }
                                .bodyright{
                                    display: none;
                                }
                                .bodyleft{
                                    display: none;
                                }
                                .headleft{
                                    display: none;
                                    
                                }
                                .headright{
                                    display: none;
                                }
                            }
                            @media(min-width: 770px){
                                .smartheadleft{
                                    display: none;
                                }
                                .smartheadright{
                                    display: none;
                                }
                                .smartbody{
                                    display: none;
                                }
                            }
                            
                        `}</style>
                    </Provider>
                );
            }
        }
    )
}

export default ReduxToPages;