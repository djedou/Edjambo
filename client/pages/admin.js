import React, {Component} from "react";
import ReduxToPages from "../src/components/ReduToPages";

class AdminPage extends Component{
    constructor(props){
        super(props);
        console.log(this.props)
    }
    render(){
        return(
            <div className="adminContainer"> 
                <header className="headleft">
                    login profile
                </header>
                <header className="headright">
                    <h1>Edjambo Notre Bien Commun</h1>
                </header>
                <aside className="bodyleft">
                    options
                </aside>
                <section className="bodyright">
                    body
                </section>
                <header className="smartheadleft">
                    Options
                </header>
                <header className="smartheadright">
                    <h2>Edjambo Notre Bien Commun</h2>
                    <span>login profile</span>
                </header>
                <section className="smartbody">
                    admin body
                </section>
                <style jsx>{`
                    .headleft{
                        background-color: white;
                        line-height: 60px;
                        text-align: center;
                    }
                    .headright{
                        background-color: green;
                        line-height: 45px;
                        text-align: center;
                    }
                    .bodyleft{
                        background-color: green;
                        text-align: center;
                    }
                    .bodyright{
                        background-color: white;
                        text-align: center; 
                    }
                    h1{
                        font-size: 20px;
                        color: black;
                    }
                    h2{
                        font-size: 10px;
                        color: black;
                        float: left;
                        padding: 5px;
                    }
                    .smartheadleft{
                        background-color: white;
                        line-height: 40px;
                        text-align: center;
                        font-size: 10px;
                    }
                    .smartheadright{
                        background-color: green;
                        line-height: 10px;
                        text-align: center;
                        font-size: 10px;
                    }
                    .smartbody{
                        background-color: white;
                        text-align: center; 
                    }
                `}</style>
            </div>
        );
    }
}

export default ReduxToPages(AdminPage);
