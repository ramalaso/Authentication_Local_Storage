const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use(express.json());

const posts = [
    {
        username: 'Ramalaso',
        title: "Post1"
    },
    {
        username: 'Luz',
        title: "Post2"
    },
    {
        username: 'Estefi',
        title: "Post3"
    }
];

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.post('/login', (req, res) => {
    //Authenticate user
    const username = req.body.username;
    const user = { name: username };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });

});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});