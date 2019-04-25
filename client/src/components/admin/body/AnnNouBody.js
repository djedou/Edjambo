import React, {Component} from "react";

class AnnNouBody extends Component{
    constructor(props){
        super(props);
    }
  
    render(){
        return (
          <div>
            <form id="ActNou">
              <p>
                <label for="titre">Titre :</label> <br/>
                <input type="text" name="titre" id="titre" required/>
              </p>
              <p>
                <label for="description">Description :</label> <br/>
                <textarea name="titre" form="ActNou" id="description" rows="5" cols="40" required></textarea>
              </p>
              <p>
                {/* Draft js goes here */}
                <label for="text">Text :</label> <br/>
                <textarea name="titre" form="ActNou" id="text" rows="5" cols="40" value="Draft js goes here" required></textarea>
              </p>
              <p>
                images
              </p>
              <button type="submit">Enregistrer</button>
            </form>
              <style jsx>{`
                  div{
                    display: flex;
                    justify-content: left;
                    flex-direction: column;
                    overflow: auto;
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

export default AnnNouBody;
