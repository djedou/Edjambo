import React from 'react'
import { withBaseIcon } from 'react-icons-kit'
import {bold} from 'react-icons-kit/fa/bold';

const ReactIcons = {
    bold:bold
};

export default ReactIcons;


//File ProjectIcons.js


//lets say the icons on your side navigation are all color red
const SideIconContainer = 
    withBaseIcon({ size: 64, style: {color: '#EF233C'}})

export const HomeIcon1 = () => <SideIconContainer icon={home}/>
export const HomeIcon2 = () => <SideIconContainer icon={home2}/>
export const HomeIcon3 = () => <SideIconContainer icon={home3}/>
