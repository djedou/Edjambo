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


class SmartBodyContainer extends Component{
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
                    <section className="smartbody">
                        <DashboardBody />
                        <style jsx>{`
                        .smartbody{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 2:
                return(
                    <section className="smartbody">
                        <ActivitesBody />
                        <style jsx>{`
                        .smartbody{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 3:
                return(
                    <section className="smartbody">
                        <AnnoncesBody />
                        <style jsx>{`
                        .smartbody{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 4:
                return(
                    <section className="smartbody">
                        <MembresBody />
                        <style jsx>{`
                        .smartbody{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 5:
                return(
                    <section className="smartbody">
                        <AssociationsBody />
                        <style jsx>{`
                        .smartbody{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 6:
                return(
                    <section className="smartbody">
                        <MediaBody />
                        <style jsx>{`
                        .smartbody{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 7:
                return(
                    <section className="smartbody">
                        <ContactBody />
                        <style jsx>{`
                        .smartbody{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 8:
                return(
                    <section className="smartbody">
                        <GallerieBody />
                        <style jsx>{`
                        .smartbody{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            case 9:
                return(
                    <section className="smartbody">
                        <EnbcBody />
                        <style jsx>{`
                        .smartbody{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
            default:
                return(
                    <section className="smartbody">
                        <DashboardBody />
                        <style jsx>{`
                        .smartbody{
                            background-color: white;
                            text-align: center; 
                        }
                        `}</style>
                    </section>
                )
        }
        
    } 
}

export default SmartBodyContainer;