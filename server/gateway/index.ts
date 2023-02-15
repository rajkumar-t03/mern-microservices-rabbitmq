import express, { Express } from "express";
import bodyParser from "body-parser";
import proxy from "express-http-proxy";
import cors from 'cors';



const app: Express = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/v1/seller', proxy('http://localhost:8084'))
app.use('/api/v1/buyer', proxy('http://localhost:8083'))
app.use('/api/v1/auction', proxy('http://localhost:8085'))

app.listen(3333, ()=>{
    console.log(`server is running at port 3333`)
})