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
                  text: 'A line of text in a paragraph.',
                },
              ],
            },
          ],
        },
      ],
    },
  });

  class Titre extends Component{
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
       /*  console.log(event.key); */
        console.log(event);
        return next()
      };

    render(){
        return  <Editor 
                    value={this.state.value} 
                    onChange={this.onChange} 
                    onKeyDown={this.onKeyDown}
                />
    }
}

export default Titre;
