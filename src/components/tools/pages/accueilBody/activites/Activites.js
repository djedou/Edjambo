import React, {Component} from "react";


class Activites extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="actContainer">
                activites body
                <style jsx>{`
                    .actContainer{
                        border: 2px solid red;
                        height: 60vh;
                        width: 99.7%;
                    }
                `}</style>
            </div>
        )
    }
}

export default Activites;