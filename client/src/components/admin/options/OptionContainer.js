import React, {Component} from "react";
import OptionItem from "./OptionItem";

class OptionContainer extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        let {admin,showOption} = this.props;
        return(
            <div>
                <OptionItem 
                    admin = {admin}
                    showOption = {showOption}
                />
                <style jsx>{`
                div{
                    margin-top: 5px;
                }
                
                `}</style>
            </div>
        )
    }
}


export default OptionContainer;