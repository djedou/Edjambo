import React, {Component} from "react";
import Head from 'next/head';
import {connect, Provider } from 'react-redux';
import "../../static/css/style.css";
import menuActionCreators from "../../src/redux/menuActionsCreator";
import adminActionsCreator from "../../src/redux/adminActionsCreator";
import Store from "../../src/redux/store";

const mapStateToProps = (state) => {
    return {
        menu:state.menu,
        admin:state.admin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        activateMenu: (decision,menuItem) => dispatch(menuActionCreators.activateMenu(decision,menuItem)),
        hideFunction: (decision,menuItem) => dispatch(menuActionCreators.hideFunction(decision,menuItem)),
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
                    </Provider>
                );
            }
        }
    )
}

export default ReduxToPages;