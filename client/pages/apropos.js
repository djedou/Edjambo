import React, {Component} from "react";
import PageHeader from "../src/components/visitor/PageHeader";
import PageMenu from "../src/components/visitor/PageMenu";
import PageBody from "../src/components/visitor/PageBody";
import ReduxToPages from "../src/components/ReduxToPages";


class AproposPage extends Component{
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
            </div>
        );
    }
}

export default ReduxToPages(AproposPage);
