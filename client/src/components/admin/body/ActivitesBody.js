import React, {Component} from "react";
import ActNouBody from "./ActNouBody";
import ActTouBody from "./ActTouBody";

class ActivitesBody extends Component{
    constructor(props){
        super(props);
        this.state = {
            ActNouBody: false,
            ActTouBody: true
        };
        this.showBody = (e) => {
            e.preventDefault();
            let array = e.target.className.split(" ");
            for( let item in array){
                if(array[item] == "nouveau"){
                    this.setState({
                        ActNouBody: true,
                        ActTouBody: false
                      });
                }
                else if(array[item] == "toutvoir"){
                    this.setState({
                        ActNouBody: false,
                        ActTouBody: true
                      });
                } 
            }
        };
    }
    
    render(){
        return(
            <div className="container">
                <button className="nouveau" onClick={this.showBody}>
                    Nouveau
                </button>
                <button className="toutvoir" onClick={this.showBody}>
                    Tout voir
                </button>
                <div className="liste">
                    {this.state.ActTouBody == true ? <ActTouBody /> : <ActNouBody />}
                </div>
                <style jsx>{`
                .container{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    column-gap: 5px;
                    row-gap: 0.5px;
                    padding-top: 2px;
                    justify-content: center;
                }
                .nouveau{
                    border: 2px outset white;
                    background-color: #eef;
                    width: 45%;
                    height: 5vh;
                    line-height: 4vh;
                    font-size: 3vh;
                }
                .toutvoir{
                    border: 2px outset white;
                    width: 45%;
                    height: 5vh;
                    line-height: 4vh;
                    font-size: 3vh;
                    background-color: #eef;
                }
                .liste{
                    border: 2px outset white;
                    background-color: #eef;
                    width: 98%;
                    height: 81vh;
                }
                `}</style>
            </div>
        )
    }
}

export default ActivitesBody;