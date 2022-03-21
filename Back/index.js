 const express = require('express');
 const UserModel = require('./models/User')
 const cors = require('cors');
 const app = express();
app.use(express.json());
app.use(cors())
 const mongoose = require('mongoose');
 mongoose.connect("mongodb+srv://Ademola:Nigerian12@cluster0.ired2.mongodb.net/Mern?retryWrites=true&w=majority")

app.get('/Users', (req, res) => {
  
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err)
    }
    else {
      res.json(result)
    }
  });
});

app.post("/newUser", async(req, res) => {
  const user = req.body;
  const newUser = new UserModel(user)
  await newUser.save();
  res.json(user)
})

 app.listen(3001, () => {
   console.log('server runs');
 });
