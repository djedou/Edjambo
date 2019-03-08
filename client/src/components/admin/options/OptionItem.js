import React, {Component} from "react";


class OptionItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <span>option 1</span>
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