const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
    let found = false
    ALL_USERS.forEach(element => {
        if (element.username == username && element.password == password){
            found = true;    
        }
    });
    return found;
}

app.use(express.json());

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password; 
    const name = req.body.name; 

    let newUser = {username: username, password: password, name: name};

    if (userExists(username, password)){
        return res.status(201).json({
            msg: "go to /signin"
        })
    }
    ALL_USERS.push(newUser);
    console.log(ALL_USERS);
    res.json({
        msg: "New user added successfully, go to /signin to sign in"
    })

})
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const verified = jwt.verify(token, jwtPassword);
    const username = verified.username;
    // return a list of users other than this username
    let out = {};
    let i = 0;
    ALL_USERS.forEach(element => {
        if (element.username != username){
            out[i] = element.name;
            i++;
        }
    });
    res.json(out);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)
