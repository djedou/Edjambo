import React, {Component} from "react";
/* import MemFrom from "./MemForm"; */

class MembresBody extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
              <form id="ActNou">
                  <p className="image">
                      <img src="" alt="img_profil"/>>
                  </p>
                  <p className="group">
                      <span >
                        <label for="nom">Nom : </label> 
                        <input className="left" type="text" name="nom" id="nom" required/>
                      </span>
                      <span >
                        <label for="prenom">Prenom : </label>
                        <input className="right" type="text" name="prenom" id="prenom" required />
                      </span>
                      
                  </p>
                  <p className="group">
                      <span >
                        <label for="profil">Profil : </label>
                        <input className="left" type="text" name="profil" id="profil"  required />
                      </span>
                      <span >
                        <label for="role">Role : </label> 
                        <input className="right" type="text" name="role" id="role" required/>
                      </span>
                  </p>
                  <p className="group">
                      <span >
                        <label for="email">E-mail : </label> 
                        <input className="left" type="email" name="email" id="email" required/>
                      </span>
                      <span >
                        <label for="password">Password : </label>
                        <input className="right" type="password" name="password" id="password"  required />
                      </span>
                  </p>
                  <p className="group">
                      <span >
                        <label for="genre">Genre : </label> 
                        <input className="left" type="text" name="genre" id="genre" required/>
                      </span> 
                      <span >
                        <label for="fb">Facebook : </label>
                        <input className="right" type="text" name="fb" id="fb"  required />
                      </span>
                  </p>
                  <p className="group">
                      <span >
                        <label for="twit">Twitter : </label>
                        <input className="left" type="text" name="twit" id="twit"  required />
                      </span>
                      <span >
                        <label for="inst">Instagram : </label>
                        <input className="right" type="text" name="inst" id="inst"  required />
                      </span>
                  </p>
                  <button type="submit">Enregistrer</button>
                </form>
                <div className="annList">
                    <div className="activItem">
                          <div className="activItemDate">Nom et Prenom</div>
                          <div className="activItemTitle">NomProfile</div>
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
                    justify-content: center;
                    flex-direction: column;
                    overflow: scroll;
                  }
                  .image{
                    text-align: center;
                  }
                  .group{
                    display: flex;
                    margin-top: 2px;
                    margin-bottom: 4px;
                    width: 90%;
                  }
                  @media(max-width: 768px){
                    .group{
                      display: flex;
                      margin-top: 2px;
                      margin-bottom: 4px;
                      width: 99%;
                     /*  font-size: 15px; */
                      
                    }
                    .left{
                      width: 40vw;
                      position: relative;
                      right: 2px;
                    }
                    .right{
                      width: 40vw;
                      position: relative;
                      left: 10px;
                    }
                    #profil{
                      position: relative;
                      right: 8px;
                    }
                    #role{
                      position: relative;
                      left: 3px;
                    }
                  }
                  @media(max-height: 300px){
                    .container{
                      display: none;
                    }
                  }
                  .annList{
                    height: 30vh;
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

export default MembresBody;