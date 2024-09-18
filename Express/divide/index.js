import express from 'express';

const app = express();

app.get('/', function(req, res){
    let num1 = req.query.num1;
    let num2 = req.query.num2;

    let num3 = parseInt(num1);
    let num4 = parseInt(num2);

    res.send(`The quotient of ${num1} and ${num2} is ${num1/num2}`);
})

app.listen(3000)