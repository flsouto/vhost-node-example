import express from 'express'

const app = express();

app.get('/', (req,res) => {
    res.send("APP ONE");
});

export default app;
