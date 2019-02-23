import React, {Component} from "react";
import Head from 'next/head';
import {connect, Provider } from 'react-redux';
import "../static/css/main.css";
import AproposPage from "../src/components/AppPages/AproposPage";
/* Redux Elements */
import menuActionCreators from '../src/redux/menuActionsCreator';
import dataActionsCreator from '../src/redux/dataActionsCreator';
import Store from '../src/redux/store';

const mapStateToProps = (state) => {
    return {
        menu:state.menu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        activateMenu: (decision,menuItem) => dispatch(menuActionCreators.activateMenu(decision,menuItem)),
        hideFunction: (decision,menuItem) => dispatch(menuActionCreators.hideFunction(decision,menuItem)),
        setData: (data) => dispatch(dataActionsCreator.setData(data))
    }
} 

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(AproposPage)

class Apropos extends Component{
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

export default Apropos;