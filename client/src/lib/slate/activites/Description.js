import React, {Component} from "react";
import { Editor } from 'slate-react';
import { Value } from 'slate';


/* const existingValue = JSON.parse(localStorage.getItem('content')) */
const initialValue = Value.fromJSON(
    /* existingValue ||  */{
    document: {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: 'Tape the activity description here',
                },
              ],
            },
          ],
        },
      ],
    },
  });

  class Description extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: initialValue,
          };
    }
    onChange = ({ value }) => {
        // to save it in the variable content
        /* const content = JSON.stringify(titre.toJSON()); */
        this.setState({ value })
      };

    onKeyDown = (event, editor, next) => {
       /*  console.log(event.key) */
        return next()
      };

    render(){
        return  (
            <div className="description">
                <Editor 
                    value={this.state.value} 
                    onChange={this.onChange} 
                    onKeyDown={this.onKeyDown}
                />
                <style jsx>{`
                .description{
                    border: 2px solid blue;
                    text-align: left;
                    font-size : 2vh;
                    height: 100px:
                    width: 50vw;
                    overflow: auto;
                  }
                `}</style>
            </div>
        )
    }
}

export default Description;
