require('dotenv').config();
const mongoose = require('mongoose');
const config = require('config');

async function mongoDBConnect(){
    const dbuser = config.get('db.username');
    const dbpassword = config.get('db.password');
    if(!dbpassword || dbpassword.length == 0){
        console.error("environment variable for DB password is not set");
        process.exit(1);
    }
    const parametrs = config.get('db.parametrs');
    const name = config.get('db.name');
    let uri = `mongodb+srv://${dbuser}:${dbpassword}@${name}/${parametrs}`;
    
    await mongoose.connect(uri, {useNewUrlParser: true});
    uri = `mongodb://${dbuser}:********@${name}/${parametrs}`
    console.log("connected", uri);

}

module.exports = mongoDBConnect