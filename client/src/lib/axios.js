import axios from "axios";
import dataActionsCreator from '../redux/dataActionsCreator';
import { cpus } from "os";
/* var customData = require('./data.json'); */

export function setData(dispatch){
    axios.get('./data.json')
        .then((response) => {
            dispatch(dataActionsCreator.setData(response));
            console.log(response);
        })
        .catch((err) => {
            console.log("dit not get the data.json");
            console.log("erreur:", err)
        })
}

/* data({ req, isServer, params, store }) {
    // server-side logic
    if (isServer) {
      let data = JSON.parse(require('fs').readFileSync('static/data.json', 'utf8'))
      return { authors: data }
    }
    // client-side logic
    return axios.get('/data.json')
    .then((res) => {
      return {
        authors: res.data
       }
    })
  } */