import express from 'express'

const app = express();

app.get('/', (req,res) => {
    res.send("APP TWO");
    console.log('works (app2)');
});

app.listen(3002);

export default app;
