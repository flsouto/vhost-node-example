import express from 'express'

const app = express();

app.get('/', (req,res) => {
    res.send("APP ONE");
    console.log('Works (app1)');
});

app.listen(3001);

export default app;
