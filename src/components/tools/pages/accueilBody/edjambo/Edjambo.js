import React, {Component} from "react";


class Edjambo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="edjamboContainer">
                une image et une petite description du village
                <style jsx>{`
                    .edjamboContainer{
                        border: 2px solid red;
                        height: 60vh;
                        width: 99.7%;
                    }
                `}</style>
            </div>
        )
    }
}

export default Edjambo;