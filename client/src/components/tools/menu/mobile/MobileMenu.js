import React, {Component} from "react";
import SmartMenuList from "./SmartMenuList";
import ProfileMenu from "../ProfileMenu";

class MobileMenu extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <ul className="menu">
               <SmartMenuList 
                    menu={this.props.menu}
                /> 
               <ProfileMenu />
                <style jsx>{`
                    .menu{
                        margin: 0px;
                        padding: 0;
                        background-color: black;
                        height: 40px;
                        opacity: 1;
                    }
                `}</style>
            </ul>
        );
    }

}

export default MobileMenu;