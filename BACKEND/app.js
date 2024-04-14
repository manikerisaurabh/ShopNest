import express from 'express';
const app = express();

const port = 8080;

//connecting to mongodb


app.get("/", (req, res) => {
    res.send("this is home route");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


