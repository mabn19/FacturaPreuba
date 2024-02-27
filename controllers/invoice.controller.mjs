import { insertInvoice, selectAllInvoices} from "../services/invoice.service.mjs";

async function createInvoice(req,res,next){
    console.log(req.body)
    try{
        const{
            clientName,
            products,
        }=req.body
        await insertInvoice({clientName,products})
        res.status(201).json({
            message:'factura creadad con exito',
        })
    }catch(error){
        next(error)
    }
}

async function getAllInvoices(req,res,next){
    try{
        const invoices = await selectAllInvoices()
        res.status(201).json({
            invoices
        })
    }catch(error){
        next(error)
    }
}

export {getAllInvoices, createInvoice}