import express from 'express';
import mongoose from 'mongoose';
const app = express();

const port = 8080;
const MONGO_URI = 'mongodb://localhost/ShopNest';
import authRoute from './routes/auth.route.js';
//connecting to mongodb


mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use(express.json())

app.get("/", (req, res) => {
    res.send("this is home route");
});

app.use("/api/auth", authRoute);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


