import React, {Component} from "react";


class OptionItem extends Component{
    constructor(props){
        super(props);
        this.show = (e) => {
            e.preventDefault();
            let {name,showOption} = this.props;
            showOption(name);
        };
    }

    render(){
        let {title} = this.props;
        return(
            <div
                onClick ={this.show} 
            >
                <span>{title}</span>
                <style jsx>{`
                     div{
                        border: 4px outset #0ff;
                        width: 90%;
                        margin-left:2.5%;
                        background-color: blue;
                        border-radius: 15px;
                        height: 30px;
                        line-height: 30px;
                        color: white;
                        font-size: 19px;
                        margin-top: 3px;
                        margin-bottom: 3px;
                    }
                    div:hover{
                        cursor: pointer;
                    }
                    span{
                        display: block;
                    }
                `}</style>
            </div>
        )
    }

}

export default OptionItem;