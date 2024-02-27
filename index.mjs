import express from "express";

import invoiceRouter from "./routes/invoice.mjs";
import { sequelizeInstance } from "./models/db.mjs";

const app = express();
const port = 3000;
const sequelizeInst = sequelizeInstance;

app.use(invoiceRouter)

app.listen(port,()=>{
    console.log('escuchando puerto',port);
});

