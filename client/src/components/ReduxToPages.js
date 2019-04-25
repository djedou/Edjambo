import React, {Component} from "react";
import Head from 'next/head';
import {connect, Provider } from 'react-redux';
import "../../static/css/style.css";
import adminActionsCreator from "../../src/redux/actions/adminActionsCreator";
import Store from "../../src/redux/store";

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
                    </Provider>
                );
            }
        }
    )
}

export default ReduxToPages;