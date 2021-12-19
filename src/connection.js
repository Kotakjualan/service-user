const {getFirestore} = require("firebase/firestore")

let connection = null;

function getConnetion(){

    if(connection === null){
        connection = getFirestore();
    }

    return connection;
}

module.exports = {getConnetion};