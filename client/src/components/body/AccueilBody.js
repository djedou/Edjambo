import React, {Component} from "react";

class AccueilBody extends Component{
    constructor(props){
        super(props);
        this.props.setData({});
    }
    render(){
        return(
            <div className="main">
                <section className="sector">
                    section 1
                </section>
                <section className="sector">
                    section 2
                </section>
                <section className="sector">
                    section 3
                </section>
                <section className="sector">
                    section 3
                </section>
                <style jsx>{`
                    .sector{
                        border: 2px solid #00f;
                        height: 400px;
                    }

                `}</style>
            </div>
        );
    }
}

export default AccueilBody;