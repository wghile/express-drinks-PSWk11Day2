const express = require('express')
const app = express ()

//Routes
let number_of_bottles = 99
app.get('/', (req, res) => {
    res.send(
        `<h1> ${number_of_bottles} Bottles of Dr. Pepsi on the Wall</h1>
        <a href = '/${number_of_bottles - 1}'>take one down, pass it around</a>`)
})

app.get('/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles > 0){
        res.send(
            `<h1>${req.params.number_of_bottles} Bottles of Dr. Pepsi on the Wall</h1>
            <a href = '/${req.params.number_of_bottles - 1}'>take one down, pass it around</a>`
        )
        // console.log(req.params.number_of_bottles)
    }else{
        res.send(
            `<h1>${req.params.number_of_bottles} Bottles of Dr. Pepsi on the Wall</h1>
            <a href = '/99'>Start Over</a>`
        )
    }
})
app.listen(3000, () => {
    console.log('listening');
});