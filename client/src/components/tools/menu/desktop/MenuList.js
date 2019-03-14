import React, {Component} from "react";
import MenuItem from "./MenuItem";


class MenuList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let menu = Object.values(this.props.menu);
        let Items = menu.map((item) =>{
            return <MenuItem 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        active={item.active}
                        title={item.title}
                        url={item.url}
                        hideSubmenu={item.hideSubmenu}
                        submenu={item.submenu}
                    />
        });
        return(
            <div className="mainMenu">
                 <ul className="menuList">
                    {Items}
                </ul>
                <style jsx>{`
                    .mainMenu{
                        margin: 0px;
                        padding: 0;
                        background-color: black;
                        height: 40px;
                        opacity: 1;
                    }
                    .menuList{
                        margin: 0px;
                        padding: 0px;
                        list-style: none;
                    }
                    
                `}</style>
            </div>
        );
    }
}

export default MenuList;
