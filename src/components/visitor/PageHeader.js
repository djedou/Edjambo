import React, {Component} from "react";

class PageHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {title} = this.props;
        return(
            <div className="head">
                {title}
            </div>
        )
    }
}

export default PageHeader;