import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware';
const superApp = express();

const proxy = (target,req,res) => {
    const tmpApp = express();
    const proxy = createProxyMiddleware('*', {
          target: 'http://'+target,
          changeOrigin: true,
    });
    tmpApp.use(proxy);
    tmpApp.handle(req,res);

}

superApp.all("*",(req,res) => {
    const subdomain = req.headers.host.split('.')[0];
    switch(subdomain){
        case 'app1' :
            proxy('localhost:3001',req,res);
        break;
        case 'app2' :
            proxy('localhost:3002',req,res);
        break;
    }
})
superApp.listen(80);
