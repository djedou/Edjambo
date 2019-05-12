import React, {Component} from "react";


class Association extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="assoContainer">
                association body
                <style jsx>{`
                    .assoContainer{
                        border: 2px solid red;
                        height: 60vh;
                        width: 99.7%;
                    }
                `}</style>
            </div>
        )
    }
}

export default Association;