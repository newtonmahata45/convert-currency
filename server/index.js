const express = require("express");
const app = express();
const route = require("./src/route");
const dotenv = require("dotenv");

const cors = require('cors'); 
app.use(cors()) 
dotenv.config();


app.use(express.json());

app.use("/", route);

app.use((request, response) => {
    return response.status(400).send({ status: false, message: "End point is incorrect" })
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Express app is running on port:`, (process.env.PORT || 5000))
})
