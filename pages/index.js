import React, {Component} from "react";
import PageHeader from "../src/components/visitor/PageHeader";
import PageMenu from "../src/components/visitor/PageMenu";
import PageBody from "../src/components/visitor/PageBody";
import ReduxToPages from "../src/reduxToPages/ReduxToPages";
import PageFooter from "../src/components/visitor/PageFooter"


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
                <PageBody />
                <PageFooter/>
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
