import React, {Component} from "react";

class ActTouBody extends Component{

    render(){
        return(
            <div className="container">
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
                <div className="activList">
                    <div className="activItem">
                          <div className="activItemDate">date</div>
                          <div className="activItemTitle">titre</div>
                          <div className="activItemModDel">mod del</div>
                    </div>
                    <div className="activItem">
                          <div className="activItemDate">date</div>
                          <div className="activItemTitle">titre</div>
                          <div className="activItemModDel">mod del</div>
                    </div>
                    <div className="activItem">
                          <div className="activItemDate">date</div>
                          <div className="activItemTitle">titre</div>
                          <div className="activItemModDel">mod del</div>
                    </div>
                    <div className="activItem">
                          <div className="activItemDate">date</div>
                          <div className="activItemTitle">titre</div>
                          <div className="activItemModDel">mod del</div>
                    </div>
                    <div className="activItem">
                          <div className="activItemDate">date</div>
                          <div className="activItemTitle">titre</div>
                          <div className="activItemModDel">mod del</div>
                    </div>
                    <div className="activItem">
                          <div className="activItemDate">date</div>
                          <div className="activItemTitle">titre</div>
                          <div className="activItemModDel">mod del</div>
                    </div>
                    <div className="activItem">
                          <div className="activItemDate">date</div>
                          <div className="activItemTitle">titre</div>
                          <div className="activItemModDel">mod del</div>
                    </div>
                </div>
                <style jsx>{`
                  .container{
                    display: flex;
                    justify-content: left;
                    flex-direction: column;
                    overflow: auto;
                  }
                  p{
                    margin-top: 2px;
                    margin-bottom: 4px;
                  }
                  .titre{
                    border: 2px solid blue;
                    text-align: left;
                    font-size : 2vh;
                    width: 30vw;
                    margin-top: 2px;
                  }
                  .nouveau1{
                    border: 2px solid blue;
                    text-align: left;
                    font-size : 2vh;
                  }
                  .activList{
                    height: 113px;
                    width: 95%;
                    border: 2px solid red;
                    overflow: scroll;
                  }
                  .activItem{
                    border: 2px solid green;
                    height: 30px;
                    display: flex;
                    flex-direction: row;
                  }
                  .activItemDate{
                    width:25%;
                    border: 2px solid yellow;
                  }
                  .activItemTitle{
                    width:50%;
                    border: 2px solid blue;
                  }
                  .activItemModDel{
                    width:25%;
                    border: 2px solid black;
                  }
                `}</style>
            </div>
        )
    }

}

export default ActTouBody;