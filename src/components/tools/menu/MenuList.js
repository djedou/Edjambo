import React, {Component} from "react";
import MenuItem from "./desktop/MenuItem";
import SmartMenuList from "./mobile/SmartMenuList"; 

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
                <ul className="smartMenuList">
                    <SmartMenuList 
                        menu={menu}    
                    />    
                </ul>
                <ul className="menuList">
                    {Items}
                </ul>
                
                <style jsx>{`
                    .menuList{
                        margin: 0px;
                        padding: 0px;
                        list-style: none;
                    }
                    .smartMenuList{
                        margin: 0px;
                        padding-left: 10px;
                        padding-top: 4px;
                        list-style: none;
                    }
                    @media (max-width: 769px) {
                        .menuList{
                            display: none;
                        }
                      }
                    @media (min-width: 770px){
                        .smartMenuList{
                            display: none;
                        }
                    }
                `}</style>
            </div>
        ); 
    }
}

export default MenuList; 
