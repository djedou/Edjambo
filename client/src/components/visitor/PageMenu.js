import React, {Component} from "react";
import withSizes from 'react-sizes';
import DesktopMenu from "../tools/menu/desktop/DesktopMenu";
import MobileMenu from "../tools/menu/mobile/MobileMenu";


class PageMenu extends Component{
    constructor(props){
        super(props);  
        console.log(this.props)
    }

    render(){
        let {menu} = this.props;
        return this.props.isMobile ? <MobileMenu menu={menu} /> : <DesktopMenu menu={menu}/>
    
    }
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width <= 768,
  })

export default withSizes(mapSizesToProps)(PageMenu);
