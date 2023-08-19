var express = require("express");
let jwt = require("jsonwebtoken");
let passport = require("passport");
let JwtStrategy = require("passport-jwt").Strategy;
let ExtarctJWT = require("passport-jwt").ExtractJwt;
const SpotifyWebApi = require('spotify-web-api-js');
const querystring = require('querystring');

var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization,WWW-Authenticate"
  );

  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
// const spotifyApi = new SpotifyWebApi({
//   clientId: 'fcecfc72172e4cd267473117a17cbd4d',
//   clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
// });
var client_id = '581521f1b1f046ec9464fc624e9cc722';
var redirect_uri = 'http://localhost:2410/callback';
var clientSecret= '55f78ef406764cf5b445bcf13626789b';


app.use(passport.initialize());
const params = {
  jwtFromRequest: ExtarctJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "jwtsecret238988945452",
};

const jwtExpirySecond = 8000000000000000;

const {loginData,musicData,featureArstist,radioData}=require("./data")

const port = process.env.PORT || 2411;

app.listen(port, () => console.log(`Node app listening on port ${port}!`));

// function generateRandomString(length) {
//   const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let text = '';
//   for (let i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// }

app.post("/register",function(req,res){
   let body=req.body;
   let data={id:loginData.length+1,...body}
   loginData.push(data);
   let payLoad={...body}
  //  res.send(payLoad);
  console.log(payLoad);

   let payload1 = { id: data.id };
   let token = jwt.sign(payload1, params.secretOrKey, {
     algorithm: "HS256",
     expiresIn: jwtExpirySecond,
   });
   console.log(token);
   res.send({ token: "bearer  " + token, ...payLoad });
})


app.post("/user",function(req,res){
  let { email, password } = req.body;
  console.log(email, password);
  let user = loginData.find(
    (u) => u.email === email && u.password === password
  );
  console.log(user);
  if (user) {
    console.log(user.name);
    let payload = {
      id: user.id,
      email: user.email,
      name: user.name
    };
    let payload1 = { id: user.id };
    let token = jwt.sign(payload1, params.secretOrKey, {
      algorithm: "HS256",
      expiresIn: jwtExpirySecond,
    });
    console.log(token);
    res.send({ token: "bearer  " + token, ...payload });
  } else res.sendStatus(401);
})


app.get("/gana",function (req,res){
res.send(musicData)
})


app.get("/gana/:id",function(req,res){
  let id=+req.params.id;
  let data=musicData.find((n)=>n.id===id);
  res.send(data)
})


// featureArstist


app.get("/artist",function (req,res){
  res.send(featureArstist)
  })


  app.get("/radio",function(req,res){
    res.send(radioData);
  })




