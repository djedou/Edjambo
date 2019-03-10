import React, {Component} from "react";
import Titre from "../../../lib/slate/activites/Titre";
import Description from "../../../lib/slate/activites/Description";


class ActNouBody extends Component{
    constructor(props){
        super(props);
    }
  
    render(){
        return (
          <div>
              <span>Titre :</span>
              <div className="titre">
                <Titre />
              </div>
              <span>Description :</span>
              <div >
                <Description />
              </div> 
              <span>Text :</span>
              {/* <div className="nouveau1">
                  <Editor 
                      value={this.state.text} 
                      onChange={this.onChangeText} 
                      onKeyDown={this.onKeyDown}
                  />
              </div> */}
              <span>Images :</span>
              <style jsx>{`
                  div{
                    display: flex;
                    justify-content: left;
                    flex-direction: column;
                  }
                  span{
                    text-align: left;
                  }
                  .titre{
                    border: 2px solid blue;
                    text-align: left;
                    font-size : 2vh;
                    width: 30vw;
                  }
                  .nouveau1{
                    border: 2px solid blue;
                    text-align: left;
                    font-size : 2vh;
                  }
              `}</style>
          </div>
        )
    }
}

export default ActNouBody;
