require('dotenv').config()
const express = require("express");
const cloudinary = require('cloudinary')
var bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const app = express(); 
const formData = require('express-form-data')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('./config')


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
/*var cors = require('cors');
app.use(cors());
app.use(cors({origin: true, credentials: true}));
*/

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

app.use(cors({ 
  origin: CLIENT_ORIGIN 
})) 

app.use(formData.parse())

app.get('/wake-up', (req, res) => res.send('👌'))

app.post('/image-upload', (req, res) => {

  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
  Promise
    .all(promises)
    .then(results => res.json(results))
    .catch((err) => res.status(400).json(err))
})


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://Vlad-Ber:arneiskogen1@cluster0-76fsx.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
client.connect((err) => {
  //----------------------------MONGODB FUNKTIONER-------------------------------------------------------------
  const db = client.db("LocalHeroes");
  const errands = db.collection("Errands");

  const users = db.collection("Users");

  //FUNC: Check if a document exists
  //ARG: Collection name in string
  //ARG: Query to search or in JSON format
  //RET: True if document_query exists in collection, else false
  async function documentExist(collection, document_query) {
    const coll = db.collection(collection);
    let foundQuery = await coll
      .findOne(document_query)
      .catch((error) => console.error(error));
    if (foundQuery) {
      return true;
    } else {
      return false;
    }
  }
  //FUNC: Check if user email/username exists
  //ARG: Username in JSON format
  //ARG: Email in JSON-Format
  //RET: True if either usernamee/email is in Users-collection, else false
  async function checkUser(curUserName, curEmail) {
    let checkUser = await documentExist("Users", { username: curUserName });
    let checkEmail = await documentExist("Users", { email: curEmail });
    if (checkUser == true || checkEmail == true) {
      return true;
    } else {
      return false;
    }
  }


  //FUNC: Get all erands for an Area
  //ARG: Area to get errands from
  //RET: Array of errands in area
  async function getErrandsArea(areaID) {
    let findResult = await errands.find({ areaID: areaID }).toArray();
    return findResult;
  }

  //FUNC: Get all erands for a user
  //ARG: user.username to get errands from
  //RET: Array of errands created by a user by given Username
  async function getErrandsUsername(username) {
    let findResult = await errands.find({ requester: username }).toArray();
    return findResult;
  }

  async function getUser(username) {
    console.log("username in getUser: " + username)
    var user = await users
      .findOne({ username: username })
      .catch((error) => console.error(error));
    console.log("User in getUser is: " + user);
    return user;
  }

  async function fetchUserByID(userID) {
    console.log("userID in fetchUserByID: " + userID)
    try {
      let _userID = ObjectID(userID)
      var user = await users
        .findOne({ _id: _userID })
        .catch((error) => console.error(error));
      console.log("User in fetchUserByID is: " + user);
      return user;
    } catch (e) {
      console.log("in fetchUserByID: " + e);
    }
  }

  //FUNC: Get all users for an Area
  //ARG: Area to get users from
  //RET: Array of users in area
  async function getUsersArea(areaID) {
    let findResult = await users.find({ areaID: areaID }).toArray();
    return findResult;
  }

  //FUNC: Adds a user to db. Adds user to given area. If area doesnt exist, create new area.
  //ARGS: data required
  async function insertUser(
    username,
    password,
    email,
    name,
    age,
    address,
    description,
    areaID,
    mobile,
    city
  ) {
    var data = {
      username: username,
      password: password,
      email: email,
      name: name,
      age: age,
      address: address,
      desription: description,
      virtuePoints: 0,
      areaID: areaID,
      mobile: mobile,
      city: city,
    };
    var queryToFind = { email: email };
    var userNameToFind = { username: username };

    var findEmail = await documentExist("Users", queryToFind);
    var findUser = await documentExist("Users", userNameToFind);
    if (findUser == false && findEmail == false) {
      await users.insertOne(data).catch((error) => console.error(error));
      console.log("User " + name + " has been added!");
      
      //TODO: Maybe dont need
      if (findUser == true) {
        console.log("A user with this username already exists");
      }
      if (findEmail == true) {
        console.log("A user with this email already exists");
      }
    }
  }

  //FUNC: Checks if password is correct for a given user
  //ARG: username to check password for
  //ARG: password to check
  //RET: True if given password matches the password stored for the given username in db
  async function loginFunction(username, password) {
    let curUser = await users
      .findOne({ username: username })
      .catch((error) => console.log(error));
    let curUserPassword = curUser.password;

    if (curUserPassword === password) {
      return true;
    } else {
      return false;
    }
  }

  async function updateErrand(errandID, newErrandData) {
    //TODO: check if the errand exists and maybe return true or false
    let currentErrand = await errands.findOne({ _id: new ObjectID(errandID) });
    let updatedErrand = currentErrand;

    // Map over fields in current errand and replace with new data
    Object.keys(newErrandData).map(
      (key) => (updatedErrand[key] = newErrandData[key])
    );

    await errands.replaceOne({ _id: new ObjectID(errandID) }, updatedErrand);
  }

  async function updateUser(data) {
    console.log("USER ID:  " + JSON.stringify(data.userID));
    console.log("newUserData:  " + JSON.stringify(data.newUserData));
    let currentUser = await users.findOne({ _id: new ObjectID(data.userID) });
    let updatedUser = currentUser;

    Object.keys(data.newUserData).map(
      (key) => (updatedUser[key] = data.newUserData[key])
    );

    await users.replaceOne({ _id: new ObjectID(data.userID) }, updatedUser);
  }

  async function insertErrand(errandData) {
    var date = new Date();
    var dateString = date.toISOString().slice(0, 10);
    var data = {
      createdAt: dateString, //Future improvement, show hours ago created
      closedAt: "",
      status: "waiting",
      type: errandData.type,
      title: errandData.title,
      description: errandData.description,
      adress: errandData.adress,
      contact: errandData.contact,
      helper: "",
      requester: errandData.requester,
      areaID: errandData.areaID,
    };
    var insert = await errands
      .insertOne(data)
      .catch((error) => console.error(error));
  }

  const ObjectID = require("mongodb").ObjectID;

  //FUNC: Deletes an errand from db
  //ARG: ErrandID to remove
  //TODO: Inte klar
  async function deleteErrand(errandID) {
    console.log("deleteErrand")
    let errandToRemove = ObjectID(errandID);
    console.log("errandToRemove: " + JSON.stringify(errandToRemove))
    await errands.deleteOne({
       _id: errandToRemove 
    }).catch((error) => {
      console.log("Could not delete errand", error)
    });
  }

  //--------------------------------MESSAGING FUNKTIONER-----------------------------------------------------//

  app.use(bodyParser.json());
  var router = express.Router();

  // GETs username and checks if it unique
  app.post("/check-username", (username, res) => {
    let u = username.body;
    users.find({ username: u }).catch((error) => console.error(error));
  });

  // GETs and sends user data to database
    app.post('/insertUser', async (userData, res) => {
        let user = userData.body;
        try{

            //Hash userpassword, first argument is userpassword
            //second argument number of rounds to use when generating a salt
            let hashedPassword = await bcrypt.hash(user.password, 10);
            
            insertUser(user.username, hashedPassword, user.email, user.name, user.age, user.address,
                       user.description, user.areaId, user.mobile, user.city);
            res.send({ message: "User Created" });
        } catch(err){
            
            res.send({ error: '${err.message}'});
        }
        
    });
    

  app.post("/check-user", async (data, res) => {
    let user = data.body;
    let curUsername = { username: user.username };
    let curEmail = { email: user.email };

    let userExists = await documentExist("Users", curUsername);
    let emailExists = await documentExist("Users", curEmail);

    let dataToSend = { uniqueUser: userExists, uniqueEmail: emailExists };

    res.send(dataToSend);
  });

    app.post("/loginUser", async (data, res) => {
        console.log("inside login-user")
        let user = data.body;

        try {
            let checkUser = await users.findOne({ "username": user.username });
            if(!checkUser) throw new Error("User does not exist");

            let comparePassword = await bcrypt.compare(user.password, checkUser.password);
            if(!comparePassword) throw new Error("Password not correct");

            res.send({ "login": true, "user": checkUser });
            
        } catch (err) {
            res.send({ "login": false });
        }

    });


  app.post("/getUser", async(data, res) => {
    console.log("getUser request heard");
    var user = await getUser(data.body.username);
    console.log("res.send: " + JSON.stringify(user))
    res.send(user);
  });

  app.post("/fetchUserByID", async(data, res) => {
    console.log("fetchUserByID request heard");
    var user = await fetchUserByID(data.body.userID);
    console.log("res.send: " + JSON.stringify(user))
    res.send(user);
  });

  app.post("/updateUser", async (data, res) => {
    console.log("updateUser request heard");
    let newUserData = data.body;
    await updateUser(newUserData);
    res.send(newUserData); //non-sensical line?
  });

    app.post("/getUsersArea", async function (req, res) {
        //TODO: Maybe dont need the console log?
    console.log("getUsersArea request heard");
    var users = await getUsersArea(req.body.areaID);
    //  console.log("errands: " + JSON.stringify(users));
    res.send({ users });
  });

  app.post("/insertErrand", async (data, res) => {
    //console.log("insertErrand request heard");
    let errandData = data.body;
    //console.log(JSON.stringify(errandData));
    await insertErrand(errandData);
    res.send(errandData);
  });

  app.post("/updateErrand", (data, res) => {
    //console.log("updateErrand app.post");
    let doneErrand = updateErrand(
      data.body.errandID,
      data.body.newErrandData
    ).catch((error) => console.error(error));
    res.send(doneErrand);
  });

  app.post("/deleteErrand", async function (data, res) {
    console.log("deleteErrand request heard")
    console.log("data.body.errandID: " + data.body.errandID);
    await deleteErrand(data.body.errandID);
  });

  app.post("/getErrandsArea", async function (req, res) {
    var errands = await getErrandsArea(req.body.areaID);
    //console.log("errands: " + JSON.stringify(errands));
    res.send({ errands });
  });

  app.post("/uploadImage", async (data, res) => {
    let image = data.body;
  });

  app.post("/getUserErrand", async (data, res) => {
    console.log("getUserErrand request heard");
    var errands = await getErrandsUsername(data.body.username);
    res.send({ errands });
  });
});

client.close();
