import React, {Component} from "react";


class Annonces extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="annoncesContainer">
                annonces body
                <style jsx>{`
                    .annoncesContainer{
                        border: 2px solid red;
                        height: 60vh;
                        width: 99.7%;
                    }
                `}</style>
            </div>
        )
    }
}

export default Annonces;