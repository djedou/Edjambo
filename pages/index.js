import React, {Component} from "react";
import PageHeader from "../src/components/visitor/PageHeader";
import PageMenu from "../src/components/visitor/PageMenu";
import ReduxToPages from "../src/reduxToPages/ReduxToPages";
import AccueilBody from "../src/components/tools/pages/accueilBody/AccueilBody"


class AccueilPage extends Component{
    constructor(props){
        super(props);
        this.state={
            title: "Edjambo Notre Bien Commun"
        }
    }
    render(){
        let menuArray = Object.values(this.props.menu);
        return(
            <div className="container">
                <PageHeader 
                    title = {this.state.title}
                />
                <PageMenu
                    menu={menuArray}
                />
                <AccueilBody />
                <style jsx>{`
                    .menu{
                        margin: 0px;
                        padding: 0;
                        background-color: black;
                        height: 40px;
                        opacity: 1;
                    }
                `}</style>
            </div>
        );
    }
}

export default ReduxToPages(AccueilPage);
