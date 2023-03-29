import app1 from './app1.js'
import app2 from './app2.js'
import express from 'express'

const superApp = express();

superApp.all("*",(req,res) => {
    const subdomain = req.headers.host.split('.')[0];
    switch(subdomain){
        case 'app1' :
            app1.handle(req,res);
        break;
        case 'app2' :
            app2.handle(req,res);
        break;
    }
})
superApp.listen(80);
