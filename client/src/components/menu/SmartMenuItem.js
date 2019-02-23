import React, {Component} from "react";
import Link from 'next/link';

class SmartMenuItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {submenu} = this.props;
        return(
            <div>
                {submenu.map(item =>{
                    return <Link 
                                key={item.id}
                                href={item.url}>
                                <a 
                                    className="subStyle"
                                >
                                {item.title}<br/>
                                </a>
                            </Link>
                })}
                <style jsx>{`
                    .subStyle{
                        text-decoration: none;
                        color: white;
                        font-family: 'Times New Roman', Times, serif;
                        font-size: 15px;
                        font-weight: bold;
                        display: block;
                        height: 35px;
                        line-height: 35px;
                        width: 150px;
                        background-color: black;
                    }
                    .subStyle:hover{
                        background-color: green;
                    }
                `}</style>
            </div>
        );
    }
}

export default SmartMenuItem;