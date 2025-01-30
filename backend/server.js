const express = require('express')

const port = process.env.PORT || 9090

const app = express()

app.use(express.json())

app.get("/",(req, res) => {
    
    res.send("This is Home Route")
})

app.listen(port, () => {

    console.log(`The Server is running at port ${port}`)
})