import express from 'express';
const app = express();

app.get('/', function(req, res){
    let num1 = req.query.num1;
    let num2 = req.query.num2;

    let num3 = parseInt(num1);
    let num4 = parseInt(num2);

    res.send(`The sum of ${num3} and ${num4} is :: ${num3 + num4}`);
})

app.listen(1000);