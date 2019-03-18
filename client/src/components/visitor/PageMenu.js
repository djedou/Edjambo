import React, {Component} from "react";
import MenuList from "../tools/menu/MenuList";
import ProfileMenu from "../tools/menu/ProfileMenu";


class PageMenu extends Component{
    constructor(props){
        super(props);  
    }

    render(){
        let {menu} = this.props;
        return(
            <nav className="menu">
                <MenuList 
                    menu={menu}
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
            </nav>
        )
    }
}

export default PageMenu;
