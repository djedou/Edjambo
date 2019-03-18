import React, {Component} from "react";
import OptionItem from "./OptionItem";

class OptionContainer extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let {admin,showOption} = this.props;
        let adminArray = Object.values(admin);
        let Items = adminArray.map((item) =>{
            return <OptionItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        title={item.title}
                        setted={item.setted}
                        showOption={showOption}
                    />
        });
        return(
            <div>
                {Items}
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
