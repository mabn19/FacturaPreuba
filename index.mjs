import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import invoiceRouter from "./routes/invoice.mjs";
import { sequelizeInstance } from "./models/db.mjs";

const app = express();
const port = 3000;
const sequelizeInst = sequelizeInstance;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(invoiceRouter)

app.listen(port,()=>{
    console.log('escuchando puerto',port);
});

