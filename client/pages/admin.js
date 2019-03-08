import React, {Component} from "react";
import ReduxToPages from "../src/components/ReduToPages";
import OptionContainer from "../src/components/admin/options/OptionContainer";

class AdminPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {admin,showOption} = this.props;
        return(
            <div className="adminContainer"> 
                <header className="headleft">
                    login profile
                </header>
                <header className="headright">
                    <h1>Edjambo Notre Bien Commun</h1>
                </header>
                <aside className="bodyleft">
                    <span className="optionHeader">Options</span>
                    <OptionContainer 
                        admin = {admin}
                        showOption = {showOption}
                        />
                </aside>
                <section className="bodyright">
                    body
                </section>

                {/* smartphones start here */}                
                <header className="smartheadleft">
                    Options
                </header>
                <header className="smartheadright">
                    <h2>Edjambo Notre Bien Commun</h2>
                    <span className="smartprofile">login profile</span>
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
                        padding-top: 5px;
                    }
                    .optionHeader{
                        color: black;
                        font-size: 19px;
                        text-decoration: underline;
                    }
                    .bodyright{
                        background-color: white;
                        text-align: center; 
                    }
                    h1{
                        font-size: 20px;
                    }
                    h2{
                        font-size: 10px;
                        color: black;
                        float: left;
                        padding: 5px;
                        border: 1px solid #0f0;
                    }
                    .smartprofile{
                        border: 1px solid #0f0;
                        float: right;
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
                        border: 1px solid #0f0;
                    }
                    .smartbody{
                        background-color: white;
                        text-align: center; 
                    }

                    
                    @media (max-height: 600px){
                        .headleft{
                            line-height: 8vh;  
                            height: 35vh;
                        }
                        .headright{
                            line-height: 2vh;
                            height: 25vh;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default ReduxToPages(AdminPage);
