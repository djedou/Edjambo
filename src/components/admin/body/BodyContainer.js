import React, {Component} from "react";
import DashboardBody from "./DashboardBody";
import ActivitesBody from "./ActivitesBody";
import AnnoncesBody from "./AnnoncesBody";
import AssociationsBody from "./AssociationsBody";
import ContactBody from "./ContactBody";
import EnbcBody from "./EnbcBody";
import GallerieBody from "./GallerieBody";
import MediaBody from "./MediaBody";
import MembresBody from "./MembresBody";


class BodyContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let toGoTo;
        let {admin} = this.props;
        for (let item in admin){
            if(admin[item].setted == true){
                toGoTo = admin[item].id;
            }
        }
        switch(toGoTo){
            case 1:
                return(
                    <section className="bodyright">
                        <DashboardBody />
                        <style jsx>{`
                        .bodyright{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 2:
                return(
                    <section className="bodyright">
                        <ActivitesBody />
                        <style jsx>{`
                        .bodyright{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 3:
                return(
                    <section className="bodyright">
                        <AnnoncesBody />
                        <style jsx>{`
                        .bodyright{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 4:
                return(
                    <section className="bodyright">
                        <MembresBody />
                        <style jsx>{`
                        .bodyright{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 5:
                return(
                    <section className="bodyright">
                        <AssociationsBody />
                        <style jsx>{`
                        .bodyright{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 6:
                return(
                    <section className="bodyright">
                        <MediaBody />
                        <style jsx>{`
                        .bodyright{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 7:
                return(
                    <section className="bodyright">
                        <ContactBody />
                        <style jsx>{`
                        .bodyright{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 8:
                return(
                    <section className="bodyright">
                        <GallerieBody />
                        <style jsx>{`
                        .bodyright{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 9:
                return(
                    <section className="bodyright">
                        <EnbcBody />
                        <style jsx>{`
                        .bodyright{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            default:
                return(
                    <section className="bodyright">
                        <DashboardBody />
                        <style jsx>{`
                        .bodyright{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
        }
        
    }
}

export default BodyContainer;