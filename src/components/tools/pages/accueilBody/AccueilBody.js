import React, {Component} from "react";
import Gallerie from "./gallerie/Gallerie";
import PageFooter from "../../../visitor/PageFooter";
import Edjambo from "./edjambo/Edjambo";
import Annonces from "./annonces/Annonces";
import Activites from "./activites/Activites";
import Association from "./associatons/Associations"

class AccueilBody extends Component{
    
    render(){

        return(
            <div className="main">
                <Gallerie/>
                <Edjambo/>
                <Annonces/>
                <Activites/>
                <Association/>
                <PageFooter/>
            </div>
        )
    }
}

export default AccueilBody;