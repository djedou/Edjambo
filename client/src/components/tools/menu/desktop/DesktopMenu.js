import React, {Component} from "react";
import MenuList from "./MenuList";
import ProfileMenu from "../ProfileMenu";

class DesktopMenu extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <ul className="menu">
                <MenuList 
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

export default DesktopMenu;